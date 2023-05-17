<script setup>
    const contact = defineProps(['button']);
</script>
<template>
    <a href="mailto:yvonnebecker93@web.de" :class=contact.button>
        <div class="mail">yvonnebecker93@web.de</div>
        <div class="mail-mobile">e-mail</div>
    </a>
</template>
