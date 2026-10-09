# QUARZ Official Website

Premium corporate website for **QUARZ Event Planner** using Next.js App Router, TypeScript, Tailwind CSS, reusable structured content, dynamic service routes, dynamic portfolio routes, and a validated contact form boundary.

## Run Locally

```bash
npm install
npm run dev
```

Production check:

```bash
npm run lint
npm run build
```

## Project Structure

- `app/` - App Router pages, layouts, shared components, contact API route.
- `src/data/site.ts` - Brand facts, achievement figures, values, and why-QUARZ copy.
- `src/data/services.ts` - Service categories used by `/services` and `/services/[slug]`.
- `src/data/projects.ts` - Portfolio entries used by `/portfolio` and `/portfolio/[slug]`.
- `src/data/team.ts` - Leadership, managers, and specialists.
- `src/data/clients.ts` - Non-logo client/collaborator placeholders.
- `public/images/` - Current development placeholder images from the reference website.

## Add a New Project

1. Add approved images to `public/images/`.
2. Add a new object in `src/data/projects.ts`.
3. Set `verified: true` only after the project name, client, location, year, scope, imagery, and results are approved.
4. Use only verified results or outcomes; leave unverified claims out.

## Add or Update Services

Update `src/data/services.ts`. Each service automatically gets a card on `/services`, a detail page at `/services/[slug]`, and footer service navigation.

## Update Team Information

Update `src/data/team.ts` with approved names, titles, focus areas, and portrait paths. Do not use AI-generated portraits for real team members unless clearly labeled as placeholders.

## Update Contact Information

Confirmed email, WhatsApp, address, and social links were not provided in the workspace, so the site does not invent them. Add verified details in `app/contact/page.tsx` and `app/site-footer.tsx`.

The contact form validates client-side and server-side. It returns an honest configuration message until `CONTACT_DELIVERY_ENDPOINT` is configured.

## Replace Placeholder Assets

The current imagery is inherited from the previous reference website and is labeled as development placeholder content. Replace with approved QUARZ event photography, logos, team portraits, and portfolio media before launch.

## Deployment Notes

The build is compatible with the existing Vinext/Next setup from the reference project. Deploy to the configured Cloudflare/Vercel-compatible target only after setting production environment variables and replacing placeholder assets.

## Content Requiring Confirmation

- Official QUARZ company profile PDF details.
- Legal relationship between QUARZ, Quarz Event, Quarz Group, and Quarz Creations Sdn. Bhd.
- Business email, WhatsApp, office address, and social links.
- Client logos and permission to display them.
- Real project names, event dates, locations, images, outcomes, and testimonials.

## Included Shape

- edit site code under `app/`
- `.openai/hosting.json` declares optional Sites D1 and R2 bindings
- `vite.config.ts` simulates declared bindings for local development
- `db/schema.ts` starts intentionally empty
- `examples/d1/` contains an optional D1 example surface
- `drizzle.config.ts` supports local migration generation when needed

## Workspace Auth Headers

OpenAI workspace sites can read the current user's email from
`oai-authenticated-user-email`.

SIWC-authenticated workspace sites may also receive
`oai-authenticated-user-full-name` when the user's SIWC profile has a non-empty
`name` claim. The full-name value is percent-encoded UTF-8 and is accompanied by
`oai-authenticated-user-full-name-encoding: percent-encoded-utf-8`.

Treat the full name as optional and fall back to email when it is absent:

```tsx
import { headers } from "next/headers";

export default async function Home() {
  const requestHeaders = await headers();
  const email = requestHeaders.get("oai-authenticated-user-email");
  const encodedFullName = requestHeaders.get("oai-authenticated-user-full-name");
  const fullName =
    encodedFullName &&
    requestHeaders.get("oai-authenticated-user-full-name-encoding") ===
      "percent-encoded-utf-8"
      ? decodeURIComponent(encodedFullName)
      : null;

  const displayName = fullName ?? email;
  // ...
}
```

## Optional Dispatch-Owned ChatGPT Sign-In

Import the ready-to-use helpers from `app/chatgpt-auth.ts` when the site needs
optional or required ChatGPT sign-in:

- Use `getChatGPTUser()` for optional signed-in UI.
- Use `requireChatGPTUser(returnTo)` for server-rendered pages that should send
  anonymous visitors through Sign in with ChatGPT.
- Use `chatGPTSignInPath(returnTo)` and `chatGPTSignOutPath(returnTo)` for
  browser links or actions.
- Pass a same-origin relative `returnTo` path for the destination after sign-in
  or sign-out. The helper validates and safely encodes it.
- Mark protected pages with `export const dynamic = "force-dynamic"` because
  they depend on per-request identity headers.

Dispatch owns `/signin-with-chatgpt`, `/signout-with-chatgpt`, `/callback`, the
OAuth cookies, and identity header injection. Do not implement app routes for
those reserved paths. Routes that do not import and call the helper remain
anonymous-compatible.

SIWC establishes identity only; it does not prove workspace membership. Use the
Sites hosting platform's access policy controls for workspace-wide restrictions,
or enforce explicit server-side membership or allowlist checks.

Use SIWC for account pages, user-specific dashboards, saved records, and write
actions tied to the current ChatGPT user. Leave public content anonymous.

## Useful Commands

- `npm run dev`: start local development
- `npm run build`: verify the vinext build output
- `npm test`: build the starter and verify its rendered loading skeleton
- `npm run db:generate`: generate Drizzle migrations after schema changes

## Learn More

- [vinext Documentation](https://github.com/cloudflare/vinext)
- [Drizzle D1 Guide](https://orm.drizzle.team/docs/get-started/d1-new)
