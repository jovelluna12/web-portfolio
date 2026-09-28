<template>
  <section id="projects" class="projects">
    <div class="container">

      <header class="section-header">
        <div class="section-eyebrow">
          <span class="eyebrow-dot"></span>
          Portfolio
        </div>

        <h2>Projects</h2>

        <p>
          Production case studies from client work, followed by independent
          projects I designed and built on my own.
        </p>
      </header>


      <!-- =========================================
            CASE STUDIES
      ========================================== -->
      <div id="case-studies" class="projects-group">
        <header class="group-header">
          <h3>Case Studies</h3>

          <p>
            Production systems and client websites I built, maintained, or
            modernized professionally.
          </p>

          <p class="group-note">
            <span aria-hidden="true">🔒</span>
            Client names, URLs, branding, and project-specific details are
            omitted due to NDA and white-label agreements.
          </p>
        </header>

        <div class="case-studies">
          <article v-for="project in professionalProjects" :key="project.id" class="case-study">
            <aside class="case-study-aside">
              <span class="case-study-number">
                {{ String(project.id).padStart(2, "0") }}
              </span>

              <div class="aside-block">
                <span class="aside-label">Domain</span>
                <span class="aside-value">{{ project.type }}</span>
              </div>

              <div class="aside-block">
                <span class="aside-label">Status</span>
                <span class="work-badge">Production</span>
              </div>

              <div class="aside-block">
                <span class="aside-label">Tech Stack</span>

                <div class="tags">
                  <span v-for="tag in project.tags" :key="tag" class="tag">
                    {{ tag }}
                  </span>
                </div>
              </div>
            </aside>

            <div class="case-study-body">
              <h4 class="case-study-title">{{ project.title }}</h4>

              <p class="case-study-summary">
                {{ project.summary }}
              </p>

              <div class="case-study-details">
                <div class="case-study-section">
                  <h5>Overview</h5>
                  <p>{{ project.overview }}</p>
                </div>

                <div class="case-study-section">
                  <h5>My Contribution</h5>

                  <ul>
                    <li v-for="item in project.contributions" :key="item">
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>


      <!-- =========================================
            INDEPENDENT PROJECTS
      ========================================== -->
      <div id="independent-projects" class="projects-group">
        <header class="group-header">
          <h3>Independent Projects</h3>

          <p>
            WordPress theme demos and personal builds, each with original
            branding, content, and code. Every card notes whether the project
            is an original concept or a from-scratch rebuild inspired by client
            work.
          </p>
        </header>

        <div class="projects-grid">
          <article v-for="project in independentProjects" :key="project.id" class="project-card">
            <div v-if="project.images?.length" class="project-gallery">
              <img v-for="(image, index) in project.images" :key="index" :src="image"
                :alt="`${project.title} screenshot ${index + 1}`" class="project-image" loading="lazy"
                @click="openImage(image)" />
            </div>

            <div class="project-content">
              <div class="project-meta">
                <span class="kind-badge">{{ project.kind }}</span>
                <span class="project-origin">{{ project.origin }}</span>
              </div>

              <h4 class="project-title">{{ project.title }}</h4>

              <p class="project-summary">
                {{ project.summary }}
              </p>

              <ul class="highlights">
                <li v-for="item in project.highlights" :key="item">
                  {{ item }}
                </li>
              </ul>

              <div class="tags">
                <span v-for="tag in project.tags" :key="tag" class="tag">
                  {{ tag }}
                </span>
              </div>

              <div class="links">
                <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer"
                  class="project-link primary-link">
                  Live Demo
                  <span>↗</span>
                </a>

                <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer"
                  class="project-link">
                  GitHub
                  <span>↗</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>

    </div>


    <!-- Image Lightbox -->
    <div v-if="selectedImage" class="lightbox" @click="closeImage">
      <img :src="selectedImage" alt="Project preview" class="lightbox-image" />
    </div>

  </section>
</template>

<script setup>
import { ref } from "vue"

const selectedImage = ref(null)

const openImage = (image) => {
  selectedImage.value = image
}

const closeImage = () => {
  selectedImage.value = null
}

