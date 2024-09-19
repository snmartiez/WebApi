'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profesor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profesor.belongsTo(models.Persona, { foreignKey: 'id_persona', as: 'persona' });
    }
  }
  Profesor.init({
    id_persona:{
      type: DataTypes.INTEGER,
      references: {
        model: 'Persona', // nombre del modelo
        key: 'id'         // clave primaria en Persona
      },
      allowNull: false
    },
    documento: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Profesor',
  });
  return Profesor;
};