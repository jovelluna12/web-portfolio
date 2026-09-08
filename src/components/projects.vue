<template>
  <section class="portfolio">

    <!-- =========================================
          PROFESSIONAL WORK
    ========================================== -->
    <section id="professional-work" class="work-section professional-section">
      <div class="container">

        <header class="section-header">
          <div class="section-eyebrow professional-eyebrow">
            <span class="eyebrow-dot"></span>
            Professional Experience
          </div>

          <h2>Professional Work</h2>

          <p>
            Selected case studies from production systems and client projects
            I have worked on professionally. Client names, URLs, branding, and
            project-specific details are omitted due to NDA and white-label
            agreements.
          </p>
        </header>

        <div class="professional-grid">
          <article v-for="project in professionalProjects" :key="project.id" class="case-study-card">
            <div class="case-study-header">
              <div>
                <span class="case-study-type">
                  {{ project.type }}
                </span>

                <span class="work-badge">
                  Production
                </span>
              </div>

              <span class="case-study-number">
                {{ String(project.id).padStart(2, "0") }}
              </span>
            </div>

            <div class="case-study-content">
              <h3>{{ project.title }}</h3>

              <p class="case-study-summary">
                {{ project.summary }}
              </p>

              <div class="case-study-section">
                <h4>Overview</h4>
                <p>{{ project.overview }}</p>
              </div>

              <div class="case-study-section">
                <h4>My Contribution</h4>

                <ul>
                  <li v-for="item in project.contributions" :key="item">
                    {{ item }}
                  </li>
                </ul>
              </div>

              <div class="case-study-section">
                <h4>Technologies</h4>

                <div class="tags">
                  <span v-for="tag in project.tags" :key="tag" class="tag">
                    {{ tag }}
                  </span>
                </div>
              </div>

              <div class="case-study-note">
                <span class="note-icon">🔒</span>

                <span>
                  Client and project details are intentionally omitted due to
                  confidentiality, NDA, and white-label agreements.
                </span>
              </div>
            </div>
          </article>
        </div>

      </div>
    </section>


    <!-- =========================================
          PERSONAL PROJECTS
    ========================================== -->
    <section id="personal-projects" class="work-section personal-section">
      <div class="container">

        <header class="section-header personal-header">
          <div class="section-eyebrow personal-eyebrow">
            <span class="eyebrow-dot"></span>
            Independent Development
          </div>

          <h2>Personal Projects</h2>

          <p>
            Independent projects I build to explore technologies, experiment
            with ideas, sharpen my skills, and demonstrate how I approach
            software development outside of client work.
          </p>
        </header>

        <div class="projects-grid">
          <article v-for="project in personalProjects" :key="project.id" class="project-card">
            <!-- Project Images -->
            <div v-if="project.images.length" class="project-gallery">
              <img v-for="(image, index) in project.images" :key="index" :src="image"
                :alt="`${project.title} screenshot ${index + 1}`" class="project-image" loading="lazy"
                @click="openImage(image)" />
            </div>

            <div v-else class="project-placeholder">
              <span>{{ project.title }}</span>
            </div>

            <div class="project-content">

              <div class="project-meta">
                <span class="personal-badge">
                  Personal Project
                </span>
              </div>

              <h3>{{ project.title }}</h3>

              <p class="description">
                {{ project.description }}
              </p>

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
    </section>


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

const personalProjects = [
  {
    id: 1,
    title: "JCL Dashboard",
    description:
      "A modular, headless Content Management System (CMS) built with Laravel, designed to manage content through an admin dashboard and expose content through a RESTful API.",
    images: [
      "/images/jcl-dashboard/landing-page.bmp",
      "/images/jcl-dashboard/posts-management.bmp",
    ],
    tags: [
      "PHP",
      "Laravel",
      "Vite",
      "Vue",
      "API",
      "CMS",
    ],
    github:
      "https://github.com/jovelluna12/jcl-dashboard",
  },

  {
    id: 2,
    title: "WordPress Starter Theme",
    description:
      "A modern WordPress starter theme powered by Vite + Sass with clean architecture and Gutenberg compatibility.",
    images: [],
    tags: [
      "PHP",
      "WordPress",
      "Vite",
      "SCSS",
      "JavaScript",
    ],
    github:
      "https://github.com/jovelluna12/jovel-starter-theme",
  },

  {
    id: 3,
    title: "Sample Resort Website",
    description:
      "A responsive website for a fictional resort showcasing amenities and booking options.",
    images: [],
    tags: [
      "Vue",
      "CSS",
      "JavaScript",
    ],
    demo:
      "https://sample-resort-portfolio.vercel.app/",
    github:
      "https://github.com/jovelluna12/sample-resort-portfolio",
  },

  {
    id: 4,
    title: "Sample Restaurant Website",
    description:
      "A responsive restaurant website showcasing menu items, services, and reservations.",
    images: [],
    tags: [
      "Vue",
      "CSS",
      "JavaScript",
    ],
    demo:
      "https://sample-restaurant-portfolio.vercel.app/",
    github:
      "https://github.com/jovelluna12/sample-restaurant-portfolio",
  },
]
</script>

<style scoped>
.portfolio {
  color: var(--color-text);
}

/* =========================================
   SHARED SECTION
========================================= */

.work-section {
  position: relative;
  padding: 7rem 1.5rem;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  max-width: 760px;
  margin: 0 auto 4rem;
  text-align: center;
  scroll-margin-top: 3rem;
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
  color: #64748b;
  line-height: 1.8;
  font-size: 1.05rem;
}

.section-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.4rem 0.8rem;

  border-radius: 999px;

  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.eyebrow-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
}


/* =========================================
   PROFESSIONAL WORK
========================================= */

