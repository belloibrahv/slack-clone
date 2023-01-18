import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import models from "./models";
import path from "path";
import { ApolloServer } from "apollo-server-express";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";

const port = 8081;
const app = express();

app.use(bodyParser.json());
app.use(cors("http://localhost:3000/"));
const resolvers = mergeResolvers(
  loadFilesSync(path.join(__dirname, "./resolvers"), { extensions: ["js"] })
);
const typeDefs = mergeTypeDefs(
  loadFilesSync(path.join(__dirname, "./schema"), { extensions: ["js"] })
);

const startServer = async () => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
      models,
      user: {
        id: 1,
      },
    },
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
};

startServer();

models.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server Running on localhost:${port}/graphql`);
  });
});
