import axios from 'axios';

import config from '../config'

class SeguridadService {
    login(usuario, clave) {
        return axios.post(config.urlBase + 'login', {
            username: usuario,
            password: clave
        }).then(response => response).catch(error => error)
    };

    getUsuarios() {
        return axios.get(config.urlBase + 'users').then(res => res).catch(err => err);
    }
}

export default new SeguridadService();