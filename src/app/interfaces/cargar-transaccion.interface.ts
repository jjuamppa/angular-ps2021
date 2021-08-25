import { Usuario } from '../models/usuario.model';
export interface TransaccionForm
{
    uid: string;
    usuario: Usuario;
    monto: number;
    fecha: Date;
}
