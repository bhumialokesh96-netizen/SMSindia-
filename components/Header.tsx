import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link href="/" className="logo">
            <h1>SMSIndia Blog</h1>
          </Link>
          <nav className="nav">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/privacy" className="nav-link">Privacy</Link>
            <Link href="/terms" className="nav-link">Terms</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
