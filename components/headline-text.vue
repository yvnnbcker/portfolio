<script setup>
    const content = defineProps(['headline', 'text']);
</script>

<template>
    <div class="project-text">
    <h4>{{ content.headline }}</h4>
    <p>{{ content.text }}</p>
    </div>
</template>