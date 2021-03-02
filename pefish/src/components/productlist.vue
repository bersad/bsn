  <template>
 <div> 
<div class="snake"> 
 
       <div class="q-pa-md q-gutter-sm">
        <h4 ><q-btn label="اضافه" color="info" @click="basic = true" />
          برای اضافه کردن محصول جدید کلیلک کنید
    </h4>
 

    <q-dialog v-model="basic" transition-show="rotate" transition-hide="rotate">
      <q-card >
        <q-card-section >
          <div >
            <q-input v-model="category_name" type="string"  label="نام محصول"/>
            <q-input v-model="prices" type="number"  label="قیمت"/>
            <q-input v-model="image" type="file"/>
            </div>
        </q-card-section>

       

        <q-card-actions align="right">
        <q-btn flat label="add" color="primary" @click="submit" type="submit" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
      </div> 
</div>
<table class="shark">
  <tr>
    <th>ویرایش</th>
    <th >تصویر</th>
    <th>قیمت</th>
    <th>نام محصولات</th>

  </tr>
  <tr v-for=" n in products" :key="n">
    <td><q-btn label="delete" @click="remove" color="negative"/></td>  
      <td>
          <div class="img-box">
          <img :src="`https://ariaeestore.com/shop/api/v1` + n.image"  />
          </div>
       </td >  
    
   <td>{{n.prices}}</td>
   <td>{{n.category_name}}</td>
 
  </tr>
 
</table> 
  </div>
</template>

<script>
 import axios from '../pages/axios-auth'
    export default {
    data(){
    return{
  products:[],
  basic: false,
  category_name:'',
  prices:'',
  image:''
   }
  }, 
  methods:{
    submit(){
      var bee={
        category_name:this.category_name,
        prices:this.prices,
        image:this.image
      };
    this.products.push(bee)
    this.category_name=''
    this.prices=''
    this.image=''
    },
        remove(index){
           var tiger={
        category_name:this.category_name,
        prices:this.prices,
        image:this.image
            };
        this.products.splice(tiger,(index,1))
    },
   
   created(){
      axios
        .get('/products/index?page=1&search=&api_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZTA1YzllMTVjM2VkMDc5NDVhNTYwNSIsImlhdCI6MTYxNDYwNzIxMCwiZXhwIjoxNjE1MjEyMDEwfQ.WAqQs5ttoDV2yGzJzq4YC-hGFtuqOz4rJSwolO88Fpo')
         .then(Response=>{
             this.products=(Response.data.data)
           
             })
             } 
  }
  }
    
 

</script>

<style>
 .snake{
   padding-left:35%;
  

 }
  .shark {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width:50%;
  margin-top: 10%;
  margin-left: 15%;
  }

  .shark th {
  border: 1px solid #ddd;
  padding: 28px;
  }
  .shark td {
    border: 1px solid #ddd;
  padding: 28px;
  text-align: right;
  }

  .shark tr:nth-child(odd){background-color:blue;}

  .shark tr:hover {background-color: #ddd;}
 

  .shark th {
  padding-top: 12px;
  padding-bottom: 12px;
  
  background-color:rgb(88, 18, 88);
  color: white;
  }

</style>