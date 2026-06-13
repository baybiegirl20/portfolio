# Brittany · Cybersecurity Portfolio

Personal portfolio showcasing projects, labs, certifications, and learning journey
in cybersecurity, networking, programming, and technology.

---

## 🗂 File Structure

```
portfolio/
├── index.html          ← Main portfolio page
├── resume.pdf          ← Add your resume here (for the download button)
├── css/
│   └── style.css       ← All styles (tokens, layout, components, responsive)
├── js/
│   └── main.js         ← Theme toggle, mobile nav, animations, scroll effects
└── blog/
    ├── mde-assessment-notes.html    ← Example write-up (pre-written)
    ├── claude-api-study.html        ← Duplicate the template for new posts
    └── python-dev-setup.html        ← Duplicate the template for new posts
```

---

## 🚀 Deploy to GitHub Pages (Free)

### Step 1 — Create the repository

1. Go to [github.com](https://github.com) and sign in
2. Click **New repository**
3. Name it: `your-username.github.io`
   - Example: if your username is `brittany-sec`, name it `brittany-sec.github.io`
4. Set to **Public**
5. Click **Create repository**

### Step 2 — Upload your files

**Option A: Drag & Drop (easiest)**
1. Open your new repo on GitHub
2. Click **Add file → Upload files**
3. Drag in the entire `portfolio/` folder contents (not the folder itself)
4. Commit the files

**Option B: Git command line**
```bash
cd portfolio/
git init
git add .
git commit -m "Initial portfolio deploy"
git branch -M main
git remote add origin https://github.com/your-username/your-username.github.io.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. In your repo, go to **Settings → Pages**
2. Under **Source**, select **Deploy from a branch**
3. Branch: `main` / folder: `/ (root)`
4. Click **Save**

### Step 4 — Visit your site

Your site will be live at:
```
https://your-username.github.io
```
(Takes 1–3 minutes the first time)

---

## ✏️ Customizing Your Portfolio

### Update your personal info
Open `index.html` and search for these placeholders:

| Placeholder | Replace with |
|-------------|-------------|
| `your@email.com` | Your email address |
| `yourprofile` | Your LinkedIn handle |
| `yourusername` | Your GitHub username |
| `yourprofile` (TryHackMe) | Your TryHackMe username |

### Add a profile photo
Replace the `🛡` emoji in `.sidebar-avatar` with:
```html
<img src="images/avatar.jpg" alt="Profile photo" />
```
Then add your photo to an `images/` folder.

### Add your resume
Drop your resume PDF into the portfolio root folder, named `resume.pdf`.
The download button is already wired up — no code changes needed.

### Add a new blog post / writeup
1. Copy `blog/mde-assessment-notes.html`
2. Rename it (e.g., `blog/security-plus-notes.html`)
3. Edit the title, content, and navigation links
4. Add a card for it in the `#blog` section of `index.html`

### Update the "Currently Studying" widget
In `index.html`, find `.studying-widget` and update:
- The emoji icon
- The title and subtitle
- The progress bar width (`style="width: 70%"`)

### Update skill bar percentages
In `index.html`, find `.skill-bar` elements and adjust the `style="width:XX%"` values.

---

## 🎨 Theming

The portfolio supports **dark mode** (default) and **light mode** (toggle in sidebar).
Theme preference is saved to localStorage — users' choice persists between visits.

Colors are defined as CSS variables in `css/style.css`:
```css
:root {
  --accent:  #0FF4C6;   /* mint/cyan — primary accent */
  --accent2: #3B82F6;   /* blue — secondary accent */
  --bg:      #0A0E1A;   /* near-black navy — background */
}
```

---

## 📋 Checklist Before Going Live

- [ ] Replace all `yourprofile` / `yourusername` placeholders
- [ ] Add your real email
- [ ] Add `resume.pdf` (or remove the download button if not ready)
- [ ] Update stat numbers in the About section
- [ ] Adjust skill bar percentages to match your actual level
- [ ] Add your profile photo (optional)
- [ ] Update the "Currently Studying" widget with your current focus
- [ ] Add your real GitHub repo links to project cards
- [ ] Review blog post content — update or remove placeholder text
- [ ] Test on mobile (resize browser or use DevTools)
- [ ] Test the light/dark toggle

---

Built with plain HTML, CSS, and vanilla JS — no frameworks, no build step, no dependencies.
Drop it anywhere that serves static files.
