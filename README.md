# [Your Name] — GIS Portfolio

A single-page portfolio site styled around a land-use/land-cover classification
legend. Plain HTML/CSS/JS — no build tools, no frameworks. Free to host on
GitHub Pages.

## Design concept

The nav bar doubles as a classification legend: each section is assigned a
land-cover class (color + code), the way a real classified raster would be
labeled —

| Code | Class              | Section    | Why                                  |
|------|---------------------|------------|---------------------------------------|
| 01   | Barren              | Overview   | The blank ground everything starts on |
| 41   | Forest (mature)     | Featured   | Your most established, best work      |
| 82   | Cultivated Crops    | Coursework | Still growing, semester by semester   |
| 95   | Wetland             | Skills     | The foundation underneath everything  |
| 24   | Developed (high)    | Resume     | The built, career-facing side of you  |
| 11   | Open Water          | Contact    | Where things flow together            |

Colors, type, and layout tokens are documented at the top of `style.css`.

## Files

```
gis-portfolio/
├── index.html      ← all page content lives here
├── style.css       ← design tokens + all styling
├── script.js       ← mobile menu + active-section highlight
├── images/         ← put project screenshots/photos here
└── resume/         ← put your resume PDF here
```

## Personalize it — checklist

Everything you need to change is marked with `[brackets]` in `index.html`.
Work through it top to bottom:

- [ ] Replace `[Your Name]` in the `<title>`, nav brand, hero, and footer
- [ ] Fill in the hero blurb and the four meta fields (Program, Currently, Core tools, Based in)
- [ ] Replace the Featured Work `.card` placeholders with your best 2–4 projects
      (duplicate the `<article class="card">` block for more)
- [ ] Replace Coursework `.work-item` placeholders, grouped by term
      (duplicate `.term-group` for each semester)
- [ ] Update the Skills tag lists
- [ ] Drop your resume PDF into `resume/` and update the `href` on the download button
- [ ] Update the Contact links (email, LinkedIn, GitHub)
- [ ] Add real images to `images/` and swap out the `.placeholder-media` divs
      for `<img src="images/your-file.jpg" alt="...">`
- [ ] Update the "Last surveyed" date in the footer

## Adding more projects later

Copy an existing `<article class="card">` (Featured) or `<div class="work-item">`
(Coursework) block, paste it as a sibling, and edit the text/links/image. No
other file needs to change.

## Local preview

Just open `index.html` in a browser — no server required. (In VS Code, the
"Live Server" extension gives you auto-refresh while you edit, but it's optional.)

## Deploying

See the deployment walkthrough in the chat where this was built, or:
1. Push this folder to a GitHub repo named `yourusername.github.io`
2. In the repo's Settings → Pages, set the source to the `main` branch, `/ (root)`
3. Your site goes live at `https://yourusername.github.io`
