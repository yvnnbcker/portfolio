<script setup>
    const info = defineProps(['teamtitle','team1', 'team2', 'team3', 'team4', 'team5', 'team6', 'team7', 'team8', 'team9', 'href1', 'href2', 'href3', 'href4', 'href5', 'href6', 'href7', 'href8', 'href9','tool1', 'tool2', 'tool3', 'tool4', 'tool5', 'tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6', 'tag7', 'href', 'buttontext', 'buttoncolor']);
</script>

<template>
    <div>
        <Line />
        <div id="project-info">
            <div v-if="info.team1!==undefined" class="project-team">
                <b>{{ info.teamtitle }}</b>
                <div class="team-container">
                    <a :href="info.href1" class="no-style"><img :src=info.team1 class="teammember"/></a>
                    <a :href="info.href2" class="no-style"><img v-if="info.team2!==undefined" :src=info.team2 class="teammember"/></a>
                    <a :href="info.href3" class="no-style"><img v-if="info.team3!==undefined" :src=info.team3 class="teammember"/></a>
                    <a :href="info.href4" class="no-style"><img v-if="info.team4!==undefined" :src=info.team4 class="teammember"/></a>
                    <a :href="info.href5" class="no-style"><img v-if="info.team5!==undefined" :src=info.team5 class="teammember"/></a>
                    <a :href="info.href6" class="no-style"><img v-if="info.team6!==undefined" :src=info.team6 class="teammember"/></a>
                    <a :href="info.href7" class="no-style"><img v-if="info.team7!==undefined" :src=info.team7 class="teammember"/></a>
                    <a :href="info.href8" class="no-style"><img v-if="info.team8!==undefined" :src=info.team8 class="teammember"/></a>
                    <a :href="info.href9" class="no-style"><img v-if="info.team9!==undefined" :src=info.team9 class="teammember"/></a>
                </div>
            </div>
            <div v-if="info.tool1!==undefined" class="project-tools">
                <b>Tools</b>
                <div class="tool-container">
                    <img :src=info.tool1 class="project-tool">
                    <img v-if="info.tool2!==undefined" :src=info.tool2 class="project-tool"/>
                    <img v-if="info.tool3!==undefined" :src=info.tool3 class="project-tool"/>
                    <img v-if="info.tool4!==undefined" :src=info.tool4 class="project-tool"/>
                    <img v-if="info.tool5!==undefined" :src=info.tool5 class="project-tool"/>
                </div>
            </div>
            <div v-if="info.tag1!==undefined" class="project-tags">
                <b>Tags</b>
                <div class="tag-container">
                    <div class="onetag-container"><Tag >{{ info.tag1 }}</Tag></div>
                    <div class="onetag-container"><Tag v-if="info.tag2!==undefined" >{{ info.tag2 }}</Tag></div>
                    <div class="onetag-container"><Tag v-if="info.tag3!==undefined">{{ info.tag3 }}</Tag></div>
                    <div class="onetag-container"><Tag v-if="info.tag4!==undefined">{{ info.tag4 }}</Tag></div>
                    <div class="onetag-container"><Tag v-if="info.tag5!==undefined">{{ info.tag5 }}</Tag></div>
                    <div class="onetag-container"><Tag v-if="info.tag6!==undefined">{{ info.tag6 }}</Tag></div>
                    <div class="onetag-container"><Tag v-if="info.tag7!==undefined">{{ info.tag7 }}</Tag></div>
                </div>
            </div>
            <div v-if="info.buttontext!==undefined" class="project-links">
                <b>Links</b>
                <Buttonicon icon="arrow-right" color="accent-new" :href="info.href" :class="info.buttoncolor" class="iconsmall-first">{{ info.buttontext }}</Buttonicon>
            </div>
        </div>
    </div>
</template>