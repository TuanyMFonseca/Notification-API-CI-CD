import { NotificationModel } from "../models/notificationModel.js";

export const createNotification = (req, res) => {
  const { user_id, message } = req.body;

  if (!user_id || !message) {
    return res.status(400).json({ error: "user_id e message são obrigatórios." });
  }

  const newNotification = NotificationModel.create({ user_id, message });

  return res.status(201).json(newNotification);
};
