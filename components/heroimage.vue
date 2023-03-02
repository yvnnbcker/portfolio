<script setup>
    const hero = defineProps(['title', 'subtitle', 'date', 'img', 'alt',]);
</script>

<template>
    <div id="hero-image">
        <div class="hero-content">
            <div class="project-headline">            
                <div class="project-subtitle"><b>{{ hero.subtitle }}</b></div>
                <h1>{{ hero.title }}</h1>
            </div>
            <div class="project-date">{{ hero.date }}</div>
        </div>
        <img :src=hero.img :alt=hero.alt />
    </div>
</template>