<template>
  <Transition name="fade">
    <button
      v-if="isVisible"
      class="back-to-top"
      @click="scrollToTop"
      aria-label="Back to top"
    >
      ↑
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
  window.addEventListener("scroll", handleScroll);
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
  width: 52px;
  height: 52px;
  border: none;
  border-radius: 50%;
  background: #2563eb;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    opacity 0.2s ease;
  z-index: 1000;
}

.back-to-top:hover {
  background: #1d4ed8;
  transform: translateY(-3px);
}

.back-to-top:active {
  transform: translateY(0);
}

.back-to-top:focus-visible {
  outline: 3px solid #93c5fd;
  outline-offset: 3px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

@media (max-width: 768px) {
  .back-to-top {
    right: 1rem;
    bottom: 1rem;
    width: 48px;
    height: 48px;
    font-size: 1.25rem;
  }
}
</style>