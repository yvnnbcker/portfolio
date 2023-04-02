<script setup>
    const header = defineProps(['headline', 'desc', 'href', 'icon', 'button', 'img', 'alt']);
</script>

<template>
        <Headertext headline="Hello again," 
            desc="My name is Yvonne, 29 years old. Interaction Designer by heart. 
            I enjoy making projects from scratch and therefore being part of UX & UI – sometimes even coding.
            But first: get to know me better as a person. And also have a look at my career and projects."
            href="#aboutme"
            icon="arrow-diagonal"
            button="my career" 
            img="/yvonne-1.png" alt="young blonde woman smiling"> 
        </Headertext>
        <Line />
    <div id="aboutme"> 
        <div class="section-title career-title">life is like a rollercoaster.</div>
        <div class="career-visual">
            <svg class="career-img" alt="career visualisation" width="1355" height="381" viewBox="0 0 1355 381" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 314.753C0 314.753 121 314.751 182 314.753C218.5 314.753 262.339 280.751 287 280.751C309.5 280.751 310.5 314.753 334 314.751C348.5 314.751 400.5 313.753 400.5 274.752C400.5 222.251 325.5 223.251 325.5 274.752C325.5 314.753 382 314.753 395 314.753C448 314.753 449.5 314.546 470 314.751C499 315.042 515.5 307.251 515.5 286.752C515.5 255.251 468 256.251 468 286.752C468 318.251 502.483 308.555 520 319.751C541.591 333.55 549.5 374.997 568.5 379.251C604.856 387.39 637.671 310.504 690.5 314.753C802.5 323.759 815.5 275 815.5 247.501C815.5 164 688.5 161.001 688.5 247.501C688.5 299.5 734 317 797 314.753C819.486 313.95 856 347.5 870 347.5C889 347.5 910 314.751 941.5 314.751C1063.5 314.751 1208 290.736 1208 151.762C1208 -50.7853 910 -48.7061 910 151.762C910 208.5 941.5 264.663 1001 289.5C1053.01 311.209 1128.6 314.751 1235 314.751C1235 314.751 1252 314.751 1354 314.751" stroke="#212121"/>
            <path d="M1331.63 337.5L1354.25 314.873L1331.63 292.246" stroke="#212121"/>
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
                    <div class="event"><div class="date">10/2020 – 04/2021</div><b>Webproject 2</b></div>
                    <div class="event"><div class="date">08/2020 – 10/2020</div><b>Volunteer Webproject Green Party</b></div>
            </div>
                <div class="career-text currently">
                    <div class="event"><div class="date">02/2023</div> 
                    <b>Bachelor of Arts @HfG</b></div>
                </div>
            </div>
            <div class="career-text">
                <div class="event"><h1>?</h1></div>
                <div class="event"><b>YOU</b></div>
            </div>
        </div>
        <Buttonicon href="/cv-yvonnebecker.pdf" icon="download" target="_blank">
            download CV
        </Buttonicon>
    </div>
</template>