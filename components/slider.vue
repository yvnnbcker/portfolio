<script setup>
    const carousel = defineProps(['img1', 'alt1', 'img2', 'alt2']);
</script>

<template>
    <div id="carousel">
        <div class="carousel-images">

        </div>
        <div class="carousel-controls"></div>
        <div class="carousel-pagination"></div>
    </div>
</template>