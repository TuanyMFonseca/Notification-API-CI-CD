import express from "express";
import dotenv from "dotenv";
import notificationRoutes from "./routes/notificationRoutes.js";
import logRoutes from "./routes/logRoutes.js";
import app from "./app.js";


dotenv.config();
const app = express();

app.use(express.json());

// Rotas
app.use("/api", notificationRoutes);
app.use("/api", logRoutes);

// Rota de teste
app.get("/ping", (req, res) => {
  res.status(200).json({ message: "Servidor rodando com sucesso 🚀" });
});

// Porta
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});
