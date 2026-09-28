<script setup>
import { ref } from "vue";

const menuOpen = ref(false);

const closeMenu = () => {
  menuOpen.value = false;
};
</script>

<template>
  <header>
    <nav class="header-nav-container">
      <RouterLink
        :to="{ name: 'home' }"
        class="heading-name"
        @click="closeMenu"
      >
        Jovel Luna
      </RouterLink>

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
          <RouterLink
            :to="{ name: 'home' }"
            @click="closeMenu"
          >
            Home
          </RouterLink>
        </li>

        <li>
          <RouterLink
            :to="{ name: 'projects' }"
            @click="closeMenu"
          >
            Projects
          </RouterLink>
        </li>

        <li>
          <RouterLink
            :to="{ name: 'home', hash: '#experiences' }"
            @click="closeMenu"
          >
            Experience
          </RouterLink>
        </li>

        <li>
          <RouterLink
            :to="{ name: 'home', hash: '#skills' }"
            @click="closeMenu"
          >
            Skills
          </RouterLink>
        </li>

        <li>
          <RouterLink
            :to="{ name: 'home', hash: '#contact' }"
            @click="closeMenu"
          >
            Contact
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--color-page-translucent);
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
  color: var(--color-heading);
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
  color: var(--color-chip-text);
  text-decoration: none;
  font-weight: 500;
  transition: color .2s ease;
}

.nav-links a:hover {
  color: var(--color-accent);
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
  background: var(--color-heading);
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
    background: var(--color-page);
    flex-direction: column;
    gap: 1.25rem;
    padding: 1.5rem;
    border-bottom: 1px solid var(--color-border);
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