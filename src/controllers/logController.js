import { NotificationModel } from "../models/notificationModel.js";

export const getLogsByUserId = (req, res) => {
  const { user_id } = req.params;
  const logs = NotificationModel.findByUserId(user_id);

  if (!logs || logs.length === 0) {
    return res.status(404).json({ error: "Nenhuma notificação encontrada para este usuário." });
  }

  return res.status(200).json(logs);
};
