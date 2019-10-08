
The repository is hosted on https://apt.eossweden.org/

### Setup

First you must add our `gpg` key to `apt`:

```bash
$ curl https://apt.eossweden.org/key | sudo apt-key add -
```

Then you can add one or more of your repositories:

```bash
$ sudo apt-add-repository -y 'deb [arch=amd64] https://apt.eossweden.org/eosio bionic stable'
$ sudo apt-get update
```

The url is structures as follows:

```
https://apt.eossweden.org/<repository> bionic <component> [ <component1> ] [ <componentN> ]
```

one `repository` and one or more `components` needs to be specified. These are explained below.


### Contents

Here is a list of different repositories we provide. Each repository has 3 different components described below.

#### Components

| Name    | Description                                                                                                |
| ------- | ---------------------------------------------------------------------------------------------------------- |
| stable  | Releases that are properly tested and does not contain any experimental code                               |
| edge    | Development releases that may or may not work as expected. Do not use in production evironment             |
| testing | Cutting edge releases, everything ends up here first to be tested before being moved to `edge` or `stable` |

#### Repositories

| Name      | Description                            |
| --------- | -------------------------------------- |
| main      | Releases of EOS Sw/eden own products.  |
| eosio     | EOSIO Software                         |

### Example

To add the `stable` `eosio` repository the following command will do:

```bash
$ sudo apt-add-repository -y 'deb [arch=amd64] https://apt.eossweden.org/main bionic stable'
```

To add both `edge` and `stable` components for the `main` repository:

```bash
$ sudo apt-add-repository -y 'deb [arch=amd64] https://apt.eossweden.org/main bionic stable edge
```
