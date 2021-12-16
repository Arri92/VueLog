<template>
  <div id="flog">
     <v-card  
     class="mx-auto mt-15 pa-10"  elevation="2" outlined max-width="350">
    <div color="secondary" >
     <h2>
      <span class="error--text">Logowanie nieudane</span>
    </h2>
    <router-link class="d-flex flex-row-reverse"
        to="/"
        tag="v-btn">
        <v-btn
          class="mt-5"
          color="primary"
          flat
          value="Powrót"
        >
          <span>Powrót</span>
        </v-btn>
      </router-link>
    </div>
     </v-card>
  </div>
</template>

<script>
export default {
  name: 'loginfailed',
};
</script>
