<template>
    <div>
        <Head>
            <link rel="preload" as="image" href="/yvonne-1.png">
            <link rel="preload" as="image" href="/yvonne-2.png">
            <link rel="preload" as="image" href="/yvonne-3.png">
            <link rel="preload" as="image" href="/yvonne-4.png">
            <link rel="preload" as="image" href="/yvonne-5.png">
        </Head>
        <main>
            <Background />
            <Navigation />            
            <div class="content">
                <slot />    
            </div>  
            <Footer />
        </main>
    </div>
</template>

<style>
    @import url("https://use.typekit.net/jmp6nrg.css");
</style>