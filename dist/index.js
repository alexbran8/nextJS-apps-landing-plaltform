"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const express = __importStar(require("express"));
const apollo_server_micro_1 = require("apollo-server-micro");
const next = require("next");
const dev = process.env.APP_ENV !== "development";
console.log('env', process.env);
const app = next({ dev });
const handle = app.getRequestHandler();
const typeDefs = (0, apollo_server_micro_1.gql) `
  type Query {
    root: String
  }

  type apps {
    id: String
    title: String
  }

  type news {
    title: String
    technology: String
    author: String
    theme: String
    place: String
    data: Int
    time: Int
  }

  extend type Query {
    getAllApps: [apps]
    getAllSuppport: [apps]
    getAllSupportRequests: [apps]
    newsletter: [news]
  }
`;
const resolvers = {
    Query: {
        getAllApps() {
            return [{ title: 'landing platformsss', technology: 'JS / Next.JS', url: 'https://apps.gdceur.eecloud.dynamic.nsn-net.net/npt', },
                { title: 'landing platformsss', technology: 'JS / Next.JS', url: 'https://apps.gdceur.eecloud.dynamic.nsn-net.net/npt', }
            ];
        },
        getAllSupportRequests() {
            return [{ title: 'landing platformsss', technology: 'JS / Next.JS', url: '	https://apps.gdceur.eecloud.dynamic.nsn-net.net/npt', },
                { title: 'landing platformsss', technology: 'JS / Next.JS', url: '	https://apps.gdceur.eecloud.dynamic.nsn-net.net/npt', }
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
    },
};
exports.config = {
    api: {
        bodyParser: false,
    },
};
(async () => {
    try {
        app.prepare().then(() => {
            const server = express.default();
            const apolloServer = new apollo_server_micro_1.ApolloServer({
                typeDefs,
                resolvers,
            });
            server.get("*", (req, res) => {
                return handle(req, res);
            });
            apolloServer.start().then((res) => {
                console.log(res);
                console.log('server', process.env.APP_ENV);
                const graphqlHandler = apolloServer.createHandler({ path: "/" });
                server.use("/api/graphql", graphqlHandler);
                server.listen(process.env.PORT || 3000, (err) => {
                    if (err)
                        throw err;
                    console.log(`>>> Listening on http://localhost:${process.env.PORT || 3000}`);
                });
            });
        });
    }
    catch (e) {
        console.error(e);
        process.exit(1);
    }
})();
//# sourceMappingURL=index.js.map