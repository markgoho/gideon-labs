#!/usr/bin/env bash
# Count AI crawler and AI assistant requests to gideonlabs.com from Firebase Hosting logs.
# Needs the Firebase Hosting → Cloud Logging integration turned on (Firebase console).
# Usage: scripts/ai-crawler-report.sh [freshness]   e.g. 30d (default), 7d
set -euo pipefail

PROJECT=gideonlabs-b4b71
FRESHNESS=${1:-30d}
BOTS='GPTBot|OAI-SearchBot|ChatGPT-User|ClaudeBot|Claude-User|Claude-SearchBot|anthropic-ai|PerplexityBot|Perplexity-User|Google-Extended|CCBot|Bytespider|Amazonbot|Applebot-Extended|meta-externalagent|cohere-ai|DuckAssistBot|MistralAI-User'

FILTER="logName=\"projects/$PROJECT/logs/firebasehosting.googleapis.com%2Fwebrequests\"
AND httpRequest.userAgent=~\"($BOTS)\""

gcloud logging read "$FILTER" --project="$PROJECT" --freshness="$FRESHNESS" --limit=100000 --format=json |
  jq -r --arg bots "$BOTS" '
    map({
      bot: (.httpRequest.userAgent | capture("(?<b>" + $bots + ")").b),
      path: (.httpRequest.requestUrl | sub("^https?://[^/]+"; "") | sub("\\?.*$"; ""))
    }) as $rows
    | "Total AI crawler requests: \($rows | length)",
      "",
      "By bot:",
      ($rows | group_by(.bot) | map("  \(length)\t\(.[0].bot)") | sort_by(-(split("\t")[0] | ltrimstr("  ") | tonumber)) | .[]),
      "",
      "Top 50 pages:",
      ($rows | group_by(.path) | map({n: length, p: .[0].path}) | sort_by(-.n) | .[:50] | map("  \(.n)\t\(.p)") | .[]),
      "",
      "Markdown and llms.txt requests: \($rows | map(select(.path | test("(\\.md|/llms(-full)?\\.txt)$"))) | length)"
  '
