'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Room_Dialogue}) {
      this.belongsTo(Room_Dialogue, {foreignKey: 'room_dialogue_id'});
      // define association here
    }
  }
  Test.init({
    title: DataTypes.STRING,
    qa: DataTypes.JSON,
    room_dialogue_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Test',
  });
  return Test;
};