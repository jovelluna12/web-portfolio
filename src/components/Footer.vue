<template>
  <footer class="site-footer">
    <div class="max-w-6xl mx-auto p-6 text-center text-sm text-gray-600">
      <div>© {{ year }} Jovel Christer — Built with Vue</div>
    </div>
  </footer>
</template>

<script>
export default {
  data() { return { year: new Date().getFullYear() } }
}
</script>

<style scoped>
<style scoped>
.site-footer { border-top: 1px solid #eee; margin-top: 3rem; background: #fafafa }
</style>
