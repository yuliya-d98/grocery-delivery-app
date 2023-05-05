const typeDefs = `
    # Comments in GraphQL strings
    type User {
        _id: ID!
        email: String!
        username: String!
        password: String!
        created: Int!
        isActivated: Boolean!
        isAdmin: Boolean!
        favourites: [Product]
        basket: [Product]
        reviews: [Review]
    }
    type Product {
        _id: ID!
         title: String!
         description: String
         image: String
         price: Float
         reviews: [Review]
    }
    type Review {
        _id: ID!
        title: String!
        rating: Int!
        created: Int!
        product: Product!
        user: User!
    }
    
    input UserInput {
        email: String!
        username: String!
        password: String!
        created: Int!
    }
    
    type Query {
        getAllUsers: [User]
        getUserByEmail(email: String): User
    }
    type Mutation {
        createUser(input: UserInput): User
    }
`;

export default typeDefs;
