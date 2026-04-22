<template>
  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-brand">
          <a href="#home" class="logo">
            <span class="logo-bracket">&lt;</span>
            <span class="logo-text">JC</span>
            <span class="logo-bracket">/&gt;</span>
          </a>
          <p class="footer-tagline">Building modern web experiences</p>
        </div>
        
        <nav class="footer-nav">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#posts">Posts</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        
        <div class="footer-social">
          <a href="https://github.com/jovelluna12" target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          <a href="https://linkedin.com/in/jovelluna12" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="mailto:jovelchristerluna.professional@gmail.com" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ year }} Jovel Christer Luna. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() { 
    return { 
      year: new Date().getFullYear() 
    } 
  }
}
</script>

<style scoped>
.site-footer {
  background: var(--card);
  border-top: 1px solid var(--card-border);
  padding: 48px 24px 24px;
}

.footer-container {
  max-width: var(--max-content-width);
  margin: 0 auto;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--card-border);
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.logo {
  font-size: 1.25rem;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 2px;
}

.logo-bracket {
  color: var(--accent);
}

.logo-text {
  color: var(--foreground);
}

.footer-tagline {
  font-size: 0.875rem;
  color: var(--muted);
}

.footer-nav {
  display: flex;
  gap: 24px;
}

.footer-nav a {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.footer-nav a:hover {
  color: var(--foreground);
}

.footer-social {
  display: flex;
  gap: 16px;
}

.footer-social a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid var(--card-border);
  border-radius: 10px;
  color: var(--muted);
  transition: all 0.2s ease;
}

.footer-social a:hover {
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(-2px);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
}

.footer-bottom p {
  font-size: 0.8rem;
  color: var(--muted);
}

.built-with {
  opacity: 0.7;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .footer-nav {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
}
</style>
