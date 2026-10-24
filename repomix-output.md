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
    layouts/
      Main-Layout/
        MainLayout.module.scss
        MainLayout.tsx
    providers/
      AppProviders.tsx
    router/
      router.tsx
    styles/
      abstracts/
        breakpoints.scss
        mixins.scss
        variables.scss
      base/
        fonts.scss
        reset.scss
      main.scss
    App.tsx
  pages/
    home/
      ui/
        HomePage.module.scss
        HomePage.tsx
  shared/
    assets/
      fonts/
        space-mono-v17-latin-700.woff2
        space-mono-v17-latin-regular.woff2
        work-sans-v24-latin-600.woff2
        work-sans-v24-latin-regular.woff2
      icons/
        logo.svg
        user.svg
    types/
      spritemap.ts
    ui/
      Icon/
        Icon.tsx
  widgets/
    footer/
      Footer.module.scss
      Footer.tsx
    header/
      Header.module.scss
      Header.tsx
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

## File: src/app/layouts/Main-Layout/MainLayout.module.scss
````scss
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__content {
    flex: 1;
  }
}
````

## File: src/app/layouts/Main-Layout/MainLayout.tsx
````typescript
import { Outlet } from "react-router";
import Footer from "@/widgets/footer/Footer";
import Header from "@/widgets/header/Header";
import s from "./MainLayout.module.scss";

