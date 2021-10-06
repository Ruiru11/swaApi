import express from "express";
import { ApolloServer } from "apollo-server-express";
import cors from 'cors';
import schema from "./src/graphql";


async function startServer() {
  const server = new ApolloServer({
    schema,
  });

  await server.start();

  const app =  express();

  app.use(cors())

  server.applyMiddleware({
    app,path:'/graphql'
  })

  app.listen(process.env.PORT || 4000,() => {
    console.log("test if running")
  })

}




startServer();



