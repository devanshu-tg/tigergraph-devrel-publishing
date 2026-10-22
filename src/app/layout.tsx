import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Link from "next/link";
import { LogoMark } from "@/components/icons";
import { NavLinks } from "@/components/NavLinks";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", display: "swap" });

export const metadata: Metadata = {
  title: { default: "TigerGraph DevRel", template: "%s · TigerGraph DevRel" },
  description: "Events, hackathons, community projects and posts from the TigerGraph Developer Relations team.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <Link href="/" className="brand" aria-label="TigerGraph DevRel home">
              <LogoMark />
              TigerGraph
              <span className="brand-tag">DevRel</span>
            </Link>
            <NavLinks />
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="container footer-inner">
            <div>
              <Link href="/" className="brand">
                <LogoMark size={24} />
                TigerGraph DevRel
              </Link>
              <p>Events, hackathons and community projects from the TigerGraph Developer Relations team.</p>
            </div>
            <div className="footer-col">
              <h4>Explore</h4>
              <Link href="/events">All events</Link>
              <Link href="/events?type=hackathon">Hackathons</Link>
              <Link href="/blogs">Blogs</Link>
            </div>
            <div className="footer-col">
              <h4>Data feeds</h4>
              <a href="/api/events.json">events.json</a>
              <a href="/api/projects.json">projects.json</a>
              <a href="/api/blogs.json">blogs.json</a>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">© {new Date().getFullYear()} TigerGraph Developer Relations</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
