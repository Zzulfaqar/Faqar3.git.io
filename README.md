# Muhammad Zulfaqar — Cybersecurity Portfolio

A responsive, privacy-conscious cybersecurity portfolio built with plain HTML, CSS, and JavaScript for GitHub Pages.

## Included

- Professional landing page with dark and light themes
- Measurable impact section
- Four sanitized security case studies
- Experience, capabilities, certifications, and education
- Privacy-safe downloadable resume
- Responsive navigation and accessible interactions
- SEO metadata, sitemap, robots file, favicon, and social preview image
- GitHub Actions workflow for automatic Pages deployment

## Project structure

```text
.
├── .github/workflows/deploy-pages.yml
├── assets/
│   ├── icons/
│   ├── images/
│   └── resume/
├── case-studies/
├── 404.html
├── index.html
├── script.js
├── styles.css
├── robots.txt
├── sitemap.xml
└── site.webmanifest
```

## Preview locally

No build step is required. Run a local web server from the project folder:

```bash
python -m http.server 8000
```

Open `http://localhost:8000` in a browser.

## Publish with GitHub Pages

1. Create a new public repository named `zzulfaqar.github.io`.
2. Upload every file and folder from this package to the repository root.
3. Commit the files to the `main` branch.
4. Open **Settings → Pages** in the repository.
5. Under **Build and deployment**, select **GitHub Actions** as the source.
6. Open the **Actions** tab and verify that “Deploy portfolio to GitHub Pages” succeeds.
7. The expected project-site address is:

```text
https://zzulfaqar.github.io/
```

## Replace the repository by command line

After extracting the package, run these commands inside its folder:

```bash
git init
git branch -M main
git add .
git commit -m "Launch cybersecurity portfolio"
git remote add origin https://github.com/Zzulfaqar/zzulfaqar.github.io.git
git push -u origin main --force
```

`--force` replaces the existing branch history. Remove it when preserving the current repository history is important.

## Personalization

- Edit contact links in `index.html`.
- Replace the resume in `assets/resume/` when your experience changes.
- Update the canonical URL, Open Graph URL, `robots.txt`, and `sitemap.xml` if the repository name or domain changes.
- Keep professional case studies sanitized. Do not publish client names, IP addresses, credentials, screenshots, assessment evidence, detection rules, or internal reports without authorization.

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Pages and GitHub Actions

## License

The website code is available under the MIT License. Personal resume content and professional case-study text remain the portfolio owner's content.
