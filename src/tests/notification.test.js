import request from "supertest";
import app from "../app.js";

describe("API de Notificações e Logs", () => {
  // Teste do POST /api/notifications
  it("deve criar uma nova notificação e retornar 201", async () => {
    const res = await request(app)
      .post("/api/notifications")
      .send({ user_id: 123, message: "Sua compra foi aprovada." });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.user_id).toBe(123);
    expect(res.body.message).toBe("Sua compra foi aprovada.");
  });

  // Teste do GET /api/logs/:user_id com usuário inexistente
  it("deve retornar 404 quando não houver notificações para o usuário", async () => {
    const res = await request(app).get("/api/logs/9999");
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty("error");
  });
});
