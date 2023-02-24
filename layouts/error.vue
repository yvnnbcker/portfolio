<template>
    <div class="container">
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>Ups, seems like an error occurred.</h1>
    </div>
  </template>
  
<script>
  export default {
    props: ['error'],
    layout: 'simple'
  }
  definePageMeta({
    layout: "simple",
  });
</script>