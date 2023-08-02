<template>
  <div>
    <div id="project-content-container">
      <Heroimage
        title="Navigation Rework"
        subtitle="Blum Facelift"
        date="02/2022"
        img="/blum_nav-hero.jpg"
        imgmobile="/blum_nav-heromobile.jpg"
        alt="screenshot of blum website"
      />
      <Infobox
        teamtitle="Agency"
        team1="/logo-21torr.svg"
        href1="https://www.21torr.com/"
        tool1="/logo-sketch.svg"
        tool2="/logo-miro.svg"
        tool3="/logo-teams.svg"
        tool4="/logo-jira.svg"
        tool5="/logo-protopie.svg"
        href="https://www.blum.com/"
        buttontext="try out"
        />
        <Sectiontitle>what to tackle</Sectiontitle>
        <Text
          headline="Define problems"
          desc="The old navigation was put to test. The burger menu as main interaction element could not be found or is not recognized as such, especially on the desktop. Plus over years, many products have been added to their product line and the navigation was simply expanded. This made it all unclear and extremely nested."
          />
          <BlumOld />
          <Text
          headline="Discover solution space"
          desc="One challenge to face was re-sorting and hierarchizing the individual navigation points. Furthermore a more clear color coding was needed. In addition, it is also important to consider that their products have cryptic names and yet they should be easily recognized or found in their large assortment. Several variants were sketched and evaluated. Two of the created concepts were put into A/B testing for the final end product."/>
        <Sectiontitle>solution</Sectiontitle>
        <BlumNew />
      </div>
    </div>
</template>

<script>
definePageMeta({
  layout: "project-layout"
});
</script>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>