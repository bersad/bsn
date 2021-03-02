<template>
  <q-layout>
    <q-page-container>
      
         
        
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">
                Log in
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form @submit.prevent="submit"
              class="q-gutter-md"
            >
              <q-input
                type="phone"
                filled
                v-model="phone"
                label="phone"
                lazy-rules
              />

              <q-input
                type="password"
                filled
                v-model="password"
                label="Password"
                lazy-rules
               />

              <div>
                <q-btn label="Login"  to="" type="submit" color="primary"/>
              </div>
            </q-form>
          </q-card-section>
       
    </q-page-container>
  </q-layout>

</template>
<script>
import axios from '../pages/axios-auth'

export default {
  data () {
    return {
  phone:null,
  password:null   	
		  
	  }
  },
  methods:{
    submit(){
  const sky = {
phone:this.phone,
password:this.password

  }
  console.log(sky)
      axios
      .post('',sky)
      .then(response=>console.log(response))
       .catch(error=> {
    console.log(error);
  });
  
  }
}
}
</script>
<style>
  
</style>
