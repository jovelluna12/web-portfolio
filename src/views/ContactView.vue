<template>
    <section class="px-6 py-12 max-w-2xl mx-auto">
        <h1 class="text-2xl font-bold mb-4">Contact</h1>
        <form @submit.prevent="send" class="space-y-4">
            <div>
                <label class="block text-sm font-medium">Name</label>
                <input v-model="form.name" class="w-full border rounded px-3 py-2" placeholder="Your name" />
            </div>
            <div>
                <label class="block text-sm font-medium">Email</label>
                <input v-model="form.email" type="email" class="w-full border rounded px-3 py-2" placeholder="you@example.com" />
            </div>
            <div>
                <label class="block text-sm font-medium">Message</label>
                <textarea v-model="form.message" class="w-full border rounded px-3 py-2" rows="5" placeholder="Say hi"></textarea>
            </div>
            <div>
                <button class="green px-4 py-2 rounded" type="submit">Send</button>
            </div>
        </form>
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
