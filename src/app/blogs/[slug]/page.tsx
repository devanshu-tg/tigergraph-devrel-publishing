import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, CalendarIcon, ExternalIcon } from "@/components/icons";
import { blogJson } from "@/lib/api";
import { getContent } from "@/lib/content";
import { formatDate } from "@/lib/format";
import { toHtml } from "@/lib/markdown";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getContent().blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = getContent().blogs.find((b) => b.slug === slug);
  if (!blog) return {};
  return { title: blog.title, alternates: { canonical: blogJson(blog).canonical_url } };
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const blog = getContent().blogs.find((b) => b.slug === slug);
  if (!blog) notFound();
  // canonical_url is only set for posts that first appeared on another site.
  const original = blog.canonical_url;

  return (
    <div className="container">
      <article className="post">
        <Link href="/blogs" className="back">
          <ArrowLeftIcon size={15} /> All posts
        </Link>
        <header className="post-head">
          <span className="eyebrow">Blog</span>
          <h1>{blog.title}</h1>
          <div className="post-meta">
            <span>{blog.author}</span>
            <span className="meta">
              <CalendarIcon size={15} />
              {formatDate(blog.published_at)}
            </span>
          </div>
          {blog.tags.length > 0 && (
            <div className="tags">
              {blog.tags.map((t) => (
                <span key={t}>#{t}</span>
              ))}
            </div>
          )}
          {original && (
            <div className="post-source">
              <p>
                Originally published at <strong>{new URL(original).host.replace(/^www\./, "")}</strong>
              </p>
              <a href={original} target="_blank" rel="noopener" className="btn btn-primary btn-sm">
                View original <ExternalIcon size={15} />
              </a>
            </div>
          )}
        </header>
        {blog.cover_image_url && (
          <div className="post-cover">
            <img src={blog.cover_image_url} alt="" />
          </div>
        )}
        <div className="prose" dangerouslySetInnerHTML={{ __html: toHtml(blog.body) }} />
      </article>
    </div>
  );
}
