---
# This ensures Jekyll reads the file to be transformed to html.
# And therefore does not copy the source markdown into _site folder.
---

The repository is hosted on [{{ site.apt.domain }}](https://{{ site.apt.domain }})

## Setup

First you need to make sure some packages are installed and that our `gpg` key is added to `apt`:

```bash
$ sudo apt-get install software-properties-common
$ curl https://{{ site.apt.domain }}/key 2> /dev/null | sudo apt-key add -
```

Then you can add one or more of your repositories:

{% include apt-add.html repo="eosio" components="stable" update=true %}

The url is structures as follows:

```html
https://{{ site.apt.domain }}/<repository> <distribution> <component> [ <component1> ] [ <componentN> ]
```

one `repository`, `distribution` and one or more `components` needs to be specified. These are explained below.


## Contents

Here is a list of different repositories we provide.

### Repositories

| Name | Distributions | Description |
| :--- | :------------ | :---------- |
{%- assign repos = site.repos | sort: 'sequence' -%}
{%- for repo in repos -%}
	{%- assign url = repo.url | relative_url -%}
	{%- assign dists = site.packages | where: 'Repo', repo.slug | group_by: 'Archive' %}
| [{{ repo.title }}]({{ url }}) | {% include dist-list.html baseurl=url list=dists %} | {{ repo.description }} |
{%- endfor %}
