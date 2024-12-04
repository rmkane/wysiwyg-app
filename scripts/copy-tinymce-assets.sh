#!/usr/bin/env bash

# Define the source and destination paths
TINYMCE_SOURCE="node_modules/tinymce"
TINYMCE_DEST="public/tinymce"

# Clean option to remove the destination directory
if [ "$1" == "clean" ]; then
  echo "Cleaning $TINYMCE_DEST..."
  rm -rf "$TINYMCE_DEST"
  echo "Cleaned $TINYMCE_DEST"
fi

# Ensure the destination directory exists
mkdir -p "$TINYMCE_DEST"

# Copy the required directories and files
for dir in icons models plugins skins themes; do
  echo "Copying $dir..."
  cp -r "$TINYMCE_SOURCE/$dir" "$TINYMCE_DEST"
done

# Copy TinyMCE JS files
echo "Copying JavaScript files..."
cp "$TINYMCE_SOURCE"/tinymce*.js "$TINYMCE_DEST"

echo "TinyMCE assets copied to $TINYMCE_DEST"
