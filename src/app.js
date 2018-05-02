const express = require('express');
const bodyParser = require('body-parser');
const expressGraphQL = require('express-graphql');

const GraphQLSchema = require('./graphql/schema');

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));

app.use('/', expressGraphQL(() => {
    return {
        graphiql: true,
        schema: GraphQLSchema
    };
}));

module.exports = app;