const professionalProjects = [
  {
    id: 1,
    type: "Property Management Platform",
    title: "Property Management Platform",
    summary:
      "Enhanced and maintained a production property management platform supporting property listings, tenant management, and administrative workflows.",
    overview:
      "Worked on an existing production platform inherited from another developer. The work involved understanding the established codebase, implementing new business requirements, resolving issues, improving existing functionality, and maintaining system stability as the platform evolved.",
    contributions: [
      "Maintained and extended an existing Laravel application",
      "Implemented new features and modules based on business requirements",
      "Developed functionality for property and tenant management workflows",
      "Investigated and resolved bugs across the application",
      "Refactored existing code to improve maintainability and reliability",
      "Collaborated with stakeholders to translate requirements into technical solutions",
    ],
    tags: [
      "PHP",
      "Laravel",
      "JavaScript",
      "jQuery",
      "MySQL",
      "SCSS",
      "Git",
    ],
    nda:
      "Client and project details have been generalized due to NDA and white-label agreements.",
  },

  {
    id: 2,
    type: "Sports Job Listing & Social Platform",
    title: "Sports Job Listing & Social Platform",
    summary:
      "Maintained and modernized a legacy sports-focused platform combining job listings, social networking, and user-facing functionality.",
    overview:
      "Worked on an established production application originally developed several years earlier. The work focused on modernizing the codebase, resolving legacy issues, implementing new functionality, and improving platform stability while maintaining compatibility with existing features.",
    contributions: [
      "Maintained and enhanced an existing Laravel application",
      "Investigated and resolved issues within a legacy codebase",
      "Implemented new features and system enhancements",
      "Refactored and updated existing code to newer development standards",
      "Worked with Vue.js to enhance frontend functionality",
      "Improved application stability while preserving existing behavior",
    ],
    tags: [
      "PHP",
      "Laravel",
      "Vue 2",
      "JavaScript",
      "Sass",
      "MySQL",
      "Git",
    ],
    nda:
      "Client and project details have been generalized due to NDA and white-label agreements.",
  },

  {
    id: 3,
    type: "Nature Park Web Application",
    title: "Nature Park Marketing & Booking Platform",
    summary:
      "Maintained and enhanced a production web application supporting marketing and booking activities for a nature park.",
    overview:
      "Worked on an existing Laravel-based web application used to promote a nature park and support its booking-related activities. Responsibilities focused on maintaining the existing system while implementing new features and improvements requested by the client.",
    contributions: [
      "Maintained and enhanced an existing Laravel application",
      "Implemented new features based on client requirements",
      "Developed and updated frontend functionality using Vue.js and JavaScript",
      "Worked with MySQL for application data and backend functionality",
      "Investigated and resolved issues within the existing system",
      "Collaborated with the client and development team throughout feature development",
    ],
    tags: [
      "PHP",
      "Laravel",
      "Vue 2",
      "JavaScript",
      "MySQL",
      "Git",
    ],
    nda:
      "Client and project details have been generalized due to NDA and white-label agreements.",
  },

  {
    id: 4,
    type: "WordPress Development",
    title: "Corporate & Business Websites — 10+ Sites",
    summary:
      "Developed and maintained 10+ production WordPress websites for businesses across different industries, adapting implementations to varying design and content requirements.",
    overview:
      "Contributed to the development and maintenance of multiple corporate and business websites through a white-label development workflow. Work included implementing designs, customizing WordPress themes and functionality, maintaining existing websites, and ensuring responsive, performant, and user-friendly experiences across different projects.",
    contributions: [
      "Developed and customized 10+ production WordPress websites",
      "Implemented responsive interfaces based on design specifications",
      "Customized themes and extended WordPress functionality",
      "Integrated JavaScript and frontend components",
      "Troubleshot and maintained existing WordPress websites",
      "Improved website performance, usability, and responsive behavior",
    ],
    tags: [
      "WordPress",
      "PHP",
      "JavaScript",
      "jQuery",
      "HTML",
      "SCSS",
      "Git",
    ],
    nda:
      "Client names, URLs, branding, and project-specific details are omitted due to NDA and white-label agreements.",
  },

  {
    id: 5,
    type: "WordPress eCommerce",
    title: "WordPress eCommerce — WooCommerce",
    summary:
      "Developed a production WordPress eCommerce website using WooCommerce to support online product and customer workflows.",
    overview:
      "Contributed to the development and maintenance of a production WordPress eCommerce website built with WooCommerce. Work involved implementing and customizing functionality based on project requirements while maintaining the existing website and ensuring a responsive user experience.",
    contributions: [
      "Developed and customized a production WooCommerce website",
      "Implemented functionality based on project requirements",
      "Customized WordPress themes and WooCommerce functionality",
      "Integrated frontend components and interactive functionality",
      "Troubleshot and resolved issues within the existing website",
      "Maintained responsive behavior and overall website usability",
    ],
    tags: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "JavaScript",
      "jQuery",
      "HTML",
      "SCSS",
      "Git",
    ],
    nda:
      "Client name, URL, branding, and project-specific details are omitted due to NDA and white-label agreements.",
  },
]

