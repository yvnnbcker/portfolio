<script setup>
    const project = defineProps(['img1', 'img2', 'alt1', 'alt2','desc1', 'desc2']);
</script>

<template>
    <div id="project-images">
        <div class="project-image">
            <img :src=project.img1 :alt=project.alt1 />
            <div class="image-desc">{{ project.desc1 }}</div>
        </div>
        
        <div class="project-image">
            <img :src=project.img2 :alt=project.alt2 />
            <div class="image-desc">{{ project.desc2 }}</div>
        </div>
    </div>
</template>