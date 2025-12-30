#!/bin/bash

# Install Git LFS if not already installed
if ! command -v git-lfs &> /dev/null; then
  echo "Installing Git LFS..."
  # For Vercel/Ubuntu
  curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | sudo bash
  sudo apt-get install git-lfs -y
fi

# Initialize Git LFS
git lfs install

# Pull LFS files
echo "Pulling Git LFS files..."
git lfs pull

# Build the project
echo "Building project..."
npm run build

