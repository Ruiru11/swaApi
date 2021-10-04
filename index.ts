import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "./src/graphql";


async function startServer() {
  const server = new ApolloServer({
    schema,
  });

  await server.start();

  const app =  express();

  server.applyMiddleware({
    app,path:'/graphql'
  })

  app.listen(4000,() => {
    console.log("test if running")
  })

}




startServer();



