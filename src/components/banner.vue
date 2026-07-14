<template>
    <div class="banner-container">
        <div class="banner-image">
            <img
                src="@/assets/logoAI.png"
                alt="Banner Image"
            />
        </div>
        <section class="banner-text">
            <h1>Hi, I'm Jovel Luna</h1>
            <h2>I build responsive & scalable web applications.</h2>
            <p>
                I'm a Full Stack Developer passionate about building
                responsive, scalable, and user-friendly web applications
                using modern technologies.
            </p>
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
    }
</style>
