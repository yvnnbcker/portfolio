<script setup>
    const button = defineProps(['icon', 'href']);
</script>

<template>
    <div class="button-icon">
        <div :class="button.icon" class="button-image">
        </div>
        <a :href="button.href" class="button-text"><slot /></a>      
    </div>
</template>