#!/bin/sh

source_folder="${BUILD_DIR%Build/*}SourcePackages/checkouts/capacitor-bundle-test/public"
destination_folder="${TARGET_BUILD_DIR}/${TARGET_NAME}.app/public"

cp -R ${source_folder} ${destination_folder}
