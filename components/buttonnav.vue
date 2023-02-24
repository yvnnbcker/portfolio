<script setup>
    const button = defineProps(['href']);
</script>

<template>
     <a :href="button.href" class="button-nav"><slot /></a>
</template>