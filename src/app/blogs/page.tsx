import type { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import { getContent } from "@/lib/content";

export const metadata: Metadata = { title: "Blogs" };

export default function BlogsPage() {
  const { blogs } = getContent();
  return (
    <div className="container">
      <header className="page-head">
        <span className="eyebrow">Blog</span>
        <h1>Notes from the DevRel team</h1>
        <p>Technical deep dives, tutorials and community stories about building with TigerGraph.</p>
      </header>
      <section className="section">
        {blogs.length ? (
          <div className="grid">
            {blogs.map((b) => (
              <BlogCard key={b.slug} blog={b} />
            ))}
          </div>
        ) : (
          <p className="empty">No posts yet.</p>
        )}
      </section>
    </div>
  );
}
