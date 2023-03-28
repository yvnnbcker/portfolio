<template>
  <!-- <div class="custom-bg">
    <BackgroundCustom blob1="/blob1-orange.png"
              blob2="/blob2-blue.png"
              blob3="/blob3-blue.png"
              blob4="/blob4-orange.png"
              blob5="/blob5-blue.png"
              blob6="/blob6-orange.png"
              blob7="/blob7-orange.png"
              blob8="/blob8-blue.png"
              blob9="/blob9-orange.png"/> 
  </div>    -->
    <div id="project-content-container">
      <Heroimage
        title="Icon Redesign"
        subtitle="Blum Facelift"
        date="Autumn – Winter 2021/2022"
        img="/blum_icons-hero.png"
        alt="Two setting icons in orange and dark blue"
      />
      <div id="project-content">
        <div class="project-text-container">
        <Headlinetext
        headline="Problem"
        text="The previous icons look very different – especially in terms of size, stroke width and style. Therefore, they do not result in a harmonious visual language."/>
        <Headlinetext
        headline="Solution"
        text="Establishing a grid system for the icons, according to which all new icons are getting created. Some icons get matched into the new grid system, others are getting redesigned. A few icons needed to be invented for special cases."/>
        </div>
        <Facts
        team1="/logo-21torr.svg"
        href1="https://www.21torr.com/"
        tool1="/logo-sketch.svg"
        tool2="/logo-miro.svg"
        href="https://www.blum.com/"
        buttontext="visit website"
        class="facts-desktop"
        />
      </div>
      <ImageUno
        img="/blum_icons-anatomy.png"
        alt="image of grids and icon forms"
        desc="establishing an icon grid"
        class="img-padding"
        />
      <ImagesTwo
        img1="/blum_icons-old.png"
        alt1="image of old icons"
        desc1="icons before redesign"
        img2="/blum_icons-new.png"
        alt2="image of new icons"
        desc2="icons after redesign"
        />
      <Line class="line-mobile"/>
      <Facts
        team1="/logo-21torr.svg"
        href1="https://www.21torr.com/"
        tool1="/logo-sketch.svg"
        tool2="/logo-miro.svg"
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