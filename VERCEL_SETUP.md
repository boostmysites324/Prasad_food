# Vercel Git LFS Setup Instructions

## Problem
Vercel doesn't automatically pull Git LFS files during builds, causing images to not load.

## Solution

You need to configure Vercel to install Git LFS and pull the files. Here are two options:

### Option 1: Configure in Vercel Dashboard (Recommended)

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **General** → **Build & Development Settings**
3. Update the **Install Command** to:
   ```bash
   npm install && git lfs install && git lfs pull
   ```
4. Make sure **Build Command** is set to: `npm run build`
5. Save and redeploy

### Option 2: Use Environment Variables

1. Go to **Settings** → **Environment Variables**
2. Add a new variable:
   - **Name**: `VERCEL_GIT_LFS_ENABLED`
   - **Value**: `1`
3. Update **Install Command** in Build Settings to:
   ```bash
   npm install && (command -v git-lfs >/dev/null 2>&1 && git lfs install && git lfs pull || echo "Git LFS not available")
   ```

### Option 3: Install Git LFS in Build Environment

If the above doesn't work, you may need to:

1. Go to **Settings** → **General** → **Build & Development Settings**
2. Update **Install Command** to:
   ```bash
   curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | bash && apt-get install git-lfs -y && git lfs install && npm install && git lfs pull
   ```

**Note**: This requires sudo access which Vercel might not provide. If it fails, use Option 1.

### After Configuration

1. Trigger a new deployment
2. Check the build logs to ensure Git LFS files are being pulled
3. Verify images load correctly on the deployed site

## Alternative: Use CDN or External Storage

If Git LFS continues to cause issues, consider:
- Moving images to a CDN (Cloudinary, AWS S3, etc.)
- Using Vercel's Blob Storage
- Hosting images externally and updating image paths

