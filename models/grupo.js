'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Grupo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Grupo.init({
    grupo: DataTypes.STRING,
    periodo: DataTypes.STRING,
    programa: DataTypes.INTEGER,
    asignatura: DataTypes.STRING,
    profesor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Grupo',
  });
  return Grupo;
};