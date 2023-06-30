import express from "express";
import categoriaRoutes from "./routes/categorias.routes.js";

const app = express();

app.set("port", 5000);

//Middleware
app.use(express.json());

// Routes
app.use("/api/categorias", categoriaRoutes);

export default app;
