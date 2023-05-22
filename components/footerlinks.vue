<template>
    <div class="footer-container">
    <Line class="line-mobile"/>
        <div class="footer-links">
            <ul class="footer-legal">
                <li>
                    <NuxtLink class="button-footer" to="/privacypolicy">privacy policy</NuxtLink>
                    <NuxtLink class="button-footer" to="/legalnotice">legal notice</NuxtLink>
                </li>
            </ul>
            <ul class="footer-contact">
                <li>
                    <div class="socialmedia">
                        <a href="https://www.linkedin.com/in/yvonnebecker410/" target="_blank" class="button-footer">linkedin</a>   
                        <div class="trenner"></div>          
                        <a href="https://www.instagram.com/yvnnbecker" target="_blank" class="button-footer">instagram</a>  
                    </div>
                </li>
                <Contact button="button-footer"/>
            </ul>
            <ul class="footer-about">
                <li>
                    <NuxtLink class="button-footer" to="/about">© Yvonne Becker,</NuxtLink>  
                    <div class="job">Interaction Designer</div>                   
                </li>
            </ul>
        </div>
    </div>
</template>