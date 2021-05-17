

export class Usuario {
    constructor(
        public google: boolean,
        public email: string,
        public password?: string,
        public nombre?: string,
        public img?: string,
        public role?: string,
        public uid?: string
        ){}
    }
