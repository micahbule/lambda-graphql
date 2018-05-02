'use strict';

const GraphQL = require('graphql');
const { GraphQLObjectType, GraphQLSchema } = GraphQL;

const ProviderQuery = require('./queries/Provider');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'Main query',
    fields: {
        providers: ProviderQuery.index()
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});