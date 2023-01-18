const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("slack", "postgres", "internet", {
  dialect: "postgres",
  port: "5433",
  define: {
    underscored: true,
  },
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully");
} catch (error) {
  console.error("Unable to connect to database: ", error);
}

const models = {
  User: sequelize.import("./user"),
  Channel: sequelize.import("./channel"),
  Member: sequelize.import("./member"),
  Message: sequelize.import("./message"),
  Team: sequelize.import("./team"),
};

Object.keys(models).forEach((model) => {
  if ("associate" in models[model]) {
    models[model].associate(models);
  }
});
models.sequelize = sequelize;
models.Sequelize = sequelize;

export default models;
