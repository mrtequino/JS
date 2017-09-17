import { Rol } from "./rol";
export class Usuario {
    id: number;
    login: string;
    clave: string;
    roles: Rol[];
}