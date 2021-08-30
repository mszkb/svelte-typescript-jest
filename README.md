---
<p align="center">
<img alt="Svelte Logo" src="https://github.com/mszkb/svelte-typescript-jest/blob/gh_pages/screenshots/svelte-logo.png?raw=true" height=115/>
<img src="https://github.com/mszkb/svelte-typescript-jest/blob/gh_pages/screenshots/spacer.png?raw=true">
<img alt="TypeScript Logo" style="padding-bottom: 4px" src="https://github.com/mszkb/svelte-typescript-jest/blob/gh_pages/screenshots/typescript-logo.png?raw=true" width=100 />
<img src="https://github.com/mszkb/svelte-typescript-jest/blob/gh_pages/screenshots/spacer.png?raw=true">
<img alt="Jest Logo" src="https://github.com/mszkb/svelte-typescript-jest/blob/gh_pages/screenshots/jest-logo.png?raw=true" width=100 />

<h1>Svelte + TypeScript + Jest</h1>
</p>

This is a project template for [Svelte](https://svelte.dev) apps. It's based on the official one from https://github.com/sveltejs/template. And also based on https://github.com/dceddia/svelte-typescript-jest but with upgraded npm packages.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit mszkb/svelte-typescript-jest svelte-app
cd svelte-app
npm install
```

## Running

```
npm run dev
```

## Build for production and deploy

```
npm run build
```

## Important Notice

```svelte-jester``` version 2+ does not work with jest 27+. Do not try to upgrade until the issue has been resolved. See: 
- https://github.com/mihar-22/svelte-jester/issues/63
- https://github.com/mihar-22/svelte-jester/issues/65
