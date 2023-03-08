<template>
  <main>
    <BackgroundSmall />
    <div id="error-container">
      <div class="error-message">
        Ooops, seems like an error occurred.
      </div>
      <div class="error-code">      
        <b>{{ error.statusCode }}</b> – {{ error.message }}
      </div>
      <Buttonicon href="/" icon="arrow-left">
            go back to main page
      </Buttonicon>
    </div>    
    <Footer />
  </main>
  </template>
  
  <script setup>
    defineProps(['error'])
  </script>

  