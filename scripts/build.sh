#!/bin/bash

DIST_DIR="package"
SRC_DIR="src"
SCRIPTS_DIR="scripts"

# clean up from previous publish
rm -rf "${DIST_DIR}"

mkdir "${DIST_DIR}"
cp -R "$SRC_DIR"/* "$DIST_DIR"

node "${SCRIPTS_DIR}"/preparePackageJson.js
cp README.md "$DIST_DIR"

cd "${DIST_DIR}" || exit 5

yarn publish
