<template>

  <div id="Loginaccepted" >
       <router-link class="d-flex flex-row-reverse"
        to="/"
        tag="v-btn"
      >
        <v-btn
          class="mt-5"
          color="primary"
          flat
          value="wyloguj"
        >
          <span>Wyloguj</span>
        </v-btn>
      </router-link>
    <v-card  
     class="mx-auto mt-15 pa-10"  elevation="2" outlined max-width="350">
      <h2>
        Witaj {{ this.getUsersName }}
      </h2>
    </v-card>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'Loginaccepted',
  
  computed: {
    ...mapGetters([
      'getUsersName',
    ])
  }
};
</script>
