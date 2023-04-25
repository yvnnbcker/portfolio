<script setup>
    const contact = defineProps(['button']);
</script>
<template>
    <a href="mailto:yvonnebecker93@web.de" :class=contact.button>
        <slot />
    </a>
</template>
