<template>
  <section id="projects" class="portfolio">
    <div class="container">
      <header class="section-header">
        <h2>My Works</h2>
        <p>Some of the projects I've built.</p>
      </header>

      <div class="projects-grid">
        <article
          v-for="project in projects"
          :key="project.id"
          class="project-card"
        >
          <!-- Project Images -->
          <div class="project-gallery">
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
                rel="noopener"
              >
                Live Demo
              </a>

              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener"
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

const projects = [
  {
    id: 1,
    title: "JCL Dashboard",
    description:
      "A modular, headless Content Management System (CMS) built with Laravel, designed to manage content through an admin dashboard and expose content through a RESTful API.",
    images: [
      "/images/jcl-dashboard/landing-page.bmp",
      "/images/jcl-dashboard/posts-management.bmp",
    ],
    tags: ["PHP", "Laravel", "Vite", "Vue", "API", "CMS"],
    github: "https://github.com/jovelluna12/jcl-dashboard"
  },
  {
    id: 2,
    title: "WordPress Starter Theme",
    description:
      "A modern WordPress starter theme powered by Vite + Sass with clean architecture and Gutenberg compatibility.",
    images: [],
    tags: ["PHP", "WordPress", "Vite", "SCSS", "JavaScript"],
    github: "https://github.com/jovelluna12/jovel-starter-theme"
  },
  {
    id: 3,
    title: "Sample Resort Website",
    description:
      "A responsive website for a fictional resort showcasing amenities and booking options.",
    images: [],
    tags: ["Vue", "CSS", "JavaScript"],
    demo: "https://sample-resort-portfolio.vercel.app/",
    github: "https://github.com/jovelluna12/sample-resort-portfolio"
  },
  {
    id: 4,
    title: "Sample Restaurant Website",
    description:
      "A responsive restaurant website showcasing menu items, services, and reservations.",
    images: [],
    tags: ["Vue", "CSS", "JavaScript"],
    demo: "https://sample-restaurant-portfolio.vercel.app/",
    github: "https://github.com/jovelluna12/sample-restaurant-portfolio"
  }
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
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.25rem;
  margin-bottom: .5rem;
}

.section-header p {
  color: #64748b;
}

.projects-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.project-card {
  background: white;
  border-radius: 18px;
  overflow: hidden;

  box-shadow: 0 8px 20px rgba(0,0,0,.06);

  transition:
    transform .25s,
    box-shadow .25s;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(0,0,0,.12);
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

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.85);

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
}
</style>