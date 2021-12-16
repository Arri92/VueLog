<template>
  <v-app class="app">
     <v-main>
      <router-view/>
     </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>
<style scoped>
#app{
    min-width: 100%;
    min-height: 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    text-align: center;
    position:absolute;
    background-position: center;
    background-image: url(tap.png);
}
</style>
