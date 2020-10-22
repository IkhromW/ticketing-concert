'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Concert extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Concert.belongsToMany(models.Customer,{
        through: models.CustomerConcert,
        foreignKey: 'ConcertId'
      })
    }
  };
  Concert.init({
    group: DataTypes.STRING,
    date: DataTypes.DATE,
    time: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    poster: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Concert',
  });
  return Concert;
};