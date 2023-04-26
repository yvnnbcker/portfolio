<script setup>
    const bullet = defineProps(['src', 'alt', 'title', 'bullet1', 'bullet2', 'bullet3', 'bullet4', 'bullet5', 'bullet6']);
</script>

<template>
    <div class="image-text">
        <img :src="bullet.src" :alt="bullet.alt">
        <h3 v-if="bullet.title!==undefined" class="bullet-title">{{ bullet.title }}</h3>
        <div v-if="bullet.bullet1!==undefined" class="single-bullet"> {{ bullet.bullet1 }}</div>
        <div v-if="bullet.bullet2!==undefined" class="single-bullet"> {{ bullet.bullet2 }}</div>
        <div v-if="bullet.bullet3!==undefined" class="single-bullet"> {{ bullet.bullet3 }}</div>
        <div v-if="bullet.bullet4!==undefined" class="single-bullet"> {{ bullet.bullet4 }}</div>
        <div v-if="bullet.bullet5!==undefined" class="single-bullet"> {{ bullet.bullet5 }}</div>
        <div v-if="bullet.bullet6!==undefined" class="single-bullet"> {{ bullet.bullet6 }}</div>
    </div>
</template>