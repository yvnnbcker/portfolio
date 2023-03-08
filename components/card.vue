<script setup>
    const preview = defineProps(['img', 'alt', 'title', 'date', 'tag', 'href', 'target']);
</script>

<template>
    <div id="card">
        <NuxtLink :href="preview.href" :target="preview.target">
            <div class="preview-image">
                <img class="img-preview" :src="preview.img" :alt="preview.alt"/>
                <Tag class="previewtag">{{ preview.tag }}</Tag>
            </div>
            <div class="card-text">
               <h4>{{ preview.title }}</h4> 
                {{ preview.date }}
            </div>
        </NuxtLink>     
    </div>
</template>