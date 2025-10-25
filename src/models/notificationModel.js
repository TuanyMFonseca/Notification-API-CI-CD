let notifications = []; // Simulação de Banco de Dados 

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

  findByUserId: (user_id) => {
    return notifications.filter((n) => n.user_id == user_id);
  },

  findAll: () => notifications,
};


// Futuramente, esse arquivo pode ser trocado por um modelo real do Mongoose, sem mudar o resto da API.