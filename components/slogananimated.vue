<script setup>
    const slogan = defineProps(['text', 'animation', 'line']);
</script>

<template>
    <div class="slogan-text">
        {{ slogan.text }}
        <div class="slogan-highlight">
            <div class="highlight-text"><span :id="slogan.animation"></span></div>
            <div class="highlight-line" :class="slogan.line"></div>
        </div>
    </div>
</template>