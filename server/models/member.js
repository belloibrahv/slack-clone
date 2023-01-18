const { DataTypes } = require("sequelize");

export default (sequelize) => {
  const Member = sequelize.define("member", {
    userId: {
      type: DataTypes.INTEGER,
    },
    teamId: {
      type: DataTypes.INTEGER,
    },
  });

  Member.associate = (models) => {};

  return Member;
};
