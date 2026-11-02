#!/usr/bin/env bash
# Build the site and reload the web server.
# Usage: scripts/deploy.sh            (reloads nginx)
#        WEB_SERVER=caddy scripts/deploy.sh
set -euo pipefail

cd "$(dirname "$0")/.."

# Prefer the system Node from NodeSource so this works from cron and systemd too.
export PATH="/usr/bin:/usr/local/bin:$PATH"

echo "==> npm ci"
npm ci --no-fund --no-audit

echo "==> regenerate resume PDF (if LibreOffice is available)"
scripts/build-resume-pdf.sh || echo "    skipped, keeping existing public/resume.pdf"

echo "==> npm run build"
npm run build

# The web server runs as its own user and needs read access to dist/.
chmod o+rx /opt/projects /opt/projects/searlopez
chmod -R o+rX dist

WEB_SERVER="${WEB_SERVER:-nginx}"
if systemctl is-active --quiet "$WEB_SERVER"; then
  echo "==> systemctl reload $WEB_SERVER"
  systemctl reload "$WEB_SERVER"
else
  echo "==> $WEB_SERVER is not running, skipped reload"
fi

echo "Done."
