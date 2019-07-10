<template>

    <div class="container-fluid pt-4 h" >
    
    <router-view></router-view> 
     
    </div>
</template>

<script>
// import Test from './Test'
export default {
    components: {
        // Test
    }
}
</script>

<style>
.h {
   /* background-image: url("https://i.giphy.com/media/RB8Wqbi2AxTlm/source.gif"); */
    background-image: linear-gradient(to right, #243949 0%, #517fa4 100%);

  /* background-position: center; */
  /* background-repeat: no-repeat;
  background-size: cover; */
   min-height: 90%;
}
</style>
