#!/usr/bin/env node

/**
 * Image Checker Script
 *
 * Checks which placeholder images have been replaced with actual images.
 * Run with: node scripts/check-images.js
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.join(__dirname, "..");
const assetsDir = path.join(projectRoot, "src", "assets", "images");

// Define all expected images
const expectedImages = {
	about: [
		"our-story.jpg",
		// Optional: 'about-hero.jpg', 'web-dev-skill.jpg', 'automation-skill.jpg', 'marketing-skill.jpg'
	],
	homepage: [
		"hero-background.jpg",
		"workspace.jpg",
		"ai-solution-mockup.png",
		"web-dev-mockup.png",
		"ecommerce-mockup.png",
		"seo-mockup.png", // Note: might be app-dev-mockup.png
	],
	contact: [
		"contact-visual.jpg", // Optional
	],
	services: {
		"ai-chat": ["hero.jpg", "chatbot-mockup.jpg", "dashboard-mockup.jpg"],
		"custom-app-dev": ["hero.jpg", "mockup.jpg"],
		ecommerce: ["hero.jpg", "store-mockup.jpg", "checkout-mockup.jpg"],
		"custom-web-dev": [
			"hero.jpg",
			"mockup.jpg",
			"website-mockup.jpg",
			"portal-mockup.jpg",
			"booking-mockup.jpg",
			"dashboard-mockup.jpg",
			"restaurant-mockup.jpg",
			"business-app-mockup.jpg",
		],
	},
};

// Colors for terminal output
const colors = {
	reset: "\x1b[0m",
	green: "\x1b[32m",
	red: "\x1b[31m",
	yellow: "\x1b[33m",
	blue: "\x1b[34m",
	cyan: "\x1b[36m",
};

function checkImage(category, imagePath, imageName) {
	const fullPath = path.join(assetsDir, category, imagePath || "", imageName);
	const exists = fs.existsSync(fullPath);

	return {
		name: imageName,
		path: fullPath,
		exists,
		relativePath: path.relative(projectRoot, fullPath),
	};
}

function checkDirectory(dir) {
	return fs.existsSync(dir) && fs.statSync(dir).isDirectory();
}

console.log(
	`${colors.cyan}📸 Image Replacement Status Checker${colors.reset}\n`,
);
console.log(`Checking images in: ${assetsDir}\n`);

let totalExpected = 0;
let totalFound = 0;
const results = {};

// Check About page images
console.log(`${colors.blue}📄 About Page:${colors.reset}`);
if (checkDirectory(path.join(assetsDir, "about"))) {
	expectedImages.about.forEach((imageName) => {
		const result = checkImage("about", "", imageName);
		totalExpected++;
		if (result.exists) {
			totalFound++;
			console.log(`  ${colors.green}✅${colors.reset} ${imageName}`);
		} else {
			console.log(
				`  ${colors.red}❌${colors.reset} ${imageName} ${colors.yellow}(MISSING)${colors.reset}`,
			);
		}
	});
} else {
	console.log(
		`  ${colors.red}❌ Directory doesn't exist: about/${colors.reset}`,
	);
	totalExpected += expectedImages.about.length;
}
console.log("");

// Check Homepage images
console.log(`${colors.blue}🏠 Homepage:${colors.reset}`);
if (checkDirectory(path.join(assetsDir, "homepage"))) {
	expectedImages.homepage.forEach((imageName) => {
		const result = checkImage("homepage", "", imageName);
		totalExpected++;
		if (result.exists) {
			totalFound++;
			console.log(`  ${colors.green}✅${colors.reset} ${imageName}`);
		} else {
			console.log(
				`  ${colors.red}❌${colors.reset} ${imageName} ${colors.yellow}(MISSING)${colors.reset}`,
			);
		}
	});
} else {
	console.log(
		`  ${colors.red}❌ Directory doesn't exist: homepage/${colors.reset}`,
	);
	totalExpected += expectedImages.homepage.length;
}
console.log("");

// Check Contact page images
console.log(`${colors.blue}📧 Contact Page:${colors.reset}`);
if (checkDirectory(path.join(assetsDir, "contact"))) {
	expectedImages.contact.forEach((imageName) => {
		const result = checkImage("contact", "", imageName);
		totalExpected++;
		if (result.exists) {
			totalFound++;
			console.log(`  ${colors.green}✅${colors.reset} ${imageName}`);
		} else {
			console.log(
				`  ${colors.yellow}⚠️${colors.reset}  ${imageName} ${colors.yellow}(OPTIONAL - MISSING)${colors.reset}`,
			);
		}
	});
} else {
	console.log(
		`  ${colors.yellow}⚠️  Directory doesn't exist: contact/ (optional)${colors.reset}`,
	);
	totalExpected += expectedImages.contact.length;
}
console.log("");

// Check Service page images
console.log(`${colors.blue}🛠️  Service Pages:${colors.reset}`);
Object.keys(expectedImages.services).forEach((serviceDir) => {
	const serviceImages = expectedImages.services[serviceDir];
	const servicePath = path.join(assetsDir, "services", serviceDir);

	if (checkDirectory(servicePath)) {
		serviceImages.forEach((imageName) => {
			const result = checkImage("services", serviceDir, imageName);
			totalExpected++;
			if (result.exists) {
				totalFound++;
				console.log(
					`  ${colors.green}✅${colors.reset} services/${serviceDir}/${imageName}`,
				);
			} else {
				console.log(
					`  ${colors.red}❌${colors.reset} services/${serviceDir}/${imageName} ${colors.yellow}(MISSING)${colors.reset}`,
				);
			}
		});
	} else {
		console.log(
			`  ${colors.yellow}⚠️  services/${serviceDir}/ ${colors.yellow}(Directory doesn't exist)${colors.reset}`,
		);
		totalExpected += serviceImages.length;
	}
});
console.log("");

// Summary
console.log(
	`${colors.cyan}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`,
);
console.log(`${colors.cyan}📊 Summary:${colors.reset}`);
console.log(`  Total images expected: ${totalExpected}`);
console.log(`  Images found: ${colors.green}${totalFound}${colors.reset}`);
console.log(
	`  Images missing: ${colors.red}${totalExpected - totalFound}${colors.reset}`,
);
console.log(
	`  Completion: ${colors.cyan}${Math.round((totalFound / totalExpected) * 100)}%${colors.reset}`,
);
console.log(
	`${colors.cyan}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}\n`,
);

// Recommendations
if (totalFound === 0) {
	console.log(`${colors.yellow}💡 Recommendation:${colors.reset}`);
	console.log(
		`  Start with the About page 'our-story.jpg' - it's the highest priority!\n`,
	);
	console.log(`  See IMAGE_REPLACEMENT_GUIDE.md for detailed instructions.\n`);
} else if (totalFound < totalExpected) {
	console.log(`${colors.yellow}💡 Next Steps:${colors.reset}`);
	console.log(
		`  Continue adding images following the priority order in IMAGE_REPLACEMENT_GUIDE.md\n`,
	);
} else {
	console.log(`${colors.green}🎉 All images found!${colors.reset}`);
	console.log(
		`  Don't forget to uncomment the imports and Image components in your .astro files!\n`,
	);
}

process.exit(totalFound === totalExpected ? 0 : 1);
