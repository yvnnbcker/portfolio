<script setup>
    const header = defineProps(['headline', 'desc', 'href', 'icon', 'button', 'img', 'alt']);
</script>

<template>
    <div>
        <Headertext headline="Hello again," 
            desc="My name is Yvonne, but you can also call me Yve. I am 29 years old. Interaction Designer by heart. 
            Glad you took the chance to get to know me better, my personality and my skills. Have fun looking around and feel free to reach out to me!"
            href="#aboutme"
            icon="arrow-diagonal"
            button="dig deeper" 
            img="/yvonne-1.png" alt="young blonde woman smiling"> 
        </Headertext>
        <div id="aboutme" class="section-container"> 
            <Sectiontitle>what I do.</Sectiontitle>
            <div id="skill-container" class="section-between-container project-grid3-container">
                <ImageText
                headline="Starting at zero.">I enjoy making projects from scratch! Participating in the whole process – from the very beginning until the end.</ImageText>
                <ImageText 
                headline="Combine both worlds.">I like to be part of UX & UI design – and sometimes even coding. Creating great functional designs never gets boring.</ImageText>                
                <ImageText 
                headline="Never stop learning.">It doesn't matter if it's a new tool or technique – I am always eager to learn and improve my skills.</ImageText>
            </div>
           <!-- <div id="more-container" class="section-between-container">
                <div class="more-title section-title">what I also do.</div>
                As I already mentioned before: I kinda enjoy programming websites as well. I might not be the best, but it is fun and I enjoy to force myself to learn something new and get better! I also have basic experience in print, 3D modelling, photography and video editing.
            </div>-->
            <div id="tools-container" class="section-container">
                <div class="tool-title section-title">what I use.</div>
                <div class="logo-container">
                    <img src="/logo-figma.svg" alt="logo figma" class="tool-logo">
                    <img src="/logo-sketch.svg" alt="logo sketch" class="tool-logo">
                    <img src="/logo-adobe.svg" alt="logo adobe creative cloud" class="tool-logo">
                    <img src="/logo-vs.svg" alt="logo visual studio code" class="tool-logo">
                    <img src="/logo-miro.svg" alt="logo miro" class="tool-logo">
                    <img src="/logo-slack.svg" alt="logo slack" class="tool-logo">
                    <img src="/logo-jira.svg" alt="logo jira" class="tool-logo">
                </div>
            </div>
            <Sectiontitle>life is like a rollercoaster.</Sectiontitle>
            <div class="career-visual">
                <svg width="1357" height="385" viewBox="0 0 1357 385" fill="none" xmlns="http://www.w3.org/2000/svg" class="career-img">
                    <path class="path-dash" d="M0 317.753C0 317.753 121 317.751 182 317.753C218.5 317.753 262.339 283.751 287 283.751C309.5 283.751 310.5 317.753 334 317.751C348.5 317.751 400.5 316.753 400.5 277.752C400.5 225.251 325.5 226.251 325.5 277.752C325.5 317.753 382 317.753 395 317.753C448 317.753 449.5 317.546 470 317.751C499 318.042 515.5 310.251 515.5 289.752C515.5 258.251 468 259.251 468 289.752C468 321.251 502.483 311.555 520 322.751C541.591 336.55 549.5 377.997 568.5 382.251C604.856 390.39 637.671 313.504 690.5 317.753C802.5 326.759 815.5 278 815.5 250.501C815.5 167 688.5 164.001 688.5 250.501C688.5 302.5 734 320 797 317.753C819.486 316.95 856 350.5 870 350.5C889 350.5 910 317.751 941.5 317.751" stroke="#212121" stroke-width="3" stroke-dasharray="3 3"/>
                    <path d="M1354 317.751C1252 317.751 1235 317.751 1235 317.751C1128.6 317.751 1053.01 314.209 1001 292.5C941.5 267.663 910 211.5 910 154.761C910 -45.7063 1208 -47.7856 1208 154.761C1208 293.736 1063.5 317.751 941.5 317.751" stroke="url(#paint0_linear_2020_1628)" stroke-width="3"/>
                    <path d="M1331.63 340.5L1354.25 317.873L1331.63 295.245" stroke="#8459FF" stroke-width="3"/>
                    <defs>
                        <linearGradient id="paint0_linear_2020_1628" x1="899.5" y1="329" x2="1244.5" y2="333" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#212121"/>
                            <stop offset="0.874104" stop-color="#212121"/>
                            <stop offset="1" stop-color="#7B61FF"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div class="career-content">
                <div class="career-text">
                    <div class="event"><h1>*</h1></div>                
                    <div class="event"><h1>[…]</h1></div>
                </div>
                <div class="career-currently">            
                    <div class="career-text">
                        <div class="event"><div class="date">09/2019 – 02/2023</div><b>Interaction Design @HfG</b></div>
                        <div class="event"><div class="date">02/2022 – 08/2022</div><b>Erasmus @FH Joanneum, AT</b></div>
                        <div class="event"><div class="date">08/2021 – 02/2022</div><b>Design Internship @21TORR</b></div>
                        <div class="event"><div class="date">10/2020 – 04/2021</div><b>Webproject 2: Anne Kowatsch</b></div>
                        <div class="event"><div class="date">08/2020 – 10/2020</div><b>Webproject 1: Green Party</b></div>
                    </div>
                    <div class="career-text currently">
                        <div class="event"><div class="date">02/2023</div> 
                        <b>Bachelor of Arts @HfG</b></div>
                    </div>
                </div>
                <div class="career-text">
                    <div class="event"><h1 class="accent-color">?</h1></div>
                    <div class="event"><b class="accent-color">YOU</b></div>
                </div>
            </div>
            <Buttonicon href="/cv-yvonnebecker.pdf" icon="download" target="_blank">
                download CV
            </Buttonicon>
        </div>
    </div>
</template>