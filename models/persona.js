'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Persona.hasOne(models.Users, { foreignKey: 'id_persona', as: 'usuario' });
      Persona.hasMany(models.Estudiantes, { foreignKey: 'id_persona' });
      Persona.hasOne(models.Profesor, { foreignKey: 'id_persona' });
    }
  }
  Persona.init({
    id: {  // Clave primaria 'id', autoincremental
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    documento: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    nombres: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apellidos: DataTypes.STRING,
    sexo: DataTypes.STRING,
    telefono: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    }
  }, {
    sequelize,
    modelName: 'Persona',
  });
  return Persona;
};