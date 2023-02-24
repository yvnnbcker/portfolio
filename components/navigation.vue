<template>
    <nav>
        <div class="nav-left">
            <NuxtLink id="logo" to="/"></NuxtLink>
        </div>
        <div class="nav-right">        
            <NuxtLink class="button-nav" to="/comingsoon">about</NuxtLink>
            <a class="button-nav" href="/#projects">projects</a>
            <a href="mailto:contact@yvonnebecker.me" class="button-nav">contact</a>
        </div>
                     
        <!-- <ul v-show="!mobile" class="navigation">
            <li>
                <NuxtLink class="link" to="/about">About</NuxtLink>
                <a href="mailto:yvonne.becker@hfg.design">Contact</a>                    
            </li>
        </ul>
        <div class="icon">
            <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{'icon-active': mobileNav }"></i>
        </div>
        <transition name="mobile-nav">
            <ul v-show="mobileNav" class="dropdown-nav">
                <li>
                    <NuxtLink class="link" to="/about">About</NuxtLink>
                    <a href="mailto:yvonne.becker@hfg.design" class="link">Contact</a>
                </li>
            </ul>
        </transition> -->
    </nav>
</template>