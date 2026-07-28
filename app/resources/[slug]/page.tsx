import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { CTASection } from "@/components/CTASection";
import { posts } from "@/lib/data";

type Params = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const post = posts.find((item) => item.slug === params.slug);
  return {
    title: post ? post.title : "Insight",
    description: post?.excerpt
  };
}

export default function ResourceDetailPage({ params }: Params) {
  const post = posts.find((item) => item.slug === params.slug);
  if (!post) notFound();

  const related = posts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <main className="pt-32">
      <section className="section-shell pb-12">
        <p className="eyebrow">{post.category}</p>
        <h1 className="display-heading mt-6 max-w-5xl text-[clamp(3.8rem,9vw,7.4rem)] font-black">{post.title}</h1>
        <p className="mt-7 text-sm font-black uppercase tracking-[0.14em] text-muted">
          {post.author} · {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} · {post.readTime}
        </p>
      </section>

      <section className="section-shell">
        <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] bg-mist shadow-neo hairline">
          <Image src={post.image} alt={post.title} fill unoptimized priority sizes="100vw" className="object-cover" />
        </div>
      </section>

      <section className="section-shell grid gap-10 py-16 lg:grid-cols-[260px_1fr]">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-[2rem] bg-white p-5 shadow-neo-sm hairline">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-muted">Contents</p>
            <nav className="mt-4 space-y-3">
              {post.body.map((section) => (
                <a key={section.heading} href={`#${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="block text-sm font-bold text-graphite hover:text-accent">
                  {section.heading}
                </a>
              ))}
            </nav>
          </div>
        </aside>
        <article className="rounded-[2rem] bg-white p-6 shadow-neo-sm hairline md:p-10">
          {post.body.map((section) => (
            <section key={section.heading} id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className="mb-12 last:mb-0">
              <h2 className="text-3xl font-black tracking-[-0.06em] md:text-5xl">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-5 text-lg leading-9 text-graphite">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </article>
      </section>

      <section className="section-shell py-14">
        <h2 className="text-4xl font-black tracking-[-0.07em]">Related posts</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {related.map((item) => (
            <ArticleCard key={item.slug} post={item} />
          ))}
        </div>
      </section>

      <CTASection compact />
    </main>
  );
}
