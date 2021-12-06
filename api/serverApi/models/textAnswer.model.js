//Question = require("./question.model");

module.exports = (sequelize, Sequelize) => {
  const TextAnswer = sequelize.define("textAnswer", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      userText: {
        type: Sequelize.STRING,
      },
      numberOfVoters: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      }
  });
  
//  TextAnswer.belongsTo(Question);

  return TextAnswer;
}
