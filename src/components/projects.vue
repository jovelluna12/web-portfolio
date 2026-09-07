<template>
  <section id="projects" class="portfolio">
    <div class="container">

      <!-- =========================================
           PROFESSIONAL WORK
      ========================================== -->
      <header class="section-header">
        <span class="section-label">Client & Production Work</span>
        <h2>Professional Work</h2>
        <p>
          Selected case studies based on systems and projects I worked on
          professionally. Client and project details are omitted due to
          NDA and white-label agreements.
        </p>
      </header>

      <div class="professional-grid">
        <article
          v-for="project in professionalProjects"
          :key="project.id"
          class="case-study-card"
        >
          <div class="case-study-header">
            <span class="case-study-type">
              {{ project.type }}
            </span>

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
                <li
                  v-for="item in project.contributions"
                  :key="item"
                >
                  {{ item }}
                </li>
              </ul>
            </div>

            <div class="case-study-section">
              <h4>Technologies</h4>

              <div class="tags">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="tag"
                >
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


      <!-- =========================================
           PERSONAL PROJECTS
      ========================================== -->
      <header class="section-header personal-header">
        <span class="section-label">Independent Work</span>
        <h2>Personal Projects</h2>
        <p>
          Projects I build independently to explore technologies,
          experiment with ideas, and demonstrate my technical capabilities.
        </p>
      </header>

      <div class="projects-grid">
        <article
          v-for="project in personalProjects"
          :key="project.id"
          class="project-card"
        >
          <!-- Project Images -->
          <div
            v-if="project.images.length"
            class="project-gallery"
          >
            <img
              v-for="(image, index) in project.images"
              :key="index"
              :src="image"
              :alt="`${project.title} screenshot ${index + 1}`"
              class="project-image"
              loading="lazy"
              @click="openImage(image)"
            />
          </div>

          <div
            v-else
            class="project-placeholder"
          >
            <span>{{ project.title }}</span>
          </div>

          <div class="project-content">
            <h3>{{ project.title }}</h3>

            <p class="description">
              {{ project.description }}
            </p>

            <div class="tags">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="tag"
              >
                {{ tag }}
              </span>
            </div>

            <div class="links">
              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>

              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </article>
      </div>

    </div>

    <!-- Image Lightbox -->
    <div
      v-if="selectedImage"
      class="lightbox"
      @click="closeImage"
    >
      <img
        :src="selectedImage"
        alt="Project preview"
        class="lightbox-image"
      />
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


/*
|--------------------------------------------------------------------------
| Professional Work
|--------------------------------------------------------------------------
| These are intentionally written as case studies rather than named
| projects because the actual client/project information is confidential.
*/

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
];

/*
|--------------------------------------------------------------------------
| Personal Projects
|--------------------------------------------------------------------------
*/

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
  padding: 5rem 1.5rem;
}

.container {
  max-width: 1200px;
  margin: auto;
}

.section-header {
  max-width: 750px;
  margin: 0 auto 3rem;
  text-align: center;
}

.section-header h2 {
  font-size: 2.25rem;
  margin: .35rem 0 .75rem;
}

.section-header p {
  color: #64748b;
  line-height: 1.7;
}

.section-label {
  display: inline-block;
  color: #4f46e5;
  font-size: .8rem;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
}

.personal-header {
  margin-top: 6rem;
}


/* =========================================
   PROFESSIONAL WORK
========================================= */

.professional-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.case-study-card {
  position: relative;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 18px;
  overflow: hidden;

  transition:
    transform .25s ease,
    box-shadow .25s ease;
}

.case-study-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, .08);
}

.case-study-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.25rem 1.5rem;

  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
}

.case-study-type {
  color: #4f46e5;
  font-size: .8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .06em;
}

.case-study-number {
  color: #cbd5e1;
  font-size: 1.5rem;
  font-weight: 800;
}

.case-study-content {
  padding: 1.5rem;
}

.case-study-content h3 {
  margin: 0 0 .75rem;
  font-size: 1.35rem;
}

.case-study-summary {
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.case-study-section {
  margin-bottom: 1.5rem;
}

.case-study-section h4 {
  margin: 0 0 .5rem;
  font-size: .9rem;
}

.case-study-section p {
  margin: 0;
  color: #64748b;
  line-height: 1.6;
}

.case-study-section ul {
  margin: 0;
  padding-left: 1.25rem;
  color: #64748b;
  line-height: 1.7;
}

.case-study-section li {
  margin-bottom: .25rem;
}

.case-study-note {
  display: flex;
  gap: .6rem;
  align-items: flex-start;

  padding: .9rem 1rem;

  background: #f8fafc;
  border-radius: 10px;

  color: #64748b;
  font-size: .8rem;
  line-height: 1.5;
}

.note-icon {
  flex-shrink: 0;
}


/* =========================================
   PERSONAL PROJECTS
========================================= */

.projects-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.project-card {
  background: white;
  border-radius: 18px;
  overflow: hidden;

  box-shadow: 0 8px 20px rgba(0, 0, 0, .06);

  transition:
    transform .25s,
    box-shadow .25s;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, .12);
}


/* Gallery */

.project-gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;
  background: #f1f5f9;
}

.project-image {
  width: 100%;
  height: 140px;
  object-fit: cover;
  cursor: pointer;

  transition: transform .25s ease;
}

.project-image:hover {
  transform: scale(1.05);
}

.project-placeholder {
  height: 140px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #f8fafc;

  color: #94a3b8;
  font-weight: 600;
}

.project-content {
  padding: 1.5rem;
}

.project-content h3 {
  margin: 0 0 .75rem;
}

.description {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
  margin-bottom: 1.5rem;
}

.tag {
  background: #eef2ff;
  color: #4338ca;

  padding: .35rem .75rem;

  border-radius: 999px;

  font-size: .8rem;
  font-weight: 600;
}

.links {
  display: flex;
  gap: 1rem;
}

.links a {
  text-decoration: none;
  font-weight: 600;
  color: #2563eb;
}

.links a:hover {
  text-decoration: underline;
}


/* =========================================
   LIGHTBOX
========================================= */

.lightbox {
  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, .85);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 999;
  cursor: zoom-out;
}

.lightbox-image {
  max-width: 90%;
  max-height: 90%;

  border-radius: 12px;
}


/* =========================================
   RESPONSIVE
========================================= */

@media (max-width: 800px) {
  .professional-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .portfolio {
    padding: 3rem 1rem;
  }

  .project-gallery {
    grid-template-columns: 1fr;
  }

  .project-image {
    height: 200px;
  }

  .professional-grid {
    gap: 1.5rem;
  }

  .personal-header {
    margin-top: 4rem;
  }
}
</style>