<template>
    <nav id="nav">
        <ul class="nav bg">
            <!--UNLOGGED-->
            <li v-if="!$auth.check()">
                <span v-for="(route, key) in routes.unlogged" v-bind:key="route.path">
                    <router-link  :to="{ name : route.path }" :key="key">
                    {{route.name}}
                    </router-link> 
                </span>
                
            </li>
            <!--LOGGED USER-->
            <li v-if="$auth.check(1)">
                <span v-for="(route, key) in routes.user" v-bind:key="route.path">
                    <router-link  :to="{ name : route.path }" :key="key">
                    {{route.name}}
                    </router-link>
                </span>
                
            </li>
            <!--LOGGED ADMIN-->
            <li v-if="$auth.check(2)">
                <span v-for="(route, key) in routes.admin" v-bind:key="route.path">
                    <router-link  :to="{ name : route.path }" :key="key">
                    {{route.name}}
                    </router-link>
                </span>
                
            </li>
            <!--LOGOUT-->
            <li v-if="$auth.check()">
                <a href="#" @click.prevent="$auth.logout()">Logout</a>
            </li>
        </ul>
    </nav>
</template>

<script>
  export default {
    data() {
      return {
        routes: {
          // UNLOGGED
          unlogged: [
            {
              name: 'Register',
              path: 'register'
            },
            {
              name: 'Login',
              path: 'login'
            }
          ],
          // LOGGED USER
          user: [
            {
              name: 'Dashboard',
              path: 'dashboard'
            }
          ],
          // LOGGED ADMIN
          admin: [
            {
              name: 'Dashboard',
              path: 'admin.dashboard'
            }
          ]
        }
      }
    },
    mounted() {
      //
    }
  }
</script>

<style>
.bg {
    background-image: linear-gradient(to right, #243949 0%, #517fa4 100%);
    
}
</style>
