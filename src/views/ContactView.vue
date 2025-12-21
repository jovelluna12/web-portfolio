<template>
    <section class="px-6 py-12 max-w-2xl mx-auto">
        <h1 class="text-2xl font-bold mb-4">Page Coming Soon</h1>
        <p class="mb-6">This contact page is under construction. Please check back later!</p>
    </section>
</template>

<script>
export default {
    data() {
        return {
            form: { name: '', email: '', message: '' },
        }
    },
    methods: {
        send() {
            // client-side demo only
            alert(`Thanks ${this.form.name || 'there'} — message received.`)
            this.form = { name: '', email: '', message: '' }
        },
    },
}
</script>
