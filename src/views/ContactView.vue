<template>
    <section class="px-6 py-12 max-w-2xl mx-auto">
        <h1 class="text-2xl font-bold mb-4">Contact</h1>
            <div class="flex gap-6">
                <aside class="bg-white p-4 rounded-lg w-full">
                    <h2 class="text-lg font-semibold">Connect with me</h2>
                    <p class="text-sm mt-2" style="color:var(--muted)">Find me on these platforms — click to open in a new tab.</p>

                    <ul class="mt-4 space-y-3">
                        <li v-for="s in socials" :key="s.name">
                            <a :href="s.url" target="_blank" rel="noreferrer" class="flex items-center justify-between py-2 px-3 rounded hover:bg-gray-50">
                                <div class="flex items-center gap-3">
                                    <span class="text-2xl">{{ s.icon }}</span>
                                    <div>
                                        <div class="font-medium">{{ s.name }}</div>
                                        <div class="text-xs" style="color:var(--muted)">{{ s.handle }}</div>
                                    </div>
                                </div>
                                <div class="text-sm text-gray-500">↗</div>
                            </a>
                        </li>
                    </ul>

                    <div class="mt-4">
                        <div class="text-sm text-gray-600">Email</div>
                        <div class="flex gap-2 items-center mt-2">
                            <a :href="`mailto:${contactEmail}`" class="btn">{{ contactEmail }}</a>
                            <button type="button" class="btn btn-ghost" @click="copyEmail">Copy</button>
                        </div>
                    </div>
                </aside>
            </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            form: { name: '', email: '', message: '' },
            contactEmail: 'jchrister718@gmail.com',
            socials: [
                { name: 'GitHub', url: 'https://github.com/jovelluna12', handle: 'jovelluna12', icon: '🐙' },
                { name: 'LinkedIn', url: 'https://linkedin.com/in/jovelluna12', handle: 'Jovel Christer Luna', icon: '🔗' },
            ],
        }
    },
    methods: {
        async copyEmail() {
            try {
                await navigator.clipboard.writeText(this.contactEmail)
                alert('Email copied to clipboard')
            } catch (e) {
                const ta = document.createElement('textarea')
                ta.value = this.contactEmail
                document.body.appendChild(ta)
                ta.select()
                document.execCommand('copy')
                ta.remove()
                alert('Email copied to clipboard')
            }
        },
    },
}
</script>
