 <template>
     <div class="q-pa-md">
       <q-input v-model="behnam"  label="firstname"/>
      <q-input v-model="arsalan"  label="lastname"/>
       <q-input v-model="ayda"  label="surname"/>  
        <q-input type="file" @change ="fileChange" />
       <q-btn @click="submit" label="add" type="submit"/>
       <q-btn @click="remove" label="remove" />
        <q-markup-table>
       <thead>
           <tr>
               <th>firstname</th>
               <th>lastname</th>
               <th>surname</th>
               <th>pic</th>
           </tr>
       </thead>
        <tbody>
       <tr v-for="sk in kamran" :key="sk">
           <td>
                {{sk.behnam}}
           </td>
           <td>
                {{sk.arsalan}}
           </td>
           <td>
                {{sk.ayda}} 
           </td>
          <td>
               <img :src="image"  height="70px" width="70px">
           </td> 
        </tr>
         </tbody>
        </q-markup-table>
      
       </div>
</template>
 <script>
 export default {
    data(){
        return{
            kamran:[  ],
            behnam:'',
            arsalan:'',
            ayda:'',
             image:'',
             jafar:''
        }
    },
    methods:{
        submit( ){ 
            var alex={
                behnam:this.behnam,
                arsalan:this.arsalan,
                ayda:this.ayda,
                image:this.image
                
            };
            this.kamran.push(alex ) 
            this.behnam=''
            this.arsalan='',
             this.ayda=''
             //this.image=''
        },
        fileChange(event){
            const file=event.target.files[0]
            this.image=URL.createObjectURL(file)
 
        },

     
    remove(index){
           var alex={
                behnam:this.behnam,
                arsalan:this.arsalan,
                ayda:this.ayda
            };
        this.kamran.splice(alex,(index,1))
    }    
 }
 }
 </script>