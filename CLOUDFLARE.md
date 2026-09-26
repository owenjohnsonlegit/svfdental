# Cloudflare deployment

The site is exported to static HTML, CSS, JavaScript, and photos. No Next.js server, OpenNext adapter, service bindings, or database is required.

## Existing Workers project: svfdental

The supplied failure log is from Workers (`/workers/scripts/svfdental/versions`), not a Pages upload. Its generated `WORKER_SELF_REFERENCE` points at a different, nonexistent Worker (`south-valley-family-dental`). This repo now supplies an explicit static-assets `wrangler.jsonc`, named `svfdental`, with no self-reference binding.

After committing and pushing these changes, set the existing project's build configuration to:

| Setting         | Value                      |
| --------------- | -------------------------- |
| Root directory  | Repository root            |
| Build command   | `npm run build:cloudflare` |
| Deploy command  | `npx wrangler deploy`      |
| Node.js version | `22`                       |

If a separate non-production branch deploy command is enabled, use `npx wrangler versions upload`. Remove any old command invoking OpenNext or a generated `.open-next` config. The root `wrangler.jsonc` is the deployment source of truth. Keep its `name` equal to the Worker name in the dashboard. Do not create an extra Worker just to satisfy the old self-reference.

## Cloudflare Pages instead

Create a **Pages** project connected to the repository. Use:

| Setting                | Value                                                         |
| ---------------------- | ------------------------------------------------------------- |
| Framework preset       | Next.js (Static HTML Export), or None with the settings below |
| Build command          | `npm run build:cloudflare`                                    |
| Build output directory | `out`                                                         |
| Root directory         | Repository root                                               |
| Node.js version        | `22`                                                          |

Pages Git integration does not need a Wrangler deploy command. The root Wrangler file is for the optional Workers deployment; configure Pages output in its dashboard. No `pages_build_output_dir` is included, so the Wrangler file is not used as a Pages configuration.

## Generated output

`npm ci && npm run build:cloudflare` produces `out/index.html`, all page HTML, `404.html`, metadata, optimized photos, `_redirects`, and `_headers`. Upload the whole `out` directory for manual uploads. It is generated and excluded from Git.

The custom image loader already serves pre-generated WebP files. Legacy redirects are handled by `public/_redirects` on Cloudflare; update these alongside the standard Next redirects in `next.config.ts`.

`npm run dev` remains the normal local development command. `npm run build && npm start` remains available for the Next production preview/tests. `next start` cannot serve the static export; rebuild normally before using it, or preview `out` with Wrangler.

This configuration is prepared locally; it does not change dashboard settings, push to GitHub, or deploy to the Cloudflare account.
