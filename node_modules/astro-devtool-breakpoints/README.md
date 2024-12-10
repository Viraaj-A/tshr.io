# Astro DevTool Breakpoints

![Astro DevTool Breakpoints](.github/assets/screenshot.png)

Astro DevTool Breakpoints is a dumb little
[Astro Dev Toolbar App](https://docs.astro.build/en/reference/dev-toolbar-app-reference/) that displays the size of the current viewport—as a tailwind class. I always find it helpful when working on a site to be able to quickly see which Tailwind breakpoint is currently active, maybe you do too?

## Installation

To install Astro DevTool Breakpoints, run the following command with your preferred
package manager:

```sh
npx astro add astro-devtool-breakpoints
```

## Usage

```ts
import { defineConfig } from "astro/config";

import astroDevToolBreakpoints from "astro-devtool-breakpoints";

export default defineConfig({
  integrations: [astroDevToolBreakpoints],
});
```

## Configuration

You get what you get, and you don't get upset.
