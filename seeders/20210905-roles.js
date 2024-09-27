module.exports = {
    up: async (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Roles', [
        { roleName: 'Administrador', createdAt: new Date(), updatedAt: new Date() },
        { roleName: 'Profesor', createdAt: new Date(), updatedAt: new Date() },
        { roleName: 'Estudiante', createdAt: new Date(), updatedAt: new Date() }
      ]);
    },
  
    down: async (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Roles', null, {});
    }
  };
  