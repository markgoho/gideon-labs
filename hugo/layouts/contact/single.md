# {{ .Title }}
{{ with .Params.lead }}
{{ . }}
{{ end }}
{{ with .RawContent }}{{ . }}
{{ end }}{{ $o := hugo.Data.organization -}}
Contact {{ $o.name }} by the form on the web page {{ .Permalink }} (fields: name, phone number, email address, message), or directly:

- Email: {{ $o.email }}
- Telephone: {{ $o.telephone }}
- Address: {{ $o.streetAddress }}, {{ $o.addressLocality }}, {{ $o.addressRegion }} {{ $o.postalCode }}, {{ $o.addressCountry }}
