<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- All images and videos live as real files under `src/assets/` (no CDN `.asset.json` pointers) — keeps the site portable to external hosting (it was previously hosted on Vercel, where Lovable CDN URLs do not resolve).
- The contact form inserts directly from the browser with the publishable key (anon INSERT-only RLS policy) — this works on any host; server functions would need server env vars only available on Lovable hosting.
- Subpages keep the old WordPress URLs (/business-coaching, /grafik-webdesign-itzehoe, /fotografie, /referenzen, /impressum, /datenschutzerklaerung) so existing search links keep working.
- Shared header/footer/contact data live in `src/components/site-layout.tsx` and `src/content/` — page texts are edited there, not inline in routes.
- Every route builds its head via `pageHead()` in `src/content/seo.ts` (canonical + og:url from `SITE_URL`, JSON-LD business/service/breadcrumb) — keeps search metadata consistent and points at the real domain, not the Lovable URL.
