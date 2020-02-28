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

{% assign repos = site.repos | sort: 'sequence' %}
{% for repo in repos %}
* [{{ repo.title }}]({{ repo.url | relative_url }}) - {{ repo.description }}
{% endfor %}

### Distributions

Each repository is divided into one or more distributions that contains packages specific for each ubuntu version.

You can run `lsb_release -cr` to see what ubuntu version you are running on.

Here is a list of supported distributions:

| id      | Codename   | Version   |
| :------ | :--------- | :-------- |
{% for dist in site.data.dists -%}
| {{ dist[0] }} | {{ dist[1].codename_full }} | {{ dist[1].version }} |
{% endfor %}

*NOTE:* Not all repositories have all distributions. check the links in the
repository table to see what distributions are available for each repository.

### Components

Each repository/distribution pair has 3 different components described below.

| Name    | Description                                                                                                |
| ------- | ---------------------------------------------------------------------------------------------------------- |
| stable  | Releases that are properly tested and does not contain any experimental code                               |
| edge    | Development releases that may or may not work as expected. Do not use in production environment            |
| testing | Testing releases, everything ends up here first to be tested before being moved to `edge` or `stable` |

## Example

To add the `stable` `eosio` repository on a ubuntu 18.04 `bionic` system the following command will do:

{% include apt-add.html repo="eosio" distribution="bionic" components="stable" %}

To add both `edge` and `stable` components for the `main` repository:

{% include apt-add.html repo="eosio" distribution="bionic" components="stable edge" %}

Same as previous example, but we are on a ubuntu 19.10 `eoan` system:

{% include apt-add.html repo="eosio" distribution="eoan" components="stable edge" %}
