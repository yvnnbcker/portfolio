<script setup>
    const slogan = defineProps(['text', 'highlight', 'extra']);
</script>

<template>
    <div class="slogan-text">
        {{ slogan.text }}
        <div class="slogan-highlight">
            <div class="highlight-text" id="text-animated">{{ slogan.highlight }}</div>
            <div class="highlight-line"></div>
        </div>
    </div>
</template>