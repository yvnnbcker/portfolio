<script setup>
    const project = defineProps(['img', 'alt', 'headline', 'desc']);
</script>

<template>
    <div>
        <div class="image-text">
            <h3 v-if="project.headline!==undefined" class="text-headline">{{ project.headline }}</h3>
            <slot />
        </div>
        <div class="project-image">
            <img :src=project.img :alt=project.alt />
            <div class="image-desc">{{ project.desc }}</div>
        </div>
    </div>
</template>