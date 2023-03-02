<script setup>
    const facts = defineProps(['team1', 'team2', 'team3', 'team4', 'team5', 'team6', 'team7', 'team8', 'team9', 'tool1', 'tool2', 'tool3', 'tool4', 'tool5', 'tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6', 'tag7', 'href', 'buttontext']);
</script>

<template>
    <div id="project-facts">
        <div v-if="facts.team1!=empty" class="project-team">
            <b>Team</b>
            <div class="team-container">
                <img :src=facts.team1 class="teammember"/>
                <img v-if="facts.team2!=empty" :src=facts.team2 class="teammember"/>
                <img v-if="facts.team3!=empty" :src=facts.team3 class="teammember"/>
                <img v-if="facts.team4!=empty" :src=facts.team4 class="teammember"/>
                <img v-if="facts.team5!=empty" :src=facts.team5 class="teammember"/>
                <img v-if="facts.team6!=empty" :src=facts.team6 class="teammember"/>
                <img v-if="facts.team7!=empty" :src=facts.team7 class="teammember"/>
                <img v-if="facts.team8!=empty" :src=facts.team8 class="teammember"/>
                <img v-if="facts.team9!=empty" :src=facts.team9 class="teammember"/>
            </div>
        </div>
        <div v-if="facts.tool1!=empty" class="project-tools">
            <b>Tools</b>
            <div class="tool-container">
                <img :src=facts.tool1 class="project-tool">
                <img v-if="facts.tool2!=empty" :src=facts.tool2 class="project-tool"/>
                <img v-if="facts.tool3!=empty" :src=facts.tool3 class="project-tool"/>
                <img v-if="facts.tool4!=empty" :src=facts.tool4 class="project-tool"/>
                <img v-if="facts.tool5!=empty" :src=facts.tool5 class="project-tool"/>
            </div>
        </div>
        <div v-if="facts.tag1!=empty" class="project-tags">
            <b>Tags</b>
            <div class="tag-container">
                <div class="onetag-container"><Tag >{{ facts.tag1 }}</Tag></div>
                <div class="onetag-container"><Tag v-if="facts.tag2!=empty" >{{ facts.tag2 }}</Tag></div>
                <div class="onetag-container"><Tag v-if="facts.tag3!=empty">{{ facts.tag3 }}</Tag></div>
                <div class="onetag-container"><Tag v-if="facts.tag4!=empty">{{ facts.tag4 }}</Tag></div>
                <div class="onetag-container"><Tag v-if="facts.tag5!=empty">{{ facts.tag5 }}</Tag></div>
                <div class="onetag-container"><Tag v-if="facts.tag6!=empty">{{ facts.tag6 }}</Tag></div>
                <div class="onetag-container"><Tag v-if="facts.tag7!=empty">{{ facts.tag7 }}</Tag></div>
            </div>
        </div>
        <div v-if="facts.buttontext!=empty" class="project-links">
            <b>Links</b>
            <Buttonicon icon="arrow-right" :href="facts.href" class="icon-last">{{ facts.buttontext }}</Buttonicon>
        </div>
    </div>
</template>