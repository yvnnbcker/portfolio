<script setup>
    const slides = [
        { id: '1', desc: 'old navigtion, state closed', img: '/blum_nav-old0.jpg', alt: 'old navigtion of blum website, state closed' },
        { id: '2', desc: 'old navigtion, state open', img: '/blum_nav-old1.jpg', alt: 'old navigtion of blum website, state open' },
        { id: '3', desc: 'old navigtion, state closed', img: '/blum_nav-old2.jpg', alt: 'old navigtion of blum website, state open' },
        { id: '4', desc: 'old navigtion, state closed', img: '/blum_nav-old3.jpg', alt: 'old navigtion of blum website, state open' },
    ]
    const breakpoints = {
        0: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        600: {
            itemsToShow: 1.5,
            snapAlign: 'center',
        },
        1024: {
            itemsToShow: 2,
            snapAlign: 'center',
        },
        1800: {
            itemsToShow: 3.5,
            snapAlign: 'center',
        }
    }
</script>

<template>
    <Carousel :wrap-around="true" :breakpoints="breakpoints" :transition="800">
        <Slide v-for="slide in slides" :key="slide.id">
            <div class="carousel__item"><img :src="slide.img" :alt="slide.alt"></div>
            <p>{{ slide.desc }}</p>
        </Slide>

      <template #addons>
        <Navigation>
            <template #prev>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M40.1421 23.9099H10.4436" stroke="#ffffff" stroke-width="3"/>
                <path d="M26 8L10 24L26 40" stroke="#ffffff" stroke-width="3"/>
                </svg>
            </template>
            <template #next>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M7.85791 23.9099H37.5564" stroke="#ffffff" stroke-width="3"/>
                <path d="M22 8L38 24L22 40" stroke="#ffffff" stroke-width="3"/>
                </svg>
            </template>
        </Navigation>
        <Pagination />
      </template>
    </Carousel>
  </template>
  
<script>
    import { defineComponent } from 'vue'
    import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
    import 'vue3-carousel/dist/carousel.css'

    export default defineComponent({
    name: 'Slider',
    components: {
        Carousel,
        Slide,
        Navigation,
        Pagination
    },
    })
</script>