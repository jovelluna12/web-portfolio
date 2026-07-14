<template>
  <section id="contact" class="contact">
    <div class="container">
      <header class="section-header">
        <h2>Let's Connect</h2>
        <p>
          I'm always open to discussing new opportunities, freelance projects,
          or simply connecting with fellow developers.
        </p>
      </header>

      <div class="contact-card">
        <div class="contact-item" v-for="item in contacts" :key="item.label">
          <div class="icon">{{ item.icon }}</div>

          <div class="content">
            <h3>{{ item.label }}</h3>

            <a
              :href="item.href"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ item.value }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const contacts = [
  {
    label: "Email",
    value: "jovelchristerluna.professional@gmail.com",
    href: "mailto:jovelchristerluna.professional@gmail.com",
    icon: "✉️"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jovelluna12",
    href: "https://linkedin.com/in/jovelluna12",
    icon: "💼"
  },
  {
    label: "GitHub",
    value: "github.com/jovelluna12",
    href: "https://github.com/jovelluna12",
    icon: "💻"
  },
  {
    label: "Location",
    value: "Cagayan de Oro, Philippines",
    href: "https://maps.google.com/?q=Cagayan+de+Oro",
    icon: "📍"
  }
]
</script>

<style scoped>
.contact {
  padding: 5rem 1.5rem;
}

.container {
  max-width: 900px;
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
  line-height: 1.7;
}

.contact-card {
  display: grid;
  gap: 1.25rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1.25rem;

  background: white;
  padding: 1.5rem;
  border-radius: 16px;

  box-shadow: 0 10px 30px rgba(0,0,0,.08);
  transition: .25s ease;
}

.contact-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 40px rgba(0,0,0,.12);
}

.icon {
  width: 60px;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background: #eff6ff;
  font-size: 1.6rem;
}

.content {
  flex: 1;
}

.content h3 {
  margin: 0;
  font-size: 1rem;
}

.content a {
  color: #2563eb;
  text-decoration: none;
  word-break: break-word;
}

.content a:hover {
  text-decoration: underline;
}

@media (max-width: 640px) {
  .contact-item {
    align-items: flex-start;
  }

  .icon {
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
  }
}
</style>