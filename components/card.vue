<script setup>
    const preview = defineProps(['img', 'alt', 'title', 'date', 'tag', 'href']);
</script>

<template>
    <div id="card">
        <NuxtLink :href="preview.href" target="_blank">
            <div class="preview-image">
                <img class="img-preview" :src="preview.img" :alt="preview.alt"/>
                <div :class="preview.tag">{{ preview.tag }}</div>
            </div>
            <div class="card-text">
               <h4>{{ preview.title }}</h4> 
                {{ preview.date }}
            </div>
        </NuxtLink>     
    </div>
</template>