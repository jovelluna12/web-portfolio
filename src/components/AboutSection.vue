<template>
  <section id="about" class="section about-section">
    <div class="container">
      <div class="about-grid">
        <div class="about-content">
          <span class="section-label">About Me</span>
          <h2 class="section-title">Passionate about crafting digital experiences</h2>
          
          <div class="about-text">
            <p>
              I&apos;m a web developer with a focus on building accessible, performant, 
              and user-friendly websites. With experience across the full stack, 
              I specialize in creating modern web applications that solve real problems.
            </p>
            <p>
              My journey in web development has taken me through WordPress development, 
              building custom Laravel applications, and creating interactive Vue.js frontends. 
              I believe in writing clean, maintainable code and staying current with 
              industry best practices.
            </p>
          </div>
          
        </div>
        
        <div class="skills-panel">
          <h3 class="skills-title">Skills &amp; Technologies</h3>
          
          <div class="skills-categories">
            <div class="skill-category">
              <h4 class="category-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/><path d="m9 17 3 3 3-3"/><path d="M12 12v8"/></svg>
                Backend
              </h4>
              <div class="skill-tags">
                <span v-for="skill in backendSkills" :key="skill" class="skill-tag">{{ skill }}</span>
              </div>
            </div>
            
            <div class="skill-category">
              <h4 class="category-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10"/><path d="M7 12h10"/><path d="M7 17h10"/></svg>
                Frontend
              </h4>
              <div class="skill-tags">
                <span v-for="skill in frontendSkills" :key="skill" class="skill-tag">{{ skill }}</span>
              </div>
            </div>
            
            <div class="skill-category">
              <h4 class="category-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2"/><path d="M12 22v-2"/><path d="m17 20.66-1-1.73"/><path d="M11 10.27 7 3.34"/><path d="m20.66 17-1.73-1"/><path d="m3.34 7 1.73 1"/><path d="M14 12h8"/><path d="M2 12h2"/><path d="m20.66 7-1.73 1"/><path d="m3.34 17 1.73-1"/><path d="m17 3.34-1 1.73"/><path d="m11 13.73-4 6.93"/></svg>
                Tools
              </h4>
              <div class="skill-tags">
                <span v-for="skill in toolsSkills" :key="skill" class="skill-tag">{{ skill }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  data() {
    return {
      backendSkills: ['PHP', 'Laravel', 'WordPress', 'MySQL', 'REST APIs'],
      frontendSkills: ['JavaScript', 'Vue.js', 'jQuery', 'HTML5', 'CSS3', 'Tailwind'],
      toolsSkills: ['Git', 'Vite', 'npm', 'VS Code', 'Linux']
    }
  }
}
</script>

<style scoped>
.about-section {
  background: var(--background);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

.section-label {
  display: inline-block;
  padding: 6px 14px;
  background: rgba(59, 130, 246, 0.1);
  color: var(--accent);
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 16px;
}

.about-content .section-title {
  margin-bottom: 24px;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}

.about-text p {
  color: var(--muted);
  line-height: 1.7;
  font-size: 1rem;
}

.about-stats {
  display: flex;
  gap: 32px;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent);
  line-height: 1;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--muted);
}

.skills-panel {
  background: var(--card);
  border: 1px solid var(--card-border);
  border-radius: 16px;
  padding: 32px;
}

.skills-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 24px;
}

.skills-categories {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.skill-category {
  padding-bottom: 24px;
  border-bottom: 1px solid var(--card-border);
}

.skill-category:last-child {
  padding-bottom: 0;
  border-bottom: none;
}

.category-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--muted);
  margin-bottom: 12px;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  padding: 6px 12px;
  background: rgba(59, 130, 246, 0.1);
  color: var(--accent);
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
}

@media (max-width: 1024px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 640px) {
  .about-stats {
    flex-direction: column;
    gap: 20px;
  }
  
  .stat {
    flex-direction: row;
    align-items: baseline;
    gap: 12px;
  }
  
  .stat-value {
    font-size: 2rem;
  }
  
  .skills-panel {
    padding: 24px;
  }
}
</style>
