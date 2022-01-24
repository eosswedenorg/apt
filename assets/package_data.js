---
---
{%- assign id = 1 -%}
var package_data = [
    {%- assign repos = site.repos -%}
    {%- for repo in repos -%}
    {%- assign packages = site.packages | where: 'Repo', repo.slug -%}
    {%- for pkg in packages -%}
{"id":{{ id }},"url":{{ pkg.url | relative_url | jsonify }},"name":{{ pkg.Name | jsonify }},"repo":{{ pkg.Repo | jsonify }},"archive":{{ pkg.Archive | jsonify }},"component":{{ pkg.Component | jsonify }},"description": {{ pkg.Description | jsonify }},
    {%- assign ver = "-" -%}
    {%- assign first_ver = pkg.Versions | limit: 1 -%}
    {%- for v in first_ver -%}
        {%- assign ver = v[0] -%}
    {%- endfor -%}
"version":{{ ver | jsonify }}
    {%- assign id = id | plus: 1 -%}
},
    {%- endfor -%}
    {%- endfor -%}
]
