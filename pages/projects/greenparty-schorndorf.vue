<script>
definePageMeta({
  layout: "project-layout",
});
</script>

<template>
  <div>
    <div id="project-content-container">
      <Heroimage
        subtitle="Webdesign & Development"
        title="Green Party Schorndorf"
        date="12/2021"
        img="/gruene-hero.png"
        imgmobile="/gruene-heromobile.png"
        alt="desk with laptop, smartphone and tablet"
      />
      <div class="project-grid2-container">
        <ImageText
          headline="Design & Development">
          As visual orientation of the local association of the Green Party in Schorndorf, served the main party website. The already existing style guide was applied to the overall wesbdesign, this included typography and colors. Playful illustrations were made for a young appearance. The website was implemented by using Kirby CMS and responsive for three different viewports.
        </ImageText>
        <ImageText
          headline="Content">
          The main goal of the website is to encourage visitors to become active in the Green Party. Therefore visitors should be informed about the local association, their values and their people. Also important is a listing of all upcoming events and articles about the party.
        </ImageText>
      </div>
      <Sectiontitle>impressions</Sectiontitle>
      <div class="project-grid2-container">
          <ImageUno
          img="/gruene-gallery1.png"
          alt="screenshot of green party schorndorf website"
          desc="landingpage"
          />
          <ImageUno
          img="/gruene-gallery2.png"
          alt="screenshot of green party schorndorf website"
          desc="newesr articles and upcoming events events"
          />
          <ImageUno
          img="/gruene-gallery3.png"
          alt="screenshot of green party schorndorf website"
          desc="values of green party and how to join"
          />
          <ImageUno
          img="/gruene-gallery4.png"
          alt="screenshot of green party schorndorf website"
          desc="footer with call to action and slogan"
          />
      </div>
      <div class="note">*Note: Sadly, in meantime the website was moved back from Kirby CMS to Wordpress due to too high maintenance of php updates. Someone else is hosting now the page. This is the reason why the live version of the website doesn't look like the gallery images anymore if you click the link below.</div>
    </div>
    <Infobox
        teamtitle="Team"
        tool1="/logo-figma.svg"
        tool2="/logo-kirby.svg"
        tool3="/logo-vs.svg"
        href="https://gruene-schorndorf.de/"
        buttontext="visit website">
        <ul><li>Lara Weiblen</li><li>Pauline Koch </li><li>Nils Jacobsen</li><li>Niklas Buchfink</li></ul></Infobox>
    </div>
</template>