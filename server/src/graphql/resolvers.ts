import UserModel from "../models/user.js";

type TReview = {
  title: string;
  rating: number;
  created: number;
  product: TProduct;
  user: TUser;
};
type TProduct = {
  title: string;
  description: string;
  image: string;
  price: number | null;
  reviews: TReview[];
};
type TUser = {
  email: string;
  username: string;
  password: string;
  created: number;
  isActivated: boolean;
  isAdmin: boolean;
  favourites: TProduct[];
  basket: TProduct[];
  reviews: TReview[];
};

const users: TUser[] = [
  {
    email: "email",
    username: "email",
    password: "email",
    created: Date.now(),
    isActivated: false,
    isAdmin: false,
    favourites: [],
    basket: [],
    reviews: [],
  },
  {
    email: "email2",
    username: "email",
    password: "email",
    created: 1,
    isActivated: false,
    isAdmin: false,
    favourites: [],
    basket: [],
    reviews: [],
  },
];
const products: TProduct[] = [
  {
    title: "title",
    description: "title",
    image: "title",
    price: 7,
    reviews: [],
  },
  {
    title: "2",
    description: "title",
    image: "title",
    price: 7,
    reviews: [],
  },
];
const reviews: TReview[] = [
  {
    title: "title",
    rating: 5,
    created: Date.now(),
    product: products[0],
    user: users[0],
  },
];

const resolvers = {
  Query: {
    getAllUsers: async (parent: any, args: any, contextValue: any, info: any) => {
      // query ExampleQuery {
      //   getAllUsers {
      //     email, username
      //   }
      // }
      const users = await UserModel.find();
      return users;
    },
    getUserByEmail: async (parent: any, { email }: any) => {
      // query getUserByEmail {
      //   getUserByEmail(email: "email") {
      //     email, username, password
      //   }
      // }
      const user = await UserModel.findOne({ email });
      return user;
    },
  },
  Mutation: {
    createUser: async (
      parent: any,
      { input }: { input: Pick<TUser, "email" | "username" | "password" | "created"> }
    ) => {
      // mutation createUser {
      //   createUser(input: {email: "createUser", username: "createUser", password: "createUser", created: 111}) {
      //     email, username, created
      //   }
      // }
      const newUser = new UserModel({
        ...input,
        isActivated: false,
        isAdmin: false,
        favourites: [],
        basket: [],
        reviews: [],
      });
      const user = await newUser.save();
      return user;
    },
  },
};

export default resolvers;
