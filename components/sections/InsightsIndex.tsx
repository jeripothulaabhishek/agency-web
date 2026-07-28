"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArticleCard } from "@/components/ArticleCard";
import { posts } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories = ["All", "Design", "Development", "Strategy", "Data"] as const;

export function InsightsIndex() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const featured = posts[0];
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesQuery = !q || `${post.title} ${post.excerpt} ${post.category}`.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <>
      <section className="section-shell pb-10 pt-32 md:pt-40">
        <p className="eyebrow">Resources</p>
        <h1 className="display-heading mt-6 max-w-5xl text-[clamp(4rem,10vw,8rem)] font-black">Insights & Ideas</h1>
        <div className="mt-8 max-w-2xl rounded-full bg-white p-2 shadow-neo-sm hairline">
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search design, development, strategy..."
            aria-label="Search articles"
            className="w-full rounded-full bg-mist px-5 py-4 text-sm font-bold outline-none"
          />
        </div>
      </section>

      <section className="section-shell">
        <Link href={`/resources/${featured.slug}`} className="group grid overflow-hidden rounded-[2rem] bg-white p-3 shadow-neo hairline md:grid-cols-[1fr_0.85fr]">
          <div className="relative min-h-[320px] overflow-hidden rounded-[1.6rem] bg-mist">
            <Image src={featured.image} alt={featured.title} fill priority sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="p-6 md:p-9">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-accent">Featured Post</p>
            <h2 className="mt-5 text-4xl font-black leading-none tracking-[-0.07em] md:text-5xl">{featured.title}</h2>
            <p className="mt-5 text-base leading-8 text-muted">{featured.excerpt}</p>
            <p className="mt-8 text-sm font-black text-ink">Read featured insight →</p>
          </div>
        </Link>
      </section>

      <section className="section-shell py-14">
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={cn("relative rounded-full px-4 py-2 text-sm font-black transition-colors hairline", category === item ? "text-white" : "bg-white text-muted")}
              onClick={() => setCategory(item)}
            >
              {category === item ? <motion.span layoutId="article-category" className="absolute inset-0 rounded-full bg-accent" /> : null}
              <span className="relative">{item}</span>
            </button>
          ))}
        </div>
        <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, index) => (
            <ArticleCard key={post.slug} post={post} priority={index < 2} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <button type="button" className="rounded-full bg-white px-6 py-3 text-sm font-black text-ink shadow-neo-sm hairline">
            Pagination placeholder · Page 1
          </button>
        </div>
      </section>
    </>
  );
}
