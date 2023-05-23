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
      <div class="project-grid3-container">
        <ImageText
          headline="Problem?">
          Over the years, many products have been added to their product line and the navigation was simply expanded. This made it all unclear and extremely nested. Also, the burger menu as main interaction element of could not be found or is not recognized as such, especially on the desktop.        </ImageText>
        <ImageText
          headline="Challenges@">
          On the one hand, re-sorting and hierarchization of the individual navigation points. On the other hand a more clear color coding. In addition, it is also important to consider that their products have cryptic names and yet they should be easily recognized or found in their large assortment. </ImageText>
          <ImageText
          headline="Testing!">
          In our first phase we tested the old navigation. By combining all of our gained insights we sketched several variants. After fine tunung we put two of our created concept into an A/B test. Out of the second testing we then created our final navigation. </ImageText>
        </div>
        <ImagesTwo
        img1="/blum_nav-old1.jpg"
        alt1="screenshot of former website navigation"
        desc1="old navigation, state closed"
        img2="/blum_nav-old2.jpg"
        alt2="screenshot of former website navigation"
        desc2="old navigation, fully unfolded"/>
        <ImageUno
        img="/blum_nav-new1.jpg"
        alt="screenshot of website navigation"
        desc="navigation after, new products area"
        />
        <ImageUno
        img="/blum_nav-new2.jpg"
        alt="screenshot of website navigation"
        desc="navigation after, product category"
        />
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
        buttontext="try out"
        />
    </div>
</template>

<script>
definePageMeta({
  layout: "project-layout",
});
</script>