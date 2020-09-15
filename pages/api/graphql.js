import { ApolloServer, gql } from 'apollo-server-micro';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import connectDB from '../../lib/mongoose';

import { movieResolvers } from '../../api/movies/resolvers/resolvers';
import { movieMutations } from '../../api/movies/mutations/mutation';
import Movies from '../../api/movies/Movies.graphql';

const resolvers = mergeResolvers([
    movieResolvers,
    movieMutations
]);

const typeDefs = mergeTypeDefs([
    Movies
])

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,  
    playground: true,
});

export const config = {
    api: {
        bodyParser: false
    }
}

const server = apolloServer.createHandler({ path: "/api/graphql"});
export default connectDB(server);