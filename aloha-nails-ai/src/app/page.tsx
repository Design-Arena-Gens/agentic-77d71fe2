"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

type Story = {
  id: string;
  name: string;
  polishHex: string;
  finish: string;
  outfit: string;
  environment: string;
  lighting: string;
  mood: string;
  keywords: string[];
  thumbnail: string;
};

const colorStories: Story[] = [
  {
    id: "sunset-hibiscus",
    name: "Sunset Hibiscus",
    polishHex: "#F15F6D",
    finish: "Glass Mirror",
    outfit: "Hand-draped coral silk blazer with gold cuffs",
    environment: "Seaside penthouse terrace at golden hour",
    lighting: "Softbox fill with amber gels and negative fill contrast",
    mood: "Warm, editorial glamour with tropical shimmer",
    keywords: [
      "beauty macro",
      "editorial manicure",
      "silk reflections",
      "luxury accessories",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=850&q=80",
  },
  {
    id: "reef-mist",
    name: "Reef Mist",
    polishHex: "#74D6C8",
    finish: "Soft Pearl",
    outfit: "Tailored mint linen suit with tonal jewelry stack",
    environment: "Architectural spa lounge with travertine textures",
    lighting: "Polarized daylight with haze filter and rim highlights",
    mood: "Clean, spa-grade serenity with aquatic accents",
    keywords: [
      "wellness campaign",
      "stone textures",
      "spa minimalism",
      "aqua dispersion",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=850&q=80",
  },
  {
    id: "starlit-guava",
    name: "Starlit Guava",
    polishHex: "#FF9DA6",
    finish: "Holographic Glaze",
    outfit: "Iridescent cocktail dress with chrome clutch",
    environment: "Noir studio with sculpted light beams",
    lighting: "Specular strobe with prism diffraction",
    mood: "High-fashion nightlife with futuristic polish",
    keywords: [
      "runway beauty",
      "chrome accessories",
      "clean background",
      "cinematic lighting",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=850&q=80",
  },
];

const variationShots = [
  {
    title: "Lanikai Editorial",
    subtitle: "Sun-kissed macro storytelling",
    accent: "#F15F6D",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80",
    palette: ["#f15f6d", "#ffd1ba", "#fab0c4"],
    details: [
      "Warm coral manicure matching silk resort wear",
      "Luxury set styling with glass refractions",
      "Editorial hand posing for hero product shots",
    ],
  },
  {
    title: "Makani Studio",
    subtitle: "Cooling spa minimalism",
    accent: "#74D6C8",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80",
    palette: ["#74d6c8", "#e0f4f1", "#b0dbd5"],
    details: [
      "Aquatic-inspired polish paired with mint tailoring",
      "Travertine plinths and chrome manicure props",
      "Micro-spritz water droplets for freshness",
    ],
  },
  {
    title: "Noir Muse",
    subtitle: "Runway nightlife glow",
    accent: "#FF9DA6",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80",
    palette: ["#ff9da6", "#1c1b22", "#f2e7ff"],
    details: [
      "Holographic polish synced with iridescent couture",
      "Cinematic spotlights and gradient fog",
      "Chrome clutch prop anchors the hero product",
    ],
  },
];

const brandPillars = [
  {
    title: "Perfect Hands Every Frame",
    description:
      "Art-directed AI hand rigging prevents warped fingers and keeps cuticles flawless, even on extreme close-ups.",
  },
  {
    title: "Polish & Wardrobe Harmony",
    description:
      "The engine color-matches Aloha Nails shades with textiles, accessories, and props for cohesive storytelling.",
  },
  {
    title: "Luxury Scene Crafting",
    description:
      "Each prompt layers pro-grade lighting, editorial poses, and premium set design language ready for campaigns.",
  },
];

const workflow = [
  {
    step: "Input",
    title: "Share collection palette & campaign vibe",
    detail:
      "Upload your shade lineup and reference moodboards. The AI maps every polish to a wardrobe & set concept.",
  },
  {
    step: "Curate",
    title: "Select signature narratives",
    detail:
      "Pick from previsualized stories. Each shot includes wardrobe styling, prop notes, and final color harmonies.",
  },
  {
    step: "Deliver",
    title: "Export production-ready assets",
    detail:
      "Get 4K hero images, short-form cuts, and caption prompts with embedded compliance stamp overlays.",
  },
];

const sealText = "TPO FREE • HEMA FREE";

function SafetySeal({ className = "" }: { className?: string }) {
  return <div className={`safety-seal ${className}`}>{sealText}</div>;
}

export default function Home() {
  const [activeStoryId, setActiveStoryId] = useState(colorStories[0]?.id ?? "");

  const activeStory = useMemo(
    () => colorStories.find((story) => story.id === activeStoryId) ?? colorStories[0],
    [activeStoryId],
  );

  const prompt = useMemo(() => {
    if (!activeStory) return "";
    return [
      `Ultra realistic beauty photography of Aloha Nails manicure in ${activeStory.name}`,
      `${activeStory.finish} finish polish (${activeStory.polishHex}) perfectly matching ${activeStory.outfit.toLowerCase()}`,
      `${activeStory.environment.toLowerCase()} with ${activeStory.lighting.toLowerCase()}`,
      `Focus on elegant hands, art-directed posing, luxury jewelry, cross-polarized skin glow`,
      `Include branded safety badge text "${sealText}" on color-matched circular label`,
      `Style keywords: ${activeStory.keywords.join(", ")}`,
    ].join(". ");
  }, [activeStory]);

  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-20 px-6 py-16 md:px-10 lg:px-16">
      <div className="absolute inset-0 -z-10 mx-auto max-w-5xl rounded-[80px] bg-white/55 shadow-[0_80px_120px_-90px_rgba(17,17,17,0.75)] backdrop-blur-3xl" />
      <header className="flex flex-col gap-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200/70 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-700 shadow-sm">
              Aloha Nails • AI Photoshoot Pro
            </span>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-5xl lg:text-[3.4rem]">
              High-fashion nail campaigns with flawless hands, perfect polish harmony, and safety-first overlays.
            </h1>
            <p className="text-lg leading-8 text-neutral-600">
              Tailor an entire editorial photoshoot in minutes. Our AI aligns manicure shades with couture outfits,
              designs luxury backgrounds, and renders compliant artwork featuring the signature safety seal &ldquo;TPO
              FREE • HEMA FREE&rdquo; on every frame.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-semibold">
              <button
                type="button"
                className="rounded-full bg-neutral-950 px-6 py-3 text-white shadow-lg shadow-neutral-900/10 transition hover:-translate-y-0.5 hover:bg-neutral-900"
              >
                Generate Campaign Board
              </button>
              <button
                type="button"
                className="rounded-full border border-neutral-200/80 bg-white px-6 py-3 text-neutral-900 transition hover:-translate-y-0.5 hover:border-neutral-900/20 hover:shadow-lg"
              >
                Download Media Kit
              </button>
            </div>
          </div>
          <div className="surface-card w-full max-w-md space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-600">
                  Instant Compliance
                </h2>
                <p className="mt-2 text-sm text-neutral-500">
                  Every render ships with the legal overlay for European salon standards.
                </p>
              </div>
              <SafetySeal />
            </div>
            <div className="h-1 rounded-full bg-neutral-100">
              <div className="h-full w-[92%] rounded-full bg-neutral-900" />
            </div>
            <div className="rounded-[1.5rem] border border-dashed border-neutral-200 bg-neutral-50/80 p-5 text-sm text-neutral-700">
              <p className="font-semibold text-neutral-900">Live QA Checklist</p>
              <ul className="mt-3 space-y-2 text-neutral-600">
                <li>• Seamless hand anatomy validation</li>
                <li>• Color science mapping for polish & outfit</li>
                <li>• Safety seal placed on color-balanced circle</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {brandPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="surface-card h-full border-neutral-200/60 bg-white/80 p-6 shadow-[0_30px_60px_-50px_rgba(17,17,17,0.75)]"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">
                {pillar.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-neutral-700">{pillar.description}</p>
            </div>
          ))}
        </div>
      </header>

      <section className="surface-card border-neutral-200/80 bg-white/85">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-14">
          <div className="flex-1 space-y-6">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
                Color Story Director
              </h2>
              <p className="mt-4 text-3xl font-semibold leading-tight text-neutral-950">
                Pick a polish hue. The wardrobe, props, and lighting follow automatically.
              </p>
              <p className="mt-3 text-base leading-7 text-neutral-600">
                Each color story locks polish shade to couture styling and even adjusts the background so the manicure
                remains the hero. Tap a story to preview the full creative prompt ready for image generation.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {colorStories.map((story) => {
                const isActive = story.id === activeStory.id;
                return (
                  <button
                    key={story.id}
                    type="button"
                    onClick={() => setActiveStoryId(story.id)}
                    style={{ background: `${story.polishHex}15` }}
                    className={`group flex flex-col items-start rounded-3xl border px-5 py-6 text-left transition hover:-translate-y-1 ${
                      isActive
                        ? "border-neutral-900 bg-white shadow-xl shadow-neutral-900/10"
                        : "border-transparent bg-white/60 hover:border-neutral-200"
                    }`}
                  >
                    <span
                      className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/70 shadow-lg"
                      style={{ background: story.polishHex }}
                    />
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-600 group-hover:text-neutral-900">
                      {story.name}
                    </span>
                    <span className="mt-3 text-sm text-neutral-500">{story.finish}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <div
              className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/90 p-8 shadow-[0_40px_70px_-50px_rgba(17,17,17,0.75)]"
              style={{
                background:
                  activeStory?.id === "sunset-hibiscus"
                    ? "linear-gradient(135deg, rgba(241,95,109,0.2), rgba(255,224,213,0.7))"
                    : activeStory?.id === "reef-mist"
                      ? "linear-gradient(135deg, rgba(116,214,200,0.25), rgba(194,244,235,0.5))"
                      : "linear-gradient(135deg, rgba(255,157,166,0.25), rgba(240,224,243,0.65))",
              }}
            >
              <SafetySeal className="absolute right-8 top-8 h-14 w-14 text-[0.5rem]" />
              <div className="flex flex-col gap-6 text-neutral-700">
                <div className="flex items-center gap-4">
                  <div
                    className="h-14 w-14 rounded-2xl border border-white/70 shadow-lg"
                    style={{ background: activeStory?.polishHex ?? "#f15f6d" }}
                  />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-600">Palette</p>
                    <p className="text-xl font-semibold text-neutral-950">
                      {activeStory?.name} ({activeStory?.polishHex})
                    </p>
                  </div>
                </div>
                <div className="grid gap-4 rounded-2xl border border-white/40 bg-white/70 p-5 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2 w-2 rounded-full" style={{ background: "#111827" }} />
                    <p>
                      <strong>Outfit match:</strong> {activeStory?.outfit}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2 w-2 rounded-full" style={{ background: "#111827" }} />
                    <p>
                      <strong>Environment:</strong> {activeStory?.environment}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2 w-2 rounded-full" style={{ background: "#111827" }} />
                    <p>
                      <strong>Lighting:</strong> {activeStory?.lighting}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2 w-2 rounded-full" style={{ background: "#111827" }} />
                    <p>
                      <strong>Mood:</strong> {activeStory?.mood}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">Keywords</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {activeStory?.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-full border border-neutral-200/70 bg-white px-3 py-1 text-xs font-medium text-neutral-600"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-neutral-200/60 bg-white/70 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">Prompt Blueprint</p>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{prompt}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Editorial Variations
          </h2>
          <p className="text-3xl font-semibold text-neutral-950">
            Four-directional campaign coverage. One click delivers hero, lifestyle, detail, and social cuts.
          </p>
          <p className="text-base leading-7 text-neutral-600">
            Each variation is art-directed to feel distinct while maintaining polish fidelity, wardrobe continuity, and
            compliance overlays. Export as 4K stills, square social tiles, or story-ready crops.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {variationShots.map((shot) => (
            <article
              key={shot.title}
              className="group relative overflow-hidden rounded-[2.5rem] border border-white/40 bg-white/75 p-4 shadow-[0_40px_80px_-70px_rgba(17,17,17,0.85)] transition hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden rounded-[2rem]">
                <Image
                  src={shot.image}
                  alt={`${shot.title} manicure visual`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 90vw"
                />
                <SafetySeal className="absolute right-6 top-6" />
              </div>
              <div className="space-y-5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900">{shot.title}</h3>
                    <p className="text-sm text-neutral-500">{shot.subtitle}</p>
                  </div>
                  <div className="flex gap-1">
                    {shot.palette.map((color) => (
                      <span
                        key={color}
                        className="h-7 w-7 rounded-full border border-white/70 shadow-sm"
                        style={{ background: color }}
                      />
                    ))}
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-neutral-600">
                  {shot.details.map((detail) => (
                    <li key={detail}>• {detail}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="surface-card border-neutral-200/80 bg-white/80">
        <div className="flex flex-col gap-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">Campaign Workflow</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {workflow.map((phase) => (
              <div
                key={phase.step}
                className="rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-[0_25px_60px_-55px_rgba(17,17,17,0.9)]"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-400">
                  {phase.step}
                </span>
                <p className="mt-3 text-xl font-semibold text-neutral-950">{phase.title}</p>
                <p className="mt-4 text-sm leading-6 text-neutral-600">{phase.detail}</p>
              </div>
            ))}
          </div>
          <div className="rounded-[2rem] border border-neutral-200/70 bg-gradient-to-r from-white/90 via-white/60 to-white/90 p-6 text-neutral-700">
            <p className="text-base leading-7">
              Need lifestyle video loops too? Aloha Nails AI Photoshoot Pro exports orchestrated prompt packs for
              RunwayML, Kaiber, and Gen-3 Alpha so your motion team can keep polish shades locked while animating the
              set.
            </p>
          </div>
        </div>
      </section>

      <footer className="mb-10 flex flex-col gap-4 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Aloha Nails AI Studio. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4">
          <a href="https://alohanails.gr" className="underline hover:text-neutral-900" target="_blank">
            alohanails.gr
          </a>
          <span className="hidden h-1 w-1 rounded-full bg-neutral-300 sm:inline-flex" />
          <a href="mailto:creative@alohanails.gr" className="underline hover:text-neutral-900">
            creative@alohanails.gr
          </a>
        </div>
      </footer>
    </div>
  );
}
