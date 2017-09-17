<template>
  <div id="app" class="container">
    <nav class='navbar navbar-default'>
      <div class='container'>
        <ul class='nav navbar-nav'>
          <li>
            <router-link :to="{ path: '/' }">Inicio</router-link>
          </li>
          <li>
            <router-link :to="{ path: 'hello' }">Hello</router-link>
          </li>
          <li>
            <a href="#" v-if="isLogeado()==true" @click="logout($event)">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>

    <img id="mc-app-img-logo" src="./assets/logo.png">
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'app',
  beforeCreate: function() {
    if (!this.$session.exists()) {
      this.$router.push('/')
    }
  },
  computed: {

  },
  methods: {
    isLogeado: function() {
      if (typeof this.$session.get('jwt') !== "undefined") {
        return true;
      } else {
        return false;
      }
    },
    logout: function(event) {
      this.$session.destroy();
      axios.defaults.headers.common['Authorization'] = '';
      this.$router.push('/');
      event.preventDefault();
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#mc-app-img-logo {
  width: 50px;
  height: 50px;
}
</style>
