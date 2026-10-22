This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
````
public/
  favicon.svg
src/
  app/
    providers/
      AppProviders.tsx
    styles/
      abstracts/
        breakpoints.scss
        mixins.scss
        variables.scss
      base/
        fonts.scss
        reset.scss
      main.scss
  shared/
    assets/
      fonts/
        space-mono-v17-latin-700.woff2
        space-mono-v17-latin-regular.woff2
        work-sans-v24-latin-600.woff2
        work-sans-v24-latin-regular.woff2
  App.tsx
  main.tsx
.gitignore
eslint.config.js
index.html
package.json
pnpm-workspace.yaml
README.md
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
````

# Files

## File: src/app/providers/AppProviders.tsx
````typescript
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
      retry: 1,
    },
    mutations: {
      retry: 0,
    },
  },
});

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{children}</BrowserRouter>
    </QueryClientProvider>
  );
}
````

## File: src/app/styles/abstracts/breakpoints.scss
````scss
$breakpoints: (
  desktop: 1280px,
  laptop: 1024px,
  tablet: 834px,
  mobile: 375px,
  mobile-small: 320px,
);
````

## File: src/app/styles/abstracts/mixins.scss
````scss
@use "sass:map";
@use "./breakpoints.scss" as *;

@mixin max-width($breakpoint) {
  @if map.has-key($breakpoints, $breakpoint) {
    @media (max-width: #{map.get($breakpoints, $breakpoint)}) {
      @content;
    }
  } @else {
    @warn "Breakpoint '#{$breakpoint}' not found in the map \$breakpoints.";
  }
}

@mixin hover {
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      @content;
    }
  }
}
````

## File: src/app/styles/abstracts/variables.scss
````scss
$font-family: "Space Mono", sans-serif;
$second-family: "Work Sans", sans-serif;

$background: #2b2b2b;
$background---secondary: #3b3b3b;
$caption--label-text: #858584;
$text: #fff;
$call-to-action: #a259ff;
$blue-accent: #377df7;
$red-accent: #ff7262;
````

## File: src/app/styles/base/fonts.scss
````scss
@font-face {
  font-display: swap;
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 400;
  src: url("../../../shared/assets/fonts/space-mono-v17-latin-regular.woff2")
    format("woff2");
}

@font-face {
  font-display: swap;
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 700;
  src: url("../../../shared/assets/fonts/space-mono-v17-latin-700.woff2")
    format("woff2");
}

@font-face {
  font-display: swap;
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 400;
  src: url("../../../shared/assets/fonts/work-sans-v24-latin-regular.woff2")
    format("woff2");
}

@font-face {
  font-display: swap;
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 600;
  src: url("../../../shared/assets/fonts/work-sans-v24-latin-600.woff2")
    format("woff2");
}
````

## File: src/app/styles/base/reset.scss
````scss
@use "../abstracts/variables.scss" as *;
@use "../abstracts/mixins.scss" as *;

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

ul,
ol {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
  border: none;
  background: transparent;
}

svg {
  flex-shrink: 0;
}

input,
button,
textarea,
select {
  font: inherit;
}

textarea {
  resize: vertical;
}

body {
  font-family: $font-family;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  min-height: 100vh;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  display: flex;
  flex-direction: column;
  background: $background;
  color: $text;
}

.container {
  width: 100%;
  max-width: 1280px;
  padding: 0 115px;
  margin: 0 auto;

  @include max-width("tablet") {
    padding: 0 72px;
  }

  @include max-width("mobile") {
    padding: 0 30px;
  }
}
````

## File: src/app/styles/main.scss
````scss
@use "./base/fonts.scss";
@use "./base/reset.scss";
````

