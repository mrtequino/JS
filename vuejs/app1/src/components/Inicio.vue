<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            Sistema Central de Administración de Usuarios
        </div>
        <div class="panel-body">
            <div class="form-group">
                <label for="mc-inicio-input-text-1">Usuario:</label>
                <input id="mc-inicio-input-text-1" class="form-control" type="text" v-model="usuario" />
            </div>
            <div class="form-group">
                <label for="mc-inicio-input-password-1">Clave:</label>
                <input id="mc-inicio-input-password-1" class="form-control" type="password" v-model="clave" />
            </div>
            <input class="btn btn-primary" type="button" value="Ingresar" v-on:click="onIngresar()" />
        </div>
    </div>
</template>

<script>
import axios from 'axios'

import SeguridadService from '../service/SeguridadService'

export default {
    name: "app-inicio",
    data() {
        return {
            titulo: "",
            usuario: "",
            clave: ""
        }
    },
    methods: {
        onIngresar: function() {
            SeguridadService
                .login(this.usuario, this.clave)
                .then(response => {
                    if (response.status === 200 && 'authorization' in response.headers) {
                        this.$session.start();
                        this.$session.set('jwt', response.headers.authorization);
                        axios.defaults.headers.common['Authorization'] = response.headers.authorization;
                        this.$router.push('hello');
                    } else {
                        alert(response);
                    }
                })
                .catch(error => alert(error));
        }
    }
}
</script>

<style>

</style>
