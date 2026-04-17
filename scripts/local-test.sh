#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

MODE="${1:-build}"

if ! command -v npm >/dev/null 2>&1; then
  echo "Error: npm is not installed or not in PATH."
  exit 1
fi

if [[ ! -d node_modules ]]; then
  echo "node_modules not found, running npm ci..."
  npm ci
fi

case "$MODE" in
  build)
    echo "Running local test: npm run docs:build"
    npm run docs:build
    ;;
  clean-build)
    echo "Running local test: npm run docs:clean-build"
    npm run docs:clean-build
    ;;
  *)
    echo "Usage: bash scripts/local-test.sh [build|clean-build]"
    exit 1
    ;;
esac

if [[ ! -d docs/.vuepress/dist ]]; then
  echo "Error: build output not found at docs/.vuepress/dist"
  exit 1
fi

echo "Local test passed: docs/.vuepress/dist generated successfully."
