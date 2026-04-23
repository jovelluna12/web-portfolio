<template>
  <header :class="['nav-header', { 'scrolled': isScrolled }]">
    <div class="nav-container">
      <a href="#home" class="logo">
        <span class="logo-bracket">&lt;</span>
        <span class="logo-text">JC</span>
        <span class="logo-bracket">/&gt;</span>
      </a>

      <button 
        class="mobile-toggle" 
        @click="toggleMobile" 
        :aria-expanded="mobileOpen" 
        aria-label="Toggle navigation"
      >
        <span class="hamburger" :class="{ 'active': mobileOpen }">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <nav :class="['nav-links', { 'open': mobileOpen }]">
        <a href="#home" @click="closeMobile">Home</a>
        <a href="#projects" @click="closeMobile">Projects</a>
        <a href="#posts" @click="closeMobile">Posts</a>
        <a href="#about" @click="closeMobile">About</a>
        <a href="#contact" class="btn btn-primary" @click="closeMobile">Contact</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return { 
      mobileOpen: false,
      isScrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    toggleMobile() { 
      this.mobileOpen = !this.mobileOpen 
    },
    closeMobile() {
      this.mobileOpen = false
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    }
  }
}
</script>

<style scoped>
.nav-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 20px 0;
  transition: all 0.3s ease;
  background: transparent;
}

.nav-header.scrolled {
  background: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(10px);
  padding: 16px 0;
  border-bottom: 1px solid var(--card-border);
}

.nav-container {
  max-width: var(--max-content-width);
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 1.5rem;
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

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-links a {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: var(--foreground);
}

.nav-links .btn {
  color: white;
}

.mobile-toggle {
  display: none;
  background: transparent;
  border: none;
  padding: 8px;
  cursor: pointer;
}

.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 24px;
}

.hamburger span {
  display: block;
  height: 2px;
  background: var(--foreground);
  transition: all 0.3s ease;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 768px) {
  .mobile-toggle {
    display: flex;
  }
  
  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(10, 10, 10, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    padding: 24px;
    gap: 16px;
    border-bottom: 1px solid var(--card-border);
  }
  
  .nav-links.open {
    display: flex;
  }
  
  .nav-links a {
    font-size: 1rem;
  }
}
</style>
