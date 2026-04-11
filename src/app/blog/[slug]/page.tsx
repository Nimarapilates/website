import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { ButtonPrimary } from "@/components/ui";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://nimarapilates.com/blog/${post.slug}`,
      siteName: "Nimara Pilates",
      locale: "en_GB",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://nimarapilates.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Nimara Pilates",
      url: "https://nimarapilates.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://nimarapilates.com/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero Image ───────────────────────────────────── */}
      <section className="relative h-[40vh] min-h-[280px] max-h-[500px] overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-warm-black/50" />

        <div className="relative z-10 flex items-end h-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pb-10">
          <Link
            href="/blog"
            className="text-sm text-cream/60 hover:text-cream transition-colors flex items-center gap-2"
          >
            <span aria-hidden="true">&larr;</span>
            Back to Journal
          </Link>
        </div>
      </section>

      {/* ── Article ──────────────────────────────────────── */}
      <article className="bg-sand py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          {/* Meta */}
          <header className="mb-10 sm:mb-14">
            <span className="inline-block text-[0.65rem] uppercase tracking-[0.15em] font-medium text-green bg-green/10 rounded-full px-3 py-1 mb-4">
              {post.category}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal mb-5 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-stone">
              <span>{post.author}</span>
              <span className="text-charcoal/20">|</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <span className="text-charcoal/20">|</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          {/* Content */}
          <div
            className="prose-nimara"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* ── Related Posts ─────────────────────────────────── */}
      {related.length > 0 && (
        <section className="bg-cream py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
            <p className="text-xs uppercase tracking-[0.2em] font-medium text-green mb-4">
              Keep Reading
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-charcoal mb-10">
              More from the Journal
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group bg-sand border border-charcoal/8 rounded-sm overflow-hidden card-hover flex flex-col"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <Image
                      src={r.coverImage}
                      alt={r.title}
                      width={800}
                      height={500}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 sm:p-7 flex flex-col flex-1">
                    <span className="inline-block self-start text-[0.65rem] uppercase tracking-[0.15em] font-medium text-green bg-green/10 rounded-full px-3 py-1 mb-3">
                      {r.category}
                    </span>
                    <h3 className="font-heading text-xl font-light text-charcoal mb-2 leading-snug group-hover:text-green transition-colors duration-300">
                      {r.title}
                    </h3>
                    <p className="text-stone text-sm leading-relaxed line-clamp-2">
                      {r.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="bg-charcoal py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-sage mb-4">
            Your Practice Awaits
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-light text-cream mb-4 leading-tight max-w-2xl mx-auto">
            Ready to experience Nimara?
          </h2>
          <p className="text-cream/50 text-base max-w-md mx-auto mb-8">
            Book your first Reformer class and discover what mindful movement
            feels like.
          </p>
          <ButtonPrimary href="/pricing">View Class Packages</ButtonPrimary>
        </div>
      </section>
    </>
  );
}