const independentProjects = [
  {
    id: 1,
    title: "Harrow Creek Water Authority",
    kind: "WordPress Theme · Water Utility",
    origin: "Inspired by professional experience",
    summary:
      "A classic PHP WordPress theme for a fictional municipal water utility, drawing on my professional experience building a real water-utility website (client details withheld) and rebuilt independently from scratch to showcase that domain expertise.",
    highlights: [
      "Original branding, content, and code; no client assets reused",
      "Teal/brass palette with Fraunces + Work Sans typography",
      "Core pages for services, billing, and contact/support",
    ],
    tags: ["WordPress", "Classic Theme", "PHP", "CSS"],
    demo: "https://waterdistrict.jovelluna.com/",
  },

  {
    id: 2,
    title: "Ironclad Auto Repair",
    kind: "WordPress Theme · Auto Repair Shop",
    origin: "Inspired by professional experience",
    summary:
      "A block/FSE WordPress child theme for a fictional independent auto repair shop, drawing on my professional experience building a real auto repair shop website (client details withheld) and rebuilt independently to demonstrate that experience in a public portfolio piece.",
    highlights: [
      "Custom post types for services and team members",
      "Graphite/amber brand system",
      "Template parts, reusable blocks, and theme.json design tokens",
    ],
    tags: ["WordPress", "Full Site Editing", "Custom Post Types", "theme.json"],
    demo: "https://carrepair.jovelluna.com/",
  },

  {
    id: 3,
    title: "Palma Cove Resort",
    kind: "WordPress Theme · Beach Resort",
    origin: "Original concept",
    summary:
      "A full-site-editing WordPress child theme for a fictional beachfront resort.",
    highlights: [
      "Sand/lagoon/coral color system with Bodoni Moda + Karla typography",
      "Photo gallery built with native gallery blocks",
      "Reservation-inquiry form with nonce-based submission handling",
    ],
    tags: ["WordPress", "Full Site Editing", "Gallery Blocks", "PHP"],
    demo: "https://palma-cove.jovelluna.com/",
  },

  {
    id: 4,
    title: "Northbridge Data Solutions",
    kind: "WordPress Theme · B2B Consulting",
    origin: "Inspired by professional experience",
    summary:
      "A block/FSE WordPress child theme for a fictional data-conversion and database consulting firm, drawing on my professional experience building a real B2B consulting website (client details withheld) and rebuilt independently to showcase that experience.",
    highlights: [
      "Navy/blue enterprise design system with Sora + Manrope typography",
      "Reusable block patterns for CTA bands and client quotes",
      "Consultation-request contact form",
    ],
    tags: ["WordPress", "Full Site Editing", "Block Patterns", "PHP"],
    demo: "https://northridge.jovelluna.com/",
  },

  {
    id: 5,
    title: "Kestrel Ridge Nature Park",
    kind: "WordPress Theme · Nature Park",
    origin: "Original concept",
    summary:
      "A full-site-editing WordPress child theme for a fictional public nature park.",
    highlights: [
      "Forest-green/amber-gold design system with Cormorant Garamond + Nunito Sans",
      "Trail-guide page and a \"Field Notes\" blog with seeded posts",
      "Contact form for visitor and group-visit inquiries",
    ],
    tags: ["WordPress", "Full Site Editing", "Blog", "PHP"],
    demo: "https://nature.jovelluna.com/",
  },

  {
    id: 6,
    title: "JCL Dashboard",
    kind: "Web App · Headless CMS",
    origin: "Personal project",
    summary:
      "A modular, headless content management system built with Laravel.",
    highlights: [
      "Admin dashboard for managing content",
      "Content exposed through a RESTful API",
      "Vue frontend built with Vite",
    ],
    images: [
      "/images/jcl-dashboard/landing-page.bmp",
      "/images/jcl-dashboard/posts-management.bmp",
    ],
    tags: ["PHP", "Laravel", "Vite", "Vue", "API", "CMS"],
    github: "https://github.com/jovelluna12/jcl-dashboard",
  },

  {
    id: 7,
    title: "WordPress Starter Theme",
    kind: "Developer Tool · WordPress",
    origin: "Personal project",
    summary:
      "A modern starter theme for kicking off custom WordPress theme builds.",
    highlights: [
      "Vite + Sass build pipeline",
      "Clean, organized theme architecture",
      "Gutenberg compatible",
    ],
    tags: ["PHP", "WordPress", "Vite", "SCSS", "JavaScript"],
    github: "https://github.com/jovelluna12/jovel-starter-theme",
  },

  {
    id: 8,
    title: "Sample Resort Website",
    kind: "Website · Resort",
    origin: "Personal project",
    summary:
      "A responsive Vue website for a fictional resort.",
    highlights: [
      "Showcases resort amenities",
      "Presents booking options",
      "Responsive layout across devices",
    ],
    tags: ["Vue", "CSS", "JavaScript"],
    demo: "https://sample-resort-portfolio.vercel.app/",
    github: "https://github.com/jovelluna12/sample-resort-portfolio",
  },

  {
    id: 9,
    title: "Sample Restaurant Website",
    kind: "Website · Restaurant",
    origin: "Personal project",
    summary:
      "A responsive Vue website for a fictional restaurant.",
    highlights: [
      "Showcases menu items and services",
      "Includes a reservations section",
      "Responsive layout across devices",
    ],
    tags: ["Vue", "CSS", "JavaScript"],
    demo: "https://sample-restaurant-portfolio.vercel.app/",
    github: "https://github.com/jovelluna12/sample-restaurant-portfolio",
  },
]
</script>

