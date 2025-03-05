import express, { Router, Request, Response } from "express";
import UsuarioUseCases from "../../application/usuario.usecases";
import UsuarioRepositoryPostgres from "../db/usuario.repository.postgres";

const router = express.Router();
const usuarioUseCases = new UsuarioUseCases(new UsuarioRepositoryPostgres);

// GET http://localhost:3000/api/usuarios/getUsuarios
router.get("/getUsuarios",async (req: Request, res: Response) => {
    try {
        const usuarios = await usuarioUseCases.getAll();
        res.status(200).json("ggggg");
        
    } catch (error) {
        console.error("Error en la actualización:", error);
        res.status(500).json({ mensaje: `Error imprimiendo usuarios: ${error.message}` });
    }
})

export default router;