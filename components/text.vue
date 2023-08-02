<script setup>
    const project = defineProps(['headline', 'desc', 'order']);
</script>

<template>
    <div class="text" :class="project.order">
        <h3 v-if="project.headline!==undefined">{{ project.headline }}</h3>
        <p v-if="project.desc!==undefined">{{ project.desc }}</p>
    </div>
</template>