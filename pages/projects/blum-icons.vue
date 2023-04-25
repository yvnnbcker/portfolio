<template>
  <div>
    <div id="project-content-container">
      <Heroimage
        title="Icon Redesign"
        subtitle="Blum Facelift"
        date="12/2021"
        img="/blum_icons-hero.png"
        alt="two setting icons in orange and dark blue"
      />
      <div id="project-text-container">
        <HeadlineText
          headline="? Problem"
          text="The previous icons look very different – especially in terms of size, stroke width and style. Therefore, they do not result in a harmonious visual language."/>
        <HeadlineText
          headline="! Solution"
          text="Establishing a grid system for the icons, according to which all new icons are getting created. Some icons get matched into the new grid system, others are getting completely redesigned. A few icons needed to be invented for special cases."/>
      </div>
      <ImageUno
        img="/blum_icons-anatomy.png"
        alt="image of grids and icon forms"
        desc="establishing an icon grid"
        class="img-padding"
        />
      <ImagesTwo
        img1="/blum_icons-old.png"
        alt1="image of old blum icons"
        desc1="icons before redesign"
        img2="/blum_icons-new.png"
        alt2="image of new blum icons"
        desc2="icons after redesign"
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
        buttoncolor="button-orange"
        />
    </div>
</template>

<script>
definePageMeta({
  layout: "project-layout",
});
</script>