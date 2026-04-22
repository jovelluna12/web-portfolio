<template>
  <section id="home" class="hero">
    <div class="hero-container">
      <div class="hero-content">
        
        <h1 class="hero-title animate-slide-up">
          Hi, I&apos;m <span class="gradient-text">Jovel Christer</span>
        </h1>
        
        <p class="hero-subtitle animate-slide-up" style="animation-delay: 0.1s">
          A passionate <strong>Web Developer</strong> crafting modern, accessible, and performant web experiences
        </p>
        
        <div class="hero-skills animate-slide-up" style="animation-delay: 0.2s">
          <span v-for="skill in skills" :key="skill" class="skill-tag">{{ skill }}</span>
        </div>
        
        <div class="hero-actions animate-slide-up" style="animation-delay: 0.3s">
          <a href="#projects" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            View Projects
          </a>
          <a href="#contact" class="btn btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Get in Touch
          </a>
        </div>
      </div>
      
      <div class="hero-visual animate-fade-in" style="animation-delay: 0.4s">
        <div class="code-window">
          <div class="window-header">
            <span class="window-dot red"></span>
            <span class="window-dot yellow"></span>
            <span class="window-dot green"></span>
            <span class="window-title">developer.js</span>
          </div>
          <pre class="code-content"><code><span class="code-keyword">const</span> <span class="code-variable">developer</span> = {
  <span class="code-property">name</span>: <span class="code-string">"Jovel Christer"</span>,
  <span class="code-property">role</span>: <span class="code-string">"Web Developer"</span>,
  <span class="code-property">skills</span>: [
    <span class="code-string">"PHP"</span>, <span class="code-string">"Laravel"</span>,
    <span class="code-string">"JavaScript"</span>, <span class="code-string">"Vue"</span>
  ],
  <span class="code-property">passion</span>: <span class="code-string">"Building things"</span>
};</code></pre>
        </div>
      </div>
    </div>
    
    <div class="scroll-indicator animate-fade-in" style="animation-delay: 0.6s">
      <a href="#projects" aria-label="Scroll to projects">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      skills: ['PHP', 'Laravel', 'WordPress', 'JavaScript', 'Vue', 'jQuery']
    }
  }
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px 24px 80px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
  transform: translateX(-50%);
  pointer-events: none;
}

.hero-container {
  max-width: var(--max-content-width);
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 9999px;
  font-size: 0.875rem;
  color: var(--accent);
  width: fit-content;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: #22c55e;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--muted);
  line-height: 1.6;
  max-width: 500px;
}

.hero-subtitle strong {
  color: var(--foreground);
}

.hero-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  padding: 8px 16px;
  background: var(--card);
  border: 1px solid var(--card-border);
  border-radius: 8px;
  font-size: 0.875rem;
  color: var(--muted);
  transition: all 0.2s ease;
}

.skill-tag:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.hero-actions {
  display: flex;
  gap: 16px;
  margin-top: 8px;
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.code-window {
  background: var(--card);
  border: 1px solid var(--card-border);
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  max-width: 480px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
}

.window-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid var(--card-border);
}

.window-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.window-dot.red { background: #ef4444; }
.window-dot.yellow { background: #eab308; }
.window-dot.green { background: #22c55e; }

.window-title {
  margin-left: auto;
  font-size: 0.75rem;
  color: var(--muted);
}

.code-content {
  padding: 20px;
  margin: 0;
  font-family: 'Fira Code', 'Monaco', monospace;
  font-size: 0.875rem;
  line-height: 1.8;
  overflow-x: auto;
}

.code-keyword { color: #c792ea; }
.code-variable { color: #82aaff; }
.code-property { color: #f78c6c; }
.code-string { color: #c3e88d; }

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
}

.scroll-indicator a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: 1px solid var(--card-border);
  border-radius: 50%;
  color: var(--muted);
  transition: all 0.3s ease;
  animation: bounce 2s infinite;
}

.scroll-indicator a:hover {
  border-color: var(--accent);
  color: var(--accent);
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}

@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-content {
    align-items: center;
  }
  
  .hero-subtitle {
    max-width: 600px;
  }
  
  .hero-skills {
    justify-content: center;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .hero-visual {
    order: -1;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 100px 16px 60px;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .hero-actions {
    flex-direction: column;
    width: 100%;
  }
  
  .hero-actions .btn {
    width: 100%;
    justify-content: center;
  }
  
  .code-window {
    max-width: 100%;
  }
  
  .code-content {
    font-size: 0.75rem;
  }
}
</style>
