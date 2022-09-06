---
---
{%- assign id = 1 -%}
var package_data = [
    {%- assign repos = site.repos -%}
    {%- for repo in repos -%}
    {%- assign packages = site.packages | where: 'repo', repo.slug -%}
    {%- for pkg in packages -%}
{"id":{{ id }},"url":{{ pkg.url | relative_url | jsonify }},"name":{{ pkg.name | jsonify }},"repo":{{ pkg.repo | jsonify }},"distribution":{{ pkg.distribution | jsonify }},"component":{{ pkg.component | jsonify }},"description": {{ pkg.description | jsonify }},
    {%- assign ver = "-" -%}
    {%- assign first_ver = pkg.versions | limit: 1 -%}
    {%- for v in first_ver -%}
        {%- assign ver = v.version -%}
    {%- endfor -%}
"version":{{ ver | jsonify }}
    {%- assign id = id | plus: 1 -%}
},
    {%- endfor -%}
    {%- endfor -%}
]
