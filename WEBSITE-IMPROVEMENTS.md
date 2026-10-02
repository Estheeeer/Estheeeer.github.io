# Portfolio improvements — October 2, 2026

The portfolio has a distinctive experimental character: expressive typography,
interactive installations, and analog photography belong together. This update
keeps those elements and improves readability, responsive sizing, and loading.
The changes are local and have not been published.

## About: professional, with warmth

The revised `about.html` uses first-person writing, following your preference for
a mainly professional tone with some warmth. It retains your engineering and
ITP education, research and industry experience, interest in health, education
and care, and photography and fabrication practice. It adds no new credentials.

A clear greeting, shorter paragraphs, a readable body font, and direct links to
Work and email make the page easier to scan. Oswald remains for headings and
navigation; Monoton remains on the homepage.

## How the layout was fixed

The old portrait used viewport height while its text sat in floated 50% columns.
Those independent sizing rules caused uneven proportions as the window changed.
The greeting also had a fixed 500px width, overflowing a phone screen.

The About layout now uses a centered, capped grid:

```css
.about-grid {
  display: grid;
  grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr);
  gap: clamp(2rem, 6vw, 5rem);
}
```

At widths below 768px, the grid becomes one column. The photograph uses
`width: 100%` and `height: auto`, preserving its original proportions. Text stays
at a readable size instead of shrinking with the window. The Work list uses the
same grid principle, with consistent cropped thumbnail frames.

Shared fixes also contain Bootstrap gutters, remove an incorrect tablet offset
in blog articles, and resize embedded videos to their article columns. The
mobile menu now has a native button, keyboard support, and an Escape action.
Navigation remains available when JavaScript is disabled.

## How loading was improved

| Asset | Original | Smaller version |
| --- | ---: | ---: |
| About photograph | 635 KB | 36 KB at 480px; 93 KB at 800px |
| Light Wave thumbnail | 8.37 MB | 39 KB at 480px; 168 KB at 960px |
| Largest gallery photograph | 27.20 MB | 42 KB at 600px; 172 KB at 1200px |
| Nine gallery photographs, combined | 36.92 MB | 329 KB for small variants; 1.22 MB for large variants |

These are decimal file sizes, not measurements of total page transfer.

- Local WebP images replace the large Dropbox images on Work and Photography.
  `srcset` and `sizes` let the browser choose an appropriate image for the screen
  and pixel density. Width and height attributes reserve space during loading.
- The first content image loads eagerly; later images load lazily. Clicking a
  gallery photograph opens its original. Originals were not modified.
- The two GIF thumbnails on Work use still previews. Their project pages retain
  the original animations.
- The homepage initially loads no Giphy frames. Its local previews and text
  appear immediately. “Load animation” fetches the selected animation; “Stop
  animation” removes it. Hover and keyboard focus switch previews.
- Display fonts are hosted locally with `font-display: swap`. Font licenses are
  included in `assets/fonts`.
- Unused Bootstrap CSS was removed from the Work, Photography, and Blog listing
  pages. Bootstrap remains on articles that need its grid. Unused Bootstrap
  scripts, missing stylesheet references, and broken script references were
  removed from active pages.
- Reduced-motion preferences stop the typing animation, and background tabs
  pause its updates. The project video uses `preload="none"`.

Image source URLs, dimensions, and file sizes are recorded in
`assets/img/optimized/sources.json` for future updates.

## What was checked

Headless Microsoft Edge checks covered 15 pages at 320, 390, 768, 1024, and
1440px wide: no horizontal overflow, JavaScript exceptions, or local HTTP errors
were observed. Desktop and phone screenshots were visually inspected.

Interaction checks covered the mobile menu, Escape, keyboard preview switching,
animation loading and stopping, reduced motion, and Home/About without
JavaScript.

A separate local simulation used a 390px viewport, cold cache, 400ms latency,
50 KB/s download throughput, and 4× CPU throttling. External services were
blocked to check that the main pages work independently.

| Page | First content | Largest content | Layout shift score |
| --- | ---: | ---: | ---: |
| Home | 1.08s | 2.30s | 0.010 |
| About | 1.47s | 2.02s | 0.002 |
| Work | 1.54s | 1.55s | 0.008 |
| Photography | 1.36s | 1.45s | <0.001 |

These are single-run local observations, not production benchmarks or guaranteed
mobile load times. Project articles still contain external Dropbox images and
video services; those can vary with network conditions.

## Preview and maintain

From the project folder, run:

```powershell
python tools/preview.py
```

Open `http://127.0.0.1:4173/about` or the homepage and resize the window. This
small server uses Python's standard library and supports the extensionless links
used by GitHub Pages. Use `--port 4175` if the default port is occupied.

For future images, export display-sized WebP variants, set their actual width and
height, and use responsive sources instead of inserting a full-resolution image
as a thumbnail. Keep the first visible image eager and later images lazy.

The next editorial improvement would be to replace the Blog listing's
placeholder entries and give each project a concise explanation of your role
and outcome. Those content decisions remain for a future edit.
