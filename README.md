# Portfolio — WK-TV

Personal portfolio site for William Koppelberger, styled after an old CRT television:
each page is a "channel" (CH 01–05), switching channels plays a static burst, and the
whole screen carries scanlines, phosphor glow, and an OSD channel indicator.

## Run it

```bash
npm install
npm run dev      # http://localhost:5176
npm run build    # type-check + production build to dist/
```

## Photos

The About Me page reads photos from `public/photos/`:

| File | Current shot |
| --- | --- |
| `public/photos/hockey.jpg` | League championship team photo |
| `public/photos/rocket-league.jpg` | Rocket League artwork |
| `public/photos/art.jpg` | Sainte-Chapelle stained glass |

If a photo is missing, the slot degrades to a "NO SIGNAL" placeholder.

## Theming

Each channel has its own phosphor palette, driven by `--phosphor-rgb` / `--accent-rgb`
overrides on `.tv[data-theme='NN']` in `src/styles.css`: 01 green, 02 amber, 03 cyan,
04 magenta, 05 red-orange.

## Stack

Vite + React 19 + TypeScript. No other runtime dependencies — the routing is a tiny
hash router in `src/App.tsx`, and the static noise is a low-res `<canvas>` scaled up
(`src/components/Noise.tsx`).
