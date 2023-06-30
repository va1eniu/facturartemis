import { Router } from "express";

import { methodsHTTP as categoriaController } from "../controllers/categoria.controllers.js";
const router = Router();

router.get("/", categoriaController.getCategorias);
router.post("/", categoriaController.addCategories);

// la ruta recibe un parametro
router.get("/:id", categoriaController.getCategoria);

//la ruta debe recibir como parametro el id de la categoria a eliminar
router.delete("/:id", categoriaController.deleteCategoria);

router.put("/:id", categoriaController.updateCategories);

export default router;
