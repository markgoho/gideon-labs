# {{ site.Title }}

{{ hugo.Data.home.tagline }}

{{ hugo.Data.home.subheader }}

[{{ hugo.Data.home.cta }}]({{ with site.GetPage "/contact" }}{{ with .OutputFormats.Get "markdown" }}{{ .Permalink }}{{ end }}{{ end }})
{{ with .RawContent }}
{{ . }}
{{ end }}
## {{ hugo.Data.home.stepsTitle }}

{{ range $i, $s := hugo.Data.home.steps }}{{ add $i 1 }}. {{ $s }}
{{ end }}
## Recent Success Stories

{{ range (where .Site.RegularPages "Type" "in" .Site.Params.mainSections) }}{{ partial "md-link.md" . }}
{{ end }}
[Read more Success Stories]({{ with site.GetPage "/posts" }}{{ with .OutputFormats.Get "markdown" }}{{ .Permalink }}{{ end }}{{ end }})