## File: public/favicon.svg
````xml
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 12.4502C6.55228 12.4502 7 12.8979 7 13.4502V26.0002H25V13.4502C25 12.8979 25.4477 12.4502 26 12.4502C26.5523 12.4502 27 12.8979 27 13.4502V26.0002C27 26.5306 26.7893 27.0393 26.4142 27.4144C26.0391 27.7895 25.5304 28.0002 25 28.0002H7C6.46957 28.0002 5.96086 27.7895 5.58579 27.4144C5.21071 27.0393 5 26.5306 5 26.0002V13.4502C5 12.8979 5.44772 12.4502 6 12.4502Z" fill-rule="evenodd" clip-rule="evenodd" fill="#A259FF"/>
<path d="M3 5C3 4.44772 3.44772 4 4 4H28C28.5523 4 29 4.44772 29 5C29 5.55228 28.5523 6 28 6H4C3.44772 6 3 5.55228 3 5Z" fill-rule="evenodd" clip-rule="evenodd" fill="#A259FF"/>
<path d="M4 7C4.55228 7 5 7.44772 5 8V10C5 10.7956 5.31607 11.5587 5.87868 12.1213C6.44129 12.6839 7.20435 13 8 13C8.79565 13 9.55871 12.6839 10.1213 12.1213C10.6839 11.5587 11 10.7956 11 10V8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V10C13 11.3261 12.4732 12.5979 11.5355 13.5355C10.5979 14.4732 9.32608 15 8 15C6.67392 15 5.40215 14.4732 4.46447 13.5355C3.52678 12.5979 3 11.3261 3 10V8C3 7.44772 3.44772 7 4 7Z" fill-rule="evenodd" clip-rule="evenodd" fill="#A259FF"/>
<path d="M12 7C12.5523 7 13 7.44772 13 8V10C13 10.7956 13.3161 11.5587 13.8787 12.1213C14.4413 12.6839 15.2044 13 16 13C16.7956 13 17.5587 12.6839 18.1213 12.1213C18.6839 11.5587 19 10.7956 19 10V8C19 7.44772 19.4477 7 20 7C20.5523 7 21 7.44772 21 8V10C21 11.3261 20.4732 12.5979 19.5355 13.5355C18.5979 14.4732 17.3261 15 16 15C14.6739 15 13.4021 14.4732 12.4645 13.5355C11.5268 12.5979 11 11.3261 11 10V8C11 7.44772 11.4477 7 12 7Z" fill-rule="evenodd" clip-rule="evenodd" fill="#A259FF"/>
<path d="M20 7C20.5523 7 21 7.44772 21 8V10C21 10.7956 21.3161 11.5587 21.8787 12.1213C22.4413 12.6839 23.2044 13 24 13C24.7956 13 25.5587 12.6839 26.1213 12.1213C26.6839 11.5587 27 10.7956 27 10V8C27 7.44772 27.4477 7 28 7C28.5523 7 29 7.44772 29 8V10C29 11.3261 28.4732 12.5979 27.5355 13.5355C26.5979 14.4732 25.3261 15 24 15C22.6739 15 21.4021 14.4732 20.4645 13.5355C19.5268 12.5979 19 11.3261 19 10V8C19 7.44772 19.4477 7 20 7Z" fill-rule="evenodd" clip-rule="evenodd" fill="#A259FF"/>
</svg>
````

## File: src/App.tsx
````typescript
export default function App() {
  return (
    <div>
      <div className="container">
        <p>Hello World</p>
      </div>
    </div>
  );
}
````

## File: src/main.tsx
````typescript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@/app/styles/main.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
````

## File: eslint.config.js
````javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
])
````

## File: index.html
````html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>nft-marketplace</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
````

## File: package.json
````json
{
  "name": "nft-marketplace",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  },
  "dependencies": {
    "@hookform/resolvers": "^6.0.0",
    "@supabase/supabase-js": "^2.118.0",
    "@tanstack/react-query": "^5.104.5",
    "react": "^19.3.1",
    "react-dom": "^19.3.1",
    "react-hook-form": "^7.90.0",
    "react-router": "^8.5.0",
    "zod": "^4.6.7"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@types/node": "^24.19.2",
    "@types/react": "^19.3.0",
    "@types/react-dom": "^19.3.0",
    "@vitejs/plugin-react": "^6.1.2",
    "eslint": "^10.13.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.7",
    "gh-pages": "^6.3.0",
    "globals": "^17.13.0",
    "sass": "^1.105.2",
    "typescript": "~6.0.3",
    "typescript-eslint": "^8.71.2",
    "vite": "^8.3.4"
  }
}
````

## File: pnpm-workspace.yaml
````yaml
allowBuilds:
  '@parcel/watcher': true
````

## File: tsconfig.app.json
````json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023", "DOM"],
    "module": "esnext",
    "types": ["vite/client"],
    "allowArbitraryExtensions": true,
    "skipLibCheck": true,
    "strict": true,
    "noUncheckedIndexedAccess": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "paths": {
      "@/*": ["./src/*"]
    },

    /* Linting */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
````

## File: tsconfig.json
````json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
````

## File: tsconfig.node.json
````json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023"],
    "types": ["node"],
    "skipLibCheck": true,

    /* Bundler mode */
    "module": "nodenext",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}
````

## File: vite.config.ts
````typescript
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/nft-marketplace/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/app/styles/abstracts/mixins" as *;
        @use "@/app/styles/abstracts/variables" as *;
        `,
      },
    },
  },
  server: {
    port: 2020,
    open: true,
    cors: true,
  },
});
````

## File: .gitignore
````
# Dependencies
node_modules/

# Build output
dist/
dist-ssr/

# Vite
.vite/
vite.config.js.timestamp-*
vite.config.ts.timestamp-*

# Environment variables
.env
.env.*
!.env.example

# Logs
logs/
*.log
npm-debug.log*
yarn-debug.log*
pnpm-debug.log*
lerna-debug.log*

# TypeScript
*.tsbuildinfo

# Test coverage
coverage/
.nyc_output/
playwright-report/
test-results/

# Cache
.cache/
.eslintcache
.stylelintcache

# pnpm
.pnpm-store/

# Editor settings
.vscode/*
!.vscode/extensions.json
.idea/

# Operating system
.DS_Store
Thumbs.db

# Debugging
*.local
.node_repl_history
````

## File: README.md
````markdown
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
````
