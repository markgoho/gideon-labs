{{- if not .Date.IsZero }}
Date: {{ .Date.Format "2006-01-02" }}
{{ end }}
{{- with .Params.categories }}
Categories: {{ range $i, $c := . }}{{ if $i }}, {{ end }}{{ with site.GetPage (printf "/categories/%s" ($c | urlize)) }}{{ $t := .Title }}{{ with .Params.name }}{{ $t = . }}{{ end }}{{ $u := .Permalink }}{{ with .OutputFormats.Get "markdown" }}{{ $u = .Permalink }}{{ end }}[{{ $t }}]({{ $u }}){{ else }}{{ $c }}{{ end }}{{ end }}
{{ end }}
