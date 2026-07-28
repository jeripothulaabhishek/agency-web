type ArtOptions = {
  title: string;
  hue?: number;
  variant?: "grid" | "orb" | "ribbon" | "portrait";
};

export function artDataUri({ title, hue = 226, variant = "grid" }: ArtOptions) {
  const accent = `hsl(${hue} 100% 57%)`;
  const accentSoft = `hsl(${hue} 100% 92%)`;
  const ink = "#0A0A0A";
  const shapes =
    variant === "orb"
      ? `<circle cx="664" cy="190" r="146" fill="${accent}" opacity=".18"/><circle cx="214" cy="344" r="112" fill="${accentSoft}" opacity=".92"/><path d="M96 442c162-122 326-144 492-66 72 34 134 36 220 4" fill="none" stroke="${accent}" stroke-width="34" stroke-linecap="round" opacity=".18"/>`
      : variant === "ribbon"
        ? `<path d="M68 382c114-156 250-218 408-184 130 28 207 2 316-88" fill="none" stroke="${accent}" stroke-width="72" stroke-linecap="round" opacity=".16"/><path d="M108 466c154-98 304-108 450-30 86 46 155 48 254 10" fill="none" stroke="${accent}" stroke-width="28" stroke-linecap="round" opacity=".24"/>`
        : variant === "portrait"
          ? `<circle cx="430" cy="226" r="104" fill="${accentSoft}"/><rect x="292" y="344" width="276" height="192" rx="96" fill="${accent}" opacity=".13"/><path d="M294 250c62 42 126 42 192 0" fill="none" stroke="${accent}" stroke-width="16" stroke-linecap="round" opacity=".24"/>`
          : `<path d="M0 150h860M0 300h860M0 450h860M172 0v600M344 0v600M516 0v600M688 0v600" stroke="${ink}" stroke-opacity=".05"/><circle cx="646" cy="198" r="142" fill="${accent}" opacity=".14"/><rect x="106" y="194" width="284" height="228" rx="38" fill="#fff" stroke="${ink}" stroke-opacity=".08"/><path d="M148 352c76-88 142-90 198-6" fill="none" stroke="${accent}" stroke-width="22" stroke-linecap="round" opacity=".36"/>`;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="860" height="600" viewBox="0 0 860 600" role="img" aria-label="${title}"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fff"/><stop offset="54%" stop-color="#f5f7fb"/><stop offset="100%" stop-color="#fff"/></linearGradient><filter id="blur"><feGaussianBlur stdDeviation="42"/></filter></defs><rect width="860" height="600" rx="56" fill="url(#bg)"/><circle cx="88" cy="82" r="172" fill="${accent}" opacity=".08" filter="url(#blur)"/><circle cx="760" cy="520" r="202" fill="${accent}" opacity=".1" filter="url(#blur)"/>${shapes}<text x="52" y="540" fill="${ink}" font-family="Inter, Arial, sans-serif" font-size="42" font-weight="800" letter-spacing="-2">${title}</text></svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
