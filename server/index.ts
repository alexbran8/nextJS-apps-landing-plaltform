import * as express from "express";
import { ApolloServer, gql } from "apollo-server-micro";
import { PageConfig } from "next";
// import { graphqlExpress } from 'apollo-server-express';
const next = require("next");
// import api from './api'
// import type { PageConfig } from "next";
// import { config } from "process";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// TODO: note down what and why each of the below are doing
//Schema definition -> a schema defines a collection of types and relation between those types
//A schema type has one or more fields 
//The GraphQl is used to define a human-readeble SDL that we use to define our schema
// (a schema is not responsible for where data comes from or how it's stored)

//A resolver is a function that's responsible for populating the data for a single field in your schema.
//We can populate data by fetching it from a back-end database or a third-party API 
//we define all of our server's resolvers in a single JavaScript object (this object is called a resolver map)

// We can use "!" to require that a field can't return null
// https://www.apollographql.com/docs/apollo-server/schema/schema
// graphql is a scheme that helps us to collect information from the back-end and this
// consists in choosing the category and defining the chosen type, we can define it by
// the representative elements and the type of elements

// https://www.apollographql.com/docs/apollo-server/data/resolvers/
// the resolver is how we describe the way we want the data to be collected,
// the way we want to use the data

// TODO: https://www.apollographql.com/docs/apollo-server/schema/schema
// TODO: create a schema for each of one the getAll query
const typeDefs = gql`
  type Query {
    root: String
  }

  type apps {
    id: String
    title: String
    url: String
  }

  type news {
    title: String
    technology: String
    author: String
    theme: String
    place: String
    data: Int
    time: Int
    id: String
    url:String
  }

  extend type Query {
    getAllApps: [apps]
    getAllSuppport: [apps]
    getAllSupportRequests: [apps]
    newsletter: [news]
  }
  
  type requests{
      id: Int!
      application: String
      technology: String
      status: String
      user: String
      description: String
   title: String!
  }
  type requests2{
    id: Int!
    application: String
    technology: String
    status: String
    user: String
    description: String
    requestsCounter:Int!
}


  extend  type Query  {
    getAllApps: [apps]
    getRequests: [requests]
    getAllSuppport: [apps]
    getAllSupportRequests: [apps]
    getRequests2: [requests]
    getAllAppWithIssues: [AppIssue]
  }

  type AppIssue {
    id: ID
    app: apps!
    issues: [Issue]!
    whoReportTheProblem: Person
  }

  type Issue {
    name: String!
    place: String
    description: String
  }

  type Person {
    name: String
    function: String
    department: String
  }

  """ Aici se incepe """

  type SecondQuery {
    root: String
  }

  type SecondApps {
   id: String
   title: String!
  }

  extend  type SecondQuery  {
    getSecondAllApps: [SecondApps]
    getSecondAllAppWithIssues: [SecondAppIssue]
  }

  type SecondAppIssue {
    id: ID
    app: SecondApps!
    issues: [SecondIssue]!
    whoReportTheProblem: SecondPerson
  }

  type SecondIssue {
    name: String!
    place: String
    description: String
  }

  type SecondPerson {
    name: String
    function: String
    department: String
  }
`;
// """ Aici se termina"""



