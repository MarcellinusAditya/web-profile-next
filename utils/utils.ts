/**
 * Public assets (`/image/...`, `/favicon...`, PDFs) live at the deployed base
 * path. next/image with `unoptimized: true` and plain <a>/<link> tags do NOT
 * prepend `basePath`, so callers need this prefix themselves.
 *
 * Empty for the Vercel production site and for local dev (both served at the
 * domain root); "/web-profile-next/" only for the GitHub Pages mirror build,
 * where `NEXT_PUBLIC_BASE_PATH` is set at build time.
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

const getImagePrefix = () => (BASE_PATH ? `${BASE_PATH}/` : "");

export { getImagePrefix, BASE_PATH };
