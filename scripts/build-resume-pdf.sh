#!/usr/bin/env bash
# Convert resume/Searjasub-Lopez-Resume.docx to public/resume.pdf with LibreOffice.
set -euo pipefail
cd "$(dirname "$0")/.."

SRC="resume/Searjasub-Lopez-Resume.docx"
command -v soffice >/dev/null || { echo "soffice not found (apt install libreoffice-writer-nogui fonts-crosextra-carlito)"; exit 1; }
[ -f "$SRC" ] || { echo "missing $SRC"; exit 1; }

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
soffice --headless --convert-to pdf --outdir "$TMP" "$SRC" >/dev/null
mv "$TMP/Searjasub-Lopez-Resume.pdf" public/resume.pdf
echo "wrote public/resume.pdf ($(du -h public/resume.pdf | cut -f1))"
