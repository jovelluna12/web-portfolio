<template>
    <div class="banner-container">
        <div class="banner-image">
            <img src="@/assets/logoAI.png" alt="Jovel Luna - Full Stack Developer" />
        </div>

        <section class="banner-text">
            <h1>Jovel Luna</h1>
            <h2>Full Stack Developer</h2>

            <p>
                Full Stack Developer with hands-on agency experience building, modernizing, and scaling production web
                applications. Specializing in Laravel, PHP, Vue.js, React.js, and WordPress, I bridge robust backend architecture
                with responsive frontends to deliver reliable, high-performance digital solutions.
            </p>

            <div class="banner-actions">
                <a href="#projects" class="btn btn-primary">
                    View Projects
                </a>

                <a href="#contact" class="btn btn-secondary">
                    Get in Touch
                </a>
            </div>
        </section>
    </div>
</template>

<style scoped>
.banner-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    min-height: 100vh;
    padding: 2rem 8%;
    max-width: 1400px;
    margin: 0 auto;
}

.banner-image {
    flex-shrink: 0;
}

.banner-image img {
    width: 320px;
    height: 320px;
    object-fit: cover;
}

.banner-text {
    max-width: 650px;
}

.banner-text h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    line-height: 1.1;
    margin-bottom: 1rem;
}

.banner-text h2 {
    font-size: clamp(1.25rem, 3vw, 2rem);
    color: #2563eb;
    margin-bottom: 1rem;
}

.banner-text p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #64748b;
}

/* CTA Buttons */
.banner-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 150px;
    padding: 0.85rem 1.5rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    transition:
        background-color 0.2s ease,
        color 0.2s ease,
        border-color 0.2s ease,
        transform 0.2s ease,
        box-shadow 0.2s ease;
}

.btn:hover {
    transform: translateY(-2px);
}

.btn-primary {
    color: #ffffff;
    background-color: #2563eb;
    border: 2px solid #2563eb;
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
}

.btn-primary:hover {
    background-color: #1d4ed8;
    border-color: #1d4ed8;
    box-shadow: 0 6px 16px rgba(37, 99, 235, 0.3);
}

.btn-secondary {
    color: #2563eb;
    background-color: transparent;
    border: 2px solid #2563eb;
}

.btn-secondary:hover {
    color: #ffffff;
    background-color: #2563eb;
}

/* Large Tablets */
@media (max-width: 1024px) {
    .banner-container {
        gap: 3rem;
        padding: 2rem 5%;
    }

    .banner-image img {
        width: 260px;
        height: 260px;
    }
}

/* Tablets */
@media (max-width: 768px) {
    .banner-container {
        flex-direction: column;
        text-align: center;
        justify-content: center;
        gap: 2rem;
        min-height: auto;
        padding: 5rem 1.5rem;
    }

    .banner-image img {
        width: 220px;
        height: 220px;
    }

    .banner-text {
        max-width: 100%;
    }

    .banner-actions {
        justify-content: center;
    }
}

/* Phones */
@media (max-width: 480px) {
    .banner-container {
        padding: 4rem 1.25rem;
    }

    .banner-image img {
        width: 180px;
        height: 180px;
    }

    .banner-text h1 {
        margin-bottom: 0.75rem;
    }

    .banner-text h2 {
        margin-bottom: 0.75rem;
    }

    .banner-text p {
        font-size: 1rem;
    }

    .banner-actions {
        flex-direction: column;
        width: 100%;
        gap: 0.75rem;
    }

    .btn {
        width: 100%;
    }
}

</style>