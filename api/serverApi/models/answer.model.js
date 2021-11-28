import Question from "question.model.js";

const Answer = sequelize.define("answer", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    text: {
      type: Sequelize.STRING,
    },
    indexInsideTheQuestion: {
        type: Sequelize.INTEGER
    },
    numberOfVoters: {
        type: Sequelize.INTEGER,
        default: 0
    }
});

Answer.belongsTo(Question);