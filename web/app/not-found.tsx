import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="text-6xl font-bold text-teal-400">404</h1>
      <p className="mt-4 text-xl font-semibold text-white">Page not found</p>
      <p className="mt-2 text-zinc-400">That route does not exist on this site.</p>
      <Link
        href="/"
        className="mt-8 rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-500"
      >
        Back home
      </Link>
    </div>
  );
}
