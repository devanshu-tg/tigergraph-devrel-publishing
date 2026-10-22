import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container">
      <header className="page-head">
        <span className="eyebrow">404</span>
        <h1>Page not found</h1>
        <p>
          <Link href="/" className="link-arrow">
            Go to the home page
          </Link>
        </p>
      </header>
    </div>
  );
}
