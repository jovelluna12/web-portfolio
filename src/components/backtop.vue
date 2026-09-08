<template>
  <Transition name="back-to-top-fade">
    <button v-if="isVisible" class="back-to-top" @click="scrollToTop" aria-label="Back to top" title="Back to top">
      <span class="back-to-top-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 14L12 8L18 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </span>
    </button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isVisible = ref(false);

const handleScroll = () => {
  isVisible.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.back-to-top {
  position: fixed;
  right: 2rem;
  bottom: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 54px;
  height: 54px;

  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;

  background: rgba(37, 99, 235, 0.9);
  color: #ffffff;

  cursor: pointer;

  box-shadow:
    0 10px 30px rgba(37, 99, 235, 0.3),
    0 4px 10px rgba(0, 0, 0, 0.12);

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  transition:
    transform 0.25s ease,
    background-color 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;

  z-index: 1000;
}

.back-to-top:hover {
  background: #1d4ed8;
  border-color: rgba(255, 255, 255, 0.35);

  transform: translateY(-5px);

  box-shadow:
    0 14px 35px rgba(37, 99, 235, 0.4),
    0 6px 14px rgba(0, 0, 0, 0.15);
}

.back-to-top:active {
  transform: translateY(-1px);
}

.back-to-top-icon {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;

  transition: transform 0.25s ease;
}

.back-to-top-icon svg {
  width: 22px;
  height: 22px;
}

.back-to-top:hover .back-to-top-icon {
  transform: translateY(-2px);
}

.back-to-top:focus-visible {
  outline: 3px solid #93c5fd;
  outline-offset: 4px;
}

/* Entry / exit animation */
.back-to-top-fade-enter-active,
.back-to-top-fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.back-to-top-fade-enter-from,
.back-to-top-fade-leave-to {
  opacity: 0;
  transform: translateY(15px) scale(0.85);
}

/* Mobile */
@media (max-width: 768px) {
  .back-to-top {
    right: 1.25rem;
    bottom: 1.25rem;

    width: 48px;
    height: 48px;
  }

  .back-to-top-icon svg {
    width: 20px;
    height: 20px;
  }
}

/* Respect reduced-motion preferences */
@media (prefers-reduced-motion: reduce) {

  .back-to-top,
  .back-to-top-icon,
  .back-to-top-fade-enter-active,
  .back-to-top-fade-leave-active {
    transition: none;
  }
}
</style>