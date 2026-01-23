import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_Djp_mt0f.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Navigation } from '../../chunks/Navigation_dPntXoiq.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$EcommerceSolutions = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "E-commerce Solutions - Shoreline Web Solutions | Online Store Development";
  const pageDescription = "Professional e-commerce development services for businesses. We build complete online stores with shopping cart integration, payment processing, and inventory management.";
  const pageKeywords = "e-commerce development, online store development, e-commerce, shopping cart integration, payment processing, online retail, ecommerce solutions, online stores";
  const canonicalUrl = "/services/ecommerce-solutions";
  const siteUrl = "https://shorelinewebsolutions.com";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription, "keywords": pageKeywords, "canonical": canonicalUrl, "ogType": "website" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['  <script type="application/ld+json">', '<\/script>  <script type="application/ld+json">', "<\/script> ", "<main> <!-- Navigation --> ", ` <!-- Hero Section --> <section class="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden"> <!-- Background Image --> <div class="absolute inset-0 z-0"> <!-- Uncomment when you add hero.jpg:
				<Image 
					src={ecommerceHeroImage} 
					alt=""
					class="w-full h-full object-cover"
					loading="eager"
					aria-hidden="true"
				/>
				--> <!-- Placeholder gradient background --> <div class="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div> </div> <!-- Dark overlay for text readability --> <div class="absolute inset-0 bg-gradient-to-b from-slate-900/75 via-slate-900/65 to-slate-900/80 z-10"></div> <!-- Content --> <div class="relative z-20 text-center px-6 max-w-5xl mx-auto"> <h1 class="hero-title text-4xl md:text-6xl font-bold text-white mb-6">
E-commerce <span class="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">Solutions</span> </h1> <p class="hero-subtitle text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
Complete online stores that effectively convert visitors into customers and drive sales growth.
</p> </div> </section> <!-- Service Details Section --> <section class="py-20 bg-white"> <div class="max-w-7xl mx-auto px-6"> <div class="grid lg:grid-cols-2 gap-12 items-center mb-16"> <div class="order-2 lg:order-1"> <div class="w-16 h-16 bg-gradient-to-r from-teal-600 to-blue-600 rounded-lg flex items-center justify-center mb-6"> <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path> </svg> </div> <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
Turn Visitors Into Customers
</h2> <p class="text-lg text-slate-600 leading-relaxed mb-6">
An effective e-commerce platform is more than just a shopping cart\u2014it's a complete sales system that handles everything from product display to secure checkout. We build online stores that are optimized for conversions, user experience, and business growth.
</p> <p class="text-lg text-slate-600 leading-relaxed">
Whether you're selling physical products, digital downloads, or services, we create a seamless shopping experience that makes it easy for customers to find what they need and complete their purchase.
</p> </div> <div class="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-2xl"> <!-- E-commerce Store Mockup --> <!-- Uncomment when you add store-mockup.jpg:
						<Image 
							src={ecommerceMockupImage} 
							alt="E-commerce store mockup showing product catalog and shopping cart"
							class="w-full h-auto"
						/>
						--> <div class="aspect-[4/3] bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center"> <div class="text-center p-8"> <svg class="w-16 h-16 text-teal-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path> </svg> <p class="text-slate-600 font-medium">Add mockup: store-mockup.jpg</p> <p class="text-sm text-slate-500 mt-2">Online store interface or product catalog</p> </div> </div> </div> </div> <!-- Checkout Mockup Section --> <div class="mb-16"> <div class="grid md:grid-cols-2 gap-8 items-center"> <div class="relative rounded-xl overflow-hidden shadow-lg"> <!-- Uncomment when you add checkout-mockup.jpg:
							<Image 
								src={checkoutMockupImage} 
								alt="Secure checkout process mockup"
								class="w-full h-auto"
							/>
							--> <div class="aspect-video bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center"> <div class="text-center p-6"> <svg class="w-12 h-12 text-teal-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path> </svg> <p class="text-slate-600 font-medium text-sm">Add: checkout-mockup.jpg</p> </div> </div> </div> <div> <h3 class="text-2xl font-bold text-slate-900 mb-4">Secure Checkout Experience</h3> <p class="text-slate-600 leading-relaxed mb-4">
We build seamless, secure checkout processes that instill confidence in your customers and reduce cart abandonment.
</p> <ul class="space-y-2 text-slate-600"> <li class="flex items-start gap-2"> <svg class="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span>PCI-compliant payment processing</span> </li> <li class="flex items-start gap-2"> <svg class="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span>Multiple payment options</span> </li> <li class="flex items-start gap-2"> <svg class="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span>Guest checkout option</span> </li> <li class="flex items-start gap-2"> <svg class="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span>Order confirmation & tracking</span> </li> </ul> </div> </div> </div> <!-- E-commerce Features List --> <div class="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-xl shadow-lg mb-16"> <h3 class="text-2xl font-bold text-slate-900 mb-6">E-commerce Features</h3> <ul class="space-y-4"> <li class="flex items-start gap-3"> <svg class="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-slate-700">Shopping cart integration</span> </li> <li class="flex items-start gap-3"> <svg class="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-slate-700">Secure payment processing</span> </li> <li class="flex items-start gap-3"> <svg class="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-slate-700">Inventory management systems</span> </li> <li class="flex items-start gap-3"> <svg class="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-slate-700">Order tracking & management</span> </li> <li class="flex items-start gap-3"> <svg class="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-slate-700">Customer account management</span> </li> </ul> </div> </div> <!-- Benefits Section --> <div class="grid md:grid-cols-3 gap-8 mb-16"> <div class="feature-card bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-xl"> <h3 class="text-xl font-bold text-slate-900 mb-4">Secure Transactions</h3> <p class="text-slate-600">
PCI-compliant payment processing with SSL encryption to protect your customers' sensitive information.
</p> </div> <div class="feature-card bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-xl"> <h3 class="text-xl font-bold text-slate-900 mb-4">Mobile-Optimized</h3> <p class="text-slate-600">
Fully responsive design ensures customers can shop easily on any device, increasing your sales potential.
</p> </div> <div class="feature-card bg-gradient-to-br from-cyan-50 to-teal-50 p-6 rounded-xl"> <h3 class="text-xl font-bold text-slate-900 mb-4">Analytics Integration</h3> <p class="text-slate-600">
Track sales, customer behavior, and conversion rates with integrated analytics tools.
</p> </div> </div> </section> <!-- CTA Section --> <section class="py-20 bg-gradient-to-r from-slate-900 to-blue-900"> <div class="max-w-4xl mx-auto text-center px-6"> <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
Ready to Launch Your Online Store?
</h2> <p class="text-xl text-blue-200 mb-8 leading-relaxed">
Let's build an e-commerce platform that drives sales and grows your business.
</p> <a href="/contact" class="inline-block px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105">
Start Selling Online
</a> </div> </section> </main> `])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${siteUrl}/`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": `${siteUrl}/services`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "E-commerce Solutions",
        "item": `${siteUrl}${canonicalUrl}`
      }
    ]
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "E-commerce Development",
    "provider": {
      "@type": "Organization",
      "name": "Shoreline Web Solutions"
    },
    "description": pageDescription,
    "name": "E-commerce Solutions"
  })), maybeRenderHead(), renderComponent($$result2, "Navigation", $$Navigation, { "currentPage": "services" })) })}`;
}, "/Users/rtarasevich/shoreline-web-solutions/src/pages/services/ecommerce-solutions.astro", void 0);

const $$file = "/Users/rtarasevich/shoreline-web-solutions/src/pages/services/ecommerce-solutions.astro";
const $$url = "/services/ecommerce-solutions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$EcommerceSolutions,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
