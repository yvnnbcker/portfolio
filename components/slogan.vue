<script setup>
    const slogan = defineProps(['text', 'highlight', 'icon']);
</script>

<template>
    <div class="slogan-text">
        {{ slogan.text }}
        <div class="slogan-highlight">
            <div class="highlight-text">{{ slogan.highlight }}</div>
            <div class="highlight-line"></div>
        </div>
        <div :class="slogan.icon" class="slogan-icon"></div>
    </div>
</template>