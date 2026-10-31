# Components

Components are built in three layers. Each layer only uses the one below it, and none of them contain hardcoded text or images: all content is passed in as props, and `app/page.tsx` is the only place the site's content lives.

| Layer | Folder | What it is |
|---|---|---|
| Primitives | `components/ui/` | Single-purpose building blocks: buttons, cards, headings, media frames, icons. They know nothing about the site. |
| Composites | `components/` | Small pieces made from primitives: a tile, a menu, a button group. |
| Sections | `components/` | Page-level blocks made from composites and primitives: header, hero, work grid, footer. |

Photos are `StaticImageData` (static imports), so `next/image` keeps its intrinsic sizes and blur placeholder. Shared prop types (`LinkItem`, `Project`, `LinkedProject`) live in `components/types.ts`.

## Primitives (`components/ui/`)

| Component | Props | Notes |
|---|---|---|
| `Button` | `variant` (`primary` / `secondary`), `size` (`md` / `icon`), `href?`, `className?`, `children` | The glass pill. Renders an `<a>` when given an `href`, otherwise a `<button>`. |
| `IconButton` | `label`, `children`, `href?`, `onClick?`, `variant?`, `className?` | Round glass button for one glyph. `label` is required because there is no visible text. Built on `Button`. |
| `GlassCard` | `as` (`div` / `nav` / `ul` / `p`), `radius` (`sm` / `md` / `lg` / `xl` / `full`), `className?` | The Liquid Glass material on any element. Padding and layout come from `className`. |
| `Badge` | `size` (`sm` / `md`), `className?`, `children` | Small glass label. Built on `GlassCard`. |
| `Heading` | `as` (`h1` / `h2` / `h3` / `p`), `size` (`display` / `title` / `statement` / `card`), `className?` | `as` is for document structure, `size` is for the look. |
| `Eyebrow` | `size` (`sm` / `xs`), `className?` | Small muted label above a title. |
| `MediaFrame` | `as` (`div` / `article`), `radius` (`lg` / `xl`), `className?` | Rounded parallax clipping frame. Size it with `className`; add `reveal` for the scroll fade-up. |
| `ParallaxImage` | `src`, `alt`, `sizes`, `className?` | Blur-placeholder photo that fills a `MediaFrame` and drifts on scroll. Built on `ParallaxLayer`. |
| `ParallaxLayer` | `children` | The drifting wrapper for any media. |
| `Aurora` | `className?` | Blurred color blobs behind the glass. |
| `icons` | none | `PlayIcon`, `PauseIcon`, `MenuIcon`. `MenuIcon` turns into an X inside an open `details.group`. |

`cx` (`components/ui/cx.ts`) joins class names. It doesn't resolve conflicts, so don't pass two utilities for the same property (for example, two `rounded-*`). Use the `radius` and `size` props instead.

## Composites (`components/`)

| Component | Props | Built from |
|---|---|---|
| `ButtonGroup` | `actions`, `className?` | `Button` |
| `StatCard` | `value`, `label` | none. Renders a `<dt>`/`<dd>` pair, so it must sit inside a `<dl>`. |
| `PlayPauseButton` | `playing`, `onToggle`, `playLabel`, `pauseLabel`, `className?` | `IconButton`, `PlayIcon`, `PauseIcon` |
| `MobileMenu` | `links`, `label`, `className?` | `GlassCard`, `MenuIcon`. A `<details>` toggle that works without JavaScript. |
| `HeroVideo` | `src`, `poster`, `label`, `playLabel`, `pauseLabel` | `ParallaxLayer`, `PlayPauseButton`. A client component: muted loop, no autoplay under reduced motion. |
| `FeatureTile` | A `Project` (`title`, `tagline`, `category`, `image`, `alt`) plus `actions` | `MediaFrame`, `ParallaxImage`, `GlassCard`, `Eyebrow`, `Heading`, `ButtonGroup` |
| `GridTile` | A `LinkedProject` (a `Project` plus `href` and `linkLabel`) | `MediaFrame`, `ParallaxImage`, `GlassCard`, `Eyebrow`, `Heading`, `IconButton` |

## Sections (`components/`)

| Component | Props | Built from |
|---|---|---|
| `SiteHeader` | `brand`, `links`, `menuLabel` | `GlassCard`, `MobileMenu` |
| `Hero` | `badge`, `title`, `subtitle`, `actions` | `Badge`, `Heading`, `ButtonGroup` |
| `HeroMedia` | `video`, `caption` | `MediaFrame`, `HeroVideo`, `Badge` |
| `WorkGrid` | `id`, `heading`, `projects` | `GridTile` |
| `About` | `id`, `headline`, `body`, `stats` | `Heading`, `StatCard` |
| `Contact` | `id`, `title`, `description`, `action` | `Aurora`, `GlassCard`, `Heading`, `Button` |
| `SiteFooter` | `copyright`, `links` | none |

## Pages (`app/`)

- `RootLayout` (`app/layout.tsx`) loads the Geist fonts and defines the page metadata.
- `Home` (`app/page.tsx`) holds the content constants and composes the sections.

## CSS-only primitives (`app/globals.css`)

These are classes, not React components. The components above wrap them.

- **`.glass` / `.glass-pill`** is the Liquid Glass material, with `::before` and `::after` layers. Used by `GlassCard`, `Button` and `Badge`.
- **`.parallax` / `.parallax-layer`** are the scroll-driven parallax. Used by `MediaFrame` and `ParallaxLayer`.
- **`.reveal`** is the scroll-driven fade-up. Add it through `className`.

## Stories

Run `npm run storybook` (http://localhost:6006). Every component has a `<Component>.stories.tsx` file. The stories mirror the source layout: primitives are in `stories/ui/` (under **UI/** in Storybook), composites and sections are in `stories/` (under **Components/**), and the full page is **Pages/Home**.

| Group | Stories |
|---|---|
| **UI/** | `Button`, `IconButton`, `GlassCard` (includes a `Radii` gallery), `Badge`, `Heading`, `Eyebrow`, `MediaFrame`, `ParallaxImage`, `ParallaxLayer`, `Aurora`, `Icons` |
| **Components/** (composites) | `ButtonGroup`, `StatCard`, `PlayPauseButton`, `MobileMenu` (`Open` opens the menu in a `play` function and asserts it), `HeroVideo`, `FeatureTile`, `GridTile` |
| **Components/** (sections) | `SiteHeader`, `Hero`, `HeroMedia`, `WorkGrid`, `About`, `Contact`, `SiteFooter` |
| **Pages/** | `Home` (`Desktop`, `Mobile`) |

- Shared sample data, the photo-swapping `image` control, and the `withAurora` / `inContainer` / `inMediaFrame` decorators live in `stories/fixtures.tsx`.
- Glass components render over a soft color field in their stories, because the material needs something behind it to refract.
- `RootLayout` has no story: it renders `<html>` and `<body>`, which can't live inside Storybook's canvas.

## Storybook starter examples (`stories/`)

These are the unmodified `npx storybook init` samples, with `title: 'Example/…'`. None of them are imported by the site.

| Component | File | Stories |
|---|---|---|
| `Button` | `stories/Button.tsx` | `Primary`, `Secondary`, `Large`, `Small` |
| `Header` | `stories/Header.tsx` | `LoggedIn`, `LoggedOut` |
| `Page` | `stories/Page.tsx` | `LoggedIn`, `LoggedOut` |

Note: the starter `Button` is unrelated to `components/ui/Button`. `stories/Button.tsx` uses `<style jsx>` (styled-jsx), which the rest of the repo doesn't use.
