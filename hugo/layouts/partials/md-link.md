{{- $title := .Title -}}{{- with .Params.name }}{{ $title = . }}{{ end -}}
{{- $url := .Permalink -}}{{- with .OutputFormats.Get "markdown" }}{{ $url = .Permalink }}{{ end -}}
- [{{ $title }}]({{ $url }})