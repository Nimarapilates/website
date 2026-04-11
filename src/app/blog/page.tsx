import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="bg-charcoal pt-32 sm:pt-40 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-sage mb-4">
            Insights &amp; Guidance
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-cream mb-4 leading-tight">
            The Nimara Journal
          </h1>
          <p className="text-cream/50 text-base sm:text-lg max-w-xl leading-relaxed">
            Thoughtful writing on Reformer Pilates, movement science, and
            building a practice that lasts.
          </p>
        </div>
      </section>

      {/* ── Post Grid ────────────────────────────────────── */}
      <section className="bg-sand py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-cream border border-charcoal/8 rounded-sm overflow-hidden card-hover flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    width={800}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 sm:p-7 flex flex-col flex-1">
                  <span className="inline-block self-start text-[0.65rem] uppercase tracking-[0.15em] font-medium text-green bg-green/10 rounded-full px-3 py-1 mb-3">
                    {post.category}
                  </span>
                  <h2 className="font-heading text-xl sm:text-2xl font-light text-charcoal mb-2 leading-snug group-hover:text-green transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-stone text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-stone/70">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
