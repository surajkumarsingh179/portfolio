# Portfolio

Personal portfolio built with Next.js 16.

## Setup

This repository uses `pnpm`.

Create `.env.local` from `.env.local.example`:

```env
GITHUB_TOKEN=
GITHUB_USERNAME=
NEXT_PUBLIC_GITHUB_USERNAME=
NEXT_PUBLIC_WAKATIME_USERNAME=
NEXT_PUBLIC_GISCUS_THEME_BASE_URL=
NEXT_PUBLIC_GISCUS_REPO=
NEXT_PUBLIC_GISCUS_REPO_ID=
NEXT_PUBLIC_GISCUS_CATEGORY=
NEXT_PUBLIC_GISCUS_CATEGORY_ID=
NEXT_PUBLIC_GISCUS_MAPPING=pathname
NEXT_PUBLIC_GISCUS_TERM=
```

Environment variables:

- `GITHUB_TOKEN`: used by the GitHub API routes to fetch profile stats and repository data.
- `NEXT_PUBLIC_GISCUS_THEME_BASE_URL`: public base URL for loading custom Giscus theme assets.
- `NEXT_PUBLIC_GISCUS_REPO`: guestbook repository in `owner/repo` format.
- `NEXT_PUBLIC_GISCUS_REPO_ID`: repository ID from Giscus setup.
- `NEXT_PUBLIC_GISCUS_CATEGORY`: discussion category name for guestbook messages.
- `NEXT_PUBLIC_GISCUS_CATEGORY_ID`: discussion category ID from Giscus setup.
- `NEXT_PUBLIC_GISCUS_MAPPING`: Giscus mapping strategy such as `pathname`, `specific`, or `number`.
- `NEXT_PUBLIC_GISCUS_TERM`: required when `NEXT_PUBLIC_GISCUS_MAPPING` is `specific` or `number`.

Use a public URL for `NEXT_PUBLIC_GISCUS_THEME_BASE_URL` because Giscus cannot load custom theme assets from `localhost`.

Example:

```env
NEXT_PUBLIC_GISCUS_THEME_BASE_URL=https://your-public-url.ngrok-free.app
```

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm format
```

## Docker

```bash
docker compose up --build
```

## Star History

<a href="https://www.star-history.com/?repos=surajkumarsingh179%2Fportfolio&type=date&legend=top-left">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=surajkumarsingh179/portfolio&type=date&theme=dark&legend=top-left" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=surajkumarsingh179/portfolio&type=date&legend=top-left" />
   <img alt="Star History Chart" src="https://api.star-history.com/chart?repos=surajkumarsingh179/portfolio&type=date&legend=top-left" />
 </picture>
</a>
