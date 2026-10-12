# {{ .Title }}
{{ with .Params.lead }}
{{ . }}
{{ end }}{{ partial "md-meta.md" . }}

{{ .RawContent }}
