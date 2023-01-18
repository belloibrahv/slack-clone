const { DataTypes } = require("sequelize");

export default (sequelize) => {
  const Team = sequelize.define("team", {
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
    owner: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  });

  Team.associate = (models) => {
    Team.belongsTo(models.User, {
      through: "member",
      foreignKey: "teamId",
    });
    Team.belongsTo(models.User, {
      foreignKey: "owner",
    });
  };

  return Team;
};
