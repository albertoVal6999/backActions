import Usuario from "../domain/Usuario";
import UsuarioRepository from "../domain/usuario.repository";

export default class UsuarioUseCases {
    private usuarioRepository: UsuarioRepository;

    constructor(usuarioRepository: UsuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    async getAll(): Promise<Usuario> {
        return this.usuarioRepository.getAll();
        
    }
}