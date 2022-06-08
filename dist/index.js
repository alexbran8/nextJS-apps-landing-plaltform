"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var express = __importStar(require("express"));
var apollo_server_micro_1 = require("apollo-server-micro");
var next = require("next");
var dev = process.env.NODE_ENV !== "production";
var app = next({ dev: dev });
var handle = app.getRequestHandler();
var typeDefs = (0, apollo_server_micro_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    root: String\n  }\n\n  type apps {\n    id: String\n    title: String\n    url: String\n  }\n\n  type news {\n    title: String\n    technology: String\n    author: String\n    theme: String\n    place: String\n    data: Int\n    time: Int\n    id: String\n    url:String\n  }\n\n  extend type Query {\n    getAllApps: [apps]\n    getAllSuppport: [apps]\n    getAllSupportRequests: [apps]\n    newsletter: [news]\n  }\n  \n  type requests{\n      id: Int!\n      application: String\n      technology: String\n      status: String\n      user: String\n      description: String\n   title: String!\n  }\n  type requests2{\n    id: Int!\n    application: String\n    technology: String\n    status: String\n    user: String\n    description: String\n    requestsCounter:Int!\n}\n\n\n  extend  type Query  {\n    getAllApps: [apps]\n    getRequests: [requests]\n    getAllSuppport: [apps]\n    getAllSupportRequests: [apps]\n    getRequests2: [requests]\n    getAllAppWithIssues: [AppIssue]\n  }\n\n  type AppIssue {\n    id: ID\n    app: apps!\n    issues: [Issue]!\n    whoReportTheProblem: Person\n  }\n\n  type Issue {\n    name: String!\n    place: String\n    description: String\n  }\n\n  type Person {\n    name: String\n    function: String\n    department: String\n  }\n\n  \"\"\" Aici se incepe \"\"\"\n\n  type SecondQuery {\n    root: String\n  }\n\n  type SecondApps {\n   id: String\n   title: String!\n  }\n\n  extend  type SecondQuery  {\n    getSecondAllApps: [SecondApps]\n    getSecondAllAppWithIssues: [SecondAppIssue]\n  }\n\n  type SecondAppIssue {\n    id: ID\n    app: SecondApps!\n    issues: [SecondIssue]!\n    whoReportTheProblem: SecondPerson\n  }\n\n  type SecondIssue {\n    name: String!\n    place: String\n    description: String\n  }\n\n  type SecondPerson {\n    name: String\n    function: String\n    department: String\n  }\n"], ["\n  type Query {\n    root: String\n  }\n\n  type apps {\n    id: String\n    title: String\n    url: String\n  }\n\n  type news {\n    title: String\n    technology: String\n    author: String\n    theme: String\n    place: String\n    data: Int\n    time: Int\n    id: String\n    url:String\n  }\n\n  extend type Query {\n    getAllApps: [apps]\n    getAllSuppport: [apps]\n    getAllSupportRequests: [apps]\n    newsletter: [news]\n  }\n  \n  type requests{\n      id: Int!\n      application: String\n      technology: String\n      status: String\n      user: String\n      description: String\n   title: String!\n  }\n  type requests2{\n    id: Int!\n    application: String\n    technology: String\n    status: String\n    user: String\n    description: String\n    requestsCounter:Int!\n}\n\n\n  extend  type Query  {\n    getAllApps: [apps]\n    getRequests: [requests]\n    getAllSuppport: [apps]\n    getAllSupportRequests: [apps]\n    getRequests2: [requests]\n    getAllAppWithIssues: [AppIssue]\n  }\n\n  type AppIssue {\n    id: ID\n    app: apps!\n    issues: [Issue]!\n    whoReportTheProblem: Person\n  }\n\n  type Issue {\n    name: String!\n    place: String\n    description: String\n  }\n\n  type Person {\n    name: String\n    function: String\n    department: String\n  }\n\n  \"\"\" Aici se incepe \"\"\"\n\n  type SecondQuery {\n    root: String\n  }\n\n  type SecondApps {\n   id: String\n   title: String!\n  }\n\n  extend  type SecondQuery  {\n    getSecondAllApps: [SecondApps]\n    getSecondAllAppWithIssues: [SecondAppIssue]\n  }\n\n  type SecondAppIssue {\n    id: ID\n    app: SecondApps!\n    issues: [SecondIssue]!\n    whoReportTheProblem: SecondPerson\n  }\n\n  type SecondIssue {\n    name: String!\n    place: String\n    description: String\n  }\n\n  type SecondPerson {\n    name: String\n    function: String\n    department: String\n  }\n"])));
var resolvers = {
    Query: {
        getAllApps: function () {
            return [
                {
                    title: "NPT",
                    id: 1,
                    technology: "JS / Next.JS",
                    url: "https://apps.gdceur.eecloud.dynamic.nsn-net.net/npt",
                },
                {
                    title: "Dashboard",
                    id: 2,
                    technology: "JS / Next.JS",
                    url: "https://apps.gdceur.eecloud.dynamic.nsn-net.net/dashboard",
                },
                {
                    title: "CDR",
                    id: 3,
                    technology: "JS / Next.JS",
                    url: "https://apps.gdceur.eecloud.dynamic.nsn-net.net/cdrbeta",
                },
                {
                    title: "CDR (OLD)",
                    id: 4,
                    technology: "JS / Next.JS",
                    url: "https://apps.gdceur.eecloud.dynamic.nsn-net.net/cdr",
                },
                {
                    title: "NI TOOLS",
                    id: 5,
                    technology: "JS / Next.JS",
                    url: "https://apps.gdceur.eecloud.dynamic.nsn-net.net/tools",
                },
                {
                    title: "SAO TOOLS (WIP)",
                    id: 6,
                    technology: "JS / Next.JS",
                    url: "https://apps.gdceur.eecloud.dynamic.nsn-net.net/saotools",
                },
                {
                    title: "TACDB (END OF FILE)",
                    id: 7,
                    technology: "JS / Next.JS",
                    url: "https://apps.gdceur.eecloud.dynamic.nsn-net.net/tacdb",
                }
            ];
        },
        getAllSupportRequests: function () {
            return [{ title: 'landing platformsss', technology: 'JS / Next.JS', url: '	https://apps.gdceur.eecloud.dynamic.nsn-net.net/npt', },
                { title: 'landing platformsss', technology: 'JS / Next.JS', url: '	https://apps.gdceur.eecloud.dynamic.nsn-net.net/npt', }
            ];
        },
        newsletter: function () {
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
        getRequests: function () {
            return [{ id: 1, application: 'Dashboard', technology: 'JS / Next.JS', status: 'in progress', user: 'Jack', description: 'short description of the issue' },
                { id: 2, application: 'NPT', technology: 'React', status: 'problem solved', user: 'Daniel', description: 'short description of the issue' },
                { id: 3, application: 'Math Calculator', technology: 'JS', status: 'unknown', user: 'Andrei', description: 'bugs on multiplication with fractional numbers' },
            ];
        },
        getAllAppWithIssues: function () {
            return [
                {
                    id: 1,
                    app: '',
                    issues: {
                        issueId: 'issue1',
                        appid: 1,
                        name: 'Name1',
                        place: 'Place1',
                        description: 'Description1'
                    },
                    whoReportedTheProblem: {
                        reportId: 'report1',
                        appId: 1,
                        name: 'NumeP1',
                        function: 'Function1',
                        department: 'Departament1'
                    },
                },
            ];
        }
    },
    SecondQuery: {
        getSecondAllApps: function () {
            return [{ title: 'landing platformsss', technology: 'JS / Next.JS', url: '	https://apps.gdceur.eecloud.dynamic.nsn-net.net/npt', },
                { title: 'landing platformsss', technology: 'JS / Next.JS', url: '	https://apps.gdceur.eecloud.dynamic.nsn-net.net/npt', }
            ];
        },
        getSecondAllAppWithIssues: function () {
            return [
                {
                    id: 1,
                    app: '',
                    issues: {
                        issueId: 'issue1',
                        appid: 1,
                        name: 'Name1',
                        place: 'Place1',
                        description: 'Description1'
                    },
                    whoReportedTheProblem: {
                        reportId: 'report1',
                        appId: 1,
                        name: 'NumeP1',
                        function: 'Function1',
                        department: 'Departament1'
                    },
                },
            ];
        }
    },
};
exports.config = {
    api: {
        bodyParser: false,
    },
};
app.prepare().then(function () {
    var server = express.default();
    var apolloServer = new apollo_server_micro_1.ApolloServer({
        typeDefs: typeDefs,
        resolvers: resolvers,
    });
    server.get("*", function (req, res) {
        return handle(req, res);
    });
    apolloServer.start().then(function (res) {
        console.log(res);
        var graphqlHandler = apolloServer.createHandler({ path: "/" });
        server.use("/api/graphql", graphqlHandler);
        server.listen(process.env.PORT || 3000, function (err) {
            if (err)
                throw err;
            console.log(">>> Listening on http://localhost:".concat(process.env.PORT || 3000));
        });
    });
});
var templateObject_1;
//# sourceMappingURL=index.js.map