<style scoped>
.projects {
  padding: 7rem 1.5rem;
  color: var(--color-text);
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}


/* =========================================
   SECTION HEADER
========================================= */

.section-header {
  max-width: 760px;
  margin: 0 auto 4rem;
  text-align: center;
}

.section-header h2 {
  margin: 0.5rem 0 1rem;
  color: var(--color-heading);
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.15;
  letter-spacing: -0.03em;
}

.section-header p {
  max-width: 680px;
  margin: 0 auto;
  color: var(--color-text-muted);
  line-height: 1.8;
  font-size: 1.05rem;
}

.section-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.4rem 0.8rem;

  border: 1px solid rgba(37, 99, 235, 0.15);
  border-radius: 999px;

  background: rgba(37, 99, 235, 0.05);
  color: var(--color-accent);

  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.eyebrow-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-accent);
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
}


/* =========================================
   GROUPS
========================================= */

.projects-group {
  scroll-margin-top: 5rem;
}

.projects-group + .projects-group {
  margin-top: 6rem;
  padding-top: 6rem;
  border-top: 1px solid var(--color-border);
}

.group-header {
  margin-bottom: 2.5rem;
}

.group-header h3 {
  margin-bottom: 0.5rem;
  color: var(--color-heading);
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.group-header p {
  color: var(--color-text-muted);
  line-height: 1.7;
}

.group-note {
  display: flex;
  gap: 0.5rem;

  margin-top: 1rem;
  padding: 0.75rem 1rem;

  border: 1px solid rgba(37, 99, 235, 0.12);
  border-radius: 10px;

  background: rgba(37, 99, 235, 0.04);

  font-size: 0.85rem;
}


/* =========================================
   SHARED: TAGS
========================================= */

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  padding: 0.3rem 0.7rem;

  border: 1px solid rgba(37, 99, 235, 0.15);
  border-radius: 999px;

  background: rgba(37, 99, 235, 0.05);
  color: var(--color-accent);

  font-size: 0.78rem;
  font-weight: 600;
}


/* =========================================
   CASE STUDIES
========================================= */

