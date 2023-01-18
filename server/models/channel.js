import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Channel = sequelize.define("channel", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    teamId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    public: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
  });
  Channel.associate = (models) => {
    Channel.belongsTo(models.Team, {
      foreignKey: "channelId",
    });
    Channel.belongsTo(models.User, {
      foreignKey: "userId",
    });
  };

  return Channel;
};
