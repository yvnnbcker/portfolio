<script setup>
    const info = defineProps(['teamtitle','team1', 'team2', 'team3', 'team4', 'team5', 'team6', 'team7', 'team8', 'team9', 'href1', 'href2', 'href3', 'href4', 'href5', 'href6', 'href7', 'href8', 'href9','tool1', 'tool2', 'tool3', 'tool4', 'tool5', 'tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6', 'tag7', 'href', 'buttontext', 'buttoncolor']);
</script>

<template>
    <Line />
    <div id="project-info">
        <div v-if="info.team1!=empty" class="project-team">
            <b>{{ info.teamtitle }}</b>
            <div class="team-container">
                <a :href="info.href1" class="no-style"><img :src=info.team1 class="teammember"/></a>
                <a :href="info.href2" class="no-style"><img v-if="info.team2!=empty" :src=info.team2 class="teammember"/></a>
                <a :href="info.href3" class="no-style"><img v-if="info.team3!=empty" :src=info.team3 class="teammember"/></a>
                <a :href="info.href4" class="no-style"><img v-if="info.team4!=empty" :src=info.team4 class="teammember"/></a>
                <a :href="info.href5" class="no-style"><img v-if="info.team5!=empty" :src=info.team5 class="teammember"/></a>
                <a :href="info.href6" class="no-style"><img v-if="info.team6!=empty" :src=info.team6 class="teammember"/></a>
                <a :href="info.href7" class="no-style"><img v-if="info.team7!=empty" :src=info.team7 class="teammember"/></a>
                <a :href="info.href8" class="no-style"><img v-if="info.team8!=empty" :src=info.team8 class="teammember"/></a>
                <a :href="info.href9" class="no-style"><img v-if="info.team9!=empty" :src=info.team9 class="teammember"/></a>
            </div>
        </div>
        <div v-if="info.tool1!=empty" class="project-tools">
            <b>Tools</b>
            <div class="tool-container">
                <img :src=info.tool1 class="project-tool">
                <img v-if="info.tool2!=empty" :src=info.tool2 class="project-tool"/>
                <img v-if="info.tool3!=empty" :src=info.tool3 class="project-tool"/>
                <img v-if="info.tool4!=empty" :src=info.tool4 class="project-tool"/>
                <img v-if="info.tool5!=empty" :src=info.tool5 class="project-tool"/>
            </div>
        </div>
        <div v-if="info.tag1!=empty" class="project-tags">
            <b>Tags</b>
            <div class="tag-container">
                <div class="onetag-container"><Tag >{{ info.tag1 }}</Tag></div>
                <div class="onetag-container"><Tag v-if="info.tag2!=empty" >{{ info.tag2 }}</Tag></div>
                <div class="onetag-container"><Tag v-if="info.tag3!=empty">{{ info.tag3 }}</Tag></div>
                <div class="onetag-container"><Tag v-if="info.tag4!=empty">{{ info.tag4 }}</Tag></div>
                <div class="onetag-container"><Tag v-if="info.tag5!=empty">{{ info.tag5 }}</Tag></div>
                <div class="onetag-container"><Tag v-if="info.tag6!=empty">{{ info.tag6 }}</Tag></div>
                <div class="onetag-container"><Tag v-if="info.tag7!=empty">{{ info.tag7 }}</Tag></div>
            </div>
        </div>
        <div v-if="info.buttontext!=empty" class="project-links">
            <b>Links</b>
            <Buttonicon icon="arrow-right" color="accent-new" :href="info.href" :class="info.buttoncolor" class="iconsmall-first">{{ info.buttontext }}</Buttonicon>
        </div>
    </div>
</template>