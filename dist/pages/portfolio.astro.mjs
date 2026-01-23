import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Djp_mt0f.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Navigation } from '../chunks/Navigation_dPntXoiq.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from '../chunks/_astro_assets_CkMjEf6i.mjs';
export { renderers } from '../renderers.mjs';

const legacyElectricalImage = new Proxy({"src":"/_astro/legacy-electrical-screenshot.BRJZXQWB.png","width":2842,"height":1502,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/rtarasevich/shoreline-web-solutions/src/assets/images/portfolio/legacy-electrical-screenshot.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/rtarasevich/shoreline-web-solutions/src/assets/images/portfolio/legacy-electrical-screenshot.png");
							return target[name];
						}
					});

const martelElectricImage = new Proxy({"src":"/_astro/martel-electric-screenshot.TCTBmm-C.png","width":3450,"height":1634,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/rtarasevich/shoreline-web-solutions/src/assets/images/portfolio/martel-electric-screenshot.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/rtarasevich/shoreline-web-solutions/src/assets/images/portfolio/martel-electric-screenshot.png");
							return target[name];
						}
					});

const $$Portfolio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portfolio - Shoreline Web Solutions | Professional Web Development Projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <!-- Navigation --> ${renderComponent($$result2, "Navigation", $$Navigation, { "currentPage": "portfolio" })} <!-- Hero Section --> <section class="pt-20 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"> <div class="max-w-7xl mx-auto px-6"> <div class="text-center"> <h1 class="hero-title text-5xl md:text-6xl font-bold text-white mb-6">
Our <span class="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">Portfolio</span> </h1> <p class="hero-subtitle text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
Explore our collection of successful web development projects that showcase our expertise in creating exceptional digital experiences.
</p> </div> </div> </section> <!-- Featured Projects Section --> <section class="py-20 bg-white"> <div class="max-w-7xl mx-auto px-6"> <div class="text-center mb-16"> <h2 class="section-title text-4xl md:text-5xl font-bold text-slate-900 mb-6">
Featured Projects
</h2> <p class="text-xl text-slate-600 max-w-3xl mx-auto">
Here are some of the projects we've worked on recently.
</p> </div> <div class="grid lg:grid-cols-2 gap-12 mb-16"> <!-- Project 1 --> <div class="gallery-item group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"> <div class="relative overflow-hidden"> <div class="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center"> ${renderComponent($$result2, "Image", $$Image, { "src": legacyElectricalImage, "alt": "Screenshot of Legacy Electrical CT website homepage showing professional electrical contractor services", "class": "w-full h-full object-cover rounded-lg" })} </div> </div> <div class="p-8"> <h3 class="text-2xl font-bold text-slate-900 mb-4">Legacy Electrical CT Website</h3> <p class="text-slate-600 leading-relaxed mb-4">
A professional electrical contractor website showcasing residential and commercial electrical services, emergency repairs, and electrical installations. Features service areas, contact information, and easy scheduling for electrical work.
</p> <div class="flex flex-wrap gap-2 mb-6"> <span class="px-3 py-1 bg-cyan-100 text-cyan-800 text-sm rounded-full">Bootstrap</span> <span class="px-3 py-1 bg-teal-100 text-teal-800 text-sm rounded-full">Responsive Design</span> </div> <div class="flex gap-4"> <a href="https://legacyelectricalct.com/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-blue-600 hover:text-blue-500 font-medium">
View Project
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path> </svg> </a> </div> </div> </div> <!-- Project 2 --> <div class="gallery-item group bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"> <div class="relative overflow-hidden"> <div class="aspect-video bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center"> ${renderComponent($$result2, "Image", $$Image, { "src": martelElectricImage, "alt": "Screenshot of Martel Electric LLC website homepage showing professional electrical contractor services", "class": "w-full h-full object-cover rounded-lg" })} </div> </div> <div class="p-8"> <h3 class="text-2xl font-bold text-slate-900 mb-4">Martel Electric LLC Website</h3> <p class="text-slate-600 leading-relaxed mb-4">
A professional electrical contractor website for Martel Electric LLC featuring residential and commercial electrical services, project showcases, and easy contact access for potential customers.
</p> <div class="flex flex-wrap gap-2 mb-6"> <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Tailwind CSS</span> <span class="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Responsive Design</span> </div> <div class="flex gap-4"> <a href="https://martelelectricllc.com/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-teal-600 hover:text-teal-500 font-medium">
View Project
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path> </svg> </a> </div> </div> </div> </div> </div> </section> <!-- CTA Section --> <section class="py-20 bg-gradient-to-r from-slate-900 to-blue-900"> <div class="max-w-4xl mx-auto text-center px-6"> <div class="cta-content"> <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
Ready to Start Your Project?
</h2> <p class="text-xl text-blue-200 mb-8 leading-relaxed">
Let's discuss your vision and create something amazing together. We're here to help bring your ideas to life.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="/contact" class="magnetic-button px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105">
Start Your Project
</a> <a href="/services" class="magnetic-button px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300">
View Our Services
</a> </div> </div> </div> </section> </main> ` })}`;
}, "/Users/rtarasevich/shoreline-web-solutions/src/pages/portfolio.astro", void 0);

const $$file = "/Users/rtarasevich/shoreline-web-solutions/src/pages/portfolio.astro";
const $$url = "/portfolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Portfolio,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
