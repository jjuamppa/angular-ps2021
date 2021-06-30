import { Usuario } from 'src/app/models/usuario.model';

export class Transaccion {
    constructor(

        public uid: string,
        public usuario: Usuario,
        public monto: number,
        public fecha: Date,

        ){}
    }
