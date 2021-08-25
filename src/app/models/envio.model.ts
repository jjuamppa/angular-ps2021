
export class Envio {
    constructor(
        public uid: string,
        public direcccion: string,
        public telefono: string,
        public email: string,
        public monto: number,
        public fecha: Date,
    ){}
}
