import express from "express";
import usuarioRouter from "./usuarios/infrastructure/rest/usuario.rest";

const app = express();

const cors = require('cors');
const corsOptions = {
   origin: "*"

}
app.use(cors(corsOptions));

app.use(express.json());

const api = "/api";
app.use(`${api}/usuarios`, usuarioRouter);

export default app;