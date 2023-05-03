import { buildSchema } from "type-graphql";
import { UserResolver } from "./user/user.resolver.js";

// https://www.freecodecamp.org/news/how-to-use-typescript-with-graphql/

const graphqlSchema = await buildSchema({
  resolvers: [UserResolver],
  emitSchemaFile: true,
});

export default graphqlSchema;
