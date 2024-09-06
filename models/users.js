'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.belongsTo(models.Persona, { foreignKey: 'id_persona' });  // Referencia correcta a Persona
      Users.belongsTo(models.Roles, { foreignKey: 'id_rol' });        // Referencia correcta a Roles
    }
  }
  Users.init({
    id_persona: DataTypes.INTEGER,
    id_rol: DataTypes.INTEGER,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};