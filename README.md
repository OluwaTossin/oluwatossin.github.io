# OluwaTossin Portfolio

Welcome to my personal portfolio website! This project showcases my experience, skills, and projects as a DevOps Engineer based in the UK.

## Table of Contents
- [OluwaTossin Portfolio](#oluwatossin-portfolio)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Features](#features)
  - [Getting Started](#getting-started)
  - [Project Structure](#project-structure)
  - [Contact](#contact)

## About
This website serves as an online resume and portfolio, highlighting my professional journey, technical expertise, and selected works. It is built using HTML, CSS, and JavaScript for a fast and responsive user experience.

## Features
- Responsive design for desktop and mobile
- Dedicated pages for experience, portfolio, and resume
- SEO-friendly structure (robots.txt, sitemap.xml)
- Social media integration
- Downloadable resume (`resume.pdf` at repo root and `web/public/resume.pdf` for the Next export)

## Regenerate `resume.pdf`
The CV is generated with [ReportLab](https://www.reportlab.com/) so it stays version-controlled without a Word/LaTeX binary:

```sh
pip install -r scripts/requirements.txt
python3 scripts/generate_resume.py
```

That writes both `resume.pdf` (repo root) and `web/public/resume.pdf` (served at `/resume.pdf` on GitHub Pages).

## Getting Started
To view or modify the website locally:

1. Clone the repository:
	 ```sh
	 git clone https://github.com/OluwaTossin/oluwatossin.github.io.git
	 ```
2. Open the project folder in your browser or editor.
3. Edit HTML, CSS, or JS files as needed.
4. To deploy, push changes to the `main` branch. GitHub Pages will automatically update.

## Project Structure
```
about.html
experience.html
index.html
portfolio.html
resume.pdf
robots.txt
sitemap.xml
css/
	styles.css
images/
	github.png
	linkedin.png
	profile.jpg
js/
	scripts.js
```

## Contact
- [LinkedIn](https://www.linkedin.com/in/oluwatossin)
- [GitHub](https://github.com/OluwaTossin)
- [Twitter](https://twitter.com/oluwatossin)

Feel free to reach out for collaboration or opportunities!
