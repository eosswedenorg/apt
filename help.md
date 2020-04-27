---
# This ensures Jekyll reads the file to be transformed to html.
# And therefore does not copy the source markdown into _site folder.
---

## Repositories

{% include repo-table.html %}

## Distributions

Each repository is divided into one or more distributions that contains packages specific for each ubuntu version.

You can run `lsb_release -cr` to see what ubuntu version you are running on.

Here is a list of supported distributions:

| id      | Codename   | Version   |
| :------ | :--------- | :-------- |
{% for dist in site.data.dists -%}
| {{ dist[0] }} | {{ dist[1].codename_full }} | {{ dist[1].version }} |
{% endfor %}

*NOTE:* Not all repositories have all distributions. check the links in the
[repository table](#repositories) to see what distributions are available for each repository.

## Components

Each repository/distribution pair has 3 different components described below.

| Name    | Description                                                                                                |
| ------- | ---------------------------------------------------------------------------------------------------------- |
| stable  | Releases that are properly tested and does not contain any experimental code                               |
| edge    | Development releases that may or may not work as expected. Do not use in production environment            |
| testing | Testing releases, everything ends up here first to be tested before being moved to `edge` or `stable` 	   |

## Example

To add the `stable` `eosio` repository on a ubuntu 18.04 `bionic` system the following command will do:

{% include apt-add.html repo="eosio" distribution="bionic" components="stable" %}

To add both `edge` and `stable` components for the `main` repository:

{% include apt-add.html repo="main" distribution="bionic" components="stable edge" %}

Same as previous example, but we are on a ubuntu 19.10 `eoan` system:

{% include apt-add.html repo="eosio" distribution="eoan" components="stable edge" %}
