import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    Generate: { fallback: true },
   // modules: ['@nuxt/content'],
    head: {
        link: [
            {
            rel: 'stylesheet',
            href: 'https://use.typekit.net/jmp6nrg.css'
            },
        ],
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