const express = require("express");
const cors = require("cors");
const { ApolloServer, gql } = require("apollo-server-express");
const fs = require('fs');
const https = require('https')
const http = require('http');

require("dotenv").config();
require("./config/database");

const mongoQ = require("./provider");
const typeDefs = require("./graphql/rootSchema");
const resolvers = require("./graphql/rootResolver");


async function startApolloServer() {
    const configurations = {
        production: { ssl: false, port: 5000, hostname: 'localhost' },
        development: { ssl: false, port: 5000, hostname: 'localhost' }
    }

    const environment = process.env.NODE_ENV || 'production'
    const config = configurations[environment]

    const apollo = new ApolloServer({
        typeDefs,
        resolvers,
        context: async ({ req }) => ({ mongoQ }),
    });
    await apollo.start();

    const app = express();
    apollo.applyMiddleware({ app });

    // Middleware
    app.use(cors());
    app.use(express.static("public"));
    app.get("*", (req, res) => {
        res.sendFile(__dirname + "/public/index.html");
    });

    // Creating Server
    var server
    if (config.ssl) {
        server = https.createServer(
            {
                key: fs.readFileSync(process.env.SSL_KEY_URL),
                cert: fs.readFileSync(process.env.SSL_CERTIFICATE_URL)
            },
            app
        )
    } else {
        server = http.createServer(app)
    }

    server.listen({ port: config.port }, () =>
        console.log(
            '🚀 Server ready at',
            `http${config.ssl ? 's' : ''}://${config.hostname}:${config.port}${apollo.graphqlPath}`
        )
    )

    return { apollo, app };
}

startApolloServer();








