import { executeQuery } from "../../../context/postgres.db";
import Usuario from "../../domain/Usuario";
import UsuarioRepository from "../../domain/usuario.repository";

export default class UsuarioRepositoryPostgres implements UsuarioRepository {

    async getAll(): Promise<Usuario> {
        let query= " SELECT * FROM usuarios"
        const values=[]

        const usuarios = await executeQuery(query, values);
        return usuarios;
    }
}