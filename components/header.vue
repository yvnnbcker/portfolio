<script setup>
    const header = defineProps(['headline', 'slogantext', 'sloganhighlight', 'sloganextra', 'desc', 'button', 'img', 'alt']);
  </script>

<template>
    <header>
        <div class="header-content">
            <div class="header-text">
                <div class="header-headline">
                    {{header.headline}}
                </div>
                <Slogan text="I am&nbsp;" highlight="Yvonne" icon="smiley"/>
                <div class="header-desc">{{header.desc}}</div>
                <Buttonicon href="/comingsoon" icon="arrow-right">
                    {{header.button}}
                </Buttonicon>
            </div>
            <div class="header-image">
                <img class="img-header" :src="header.img" :alt="header.alt"/>
                <div class="img-square"></div>
                <div class="img-line"></div>
            </div>
        </div>
    </header>
</template>