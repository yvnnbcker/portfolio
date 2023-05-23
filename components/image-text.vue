<script setup>
    const project = defineProps(['img', 'alt', 'headline', 'desc']);
</script>

<template>
    <div class="image-text">
        <h3 v-if="project.headline!==undefined" class="card-headline">{{ project.headline }}</h3>
        <div class="image-text-content">
            <slot/>
            <div v-if="project.img!==undefined" class="project-image">
                <img :src=project.img :alt=project.alt />
                <div class="image-desc">{{ project.desc }}</div>
            </div>
        </div>
    </div>
</template>