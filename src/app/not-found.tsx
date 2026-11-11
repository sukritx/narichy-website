import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-xl flex-col items-center justify-center px-6 py-24 text-center">
      <p className="mb-3 text-sm tracking-[0.2em] uppercase text-neutral-500">
        404
      </p>
      <h1 className="mb-4 font-serif text-3xl font-medium">
        Page not found
      </h1>
      <p className="mb-8 text-base text-neutral-600">
        The page you are looking for does not exist or has moved.
      </p>
      <Link
        className="inline-flex h-11 items-center bg-black px-6 text-xs tracking-[0.12em] uppercase text-white transition-colors hover:bg-neutral-800"
        href="/"
      >
        Back to home
      </Link>
    </main>
  );
}
