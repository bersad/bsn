<template>
  <div>
      <app-Sidebar></app-Sidebar>
      <router-view></router-view>
  </div>
</template>

<script>
 
 
import Sidebar from '../components/Sidebar.vue'
export default {
    components:{
        appSidebar:Sidebar
    }
}
</script>

<style>

</style>