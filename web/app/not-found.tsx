import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="text-6xl font-bold text-accent">404</h1>
      <p className="mt-4 text-xl font-semibold text-fg">Page not found</p>
      <p className="mt-2 text-fg-muted">That route does not exist on this site.</p>
      <Link
        href="/"
        className="mt-8 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-on-accent shadow-accent-glow hover:bg-accent-hover"
      >
        Back home
      </Link>
    </div>
  );
}
