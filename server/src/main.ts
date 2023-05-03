// .js в импортах потому что "module": "NodeNext" в tsconfig.json
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./router/auth.router.js";
import ErrorMiddleware from "./middlewares/error-middleware.js";
import { graphqlHTTP } from "express-graphql";
import graphqlSchema from "./graphql/schema.js";

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
app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    graphiql: true,
  })
);

app.use(ErrorMiddleware);
app.listen(PORT, () => console.log(`App started on port ${PORT}`));
