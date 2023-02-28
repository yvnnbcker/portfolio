<script setup>
    const content = defineProps(['headline', 'text']);
</script>

<template>
    <div class="project-content">
    <h3>{{ content.headline }}</h3>
    <p>{{ content.text }}</p>
    </div>
</template>