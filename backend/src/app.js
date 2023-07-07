import express from "express";
import categoriaRoutes from "./routes/categorias.routes.js";
import cors from "cors";

const app = express();

app.set("port", 5000);

//Middleware
app.use(express.json());

app.use(cors());

// Routes
app.use("/api/categorias", categoriaRoutes);

export default app;
