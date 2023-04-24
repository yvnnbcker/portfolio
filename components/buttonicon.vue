<script setup>
    const button = defineProps(['icon', 'color', 'href']);
</script>

<template>
    <div class="button-icon">
        <div :class="button.icon, button.color" class="button-image">
        </div>
        <a :href="button.href" class="button-text" :class="button.color"><slot /></a>      
    </div>
</template>