<template>
    <div id="project-content-container">
      <Heroimage
        title="Navigation Rework"
        subtitle="Blum Facelift"
        date="Autumn – Winter 2021/2022"
        img="/blum_nav-hero.png"
        alt="screenshot of blum website"
      />
      <div id="project-content">
        <div class="project-text-container">
        <Headlinetext
        headline="Problem"
        text="The previous icons look very different – especially in terms of size, stroke width and style. Therefore, they do not result in a harmonious visual language."/>
        <Headlinetext
        headline="Solution"
        text="Establishing a grid system for the icons, according to which all new icons are getting created. Some icons get matched into the new grid system, others are getting completely redesigned. A few icons needed to be invented for special cases."/>
        </div>
        <Facts
        teamtitle="Agency"
        team1="/logo-21torr.svg"
        href1="https://www.21torr.com/"
        tool1="/logo-sketch.svg"
        tool2="/logo-miro.svg"
        tool3="/logo-protopie.svg"
        tool4="/logo-jira.svg"
        href="https://www.blum.com/"
        buttontext="visit website"
        class="facts-desktop"
        />
      </div>
      <ImageUno
        img="/blum_nav-ab.png"
        alt="image of grids and icon forms"
        desc="variety of wireframes of new nav"
        class="img-padding"
        />
      <ImagesTwo
        img1="/blum_nav-old.png"
        alt1="image of old blum navigation"
        desc1="navigation before redesign"
        img2="/blum_nav-new.png"
        alt2="image of new blum navigation"
        desc2="navigation after redesign"
        />
      <Line class="line-mobile"/>
      <Facts
        teamtitle="Agency"
        team1="/logo-21torr.svg"
        href1="https://www.21torr.com/"
        tool1="/logo-sketch.svg"
        tool2="/logo-miro.svg"
        tool3="/logo-protopie.svg"
        tool4="/logo-jira.svg"
        href="https://www.blum.com/"
        buttontext="visit website"
        class="facts-mobile"
        />
    </div>
  </template>

<script>
definePageMeta({
  layout: "project-layout",
});
</script>