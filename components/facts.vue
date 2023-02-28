<script setup>
    const facts = defineProps(['team1', 'team2', 'team3', 'team4', 'team5', 'tool1', 'tool2', 'tool3', 'tool4', 'tool5', 'tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6', 'tag7', 'href', 'buttontext']);
</script>

<template>
    <div class="project-facts">
        <div class="project-team">
            <b>Team</b>
            <div :class=facts.team1 class="teammember"></div>
            <div :class=facts.team2 class="teammember"></div>
            <div :class=facts.team3 class="teammember"></div>
            <div :class=facts.team4 class="teammember"></div>
            <div :class=facts.team5 class="teammember"></div>
        </div>
        <div class="project-tools">
            <b>Tools</b>
            <div :class=facts.tool1 class="project-tool"></div>
            <div :class=facts.tool2 class="project-tool"></div>
            <div :class=facts.tool3 class="project-tool"></div>
            <div :class=facts.tool4 class="project-tool"></div>
            <div :class=facts.tool5 class="project-tool"></div>
        </div>
        <div class="project-tags">
            <b>Tags</b>
            <Tag>{{ facts.tag1 }}</Tag>
            <Tag>{{ facts.tag2 }}</Tag>
            <Tag>{{ facts.tag3 }}</Tag>
            <Tag>{{ facts.tag4 }}</Tag>
            <Tag>{{ facts.tag5 }}</Tag>
            <Tag>{{ facts.tag6 }}</Tag>
            <Tag>{{ facts.tag7 }}</Tag>
        </div>
        <div class="project-links">
            <b>Links</b>
            <Buttonicon icon="arrow-right" :href=facts.href class="icon-last">{{ facts.buttontext }}</Buttonicon>
        </div>
    </div>
</template>