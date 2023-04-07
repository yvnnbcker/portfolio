<script setup>
    const bullet = defineProps(['src', 'alt', 'title', 'bullet1', 'bullet2', 'bullet3', 'bullet4', 'bullet5', 'bullet6']);
</script>

<template>
    <div class="image-text">
        <img :src="bullet.src" :alt="bullet.alt">
        <h4 v-if="bullet.title!=empty" class="bullet-title">{{ bullet.title }}</h4>
        <div v-if="bullet.bullet1!=empty" class="single-bullet"> {{ bullet.bullet1 }}</div>
        <div v-if="bullet.bullet2!=empty" class="single-bullet"> {{ bullet.bullet2 }}</div>
        <div v-if="bullet.bullet3!=empty" class="single-bullet"> {{ bullet.bullet3 }}</div>
        <div v-if="bullet.bullet4!=empty" class="single-bullet"> {{ bullet.bullet4 }}</div>
        <div v-if="bullet.bullet5!=empty" class="single-bullet"> {{ bullet.bullet5 }}</div>
        <div v-if="bullet.bullet6!=empty" class="single-bullet"> {{ bullet.bullet6 }}</div>
    </div>
</template>