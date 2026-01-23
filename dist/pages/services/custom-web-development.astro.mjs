import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_Djp_mt0f.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Navigation } from '../../chunks/Navigation_dPntXoiq.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$CustomWebDevelopment = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Custom Web Development Services - Shoreline Web Solutions";
  const pageDescription = "Professional custom web development services for businesses. We build tailored websites, web applications, customer portals, and appointment booking systems.";
  const pageKeywords = "custom web development, web application development, web developer, web design, custom websites, web portals, appointment booking systems, business web applications";
  const canonicalUrl = "/services/custom-web-development";
  const siteUrl = "https://shorelinewebsolutions.com";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription, "keywords": pageKeywords, "canonical": canonicalUrl, "ogType": "website" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['  <script type="application/ld+json">', '<\/script>  <script type="application/ld+json">', "<\/script> ", "<main> <!-- Navigation --> ", ` <!-- Hero Section --> <section class="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden"> <!-- Background Image --> <div class="absolute inset-0 z-0"> <!-- Uncomment when you add hero.jpg:
				<Image 
					src={webDevHeroImage} 
					alt=""
					class="w-full h-full object-cover"
					loading="eager"
					aria-hidden="true"
				/>
				--> <!-- Placeholder gradient background --> <div class="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div> </div> <!-- Dark overlay for text readability --> <div class="absolute inset-0 bg-gradient-to-b from-slate-900/75 via-slate-900/65 to-slate-900/80 z-10"></div> <!-- Content --> <div class="relative z-20 text-center px-6 max-w-5xl mx-auto"> <h1 class="hero-title text-4xl md:text-6xl font-bold text-white mb-6">
Custom <span class="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">Web Development</span> </h1> <p class="hero-subtitle text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
Tailored websites and web applications that align with your specific business needs and objectives.
</p> </div> </section> <!-- Service Details Section --> <section class="py-20 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid lg:grid-cols-2 gap-12 items-center mb-16"> <div class="order-2 lg:order-1"> <div class="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-6"> <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> </div> <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
Tailored Solutions for Your Business
</h2> <p class="text-lg text-slate-600 leading-relaxed mb-6">
Every business is unique, and your website should reflect that. Our custom web development services create websites and web applications specifically designed to meet your business objectives, whether you need a simple informational site or a complex, full-featured application.
</p> <p class="text-lg text-slate-600 leading-relaxed">
We work closely with you to understand your goals, target audience, and specific requirements, then build a solution that not only looks great but drives real business results.
</p> </div> <div class="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-2xl"> <!-- Service Mockup Image --> <!-- Uncomment when you add mockup.jpg:
						<Image 
							src={webDevMockupImage} 
							alt="Custom web development mockup showing responsive website on multiple devices"
							class="w-full h-auto"
						/>
						--> <div class="aspect-[4/3] bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center"> <div class="text-center p-8"> <svg class="w-16 h-16 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> <p class="text-slate-600 font-medium">Add mockup: mockup.jpg</p> <p class="text-sm text-slate-500 mt-2">Website on devices or development workspace</p> </div> </div> </div> </div> <!-- What We Build Section with Service Cards --> <div class="mb-16"> <h3 class="text-3xl font-bold text-slate-900 mb-8 text-center">What We Build</h3> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> <!-- Custom Websites --> <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"> <div class="relative h-48 bg-gradient-to-br from-blue-50 to-cyan-50"> <!-- Uncomment when you add website-mockup.jpg:
								<Image 
									src={websiteMockupImage} 
									alt="Custom website mockup showing responsive design on multiple devices"
									class="w-full h-full object-cover"
								/>
								--> <div class="absolute inset-0 flex items-center justify-center"> <svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> </div> </div> <div class="p-6"> <h4 class="text-xl font-bold text-slate-900 mb-2">Custom Websites</h4> <p class="text-slate-600">Professional, responsive websites tailored to your business needs and brand identity.</p> </div> </div> <!-- Customer Portals --> <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"> <div class="relative h-48 bg-gradient-to-br from-indigo-50 to-purple-50"> <!-- Uncomment when you add portal-mockup.jpg:
								<Image 
									src={portalMockupImage} 
									alt="Customer portal dashboard mockup"
									class="w-full h-full object-cover"
								/>
								--> <div class="absolute inset-0 flex items-center justify-center"> <svg class="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path> </svg> </div> </div> <div class="p-6"> <h4 class="text-xl font-bold text-slate-900 mb-2">Customer & Employee Portals</h4> <p class="text-slate-600">Secure, personalized portals for your customers and team members.</p> </div> </div> <!-- Booking Systems --> <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"> <div class="relative h-48 bg-gradient-to-br from-teal-50 to-blue-50"> <!-- Uncomment when you add booking-mockup.jpg:
								<Image 
									src={bookingMockupImage} 
									alt="Appointment booking system mockup"
									class="w-full h-full object-cover"
								/>
								--> <div class="absolute inset-0 flex items-center justify-center"> <svg class="w-12 h-12 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> </div> </div> <div class="p-6"> <h4 class="text-xl font-bold text-slate-900 mb-2">Appointment Booking Systems</h4> <p class="text-slate-600">Streamlined scheduling solutions that save time and reduce no-shows.</p> </div> </div> <!-- Interactive Dashboards --> <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"> <div class="relative h-48 bg-gradient-to-br from-cyan-50 to-teal-50"> <!-- Uncomment when you add dashboard-mockup.jpg:
								<Image 
									src={dashboardMockupImage} 
									alt="Interactive dashboard mockup showing data visualization and analytics"
									class="w-full h-full object-cover"
								/>
								--> <div class="absolute inset-0 flex items-center justify-center"> <svg class="w-12 h-12 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path> </svg> </div> </div> <div class="p-6"> <h4 class="text-xl font-bold text-slate-900 mb-2">Interactive Dashboards</h4> <p class="text-slate-600">Data-driven dashboards that provide insights and help you make informed business decisions.</p> </div> </div> <!-- Restaurant & Bar Management Systems --> <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"> <div class="relative h-48 bg-gradient-to-br from-amber-50 to-orange-50"> <!-- Uncomment when you add restaurant-mockup.jpg:
								<Image 
									src={restaurantMockupImage} 
									alt="Restaurant and bar management system mockup"
									class="w-full h-full object-cover"
								/>
								--> <div class="absolute inset-0 flex items-center justify-center"> <svg class="w-12 h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path> </svg> </div> </div> <div class="p-6"> <h4 class="text-xl font-bold text-slate-900 mb-2">Restaurant & Bar Management Systems</h4> <p class="text-slate-600">Complete management solutions for restaurants and bars, from reservations to inventory.</p> </div> </div> <!-- Custom Business Applications --> <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"> <div class="relative h-48 bg-gradient-to-br from-purple-50 to-pink-50"> <!-- Uncomment when you add business-app-mockup.jpg:
								<Image 
									src={businessAppMockupImage} 
									alt="Custom business application mockup"
									class="w-full h-full object-cover"
								/>
								--> <div class="absolute inset-0 flex items-center justify-center"> <svg class="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path> </svg> </div> </div> <div class="p-6"> <h4 class="text-xl font-bold text-slate-900 mb-2">Custom Business Applications</h4> <p class="text-slate-600">Tailored web applications designed to solve your specific business challenges and workflows.</p> </div> </div> </div> </div> </div> <!-- Benefits Section --> <div class="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto mb-16 px-4 md:px-0"> <div class="grid md:grid-cols-3 gap-6 md:gap-8"> <div class="feature-card bg-gradient-to-br from-blue-50 to-cyan-50 p-6 md:p-8 rounded-xl"> <h3 class="text-xl font-bold text-slate-900 mb-4">Scalable Architecture</h3> <p class="text-slate-600">
Built to grow with your business, ensuring your website can handle increased traffic and new features as you expand.
</p> </div> <div class="feature-card bg-gradient-to-br from-teal-50 to-blue-50 p-6 md:p-8 rounded-xl"> <h3 class="text-xl font-bold text-slate-900 mb-4">Modern Technology</h3> <p class="text-slate-600">
We use the latest web technologies and frameworks to ensure your site is fast, secure, and future-proof.
</p> </div> <div class="feature-card bg-gradient-to-br from-cyan-50 to-teal-50 p-6 md:p-8 rounded-xl"> <h3 class="text-xl font-bold text-slate-900 mb-4">User-Focused Design</h3> <p class="text-slate-600">
Every element is designed with your users in mind, creating intuitive experiences that drive engagement and conversions.
</p> </div> </div> </div> </section> <!-- CTA Section --> <section class="py-20 bg-gradient-to-r from-slate-900 to-blue-900"> <div class="max-w-4xl mx-auto text-center px-6"> <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
Ready to Build Your Custom Solution?
</h2> <p class="text-xl text-blue-200 mb-8 leading-relaxed">
Let's discuss your project and create a web solution that perfectly fits your business needs.
</p> <a href="/contact" class="inline-block px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105">
Get Started Today
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
        "name": "Custom Web Development",
        "item": `${siteUrl}${canonicalUrl}`
      }
    ]
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Development",
    "provider": {
      "@type": "Organization",
      "name": "Shoreline Web Solutions"
    },
    "description": pageDescription,
    "name": "Custom Web Development Services"
  })), maybeRenderHead(), renderComponent($$result2, "Navigation", $$Navigation, { "currentPage": "services" })) })}`;
}, "/Users/rtarasevich/shoreline-web-solutions/src/pages/services/custom-web-development.astro", void 0);

const $$file = "/Users/rtarasevich/shoreline-web-solutions/src/pages/services/custom-web-development.astro";
const $$url = "/services/custom-web-development";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$CustomWebDevelopment,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
