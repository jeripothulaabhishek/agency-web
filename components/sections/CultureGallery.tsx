"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { projectImages } from "@/lib/data";

const gallery = [
  projectImages.studio,
  projectImages.engineering,
  projectImages.product,
  projectImages.analytics,
  projectImages.launch
];

export function CultureGallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {gallery.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActive(image)}
            className="mb-4 block w-full overflow-hidden rounded-[2rem] bg-white p-2 text-left shadow-neo-sm hairline"
          >
            <div className={`relative overflow-hidden rounded-[1.6rem] ${index % 2 ? "aspect-[0.9]" : "aspect-[1.25]"}`}>
              <Image src={image} alt={`Behind the scenes ${index + 1}`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-white/80 p-4 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="relative aspect-[1.35] w-full max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-neo"
              initial={{ scale: 0.96, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 20 }}
            >
              <Image src={active} alt="Expanded culture image" fill sizes="90vw" className="object-cover" />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
