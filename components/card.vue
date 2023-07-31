<script setup>
    const preview = defineProps(['img', 'alt', 'title', 'date', 'tag1', 'tag2', 'tag3', 'href', 'target']);
</script>

<template>
    <div id="card">
        <NuxtLink :href="preview.href" :target="preview.target">
            <div class="preview-image">
                <img class="img-preview" :src="preview.img" :alt="preview.alt"/>
                <div class="preview-tag">
                    <Tag>{{ preview.tag1 }}</Tag>
                    <Tag v-if="preview.tag2!==undefined" class="tag2">{{ preview.tag2 }}</Tag>
                    <Tag v-if="preview.tag3!==undefined" class="tag3">{{ preview.tag3 }}</Tag>
                </div>
            </div>
            <div class="card-text">
               <h3>{{ preview.title }}</h3> 
                {{ preview.date }}
            </div>
        </NuxtLink>     
    </div>
</template>
