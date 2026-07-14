<template>
  <section class="skills">
    <div class="container">
      <header class="section-header">
        <h2>Skills & Technologies</h2>
        <p>
          Technologies and tools I've worked with throughout my development
          journey.
        </p>
      </header>

      <div class="skills-grid">
        <article
          v-for="category in skillCategories"
          :key="category.title"
          class="skill-card"
        >
          <h3>{{ category.title }}</h3>

          <div class="skill-list">
            <span
              v-for="skill in category.skills"
              :key="skill"
              class="skill-chip"
            >
              {{ skill }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "SCSS/SASS",
      "JavaScript (ES6+)",
      "TypeScript",
      "Vue.js",
      "React",
      "Bootstrap",
      "Tailwind CSS"
    ]
  },
  {
    title: "Backend",
    skills: [
      "PHP",
      "Laravel",
      "Node.js",
      "REST APIs"
    ]
  },
  {
    title: "Databases",
    skills: [
      "MySQL",
      "PostgreSQL"
    ]
  },
  {
    title: "CMS",
    skills: [
      "WordPress",
      "Elementor",
      "WPBakery",
      "WooCommerce",
      "Advanced Custom Fields (ACF)",
      "Gutenberg",
    ]
  },
  {
    title: "Tools & DevOps",
    skills: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Linux",
      "Docker",
      "VS Code",
      "Postman"
    ]
  },
  {
    title: "Practices",
    skills: [
      "Responsive Design",
      "Cross-Browser Compatibility",
      "API Integration",
      "Agile Development",
      "Version Control",
      "Debugging",
      "Performance Optimization"
    ]
  }
]
</script>

<style scoped>
.skills {
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
  font-size: 2.2rem;
  margin-bottom: .5rem;
}

.section-header p {
  color: #64748b;
  max-width: 650px;
  margin: auto;
}

.skills-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.skill-card {
  background: white;
  border-radius: 16px;
  padding: 1.75rem;
  box-shadow: 0 10px 30px rgba(0,0,0,.08);
  transition: .25s ease;
}

.skill-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(0,0,0,.12);
}

.skill-card h3 {
  margin: 0 0 1rem;
  color: #2563eb;
  font-size: 1.15rem;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: .6rem;
}

.skill-chip {
  background: #eff6ff;
  color: #1d4ed8;
  padding: .45rem .85rem;
  border-radius: 999px;
  font-size: .85rem;
  font-weight: 500;
  transition: .2s;
}

.skill-chip:hover {
  background: #2563eb;
  color: white;
}

@media (max-width: 768px) {
  .skills {
    padding: 4rem 1rem;
  }
}
</style>