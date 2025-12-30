# Fix Vercel Git LFS Issue - Step by Step

## The Problem
Vercel doesn't automatically pull Git LFS files, so images show as broken or missing.

## Solution: Configure Vercel Dashboard

### Step 1: Go to Vercel Dashboard
1. Open https://vercel.com
2. Select your project: **Prasad_food**

### Step 2: Configure Build Settings
1. Go to **Settings** → **General**
2. Scroll to **Build & Development Settings**
3. Find **Install Command** and change it to:
   ```bash
   npm install && git lfs install && git lfs pull
   ```
4. Make sure **Build Command** is: `npm run build`
5. Click **Save**

### Step 3: Check Environment Variables
1. Go to **Settings** → **Environment Variables**
2. Make sure there are no variables blocking Git LFS
3. If you see `GIT_LFS_SKIP_SMUDGE`, delete it or set it to `0`

### Step 4: Redeploy
1. Go to **Deployments** tab
2. Click the **⋯** (three dots) on the latest deployment
3. Click **Redeploy**
4. Or push a new commit to trigger a new deployment

### Step 5: Verify Build Logs
1. During deployment, check the **Build Logs**
2. You should see:
   - `git lfs install` output
   - `git lfs pull` downloading files
   - Files being processed

## Alternative: If Git LFS Still Doesn't Work

If the above doesn't work, Vercel's build environment might not have Git LFS. In that case:

### Option A: Use Vercel Blob Storage (Recommended)
1. Install Vercel Blob: `npm install @vercel/blob`
2. Upload images to Vercel Blob Storage
3. Update image imports to use blob URLs

### Option B: Use a CDN
1. Upload images to Cloudinary, AWS S3, or similar
2. Update image paths in `imageImports.js`
3. Images will load from CDN

### Option C: Use GitHub Releases
1. Create a GitHub release with images
2. Download images during build
3. Or serve directly from GitHub releases

## Quick Test
After redeploying, check:
1. Open browser DevTools (F12)
2. Go to Network tab
3. Reload page
4. Check if image requests return 200 OK or 404

If images return 404, Git LFS files weren't pulled correctly.

