<template>
  <section id="skills" class="skills">
    <div class="container">
      <header class="section-header">
        <h2>Skills</h2>
        <p>Technologies and tools I use to build modern web applications.</p>
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
              v-for="skill in category.items"
              :key="skill"
              class="skill"
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
    items: [
      "HTML",
      "CSS",
      "SCSS",
      "JavaScript",
      "Vue.js",
      "React"
    ]
  },
  {
    title: "Backend",
    items: [
      "PHP",
      "Laravel",
      "REST APIs"
    ]
  },
  {
    title: "CMS",
    items: [
      "WordPress",
      "WooCommerce",
      "Elementor",
      "WPBakery",
      "Avada",
      "Advanced Custom Fields (ACF)",
      "Gutenberg"
    ]
  },
  {
    title: "Database",
    items: [
      "MySQL",
      "PostgreSQL"
    ]
  },
  {
    title: "Tools & DevOps",
    items: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Linux"
    ]
  },
  {
    title: "Development Practices",
    items: [
      "Responsive Design",
      "Cross-Browser Compatibility",
      "Code Review",
      "Agile",
      "Problem Solving"
    ]
  }
];
</script>

<style scoped>
.skills {
  padding: 5rem 1.5rem;
  background-color: #f5f5f5;
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
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.skill-card {
  background: #fff;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,.08);
  transition: .25s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,.12);
}

.skill-card h3 {
  margin-bottom: 1rem;
  color: #2563eb;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: .6rem;
}

.skill {
  background: #eff6ff;
  color: #1d4ed8;
  padding: .45rem .8rem;
  border-radius: 999px;
  font-size: .85rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .skills {
    padding: 4rem 1rem;
  }
}
</style>