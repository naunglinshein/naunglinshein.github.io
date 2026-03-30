# Naung Lin Shein Portfolio

Static portfolio site for [naunglinshein.com](https://www.naunglinshein.com/).

## Run locally

From this folder:

```bash
python3 -m http.server 8000
```

Open `http://127.0.0.1:8000`.

## Project structure

- `index.html`: main portfolio homepage
- `resume/`: web resume page
- `experience/`: case-study detail pages
- `css/style.css`: shared portfolio and case-study styling
- `css/resume.css`: resume page styling
- `js/common.js`: shared navigation, reveal, and header behavior
- `js/main.js`: homepage-specific interactions
- `documents/`: downloadable public PDFs
- `images/`: profile, certificate, and project images

## Notes

- Keep public resume PDF at `documents/NaungLinShein@Resume.pdf`
- Keep the custom domain file in `CNAME`
- Prefer updating the HTML resume in `resume/index.html` first, then export and replace the PDF
