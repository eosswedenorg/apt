---
# Autogenerated. DO NOT EDIT.
name: wireguard-tools
repo: main
distribution: bionic
component: stable
installed-size: 269
description: |
  fast, modern, secure kernel VPN tunnel (userland utilities)
  WireGuard is a novel VPN that runs inside the Linux Kernel and uses
  state-of-the-art cryptography (the "Noise" protocol). It aims to be
  faster, simpler, leaner, and more useful than IPSec, while avoiding
  the massive headache. It intends to be considerably more performant
  than OpenVPN. WireGuard is designed as a general purpose VPN for
  running on embedded interfaces and super computers alike, fit for
  many different circumstances. It runs over UDP.

  This package contains command-line tools to interact with the
  WireGuard kernel module.  Currently, it provides only a single tool:

  wg: set and retrieve configuration of WireGuard interfaces
homepage: https://www.wireguard.com
maintainer: Henrik Hautakoski <henrik@eossweden.org>
section: net
priority: optional
architecture: amd64
pre-depends: []
depends:
- libc6 (>= 2.14)
conflicts: []
breaks: []
replaces: []
suggests:
- openresolv | resolvconf
built-using: []
versions:
- filename: pool/stable/w/wireguard/wireguard-tools_1.0.20220729-1~eossweden.org+1_amd64.deb
  md5sum: 94bd353d3b98ce1ffd6344998cea6bc2
  sha1: 1fb380fbdb02d16ca7ff8d1ab7939f20c2134a9a
  sha256: 7b5e7ee2fa5837e4d99cd18f29bb66ad315dcebd8aeb8b42c37dd818c3cf3307
  sha512: 67d7e905543dc272d0fdb0af1f89f0c689b1ad0bccf740d441d4a83eaaf488522b852fdabc57866420e3136bf6a4aa3f702a849859558b44db940b52daf09e83
  size: 93364
  version: 1.0.20220729-1~eossweden.org+1
---
