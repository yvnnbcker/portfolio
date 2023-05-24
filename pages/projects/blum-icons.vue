<template>
  <div>
    <div id="project-content-container">
      <Heroimage
        title="Icons Redesign"
        subtitle="Blum Facelift"
        date="12/2021"
        img="/blum_icons-hero.png"
        imgmobile="/blum_icons-heromobile.png"
        alt="two setting icons in orange and dark blue"
      />
      <div class="project-grid2-container extra-padding">
        <ImageText
          headline="Problem?"
          img="/blum_icons-old.png"
          alt="image of old blum icons"
          desc="icons before redesign">
          The previous icons look very different – especially in terms of size, stroke width and style. Therefore, they did not result in a harmonious visual language.
        </ImageText>
        <ImageText
          headline="Solution!"
          img="/blum_icons-new.png"
          alt="image ofnew blum icons"
          desc="icons after redesign">
          So I established a grid system for icons, according to which all new icons are getting created. Some icons got matched into the new grid system, others got completely redesigned. A few icons needed to be invented for special cases.
        </ImageText>
      </div>
      <ImageUno
        img="/blum_icons-anatomy.png"
        alt="image of grids and icon forms"
        desc="established icon grid"
        />
    </div>
    <Infobox
        teamtitle="Agency"
        team1="/logo-21torr.svg"
        href1="https://www.21torr.com/"
        tool1="/logo-sketch.svg"
        tool2="/logo-miro.svg"
        tool3="/logo-jira.svg"
        href="https://www.blum.com/"
        buttontext="visit website"
        />
    </div>
</template>

<script>
definePageMeta({
  layout: "project-layout",
});
</script>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>