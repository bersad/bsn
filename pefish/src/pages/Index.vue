<template>
  <q-page class="bg-light-green window-height window-width row justify-center items-center">
    <div class="column">
      <div class="row">
        <h5 class="text-h5 text-white q-my-md"> </h5>
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1">
          <q-card-section>
            <q-form @submit.prevent="kamal" class="q-gutter-md" >
              <q-input square filled clearable v-model="phone" type="phone" label="phone" />
              <q-input square filled clearable v-model="password" type="password" label="password" />
          <q-card-actions class="q-px-md">
            <q-btn unelevated color="light-green-7" size="lg" type="submit" to="/productlist" class="full-width" label="Login" />
          </q-card-actions>
            </q-form>
          </q-card-section>
          <q-card-section class="text-center q-pa-none">
            <p class="text-grey-6">Not reigistered? Created an Account</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import axios from '../pages/axios-auth'
export default {
  name: 'Login',
  data () {
    return {
      phone:null,
      password:null
    }
  },
  methods:{
    kamal(){
      const sky = {
        phone:this.phone,
        password:this.password
      }
        console.log(sky)
    axios
    .post('https://ariaeestore.com/shop/api/v1/loginAdmin',sky)
    .then(response=>console.log(response))
     .catch(error=> {
    console.log(error);
     })

  }
}
}
</script>

<style>
.q-card {
  width: 360px;
  margin-right: 190px;
}
</style>