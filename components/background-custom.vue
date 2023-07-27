<script setup>
    const bg = defineProps(['blob1', 'blob2', 'blob3', 'blob4', 'blob5', 'blob6', 'blob7', 'blob8', 'blob9']);
</script>

<template>
    <div class="background">
        <div class="background-container">
            <img :src="bg.blob1" class="blob1 blobs">
            <img :src="bg.blob2" class="blob2 blobs">
            <img :src="bg.blob3" class="blob3 blobs">
            <img :src="bg.blob4" class="blob4 blobs">
            <img :src="bg.blob5" class="blob5 blobs">
            <img :src="bg.blob6" class="blob6 blobs">
            <img :src="bg.blob7" class="blob7 blobs">
            <img :src="bg.blob8" class="blob8 blobs">
            <img :src="bg.blob9" class="blob9 blobs">
        </div>
    </div>
</template>