'use strict';

const GraphQL = require('graphql');

const { GraphQLObjectType, GraphQLID, GraphQLString } = GraphQL;

const ProviderType = new GraphQLObjectType({
    name: 'Provider',
    description: 'Provider Type, For all provider data',
    fields: () => ({
        id: {
            type: GraphQLID,
            description: 'Provider ID'
        },
        name: {
            type: GraphQLString,
            description: 'Provider Name'
        }
    })
});

module.exports = ProviderType;