export function MainLayout() {
  return (
    <div className={s.layout}>
      <Header />
      <main className={s.layout__content}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
````

## File: src/app/router/router.tsx
````typescript
import { MainLayout } from "@/app/layouts/Main-Layout/MainLayout";
import { lazy } from "react";
import { createHashRouter } from "react-router";

const HomePage = lazy(() => import("@/pages/home/ui/HomePage"));

const router = createHashRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
````

## File: src/app/styles/abstracts/breakpoints.scss
````scss
$breakpoints: (
  laptop: 1024px,
  tablet: 767px,
  mobile: 480px,
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

## File: src/app/styles/main.scss
````scss
@use "./base/fonts.scss";
@use "./base/reset.scss";
````

## File: src/pages/home/ui/HomePage.module.scss
````scss
.home__hero {
  padding-top: 200px;
}
````

## File: src/pages/home/ui/HomePage.tsx
````typescript
import s from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <section className={s.home__hero}>
      <h1 className={s.home__title}>
        Explore the world of
        <span> unique NFTs</span>
      </h1>
    </section>
  );
};

export default HomePage;
````

## File: src/shared/assets/icons/logo.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" width="244" height="32" fill="none" viewBox="0 0 244 32"><path fill="#a259ff" fill-rule="evenodd" d="M6 12.45a1 1 0 0 1 1 1V26h18V13.45a1 1 0 1 1 2 0V26a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V13.45a1 1 0 0 1 1-1M3 5a1 1 0 0 1 1-1h24a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1" clip-rule="evenodd"/><path fill="#a259ff" fill-rule="evenodd" d="M4 7a1 1 0 0 1 1 1v2a3 3 0 0 0 6 0V8a1 1 0 1 1 2 0v2a5 5 0 1 1-10 0V8a1 1 0 0 1 1-1" clip-rule="evenodd"/><path fill="#a259ff" fill-rule="evenodd" d="M12 7a1 1 0 0 1 1 1v2a3 3 0 0 0 6 0V8a1 1 0 1 1 2 0v2a5 5 0 1 1-10 0V8a1 1 0 0 1 1-1" clip-rule="evenodd"/><path fill="#a259ff" fill-rule="evenodd" d="M20 7a1 1 0 0 1 1 1v2a3 3 0 0 0 6 0V8a1 1 0 1 1 2 0v2a5 5 0 1 1-10 0V8a1 1 0 0 1 1-1" clip-rule="evenodd"/><path fill="#fff" d="M51.48 22.548h.396V8.6h2.904V24h-5.676L47.3 10.052h-.396V24H44V8.6h5.676zM58.065 8.6h9.856v2.772h-6.952v3.52h6.82v2.772h-6.82V24h-2.904zM70.787 8.6h11.088v2.772h-4.092V24H74.88V11.372h-4.092zM97.025 8.6h5.104l.88 11.572v2.244h.528v-2.244l.88-11.572h5.104V24h-2.64V13.704l.264-3.52h-.528L105.473 24h-4.356l-1.188-13.816H99.4l.264 3.52V24h-2.64zM118.79 22.416q-.44 1.033-1.232 1.474-.792.417-1.848.418a4.7 4.7 0 0 1-1.87-.374 4.4 4.4 0 0 1-1.518-1.1 5.5 5.5 0 0 1-1.056-1.76q-.374-1.035-.374-2.354v-.352q0-1.299.374-2.332.373-1.034 1.012-1.76.637-.726 1.474-1.1a4.3 4.3 0 0 1 1.826-.396q1.165 0 1.87.396.726.396 1.144 1.232h.396v-1.32h2.772V20.7q0 .66.594.66h.418V24h-1.892q-.749 0-1.232-.44-.462-.44-.462-1.144zm-2.464-.748q1.21 0 1.936-.792.726-.814.726-2.2v-.264q0-1.386-.726-2.178-.726-.814-1.936-.814-1.21-.001-1.936.814-.726.792-.726 2.178v.264q0 1.386.726 2.2.726.792 1.936.792M124.67 13.088h4.62v1.584h.396q.309-.903 1.034-1.386.749-.507 1.782-.506 1.629 0 2.618 1.034.99 1.011.99 3.102v.484l-2.86.264v-.308q0-.902-.462-1.43-.462-.55-1.386-.55t-1.452.638-.528 1.826v3.52h2.508V24h-7.524v-2.64h2.244v-5.632h-1.98zM142.321 17.092h.528l2.904-4.004h3.036v.132l-3.52 4.994v.396l3.872 5.258V24h-3.168l-3.124-4.268h-.528V24h-2.772V8.6h2.772zM154.582 19.446q.022.483.22.902.22.395.572.704.374.285.836.462.483.154 1.012.154 1.034 0 1.584-.352.549-.375.792-.88l2.376 1.32a5 5 0 0 1-.55.88 3.9 3.9 0 0 1-.924.814q-.55.373-1.364.616-.792.241-1.87.242-1.233 0-2.244-.396a5.1 5.1 0 0 1-1.76-1.144 5.4 5.4 0 0 1-1.144-1.826q-.396-1.08-.396-2.442v-.132q0-1.255.418-2.288a5.3 5.3 0 0 1 1.188-1.76 5.3 5.3 0 0 1 1.738-1.122 5.6 5.6 0 0 1 2.156-.418q1.407 0 2.42.506 1.012.483 1.672 1.254a4.8 4.8 0 0 1 .968 1.672q.308.901.308 1.76v1.474zm2.618-4.158q-1.056 0-1.716.55-.66.527-.858 1.232h5.148q-.132-.771-.836-1.276-.682-.506-1.738-.506M165.302 13.088h3.234V8.6h2.772v4.488h3.938v2.64h-3.938V20.7q0 .66.594.66h2.948V24h-4.62q-.747 0-1.232-.484-.462-.485-.462-1.232v-6.556h-3.234zM181.281 28.4h-2.772V13.088h2.772v1.584h.396a3.16 3.16 0 0 1 1.276-1.386q.836-.507 2.134-.506.968 0 1.826.374.88.374 1.518 1.1.66.703 1.034 1.738.396 1.034.396 2.354v.396q0 1.341-.374 2.376a5.4 5.4 0 0 1-1.012 1.76q-.638.703-1.518 1.078a4.9 4.9 0 0 1-1.87.352q-.748 0-1.298-.154a3.6 3.6 0 0 1-.968-.418 3.4 3.4 0 0 1-.682-.594 5.5 5.5 0 0 1-.462-.726h-.396zm2.904-6.732q1.298 0 2.09-.792.814-.814.814-2.2v-.264q0-1.386-.814-2.178-.792-.814-2.09-.814t-2.112.836q-.792.813-.792 2.156v.264q0 1.341.792 2.178.815.814 2.112.814M192.486 21.36h3.828V11.24h-3.696V8.6h6.468v12.76h3.564V24h-10.164zM213.084 22.416q-.44 1.033-1.232 1.474-.792.417-1.848.418-.99 0-1.87-.374a4.4 4.4 0 0 1-1.518-1.1 5.5 5.5 0 0 1-1.056-1.76q-.374-1.035-.374-2.354v-.352q0-1.299.374-2.332.375-1.034 1.012-1.76.639-.726 1.474-1.1a4.3 4.3 0 0 1 1.826-.396q1.167 0 1.87.396.727.396 1.144 1.232h.396v-1.32h2.772V20.7q0 .66.594.66h.418V24h-1.892q-.747 0-1.232-.44-.462-.44-.462-1.144zm-2.464-.748q1.21 0 1.936-.792.726-.814.726-2.2v-.264q0-1.386-.726-2.178-.726-.814-1.936-.814-1.21-.001-1.936.814-.726.792-.726 2.178v.264q0 1.386.726 2.2.727.792 1.936.792M230.141 19.996q-.374 1.936-1.782 3.124-1.386 1.188-3.718 1.188a6.7 6.7 0 0 1-2.266-.374 5.3 5.3 0 0 1-1.804-1.078 4.9 4.9 0 0 1-1.21-1.738q-.44-1.035-.44-2.354V18.5q0-1.32.44-2.376a5.35 5.35 0 0 1 1.21-1.804 5.5 5.5 0 0 1 1.826-1.144 6.3 6.3 0 0 1 2.244-.396q2.288 0 3.696 1.188 1.43 1.188 1.804 3.124l-2.728.704a2.86 2.86 0 0 0-.836-1.672q-.703-.705-1.98-.704-.594 0-1.122.22a2.7 2.7 0 0 0-.924.638 3 3 0 0 0-.638.99q-.22.571-.22 1.298v.132q0 .726.22 1.298.242.549.638.924.396.374.924.572.528.176 1.122.176 1.276 0 1.936-.638.682-.639.88-1.716zM235.406 19.446q.022.483.22.902.22.395.572.704.374.285.836.462.484.154 1.012.154 1.034 0 1.584-.352.55-.375.792-.88l2.376 1.32a5 5 0 0 1-.55.88 3.9 3.9 0 0 1-.924.814q-.55.373-1.364.616-.792.241-1.87.242-1.231 0-2.244-.396a5.1 5.1 0 0 1-1.76-1.144 5.4 5.4 0 0 1-1.144-1.826q-.396-1.08-.396-2.442v-.132q0-1.255.418-2.288a5.3 5.3 0 0 1 1.188-1.76 5.3 5.3 0 0 1 1.738-1.122 5.6 5.6 0 0 1 2.156-.418q1.408 0 2.42.506 1.012.483 1.672 1.254.66.747.968 1.672.308.901.308 1.76v1.474zm2.618-4.158q-1.056 0-1.716.55-.66.527-.858 1.232h5.148q-.132-.771-.836-1.276-.682-.506-1.738-.506"/></svg>
````

## File: src/shared/assets/icons/user.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="#fff" fill-rule="evenodd" d="M10 3.125a4.375 4.375 0 1 0 0 8.75 4.375 4.375 0 0 0 0-8.75M4.375 7.5a5.625 5.625 0 1 1 11.25 0 5.625 5.625 0 0 1-11.25 0" clip-rule="evenodd"/><path fill="#fff" fill-rule="evenodd" d="M10 13.124a8.12 8.12 0 0 0-7.037 4.063.625.625 0 0 1-1.082-.625 9.374 9.374 0 0 1 16.238 0 .625.625 0 1 1-1.082.625A8.12 8.12 0 0 0 10 13.124" clip-rule="evenodd"/></svg>
````

## File: src/shared/ui/Icon/Icon.tsx
````typescript
import { iconHref, type IconName } from "@/shared/types/spritemap";
import type { SVGProps } from "react";

type IconProps = Omit<SVGProps<SVGSVGElement>, "name"> & {
  name: IconName;
  width?: number | string;
  height?: number | string;
  className?: string;
};

export function Icon({ name, width, height, className, ...props }: IconProps) {
  return (
    <svg
      {...props}
      className={className}
      width={width}
      height={height}
      focusable="false"
      aria-hidden="true"
    >
      <use href={iconHref(name)} />
    </svg>
  );
}
````

## File: src/widgets/footer/Footer.module.scss
````scss

````

## File: src/widgets/footer/Footer.tsx
````typescript
const Footer = () => {
  return (
    <footer>
      <h2>Footer</h2>
    </footer>
  );
};
export default Footer;
````

## File: src/widgets/header/Header.module.scss
````scss
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  padding: 20px 0;

  @include max-width("laptop") {
    padding: 15px 0;
  }

  &__container {
    width: 100%;
    max-width: 1280px;
    padding: 0 50px;
    margin: 0 auto;

    @include max-width("mobile") {
      padding-inline: 30px;
    }
  }

  &__navMenu {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__iconLogo {
    @include max-width("laptop") {
      width: 183px;
      height: 24px;
    }
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__navLink {
    padding: 12px 20px;
    font-family: $second-family;
    font-weight: 600;
    text-align: center;
  }

  &__signUpLink {
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: $second-family;
    font-weight: 600;
    text-align: center;
    padding: 19px 30px;
    border-radius: 20px;
    background: $call-to-action;
  }
}
````

## File: src/widgets/header/Header.tsx
````typescript
import { Link } from "react-router";
import { Icon } from "@/shared/ui/Icon/Icon";
import Logo from "@/shared/assets/icons/logo.svg";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__container}>
        <div className={s.header__navMenu}>
          <Link to="/" className={s.header__logoLink}>
            <img
              src={Logo}
              alt="Logo"
              width={243}
              height={32}
              className={s.header__iconLogo}
            />
          </Link>
          <nav className={s.header__nav}>
            <Link to="marketplace" className={s.header__navLink}>
              Marketplace
            </Link>
            <Link to="rankings" className={s.header__navLink}>
              Rankings
            </Link>
            <Link to="connect-wallet" className={s.header__navLink}>
              Connect a wallet
            </Link>
            <Link to="sign-up" className={s.header__signUpLink}>
              <Icon
                name="user"
                width={20}
                height={20}
                className={s.header__icon}
              />
              <span>Sign Up</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
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

## File: pnpm-workspace.yaml
````yaml
allowBuilds:
  '@parcel/watcher': true
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

## File: src/app/providers/AppProviders.tsx
````typescript
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";

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
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
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
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  background: $background;
  color: $text;
}

