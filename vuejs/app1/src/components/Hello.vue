<template>
  <div class="hello">
    <h1>{{ getMensaje }}</h1>
    <input type="button" value="Obtener Usuarios" v-on:click="getUsuarios()" />
    <ul>
      <li v-for="usu in usuarios">
        {{usu.firstname}}
      </li>
    </ul>
  </div>
</template>

<script>
import SeguridadService from '../service/SeguridadService'
export default {
  name: 'hello',
  data() {
    return {
      usuarios: {}
    }
  },
  computed: {
    getMensaje: function() {
      return 'Autorización: ' + this.$session.get('jwt')
    }
  },
  methods: {
    getUsuarios: function() {
      SeguridadService.getUsuarios().then(res => { this.usuarios = res.data.users }).catch(err => alert(err));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
