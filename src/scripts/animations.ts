/**
 * Animation initialization functions for the site
 * Handles scroll animations, magnetic button effects, and smooth scrolling
 */

export function initAnimations() {
	const observerOptions = {
		threshold: 0.2,
		rootMargin: '0px 0px -100px 0px'
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry, index) => {
			if (entry.isIntersecting) {
				// Staggered animation for feature cards
				if (entry.target.classList.contains('feature-card')) {
					setTimeout(() => {
						entry.target.classList.add('animate');
					}, index * 200);
				} 
				// Staggered animation for gallery items
				else if (entry.target.classList.contains('gallery-item')) {
					setTimeout(() => {
						entry.target.classList.add('animate');
					}, index * 150);
				}
				// Regular animations
				else {
					entry.target.classList.add('animate');
				}
			}
		});
	}, observerOptions);

	// Observe section titles
	document.querySelectorAll('.section-title').forEach(el => observer.observe(el));

	// Observe feature cards
	document.querySelectorAll('.feature-card').forEach(el => observer.observe(el));

	// Observe gallery items
	document.querySelectorAll('.gallery-item').forEach(el => observer.observe(el));

	// Observe blog cards
	document.querySelectorAll('.blog-card').forEach(el => observer.observe(el));

	// Observe content sections
	document.querySelectorAll('.content-text, .content-visual, .cta-content').forEach(el => {
		observer.observe(el);
	});
}

/**
 * Initialize magnetic button effect for CTA buttons
 */
export function initMagneticButton() {
	const button = document.querySelector('.magnetic-button') as HTMLElement;
	if (button) {
		button.addEventListener('mousemove', function(e: MouseEvent) {
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
		anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
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



