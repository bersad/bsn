<template>
  <div class="sidebar">
      <div class="title">
           sidebar
      </div>
      <div class="menu-items">
          <router-link to="/Products" active-class="active" tag="button">
            Products
          </router-link>
          <router-link to="/EditProducts" active-class="active" tag="button">
            Edit-Products
          </router-link>
          <router-link to="/OverView" active-class="active" tag="button">
            OverView
          </router-link>
      </div>
 </div>
</template>

<script>
export default {

}
</script>

<style>

</style>