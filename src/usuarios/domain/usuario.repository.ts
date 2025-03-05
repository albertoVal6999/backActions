import Usuario from './Usuario';

export default interface UsuarioRepository {
    getAll():Promise<Usuario>;
 
}