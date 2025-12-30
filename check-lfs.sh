#!/bin/bash

echo "=== Git LFS Diagnostic Script ==="
echo ""

# Check if Git LFS is installed
if command -v git-lfs &> /dev/null; then
    echo "✓ Git LFS is installed"
    git lfs version
else
    echo "✗ Git LFS is NOT installed"
    echo "  You need to install it in Vercel's build environment"
fi

echo ""

# Check if Git LFS is initialized
if git lfs env | grep -q "git config filter.lfs"; then
    echo "✓ Git LFS is initialized"
else
    echo "✗ Git LFS is NOT initialized"
    echo "  Run: git lfs install"
fi

echo ""

# Check LFS files
echo "Checking LFS files..."
LFS_COUNT=$(git lfs ls-files | wc -l)
echo "Found $LFS_COUNT files tracked by Git LFS"

echo ""

# Try to pull LFS files
echo "Attempting to pull LFS files..."
if git lfs pull; then
    echo "✓ Successfully pulled LFS files"
else
    echo "✗ Failed to pull LFS files"
    echo "  This might be a network or authentication issue"
fi

echo ""
echo "=== Diagnostic Complete ==="

