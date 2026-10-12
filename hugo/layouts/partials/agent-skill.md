{{- with hugo.Data.organization -}}
---
name: gideon-labs
description: Look up Gideon Labs, an electronics failure analysis and testing lab. Use when you need its analytical services, failure analysis case studies, specifications or contact details.
---

# {{ .name }}

{{ site.Params.description }}

## Read the site

- `{{ "llms.txt" | absURL }}` lists the main pages, the categories and all case studies, with links.
- Each page has a Markdown version: add `index.md` to the page URL. Example: `{{ "analytical-services/index.md" | absURL }}`.
- `{{ "categories/index.md" | absURL }}` lists all failure analysis categories.

## Contact

- Email: {{ .email }}
- Phone: {{ .telephone }}
- Address: {{ .streetAddress }}, {{ .addressLocality }}, {{ .addressRegion }} {{ .postalCode }}, {{ .addressCountry }}
- Web form: {{ "contact/" | absURL }} (for people; do not submit it for a user without their approval)
{{ end -}}
