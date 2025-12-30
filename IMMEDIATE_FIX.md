# 🚨 IMMEDIATE FIX for Vercel Image Issue

## The Problem
Your images are stored in Git LFS, but Vercel isn't pulling them during build, causing broken images.

## ⚡ Quick Fix (5 minutes)

### Step 1: Open Vercel Dashboard
Go to: https://vercel.com/dashboard → Select your **Prasad_food** project

### Step 2: Update Install Command
1. Click **Settings** (gear icon)
2. Click **General** in left sidebar
3. Scroll to **Build & Development Settings**
4. Find **Install Command** field
5. **Replace** the current value with:
   ```
   npm install && git lfs install && git lfs pull
   ```
6. Click **Save**

### Step 3: Trigger New Deployment
**Option A: Redeploy**
- Go to **Deployments** tab
- Click **⋯** (three dots) on latest deployment
- Click **Redeploy**

**Option B: Push empty commit**
```bash
git commit --allow-empty -m "Trigger Vercel rebuild with LFS"
git push
```

### Step 4: Check Build Logs
1. During deployment, click on the deployment
2. Open **Build Logs**
3. Look for:
   - `git lfs install` - should show "Git LFS initialized"
   - `git lfs pull` - should show "Downloading LFS objects"
   - Should see files being downloaded

### Step 5: Verify
After deployment completes:
1. Open your site
2. Open browser DevTools (F12)
3. Go to **Network** tab
4. Reload page
5. Check image requests - they should return **200 OK**, not **404**

---

## ❌ If That Doesn't Work

Vercel's build environment might not have Git LFS. Try this:

### Alternative Install Command
In Vercel Settings → Install Command, try:
```bash
npm install && (which git-lfs || (curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | bash && apt-get install -y git-lfs)) && git lfs install && git lfs pull
```

**Note**: This might fail if Vercel doesn't allow `apt-get`. If it fails, see options below.

---

## 🔄 Alternative Solutions

If Git LFS won't work on Vercel:

### Option 1: Move Images to Public Folder (Temporary)
1. Copy a few test images to `public/images/`
2. Update imports to use `/images/...` paths
3. This bypasses LFS for those images
4. **Note**: This increases repo size, so only for testing

### Option 2: Use Vercel Blob Storage
1. Install: `npm install @vercel/blob`
2. Upload images via Vercel dashboard
3. Get blob URLs
4. Update `imageImports.js` to use blob URLs

### Option 3: Use External CDN
1. Upload images to Cloudinary/Imgix/AWS S3
2. Update image paths in code
3. Images load from CDN (faster too!)

---

## 📞 Need Help?

Check the build logs in Vercel and look for:
- `git lfs` command errors
- Missing file errors
- 404 errors for image files

Share the build log errors if the above doesn't work.

