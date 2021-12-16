
<template>
<v-card  
     class="mx-auto mt-15 pa-10" elevation="2" outlined max-width="450">
<div class="">
  <div class=" mx-auto ">
    <v-text-field
     label="Login"
     placeholder="Login"
     outlined
     clearable
     v-model="userName"
     type="text"/>
    <v-text-field
     label="Hasło"
     placeholder="Hasło"
     outlined
     clearable
     v-model="userPass"
     :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
     :type="showPassword ? 'text' : 'password'"
     @click:append="showPassword = !showPassword"/>  
    <v-btn
     class=""
     width=100%
     color="primary"
     @click="login" 
     elevation="3">
     zaloguj
    </v-btn>
  </div>
</div>
</v-card>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'Home',
  data: () => ({
     usersPass: '',
     usersName: '',
     showPassword: false,
    }
  ),
  mounted(){
    this.usersName = this.$store.getters.getUsersName
    this.usersPass = this.$store.getters.getUsersPass
  },
  methods: {
    ...mapActions([
       'setLogged'
     ]),
     login(){
      if(this.userName===this.usersName && this.userPass===this.usersPass){
        this.setLogged(this.userName)
        this.$router.push("/loginaccepted")
      }else{
        this.$router.push("/loginfailed")
      }
    }
  }
  }

</script>


