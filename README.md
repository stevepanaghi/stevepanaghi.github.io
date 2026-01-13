# Punk Industries Website

Professional consulting website for Punk Industries LLC - IT and Project Management consulting services.

## Tech Stack
- Pure HTML5, CSS3, JavaScript
- No frameworks or dependencies
- Optimized for performance
- Fully responsive design

## Local Development

Simply open `index.html` in your browser. No build process required.

## Deployment to GitHub Pages

### Step 1: Create GitHub Repository
1. Go to github.com and create a new repository
2. Name it whatever you want (e.g., `punk-industries-website`)
3. Keep it public (required for free GitHub Pages)

### Step 2: Push Your Code
```bash
cd /path/to/punk-industries-site
git init
git add .
git commit -m "Initial commit - Punk Industries website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click Settings
3. Scroll to "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click Save
6. Your site will be live at: `https://YOUR_USERNAME.github.io/REPO_NAME/`

### Step 4: Point Your Custom Domain (punk.industries)
1. In your repository Settings → Pages
2. Under "Custom domain", enter: `punk.industries`
3. Click Save (GitHub will create a CNAME file)
4. In your domain registrar (where you bought punk.industries):
   - Add a CNAME record pointing to: `YOUR_USERNAME.github.io`
   - Or add A records pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
5. Wait for DNS propagation (can take up to 24 hours, usually faster)
6. Enable "Enforce HTTPS" in GitHub Pages settings once DNS is working

## File Structure
```
punk-industries-site/
├── index.html          # Main HTML structure
├── styles.css          # All styling (punk industrial theme)
├── script.js           # Interactive features
└── README.md           # This file
```

## Customization

### Update Content
Edit `index.html` to replace placeholder text with your actual:
- Company description
- IT consulting services
- PM consulting services
- Any additional information

### Color Scheme
All colors are defined in CSS variables at the top of `styles.css`:
- `--dark-bg`: Main background
- `--accent-orange`: Primary accent color
- `--metal-gray`: Secondary elements

### Logo
The gear/cog SVG in the navbar can be replaced with your actual logo.
Just replace the `<svg>` element in the `.logo` section.

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance
- No external dependencies
- Minimal HTTP requests
- Optimized images (when added)
- Fast load times

## License
© 2026 Punk Industries LLC. All rights reserved.
