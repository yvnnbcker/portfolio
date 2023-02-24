<script setup>
    const header = defineProps(['headline', 'slogantext', 'sloganhighlight', 'sloganextra', 'desc', 'button', 'img', 'alt']);
</script>

<template>
        <header>
        <div class="header-content">
            <div class="header-text">
                <div class="header-headline">
                    Hey there!
                </div>
                <Slogananimated text="Ich bin&nbsp;" extra="&nbsp;(:"/>
                <div class="header-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra tellus sagittis scelerisque at diam. Et, aliquet tristique id ullamcorper cursus. Lacus habitasse elementum elementum felis, curabitur aliquet vel hendrerit. Lorem adipiscing sollicitudin morbi dui diam.</div>
                <Buttonicon href="/about" icon="arrow-diagonal">
                    werdegang
                </Buttonicon>
            </div>
            <div class="header-image">
                <img class="img-header" :src="header.img" :alt="header.alt"/>
                <div class="img-square"></div>
                <div class="img-line"></div>
            </div>
        </div>
    </header>
    <div id="aboutme">    
        <h1>life is like a rollercoaster.</h1>
        <div class="lifeline">
            <img class="lifeline-img" src="/lifeline.svg" alt="lifeline"/>
        </div>
        <div class="lifeline-content">
            <div class="lifeline-text">
                <div class="event"><h1>*</h1></div>
            </div>
            <div class="lifeline-text">
                <div class="event"><h1>…</h1></div>

            </div>
            <div class="lifeline-text">
                    <div class="event">Teacher training (Sekundarstufe I)</div>
                    <div class="event">Sales Assistant @hamma Bäckerei</div>
                    <div class="event">Sales Assistant @Hennes & Mauritz</div>
                    <div class="event">Sales Assistant @Reischmann</div>
                    <div class="event">Full-time @Hugo Boss</div>
            </div>
            <div class="lifeline-text">
                    <div class="event"><b>Interaction Design, HfG</b></div>
                    <div class="event">Volunteer Webproject</div>
                    <div class="event">Webproject 2</div>
                    <div class="event">Internship @21TORR</div>
                    <div class="event">Erasmus @FH Joanneum</div>
            </div>
            <div class="lifeline-text">
                <div class="event">02/2023 <b>Bachelor of Arts</b></div>
            </div>
            <div class="lifeline-text">
                <div class="event"><h1>?</h1></div>
                <div class="event"><b>YOU</b></div>
            </div>
        </div>
        <Buttonicon href="/about" icon="download">
        download CV
        </Buttonicon>
    </div>
</template>