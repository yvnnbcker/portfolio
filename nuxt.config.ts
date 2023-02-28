import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    Generate: { fallback: true },
   // modules: ['@nuxt/content'],
   meta: {
    title: 'Yvonne Becker, Interaction Designerin',
    name: 'Yvonne Becker',
    content: 'My Interaction Design Portfolio – UI, UX, Web Development, Exhibition and Print Projects',
    },
    head: {
        link: [
            {
            rel: 'stylesheet',
            href: 'https://use.typekit.net/jmp6nrg.css'
            },
            {
            rel: 'preload',
            as: 'image',
            href: '/yvonne-1.png'
            },
            {
            rel: 'preload',
            as: 'image',
            href: '/yvonne-2.png'
            },
            {
            rel: 'preload',
            as: 'image',
            href: '/yvonne-3.png'
            }, 
            {
            rel: 'preload',
            as: 'image',
            href: '/yvonne-4.png'
            },
            {
            rel: 'preload',
            as: 'image',
            href: '/yvonne-5.png'
            },  
        ],
        meta: {
            name: 'Yvonne Becker',
            content: 'My Interaction Design Portfolio – UI, UX, Web Development, Exhibition and Print Projects',
            },
    },
    css: [
        '~/assets/scss/main.scss'
        ],
    methods: {
        color: function(hex){
            console.log(hex)
        }
    }
});

