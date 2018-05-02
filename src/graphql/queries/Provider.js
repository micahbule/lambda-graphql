'use strict';

const GraphQL = require('graphql');

const { GraphQLList } = GraphQL;

const ProviderType = require('../types/Provider');

const ProviderResolver = require('../resolvers/Provider');

module.exports = {
    index() {
        return {
            type: new GraphQLList(ProviderType),
            description: 'Returns all providers',
            resolve(parent, args, context, info) {
                return ProviderResolver.index();
            }
        }
    }
};