<template>
    <header>
        <nav class="header-nav-container">
            <span class="heading-name">Jovel Luna</span>
            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Experience</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>

    header {
        position: fixed;
        background-color: #f5f5f5;
        padding: 24px;
        top: 0;
        right: 0;
        left: 0;
        z-index: 999;
    }

    .heading-name {
        font-size: 24px;
        font-weight: 600;
    }

    .header-nav-container {
        display: flex;
        justify-content: space-between;
    }

    .nav-links {
        gap: 12px;
        list-style: none;
        display: flex;
        justify-content: space-around;
        padding: 0;
    }
</style>
