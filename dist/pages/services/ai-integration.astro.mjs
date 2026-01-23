import { b as createAstro, c as createComponent } from '../../chunks/astro/server_Djp_mt0f.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://shorelinewebsolutions.com");
const $$AiIntegration = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AiIntegration;
  return Astro2.redirect("/services/ai-chat-assistant", 301);
}, "/Users/rtarasevich/shoreline-web-solutions/src/pages/services/ai-integration.astro", void 0);

const $$file = "/Users/rtarasevich/shoreline-web-solutions/src/pages/services/ai-integration.astro";
const $$url = "/services/ai-integration";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$AiIntegration,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
