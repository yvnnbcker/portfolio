<template>
  <div>
    <div id="project-content-container">
      <Heroimage
        title="roundacorner"
        subtitle="Startup Project"
        date="04/2022"
        img="/roundacorner-hero.gif"
        alt="picture of 7 young women"
      />
      <div class="project-grid2-container">
        <ImageText
          headline="Branding part">
          The previous icons look very different – especially in terms of size, stroke width and style. Therefore, they do not result in a harmonious visual language.
        </ImageText>
        <ImageText
          headline="Business part">
          Establishing a grid system for icons, according to which all new icons are getting created. Some icons get matched into the new grid system, others are getting completely redesigned. A few icons needed to be invented for special cases.
        </ImageText>
      </div>
      <Sectiontitle>projects inside the project.</Sectiontitle>
      <div class="project-grid3-container">
        <ImageText
          headline="Self marketing"
          img="/roundacorner-project1.png"
          alt="image of old blum icons">
          With our unique brand colors & catchy slogans we designed beermats and stickers. We spread them all over Graz, because great ideas happen in the most unsual places. 
        </ImageText>
        <ImageText
          headline="Cookbook"
          img="/roundacorner-project3.png"
          alt="image ofnew blum icons">
          Together with the department of dietology @FH Joanneum we created a cookbook for people with cognitive disabilities. Therefore we got to know our users, had several testing sessions which lead to an easy understandable cookbook.
        </ImageText>
        <ImageText
          headline="G-Teka Rave"
          img="/roundacorner-project2.png"
          alt="image ofnew blum icons">
          "G-Teka" is a Rave Event of Slovenia, taking place in the nature of its Capital City Maribor. Our design combines and reflects technology & nature. This project included promotion posters and tickets.
        </ImageText>
      </div>

    </div>
    <Infobox
        teamtitle="University"
        team1="/logo-fhjoanneum.svg"
        href1="https://www.fh-joanneum.at/"
        tool1="/logo-figma.svg"
        tool2="/logo-miro.svg"
        tool3="/logo-vs.svg"
        tool4="/logo-teams.svg"
        tool5="/logo-adobe.svg"
        href="https://roundacorner.design/"
        buttontext="visit agency"
        />
    </div>
</template>

<script>
definePageMeta({
  layout: "project-layout",
});
</script>