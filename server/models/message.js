import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Message = sequelize.define("message", {
    text: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  });

  Message.associate = (models) => {
    Message.belongsTo(models.Channel, {
      foreignKey: "channelId",
    });
    Message.belongsTo(models.User, {
      foreignKey: "userId",
    });
  };

  return Message;
};
