"use client";

import Image from "next/image";
import Link from "next/link";
import { Post } from "@/lib/data";
import { TiltCard } from "@/components/TiltCard";

export function ArticleCard({ post, priority = false }: { post: Post; priority?: boolean }) {
  return (
    <TiltCard className="group h-full overflow-hidden rounded-[2rem] bg-white p-3 shadow-neo-sm hairline">
      <Link href={`/resources/${post.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[1.35] overflow-hidden rounded-[1.45rem] bg-mist">
          <Image
            src={post.image}
            alt={`${post.title} illustration`}
            fill
            unoptimized
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            priority={priority}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-3">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.13em] text-accent">
            <span>{post.category}</span>
            <span className="text-muted">·</span>
            <span className="text-muted">{post.readTime}</span>
          </div>
          <h3 className="mt-4 text-2xl font-black leading-tight tracking-[-0.055em]">{post.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-7 text-muted">{post.excerpt}</p>
          <span className="mt-5 text-sm font-black text-ink">Read insight →</span>
        </div>
      </Link>
    </TiltCard>
  );
}