.case-studies {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.case-study {
  display: grid;
  grid-template-columns: 280px 1fr;

  overflow: hidden;

  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 18px;

  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.case-study:hover {
  transform: translateY(-4px);
  border-color: rgba(37, 99, 235, 0.3);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
}

.case-study-aside {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  padding: 2rem 1.75rem;

  background: var(--color-background-soft);
  border-right: 1px solid var(--color-border);
  border-left: 4px solid #2563eb;
}

.case-study-number {
  color: var(--color-accent);

  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.03em;
}

.aside-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
}

.aside-label {
  color: var(--color-text-muted);

  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.aside-value {
  color: var(--color-heading);
  font-weight: 600;
  line-height: 1.4;
}

.work-badge {
  display: inline-flex;

  padding: 0.2rem 0.6rem;

  border-radius: 999px;

  background: var(--color-success-bg);
  color: var(--color-success-text);

  font-size: 0.72rem;
  font-weight: 600;
}

.case-study-body {
  padding: 2rem 2.25rem;
}

.case-study-title {
  margin-bottom: 0.6rem;

  color: var(--color-heading);

  font-size: 1.45rem;
  font-weight: 700;
  line-height: 1.3;
}

.case-study-summary {
  margin-bottom: 1.75rem;

  color: var(--color-text);

  font-size: 1.02rem;
  line-height: 1.7;
}

.case-study-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.case-study-section h5 {
  margin-bottom: 0.6rem;

  color: var(--color-heading);

  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.case-study-section p,
.case-study-section li {
  color: var(--color-text-muted);
  line-height: 1.65;
}

.case-study-section ul {
  padding-left: 1.2rem;
}

.case-study-section li {
  margin-bottom: 0.3rem;
}


/* =========================================
   INDEPENDENT PROJECTS
========================================= */

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;
}

.project-card {
  display: flex;
  flex-direction: column;

  overflow: hidden;

  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 18px;

  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: rgba(37, 99, 235, 0.3);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
}

.project-gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;

  overflow: hidden;

  background: var(--color-background-mute);
}

.project-image {
  display: block;

  width: 100%;
  height: 150px;

  object-fit: cover;

  cursor: pointer;

  transition: transform 0.3s ease;
}

.project-image:hover {
  transform: scale(1.04);
}

.project-content {
  display: flex;
  flex-direction: column;
  flex: 1;

  padding: 1.6rem;
}

.project-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;

  margin-bottom: 0.9rem;
}

.kind-badge {
  display: inline-flex;

  padding: 0.25rem 0.6rem;

  border: 1px solid var(--color-accent);
  border-radius: 999px;

  color: var(--color-accent);

  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.project-origin {
  color: var(--color-text-muted);

  font-size: 0.75rem;
  font-weight: 600;
}

.project-title {
  margin-bottom: 0.5rem;

  color: var(--color-heading);

  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.3;
}

.project-summary {
  margin-bottom: 1rem;

  color: var(--color-text);

  line-height: 1.65;
}

.highlights {
  margin-bottom: 1.25rem;
  padding-left: 1.1rem;

  color: var(--color-text-muted);

  font-size: 0.92rem;
  line-height: 1.6;
}

.highlights li {
  margin-bottom: 0.25rem;
}

.project-content .tags {
  margin-bottom: 1.5rem;
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  margin-top: auto;
}

.project-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;

  min-width: 100px;

  padding: 0.55rem 0.9rem;

  border: 2px solid var(--color-outline);
  border-radius: 0.5rem;

  background: transparent;
  color: var(--color-text-secondary);

  font-size: 0.9rem;
  font-weight: 600;

  text-decoration: none;

  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.project-link:hover {
  transform: translateY(-2px);
  color: var(--color-text-strong);
  border-color: var(--color-outline-hover);
  background: var(--color-hover-tint);
}

.primary-link {
  color: #ffffff;
  background-color: #2563eb;
  border-color: #2563eb;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
}

.primary-link:hover {
  color: #ffffff;
  background-color: #1d4ed8;
  border-color: #1d4ed8;
  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.3);
}

.project-link span {
  font-size: 1rem;
}


/* =========================================
   LIGHTBOX
========================================= */

.lightbox {
  position: fixed;
  inset: 0;

  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem;

  background: rgba(24, 24, 24, 0.9);

  backdrop-filter: blur(5px);

  cursor: zoom-out;
}

.lightbox-image {
  max-width: 90%;
  max-height: 90%;

  border-radius: 12px;

  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.4);
}


/* =========================================
   RESPONSIVE
========================================= */

@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .case-study {
    grid-template-columns: 1fr;
  }

  .case-study-aside {
    border-right: none;
    border-bottom: 1px solid var(--color-border);
  }
}

@media (max-width: 768px) {
  .case-study-details {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 640px) {
  .projects {
    padding: 5rem 1rem;
  }

  .section-header {
    margin-bottom: 3rem;
  }

  .section-header p {
    font-size: 0.95rem;
  }

  .projects-group + .projects-group {
    margin-top: 4rem;
    padding-top: 4rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .case-study-aside,
  .case-study-body,
  .project-content {
    padding: 1.35rem;
  }

  .project-gallery {
    grid-template-columns: 1fr;
  }

  .project-image {
    height: 200px;
  }

  .project-link {
    flex: 1;
  }
}
</style>
