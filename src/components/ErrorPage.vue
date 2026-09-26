<template>
    <div class="error-container">
        <div class="error-content">
            <div class="error-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
            </div>

            <h1>{{ errorCode }}</h1>
            <h2>{{ errorTitle }}</h2>
            <p>{{ errorMessage }}</p>

            <div class="error-actions">
                <a href="/" class="btn btn-primary">Back to Home</a>
                <button @click="goBack" class="btn btn-outline">Go Back</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    errorCode: {
        type: String,
        default: '404'
    },
    errorTitle: {
        type: String,
        default: 'Page Not Found'
    },
    errorMessage: {
        type: String,
        default: "The page you're looking for doesn't exist or has been moved. Please check the URL or return to the homepage."
    }
})

const goBack = () => {
    window.history.back()
}
</script>

<style scoped>
.error-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 2rem 8%;
    background-color: #f5f5f5;
}

.error-content {
    max-width: 600px;
    text-align: center;
    animation: fadeIn 0.6s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.error-icon {
    width: 100px;
    height: 100px;
    margin: 0 auto 2rem;
    color: #2563eb;
    opacity: 0.9;
}

.error-icon svg {
    width: 100%;
    height: 100%;
}

.error-content h1 {
    font-size: clamp(4rem, 10vw, 8rem);
    line-height: 1;
    margin-bottom: 1rem;
    color: #2563eb;
    font-weight: 700;
}

.error-content h2 {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    line-height: 1.2;
    margin-bottom: 1rem;
    color: var(--color-heading);
}

.error-content p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #64748b;
    margin-bottom: 2.5rem;
}

.error-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 140px;
    padding: 0.85rem 1.25rem;
    border-radius: 0.5rem;
    font-size: 0.95rem;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
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

.btn-outline {
    color: #475569;
    background-color: transparent;
    border: 2px solid #cbd5e1;
}

.btn-outline:hover {
    color: #1e293b;
    border-color: #94a3b8;
    background-color: rgba(0, 0, 0, 0.02);
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
    .error-container {
        background-color: var(--vt-c-black);
    }

    .error-content p {
        color: rgba(235, 235, 235, 0.64);
    }

    .btn-outline {
        color: rgba(235, 235, 235, 0.9);
        border-color: rgba(203, 213, 225, 0.3);
    }

    .btn-outline:hover {
        color: #ffffff;
        border-color: rgba(203, 213, 225, 0.5);
        background-color: rgba(255, 255, 255, 0.05);
    }
}

/* Tablets */
@media (max-width: 768px) {
    .error-container {
        padding: 3rem 1.5rem;
    }

    .error-icon {
        width: 80px;
        height: 80px;
        margin-bottom: 1.5rem;
    }

    .error-content p {
        font-size: 1rem;
        margin-bottom: 2rem;
    }
}

/* Phones */
@media (max-width: 480px) {
    .error-container {
        padding: 2rem 1.25rem;
    }

    .error-icon {
        width: 60px;
        height: 60px;
        margin-bottom: 1.25rem;
    }

    .error-content h2 {
        margin-bottom: 0.75rem;
    }

    .error-content p {
        font-size: 0.95rem;
        margin-bottom: 1.75rem;
    }

    .error-actions {
        flex-direction: column;
        width: 100%;
        gap: 0.75rem;
    }

    .btn {
        width: 100%;
    }
}
</style>
