<script setup>
    const project = defineProps(['img', 'alt', 'desc']);
</script>

<template>
    <div class="project-image">
        <img :src=project.img :alt=project.alt />
        <div class="image-desc">{{ project.desc }}</div>
    </div>
</template>