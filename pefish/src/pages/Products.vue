<template>
  <div>
  <h1>
    Products
  </h1>
  <div v-for="(index,folder) in folders" :key="index">
    <p scope="row">{{index + 1}}</p>
    <p class="product-name"></p>
    <p class="product-name"></p>
    <p class="product-name"></p>


  </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
     	"folders": []
		  
	  }
  },
}
</script>

<style>

</style>