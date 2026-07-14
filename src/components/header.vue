<template>
  <header>
    <nav class="header-nav-container">
      <a href="#" class="heading-name">
        Jovel Luna
      </a>

      <button
        class="menu-toggle"
        @click="menuOpen = !menuOpen"
        :aria-expanded="menuOpen"
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul
        class="nav-links"
        :class="{ open: menuOpen }"
      >
        <li>
          <a href="#" @click="closeMenu">
            Home
          </a>
        </li>

        <li>
          <a href="#projects" @click="closeMenu">
            Projects
          </a>
        </li>

        <li>
          <a href="#experiences" @click="closeMenu">
            Experience
          </a>
        </li>

        <li>
          <a href="#skills" @click="closeMenu">
            Skills
          </a>
        </li>

        <li>
          <a href="#contact" @click="closeMenu">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";

const menuOpen = ref(false);

const closeMenu = () => {
  menuOpen.value = false;
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(245, 245, 245, .9);
  backdrop-filter: blur(10px);
  z-index: 999;
}

.header-nav-container {
  max-width: 1200px;
  margin: auto;
  padding: 1.25rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.heading-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  text-decoration: none;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links a {
  color: #334155;
  text-decoration: none;
  font-weight: 500;
  transition: color .2s ease;
}

.nav-links a:hover {
  color: #2563eb;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
}

.menu-toggle span {
  width: 24px;
  height: 2px;
  background: #0f172a;
  transition: .3s;
}


/* Mobile */
@media (max-width: 768px) {
  .header-nav-container {
    padding: 1rem 1.25rem;
  }

  .menu-toggle {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #f5f5f5;
    flex-direction: column;
    gap: 1.25rem;
    padding: 1.5rem;
    border-bottom: 1px solid #e2e8f0;
    transform: translateY(-120%);
    opacity: 0;
    pointer-events: none;
    transition: 
      transform .3s ease,
      opacity .3s ease;
  }

  .nav-links.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }
}
</style>