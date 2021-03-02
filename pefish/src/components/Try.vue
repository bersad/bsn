 <template>
 <div>
   <router-view></router-view>
 
  <q-layout view="hHh lpR fFf">
 
  <q-drawer show-if-above v-model="right" side="right" bordered>
      <!-- drawer content -->
       <div   style="width: 300px">
    <q-list bordered separator>
      <q-item clickable v-ripple to="/Home">
        <q-item-section >خانه</q-item-section>
      </q-item>

      <q-item clickable v-ripple to="/productlist">
        <q-item-section>لیست محصولات</q-item-section>
      </q-item>

    
    </q-list>
  </div>
  </q-drawer>
 </q-layout>
 </div>
</template>
<script>
//import axios from '../pages/axios-auth'

export default {
  
  data () {
   
 	return{
 //kamal:null,
  right: false
   }
		  
  },
}
/*  mounted(){
      axios
      .get('/products/index?page=1&search=&api_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZTA1YzllMTVjM2VkMDc5NDVhNTYwNSIsImlhdCI6MTYxMTU4NTkyNiwiZXhwIjoxNjEyMTkwNzI2fQ.zXrL0x_L_fg5aVygkWfpALnvTq2DVMCvam3fAjbMMgQ')
      .then(response=>this.kamal=response.data.data)
       .catch(error=> {
    console.log(error);
  });
} */
 
//https://ariaeestore.com/shop/api/v1/products/index?page=1&search=&api_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZTA1YzllMTVjM2VkMDc5NDVhNTYwNSIsImlhdCI6MTYxMTQwMzk0OCwiZXhwIjoxNjEyMDA4NzQ4fQ.JV-XyH_aN77v8t7mG4srbQBKZ9zzDOYH0LGHdcj03sI
</script>
<style>
  
</style> 