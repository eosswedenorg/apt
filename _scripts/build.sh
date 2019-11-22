#!/usr/bin/env bash

UGLIFYJS=node_modules/uglify-js/bin/uglifyjs

SRC=_scripts/app.js
TARGET=assets/scripts.js

$UGLIFYJS $SRC -c -m > $TARGET