.professional-section {
  background: var(--color-background-soft);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.professional-eyebrow {
  color: #2563eb;
  background: rgba(37, 99, 235, 0.05);
  border: 1px solid rgba(37, 99, 235, 0.15);
}

.professional-eyebrow .eyebrow-dot {
  background: #2563eb;
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
}

.professional-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.case-study-card {
  position: relative;
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

.case-study-card::before {
  content: "";

  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  height: 3px;

  background: #2563eb;
}

.case-study-card:hover {
  transform: translateY(-5px);

  border-color: rgba(37, 99, 235, 0.3);

  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
}

.case-study-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;

  padding: 1.5rem;

  background: var(--color-background-soft);
  border-bottom: 1px solid var(--color-border);
}

.case-study-header>div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.6rem;
}

.case-study-type {
  color: var(--color-heading);

  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.work-badge {
  display: inline-flex;

  padding: 0.25rem 0.6rem;

  border: 1px solid rgba(37, 99, 235, 0.2);
  border-radius: 999px;

  background: rgba(37, 99, 235, 0.05);
  color: #2563eb;

  font-size: 0.7rem;
  font-weight: 600;

  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.case-study-number {
  color: var(--color-text);
  opacity: 0.25;

  font-size: 1.5rem;
  font-weight: 700;
}

.case-study-content {
  padding: 1.75rem;
}

.case-study-content h3 {
  margin: 0 0 0.75rem;

  color: var(--color-heading);

  font-size: 1.4rem;
  line-height: 1.3;
}

.case-study-summary {
  margin-bottom: 1.75rem;

  color: #64748b;

  line-height: 1.7;
}

.case-study-section {
  margin-bottom: 1.5rem;
}

.case-study-section h4 {
  margin: 0 0 0.6rem;

  color: var(--color-heading);

  font-size: 0.85rem;
  font-weight: 700;

  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.case-study-section p,
.case-study-section li {
  color: #64748b;
  line-height: 1.65;
}

.case-study-section p {
  margin: 0;
}

.case-study-section ul {
  margin: 0;
  padding-left: 1.25rem;
}

.case-study-section li {
  margin-bottom: 0.3rem;
}

/* NDA Notice */

.case-study-note {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;

  padding: 1rem;

  background: rgba(37, 99, 235, 0.04);
  border: 1px solid rgba(37, 99, 235, 0.12);
  border-radius: 10px;

  color: #64748b;

  font-size: 0.8rem;
  line-height: 1.5;
}

.note-icon {
  flex-shrink: 0;
}


/* =========================================
   PERSONAL PROJECTS
========================================= */

.personal-section {
  background: var(--color-background);
}

.personal-header {
  margin-top: 0;
}

.personal-eyebrow {
  color: #2563eb;
  background: rgba(37, 99, 235, 0.05);
  border: 1px solid rgba(37, 99, 235, 0.15);
}

.personal-eyebrow .eyebrow-dot {
  background: #2563eb;
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.project-card {
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
  transform: translateY(-7px);

  border-color: rgba(37, 99, 235, 0.3);

  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
}


/* =========================================
   PROJECT GALLERY
========================================= */

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
  height: 180px;

  object-fit: cover;

  cursor: pointer;

  transition: transform 0.3s ease;
}

.project-image:hover {
  transform: scale(1.04);
}

.project-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 180px;

  background: var(--color-background-soft);

  color: #64748b;

  font-weight: 600;
}


/* =========================================
   PROJECT CONTENT
========================================= */

.project-content {
  padding: 1.75rem;
}

.project-meta {
  margin-bottom: 0.75rem;
}

.personal-badge {
  display: inline-flex;

  padding: 0.3rem 0.65rem;

  border: 2px solid #2563eb;
  border-radius: 999px;

  background: rgba(37, 99, 235, 0.05);
  color: #2563eb;

  font-size: 0.7rem;
  font-weight: 600;

  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.project-content h3 {
  margin: 0 0 0.75rem;

  color: var(--color-heading);

  font-size: 1.4rem;
  line-height: 1.3;
}

.description {
  margin-bottom: 1.25rem;

  color: #64748b;

  line-height: 1.7;
}


/* =========================================
   TECHNOLOGY TAGS
========================================= */

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  margin-bottom: 1.5rem;
}

.tag {
  padding: 0.35rem 0.75rem;

  background: rgba(37, 99, 235, 0.05);
  border: 1px solid rgba(37, 99, 235, 0.15);
  border-radius: 999px;

  color: #2563eb;

  font-size: 0.8rem;
  font-weight: 600;

  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;
}

.tag:hover {
  background: rgba(37, 99, 235, 0.1);
  border-color: rgba(37, 99, 235, 0.3);
}


/* =========================================
   PROJECT LINKS
========================================= */

.links {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;

  padding-top: 0.25rem;
}

.project-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;

  min-width: 100px;

  padding: 0.6rem 0.9rem;

  border: 2px solid #cbd5e1;
  border-radius: 0.5rem;

  background: transparent;
  color: #475569;

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

  color: #1e293b;

  border-color: #94a3b8;

  background: rgba(0, 0, 0, 0.02);
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

@media (max-width: 900px) {

  .professional-grid,
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .work-section {
    padding: 5rem 1rem;
  }

  .section-header {
    margin-bottom: 3rem;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .section-header p {
    font-size: 0.95rem;
  }

  .case-study-content,
  .project-content {
    padding: 1.35rem;
  }

  .project-gallery {
    grid-template-columns: 1fr;
  }

  .project-image,
  .project-placeholder {
    height: 200px;
  }

  .professional-grid,
  .projects-grid {
    gap: 1.5rem;
  }

  .links {
    width: 100%;
  }

  .project-link {
    flex: 1;
  }
}
</style>