// TODO: https://www.apollographql.com/docs/apollo-server/data/resolvers/
// TODO: create a resolver for each of one the getAll query
const resolvers = {
  Query: {
    getAllApps() {
      return [
        {
          title: "NPT",
          id:1,
          technology: "JS / Next.JS",
          url: "https://apps.gdceur.eecloud.dynamic.nsn-net.net/npt",
        },
        {
          title: "Dashboard",
          id:2,
          technology: "JS / Next.JS",
          url: "https://apps.gdceur.eecloud.dynamic.nsn-net.net/dashboard",
        },
        {
          title: "CDR",
          id:3,
          technology: "JS / Next.JS",
          url: "https://apps.gdceur.eecloud.dynamic.nsn-net.net/cdrbeta",
        },
        {
          title: "CDR (OLD)",
          id:4,
          technology: "JS / Next.JS",
          url: "https://apps.gdceur.eecloud.dynamic.nsn-net.net/cdr",
        },
        {
          title: "NI TOOLS",
          id:5,
          technology: "JS / Next.JS",
          url: "https://apps.gdceur.eecloud.dynamic.nsn-net.net/tools",
        },
        {
          title: "SAO TOOLS (WIP)",
          id:6,
          technology: "JS / Next.JS",
          url: "https://apps.gdceur.eecloud.dynamic.nsn-net.net/saotools",
        },
        {
          title: "TACDB (END OF FILE)",
          id:7,
          technology: "JS / Next.JS",
          url: "https://apps.gdceur.eecloud.dynamic.nsn-net.net/tacdb",
        }
      ];
    },

    getAllSupportRequests() {
      return [{title:'landing platformsss', technology:'JS / Next.JS', url: '	https://apps.gdceur.eecloud.dynamic.nsn-net.net/npt', },
      {title:'landing platformsss', technology:'JS / Next.JS', url: '	https://apps.gdceur.eecloud.dynamic.nsn-net.net/npt', }
    ];
    },
    newsletter() {
      return [
        {
          title: "News-1",
          technology: "JS",
          data: "20-03-2022",
          author: "James",
          theme: "Web",
          place: "RO",
          time: "12:06",
        },
        {
          title: "News-2",
          technology: "REACT",
          data: "22-03-2022",
          author: "David",
          theme: "Web",
          place: "USA",
          time: "14:46",
        },
        {
          title: "News-3",
          technology: "NODE",
          data: "22-01-2022",
          author: "Alex",
          theme: "Web",
          place: "UK",
          time: "17:26",
        },
      ];
    },
    getRequests(){
      return  [{id:1, application: 'Dashboard', technology: 'JS / Next.JS', status: 'in progress', user: 'Jack', description: 'short description of the issue'},
               {id:2, application: 'NPT', technology: 'React', status: 'problem solved', user: 'Daniel', description: 'short description of the issue'},
               {id:3, application: 'Math Calculator', technology: 'JS', status: 'unknown', user: 'Andrei', description: 'bugs on multiplication with fractional numbers'}, 
    ];
  },

    getAllAppWithIssues() {
      
      return [
        {
          id: 1,
          app: '',
           issues: 
              {
                issueId: 'issue1',
                appid: 1,
                name: 'Name1',
                place: 'Place1',
                description: 'Description1'
              },
           whoReportedTheProblem: 
              {
                reportId: 'report1',
                appId: 1,
                name: 'NumeP1',
                function:'Function1',
                department: 'Departament1'
              },
        },
      ];
    }

  },
  // Aici începe resolver nr.2
  SecondQuery: {
    getSecondAllApps() {
      return [{title:'landing platformsss', technology:'JS / Next.JS', url: '	https://apps.gdceur.eecloud.dynamic.nsn-net.net/npt', },
      {title:'landing platformsss', technology:'JS / Next.JS', url: '	https://apps.gdceur.eecloud.dynamic.nsn-net.net/npt', }
    ];
    },

    getSecondAllAppWithIssues() {
      
      return [
        {
          id: 1,
          app: '',
           issues: 
              {
                issueId: 'issue1',
                appid: 1,
                name: 'Name1',
                place: 'Place1',
                description: 'Description1'
              },
           whoReportedTheProblem: 
              {
                reportId: 'report1',
                appId: 1,
                name: 'NumeP1',
                function:'Function1',
                department: 'Departament1'
              },
        },
      ];
    }

  },
// Aici se temină resolver nr.2
};



export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};



// export const config: PageConfig = {
//   api: {
//     bodyParser: false,
//   },
// };

app.prepare().then(() => {
  const server = express.default();

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,

    // TODO: https://www.graphql-modules.com/docs/essentials/context
    // TODO: context has been disabled as it's not yet necessary until authentification will be implemented

    // context: async ({ req, res, connection }) => {
    //   // let databaseConnection = await prepareConnection();
    //   console.log('jere')
    //   return {
    //     req,
    //     res,
    //     connection,
    //     // databaseConnection,
    //   };
    // },
  });

  // const graphqlHandler = apolloServer.createHandler({path: "/"});
  // server.use('/api/graphql', graphqlHandler)

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  apolloServer.start().then((res) => {
    console.log(res);
    const graphqlHandler = apolloServer.createHandler({ path: "/" });
    server.use("/api/graphql", graphqlHandler);
    server.listen(process.env.PORT || 3000, (err: string | void) => {
      if (err) throw err;
      console.log(
        `>>> Listening on http://localhost:${process.env.PORT || 3000}`
      );
    });
  });
  // apolloServer.applyMiddleware({ app, path: "/graphql" });
  // app.listen(options, () => console.log(`Server is running on port ${port}!`));
  //  })

  //   server.listen(process.env.PORT || 3000, (err: string|void) => {
  //     if (err) throw err
  //     console.log(`>>> Listening on http://localhost:${process.env.PORT || 3000}`)
  //   })
  // })
  // .catch((ex:any) => {
  //   console.error(ex.stack)
  //   process.exit(1)
});
// } catch (e) {
//   console.error(e);
//   process.exit(1);
// }
// })();