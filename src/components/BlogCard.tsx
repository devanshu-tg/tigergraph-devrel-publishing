import Link from "next/link";
import type { Blog } from "@/lib/content";
import { formatDate } from "@/lib/format";
import { CalendarIcon } from "./icons";

export function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link href={`/blogs/${blog.slug}`} className="card">
      {blog.cover_image_url && (
        <div className="card-media">
          <img src={blog.cover_image_url} alt="" loading="lazy" />
          <div className="chips">
            <span className="chip chip-type">Blog</span>
          </div>
        </div>
      )}
      <div className="card-body">
        <div className="card-text">
          <h3 className="card-title">{blog.title}</h3>
          <span className="meta">
            <CalendarIcon size={15} />
            {formatDate(blog.published_at)} · {blog.author}
          </span>
          {blog.tags.length > 0 && (
            <span className="card-foot">{blog.tags.map((t) => `#${t}`).join("  ")}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
