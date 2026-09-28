import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import ErrorPage from '../components/ErrorPage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: ErrorPage,
            props: {
                errorCode: '404',
                errorTitle: 'Page Not Found',
                errorMessage:
                    "The page you're looking for doesn't exist or has been moved. Please check the URL or return to the homepage."
            }
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            // Smooth scroll to anchor links (for sections like #projects)
            return {
                el: to.hash,
                behavior: 'smooth'
            }
        } else if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

export default router
