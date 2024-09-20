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
      Users.belongsTo(models.Persona, { foreignKey: 'id_persona', as: 'usuario' });  // Referencia correcta a Persona
      Users.belongsTo(models.Roles, { foreignKey: 'id_rol', as: 'role' });        // Referencia correcta a Roles
    }
  }
  Users.init({
    id_persona: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Persona', // nombre del modelo
        key: 'id'         // clave primaria en Persona
      },
      allowNull: false
    },
    id_rol: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Roles',  // nombre del modelo Roles
        key: 'id'        // clave primaria en Roles
      },
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true  // El nombre de usuario debe ser único
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};