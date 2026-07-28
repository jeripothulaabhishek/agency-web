import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section-shell grid min-h-screen place-items-center pt-24">
      <div className="max-w-xl text-center">
        <p className="eyebrow mx-auto">404</p>
        <h1 className="mt-6 text-6xl font-black tracking-[-0.08em]">This surface drifted away.</h1>
        <p className="mt-5 text-base leading-8 text-muted">The page does not exist, but the white space is immaculate.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-black text-white shadow-glow">
          Return home
        </Link>
      </div>
    </main>
  );
}
