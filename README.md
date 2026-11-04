# santin203.github.io

Personal portfolio of **Santiago Jiménez Casas**, software, cloud and data engineer.
Live at **https://santin203.github.io/**

It is a static site with no build step and no dependencies, so GitHub Pages serves the files exactly as they are in the repo.

## Structure

```
index.html                    # the whole site (single page)
404.html                      # custom not-found page
assets/css/style.css          # styles, light/dark themes via CSS variables
assets/js/main.js             # theme toggle, mobile menu, project filters, scroll effects
assets/img/favicon.svg
assets/Santiago_Jimenez_CV.pdf
```

## Editing

- **Content** (experience, projects, skills): edit `index.html` directly. Each project is an
  `<article class="project">`, and its `data-cat` (`data`, `web` or `systems`) drives the filter buttons.
  Add `feature` to its class to make it a wide card.
- **Colors / fonts**: change the tokens at the top of `assets/css/style.css`.
- **CV**: replace `assets/Santiago_Jimenez_CV.pdf` (keep the same filename).

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

Push to the branch GitHub Pages is configured to serve (Settings → Pages → *Deploy from a branch*, folder `/ (root)`).
