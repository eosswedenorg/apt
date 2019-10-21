
The repository is hosted on [{{ site.apt.url }}]({{ site.apt.url }})

## Setup

First you must add our `gpg` key to `apt`:

```bash
$ curl {{ site.apt.url }}/key 2> /dev/null | sudo apt-key add -
```

Then you can add one or more of your repositories:

{% include apt-add.html name="eos" repo="eosio" components="stable" update=true %}

The url is structures as follows:

```
{{ site.apt.url }}/<repository> bionic <component> [ <component1> ] [ <componentN> ]
```

one `repository` and one or more `components` needs to be specified. These are explained below.


## Contents

Here is a list of different repositories we provide.

### Repositories

{% for repo in site.repos %}
* [{{ repo.name }}]({{ repo.url | relative_url }}) - {{ repo.description }}
{% endfor %}

### Components

Each repository has 3 different components described below.

| Name    | Description                                                                                                |
| ------- | ---------------------------------------------------------------------------------------------------------- |
| stable  | Releases that are properly tested and does not contain any experimental code                               |
| edge    | Development releases that may or may not work as expected. Do not use in production environment            |
| testing | Cutting edge releases, everything ends up here first to be tested before being moved to `edge` or `stable` |

## Example

To add the `stable` `eosio` repository the following command will do:

{% include apt-add.html name="eos" repo="eosio" components="stable" %}

To add both `edge` and `stable` components for the `main` repository:

{% include apt-add.html name="eos" repo="eosio" components="stable edge" %}
