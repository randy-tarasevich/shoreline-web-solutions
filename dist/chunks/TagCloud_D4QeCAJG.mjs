import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, a as renderTemplate } from './astro/server_Djp_mt0f.mjs';
import 'kleur/colors';
import 'clsx';
import { e as getPopularTags } from './tags_CpxmCQdR.mjs';
/* empty css                        */

const $$Astro = createAstro("https://shorelinewebsolutions.com");
const $$TagCloud = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TagCloud;
  const {
    limit = 20,
    showCount = true,
    size = "md",
    variant = "cloud"
  } = Astro2.props;
  const tags = await getPopularTags(limit);
  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-2",
    lg: "text-base px-4 py-3"
  };
  const variantClasses = {
    cloud: "rounded-full",
    list: "rounded-lg",
    pills: "rounded-full"
  };
  return renderTemplate`${maybeRenderHead()}<div class="tag-cloud-container" data-astro-cid-6pyqhcr2> ${variant === "cloud" && renderTemplate`<div class="flex flex-wrap gap-2 justify-center" data-astro-cid-6pyqhcr2> ${tags.map((tag) => {
    const maxCount = Math.max(...tags.map((t) => t.count));
    const sizeMultiplier = tag.count / maxCount;
    const fontSize = sizeMultiplier > 0.7 ? "text-lg" : sizeMultiplier > 0.4 ? "text-base" : "text-sm";
    const opacity = 0.6 + sizeMultiplier * 0.4;
    return renderTemplate`<a${addAttribute(`/blog/tag/${tag.slug}`, "href")}${addAttribute(`${fontSize} ${sizeClasses[size]} font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg ${variantClasses[variant]} bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 border border-blue-200 hover:from-blue-200 hover:to-cyan-200 hover:border-blue-300`, "class")}${addAttribute(`opacity: ${opacity}`, "style")}${addAttribute(`${tag.count} ${tag.count === 1 ? "article" : "articles"}`, "title")} data-astro-cid-6pyqhcr2> ${tag.name} ${showCount && renderTemplate`<span class="ml-1 text-xs opacity-75" data-astro-cid-6pyqhcr2>(${tag.count})</span>`} </a>`;
  })} </div>`} ${variant === "list" && renderTemplate`<div class="space-y-2" data-astro-cid-6pyqhcr2> ${tags.map((tag) => renderTemplate`<a${addAttribute(`/blog/tag/${tag.slug}`, "href")}${addAttribute(`${sizeClasses[size]} font-medium transition-all duration-300 hover:scale-105 hover:shadow-md ${variantClasses[variant]} bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-800 border border-blue-200 hover:from-blue-100 hover:to-cyan-100 hover:border-blue-300 flex items-center justify-between group`, "class")} data-astro-cid-6pyqhcr2> <span data-astro-cid-6pyqhcr2>${tag.name}</span> ${showCount && renderTemplate`<span class="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full group-hover:bg-blue-300 transition-colors" data-astro-cid-6pyqhcr2> ${tag.count} </span>`} </a>`)} </div>`} ${variant === "pills" && renderTemplate`<div class="flex flex-wrap gap-2" data-astro-cid-6pyqhcr2> ${tags.map((tag) => renderTemplate`<a${addAttribute(`/blog/tag/${tag.slug}`, "href")}${addAttribute(`${sizeClasses[size]} font-medium transition-all duration-300 hover:scale-105 hover:shadow-md ${variantClasses[variant]} bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 border border-blue-200 hover:from-blue-200 hover:to-cyan-200 hover:border-blue-300`, "class")} data-astro-cid-6pyqhcr2> ${tag.name} ${showCount && renderTemplate`<span class="ml-1 text-xs opacity-75" data-astro-cid-6pyqhcr2>(${tag.count})</span>`} </a>`)} </div>`} </div> `;
}, "/Users/rtarasevich/shoreline-web-solutions/src/components/TagCloud.astro", void 0);

export { $$TagCloud as $ };
