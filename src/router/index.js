import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobView.vue";
import NotFoundView from "@/views/NotFoundView.vue";


const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes : [
        {
            path : "/",
            name : "home",
            component : HomeView
        },
        {
            path : "/jobs",
            name : "jobs",
            component : JobView
        },
        {
            path : '/jobs/:id',
            name : 'job',
            component : JobsView
        },
        
        {
            path : '/:catchAll(.*)',
            name : 'not-found',
            component : NotFoundView
        },
    ],
});

export default router; 