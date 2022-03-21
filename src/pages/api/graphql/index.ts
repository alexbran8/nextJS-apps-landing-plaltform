import "reflect-metadata";
// import { ApolloServer, gql } from "apollo-server-micro";
import type { PageConfig } from "next";
// import { buildSchema } from "type-graphql";
// import { HelloWorldResolver } from "../../../../lib/serverless/graphql/resolvers/HelloWorldResolver";
// import { UserResolver } from "../../../../lib/serverless/graphql/resolvers/UserResolver";
// import { prepareConnection } from "../../../../lib/serverless/utils/db";
import {ApolloServer, gql} from 'apollo-server-micro'
import { title } from "process";
// import typeDefs   from "../../../../lib/serverless/graphql/schemas/"
// disable next js from handling this route
export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};


const typeDefs = gql`
  type Query {
    root: String
  }

  type apps {
   id: String
   title: String
  }

  extend  type Query  {
    getAllApps: [apps]
  }
`;

const resolvers = {
  Query: {
    getAllApps(parent, args, context) {
      return [{title:'landing platform', technology:'JS / Next.JS', url: '	https://apps.gdceur.eecloud.dynamic.nsn-net.net/npt', }];
    },
  },
};

const apolloServer = new ApolloServer({
  // schema: await buildSchema({
  //   resolvers: [UserResolver],
  // }),
  typeDefs,
  resolvers
  // context: async ({ req, res, connection }) => {
  //   let databaseConnection = await prepareConnection();
  //   return {
  //     req,
  //     res,
  //     connection,
  //     databaseConnection,
  //   };
  // },
});

export default apolloServer.createHandler({ path: "/api/graphql" });

// export default apiNewSession;

// export default apolloServer.start().then(() => {
//   return apolloServer.createHandler({ path: '/api/graphql' });
// });