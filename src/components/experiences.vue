<template>
  <section id="experiences" class="experience">
    <div class="container">
      <header class="section-header">
        <h2>Work Experience</h2>
        <p>My professional journey and the roles I've held.</p>
      </header>

      <div class="timeline">
        <article
          v-for="job in experiences"
          :key="job.id"
          class="experience-card"
        >
          <div class="timeline-marker"></div>

          <div class="card">
            <div class="card-header">
              <div>
                <h3>{{ job.position }}</h3>

                <h4>
                  <a
                    :href="job.companyUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="company-link"
                  >
                    {{ job.company }}
                  </a>

                  <span class="employment-type">
                    {{ job.type }}
                  </span>
                </h4>
              </div>

              <span class="duration">
                {{ job.duration }}
              </span>
            </div>

            <p class="location">
              📍 {{ job.location }}
            </p>

            <ul class="responsibilities">
              <li
                v-for="(item, index) in job.responsibilities"
                :key="index"
              >
                {{ item }}
              </li>
            </ul>

            <div class="skills">
              <span
                v-for="skill in job.skills"
                :key="skill"
                class="skill"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
  const experiences = [
  {
    id: 1,
    company: "Syntactics Inc.",
    companyUrl: "https://www.syntacticsinc.com/",
    position: "Full Stack Developer",
    type: "Full Time",
    location: "Cagayan de Oro, Philippines",
    duration: "Aug 2023 – Present",
    responsibilities: [
      "Delivered 10+ responsive websites and web applications using Laravel, Vue.js, WordPress, and PHP for clients across multiple industries.",
      "Modernized legacy applications by refactoring code, upgrading dependencies, resolving critical issues, and implementing new features to improve maintainability and performance.",
      "Designed and integrated RESTful APIs while optimizing MySQL and PostgreSQL database workflows for reliable backend performance.",
      "Collaborated with designers, QA engineers, project managers, and clients to translate business requirements into scalable, user-focused solutions.",
      "Maintained high code quality through Git-based workflows, peer code reviews, and deployment best practices."
    ],
    skills: [
      "Laravel",
      "Vue.js",
      "React",
      "PHP",
      "JavaScript",
      "WordPress",
      "MySQL",
      "PostgreSQL",
      "REST APIs",
      "Git"
    ]
  },
  {
    id: 2,
    company: "Syntactics Inc.",
    companyUrl: "https://www.syntacticsinc.com/",
    position: "Web Developer",
    type: "Internship",
    location: "Cagayan de Oro, Philippines",
    duration: "Feb 2023 – Jun 2023",
    responsibilities: [
      "Built and customized WordPress websites by developing reusable UI components, navigation menus, forms, and landing pages.",
      "Improved website responsiveness and cross-browser compatibility through testing with browser developer tools and device emulators.",
      "Collaborated with senior developers to deliver client projects on schedule while following modern web development best practices.",
      "Strengthened practical experience in WordPress, PHP, JavaScript, HTML, CSS, and collaborative Git workflows."
    ],
    skills: [
      "WordPress",
      "PHP",
      "JavaScript",
      "HTML",
      "CSS",
      "Elementor"
    ]
  }
]
/*
Simply add another object:

{
  id: 3,
  company: "",
  position: "",
  location: "",
  duration: "",
  responsibilities: [
    "",
    "",
    ""
  ],
  skills: [
    "",
    ""
  ]
}
*/
</script>

<style scoped>
.experience {
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
}

.timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-left: 2rem;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 10px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #dbeafe;
}

.experience-card {
  position: relative;
}

.timeline-marker {
  position: absolute;
  left: -2rem;
  top: 1.3rem;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #2563eb;
  border: 4px solid white;
  box-shadow: 0 0 0 2px #2563eb;
}

.card {
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 10px 30px rgba(0,0,0,.08);
  transition: .25s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0,0,0,.12);
}

.card-header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-start;
  margin-bottom: .75rem;
}

.card-header h3 {
  margin: 0;
  font-size: 1.3rem;
}

.card-header h4 {
  margin-top: .25rem;
  color: #2563eb;
  font-weight: 600;
}

.duration {
  background: #eff6ff;
  color: #1d4ed8;
  padding: .45rem .8rem;
  border-radius: 999px;
  font-size: .85rem;
  white-space: nowrap;
}

.location {
  color: #64748b;
  margin-bottom: 1rem;
}

.responsibilities {
  padding-left: 1.2rem;
  margin-bottom: 1.5rem;
}

.responsibilities li {
  margin-bottom: .6rem;
  line-height: 1.6;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
}

.skill {
  background: #f1f5f9;
  color: #334155;
  padding: .4rem .8rem;
  border-radius: 999px;
  font-size: .85rem;
  font-weight: 500;
}

.company-link {
  color: #2563eb;
  text-decoration: none;
  font-weight: 600;
}

.company-link:hover {
  text-decoration: underline;
}

.employment-type {
  display: inline-flex;
  align-items: center;
  margin-left: .75rem;
  padding: .2rem .6rem;
  border-radius: 999px;
  background: #ecfdf5;
  color: #047857;
  font-size: .75rem;
  font-weight: 600;
  vertical-align: middle;
}

@media (max-width: 768px) {
  .timeline {
    padding-left: 1.5rem;
  }

  .timeline-marker {
    left: -1.5rem;
  }

  .card-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .duration {
    margin-top: .5rem;
  }
}
</style>