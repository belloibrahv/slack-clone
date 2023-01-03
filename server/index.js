import express from "express";
import bodyParser from "body-parser";
import { ApolloServer } from "apollo-server-express";
import { makeExecutableSchema } from "@graphql-tools/schema";

import typeDefs from "./schema";
import resolvers from "./resolvers";

const app = express();

app.use(bodyParser.json());

const server = new ApolloServer({
  introspection: true,
  typeDefs,
  resolvers,

  formatError: (error) => {
    return error;
  },

  context: ({ req, res }) => {
    return {
      req,
      res,
    };
  },
});

const startServer = async () => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  await apolloServer.applyMiddleware({ app, path: "/graphql" });
};

startServer();

// server.applyMiddleware({ app, path: "/graphql" });

app.listen({ port: 8080 }, () => {
  console.log(`🚀 Server ready at http://localhost:8080`);
});