.container {
  width: 100%;
  max-width: 1280px;
  padding: 0 115px;
  margin: 0 auto;

  @include max-width("laptop") {
    padding: 0 72px;
  }

  @include max-width("tablet") {
    padding-inline: 40px;
  }

  @include max-width("mobile") {
    padding-inline: 30px;
  }
}
````

## File: src/app/App.tsx
````typescript
import { Suspense } from "react";
import { AppProviders } from "./providers/AppProviders";
import { RouterProvider } from "react-router";
import router from "./router/router";

export default function App() {
  return (
    <AppProviders>
      <Suspense fallback={<div>Загрузка страницы...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </AppProviders>
  );
}
````

## File: src/shared/types/spritemap.ts
````typescript
// Generated by vite-plugin-svg-spritemap. Do not edit.

export const spritemapUrl = "/spritemap.svg";

export const iconNames = [
  "logo",
  "user",
] as const;

export type IconName = (typeof iconNames)[number];

export function iconHref(name: IconName): string {
  return `${spritemapUrl}#${name}`;
}
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

## File: eslint.config.js
````javascript
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
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
  {
    files: ["src/app/router/**/*.tsx"],
    rules: {
      "react-refresh/only-export-components": "off",
    },
  },
]);
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

## File: src/main.tsx
````typescript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "@/app/styles/main.scss";

const rootElement = document.getElementById("root")!;

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
````

## File: package.json
````json
{
  "homepage": "https://romanmytsu.github.io/nft-marketplace/",
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
    "clsx": "^2.1.1",
    "lucide-react": "^1.61.0",
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
    "vite": "^8.3.4",
    "vite-plugin-svg-spritemap": "^2.0.1"
  }
}
````

## File: vite.config.ts
````typescript
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { svgSpritemap } from "vite-plugin-svg-spritemap";

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/nft-marketplace/" : "/",
  plugins: [
    react(),
    svgSpritemap({
      pattern: "src/shared/assets/icons/*.svg",
      filename: "spritemap.svg",
      currentColor: true,
      types: "src/shared/types/spritemap.ts",
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
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
}));
````
