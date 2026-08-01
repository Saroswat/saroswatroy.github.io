import Link from "next/link";
export default function NotFound() { return <div className="not-found"><p className="eyebrow">404</p><h1>This path is outside the system.</h1><p>The page may have moved, or the address may be incomplete.</p><Link className="button primary" href="/">Return home</Link></div>; }
