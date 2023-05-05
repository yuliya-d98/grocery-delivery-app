// .js в импортах потому что "module": "NodeNext" в tsconfig.json
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./router/auth.router.js";
import ErrorMiddleware from "./middlewares/error-middleware.js";
import mongoose from "mongoose";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";
import { ApolloServer } from "@apollo/server";
import typeDefs from "./graphql/types.js";
import resolvers from "./graphql/resolvers.js";

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: [process.env.CLIENT_URL!],
  })
);
app.use("/auth", authRouter);
app.use(ErrorMiddleware);

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});
await apolloServer.start();
app.use("/graphql", cors<cors.CorsRequest>(), bodyParser.json(), expressMiddleware(apolloServer));

await mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.tfeag1b.mongodb.net/?retryWrites=true&w=majority`,
  {
    // @ts-ignore
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
app.listen(PORT, () => console.log(`App started on port ${PORT}`));
