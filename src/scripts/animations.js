/**
 * Animation initialization functions for the site
 * Handles scroll animations, magnetic button effects, and smooth scrolling
 */

export function initAnimations() {
	const observerOptions = {
		threshold: 0.2,
		rootMargin: '0px 0px -100px 0px'
	};

	// Cache element lists for correct stagger index calculation
	const featureCards = Array.from(document.querySelectorAll('.feature-card'));
	const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
	const blogCards = Array.from(document.querySelectorAll('.blog-card'));

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				// Staggered animation for feature cards
				if (entry.target.classList.contains('feature-card')) {
					const cardIndex = featureCards.indexOf(entry.target);
					setTimeout(() => {
						entry.target.classList.add('animate');
					}, cardIndex * 200);
				}
				// Staggered animation for gallery items
				else if (entry.target.classList.contains('gallery-item')) {
					const itemIndex = galleryItems.indexOf(entry.target);
					setTimeout(() => {
						entry.target.classList.add('animate');
					}, itemIndex * 150);
				}
				// Staggered animation for blog cards
				else if (entry.target.classList.contains('blog-card')) {
					const blogIndex = blogCards.indexOf(entry.target);
					setTimeout(() => {
						entry.target.classList.add('animate');
					}, blogIndex * 100);
				}
				// Regular animations
				else {
					entry.target.classList.add('animate');
				}

				// Stop observing after animation is triggered for better performance
				observer.unobserve(entry.target);
			}
		});
	}, observerOptions);

	// Observe section titles
	document.querySelectorAll('.section-title').forEach(el => observer.observe(el));

	// Observe feature cards
	featureCards.forEach(el => observer.observe(el));

	// Observe gallery items
	galleryItems.forEach(el => observer.observe(el));

	// Observe blog cards
	blogCards.forEach(el => observer.observe(el));

	// Observe content sections
	document.querySelectorAll('.content-text, .content-visual, .cta-content').forEach(el => {
		observer.observe(el);
	});
}

/**
 * Initialize magnetic button effect for CTA buttons
 */
export function initMagneticButton() {
	const button = document.querySelector('.magnetic-button');
	if (button) {
		button.addEventListener('mousemove', function(e) {
			const rect = this.getBoundingClientRect();
			const x = e.clientX - rect.left - rect.width / 2;
			const y = e.clientY - rect.top - rect.height / 2;

			this.style.transform = `translateY(-5px) scale(1.05) translate(${x * 0.1}px, ${y * 0.1}px)`;
		});

		button.addEventListener('mouseleave', function() {
			this.style.transform = 'translateY(-5px) scale(1.05) translate(0px, 0px)';
		});
	}
}

/**
 * Initialize smooth scrolling for anchor links
 */
export function initSmoothScrolling() {
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function(e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute('href') || '');
			if (target) {
				target.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}
		});
	});
}

/**
 * Initialize all animations on page load
 */
export function initAllAnimations() {
	initAnimations();
	initMagneticButton();
	initSmoothScrolling();
}
