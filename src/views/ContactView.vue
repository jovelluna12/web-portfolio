<template>
    <section class="px-6 py-12 max-w-2xl mx-auto">
        <h1 class="text-2xl font-bold mb-6">Contact Details</h1>

        <ul class="space-y-4">
            <li class="border p-4 rounded">
                <p class="font-semibold">Name</p>
                <p>{{ details.name }}</p>
            </li>

            <li class="border p-4 rounded">
                <p class="font-semibold">Email</p>
                <p>{{ details.email }}</p>
            </li>

            <li class="border p-4 rounded">
                <p class="font-semibold">LinkedIn</p>
                <p>{{ details.email }}</p>
            </li>

            <li class="border p-4 rounded">
                <p class="font-semibold">Address</p>
                <p>{{ details.address }}</p>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            details: {
                name: 'Jovel Christer Luna',
                email: 'jovelchristerluna.professional@gmail.com',
                linkedin: 'linkedin.com/in/jovelluna12',
                address: 'Cagayan De Oro City, Misamis Oriental, Philippines',
            },
        }
    },
}
</script>