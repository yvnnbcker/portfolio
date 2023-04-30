<template>
  <div>
    <div id="project-content-container">
      <Heroimage
        title="Navigation Rework"
        subtitle="Blum Facelift"
        date="02/2022"
        img="/blum_nav-hero.png"
        alt="screenshot of blum website"
      />
      <div class="project-grid2-container">
        <ImageText
          headline="Problem ?"
          img="/blum_nav-old.png"
          alt="image of old blum navigation"
          desc="navigation before redesign">
          The previous icons look very different – especially in terms of size, stroke width and style. Therefore, they do not result in a harmonious visual language.
        </ImageText>
        <ImageText
          headline="Challenges ?!"
          img="/blum_nav-new.png"
          alt="image ofnew blum icons"
          desc="icons after redesign">
          Establishing a grid system for icons, according to which all new icons are getting created. Some icons get matched into the new grid system, others are getting completely redesigned. A few icons needed to be invented for special cases.
        </ImageText>
      </div>
    </div>
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
        buttontext="visit website"
        />
    </div>
</template>

<script>
definePageMeta({
  layout: "project-layout",
});
</script>