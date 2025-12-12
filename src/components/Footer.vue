<template>
  <footer class="bg-gray-50 border-t mt-12">
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
</style>
