let notifications = []; // Simulação de banco de dados em memória

export const NotificationModel = {
  create: (data) => {
    const newNotification = {
      id: notifications.length + 1,
      user_id: data.user_id,
      message: data.message,
      created_at: new Date(),
    };
    notifications.push(newNotification);
    return newNotification;
  },
  findAll: () => notifications,
};

// Futuramente, esse arquivo pode ser trocado por um modelo real do Mongoose, sem mudar o resto da API.