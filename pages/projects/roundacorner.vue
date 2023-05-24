<template>
  <div>
    <div id="project-content-container">
      <Heroimage
        title="roundacorner"
        subtitle="Startup Project"
        date="04/2022"
        img="/roundacorner-hero.gif"
        imgmobile="/roundacorner-heromobile.gif"
        alt="picture of 7 young women"/>
      <div class="project-grid2-container extra-padding extra-margin">
        <ImageText
          headline="Design">
          Branding: deciding for our brand name, defining who we are and therefore establishing our Corporate Identity. Creating an outstanding Corporate Design with unique colors. Inventing catchy slogans matching our agency name and identity. My main part later: Head of Web & UX.
        </ImageText>
        <ImageText
          headline="Business">
          Writing a businessplan containing methods like Golden Circle and BMC. Deciding for our target group and generate customers. Doing Marketing. Project Management containing self-organization, team organisation & hierarchies.
        </ImageText>
      </div>
      <Sectiontitle>projects inside the project.</Sectiontitle>
      <div class="project-grid3-container special">
        <ImageText
          headline="Self marketing"
          img="/roundacorner-project1.png"
          alt="image of old blum icons">
          With our unique brand colors and catchy slogans we designed beermats and stickers. For our marketing purposes we spread them all over Graz, because great ideas happen in the most unsual places and that's where we meet our customers! 
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
          "G-Teka" is a Rave Event of Slovenia, taking place in the nature of its Capital City Maribor. With our design we combine and reflect both worlds: technology & nature. This project included promotion posters and tickets.
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