import Head from 'next/head';
import { ApolloClient } from '@apollo/client'
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';

export function withApollo (PageComponent) { 
   
    const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {

        const client = apolloClient || initialApolloClient(apolloState);

        return (
            <ApolloProvider client={client}>
                <PageComponent {...pageProps} />
            </ApolloProvider>
        )
    };

    WithApollo.getInitialProps = async(ctx) => {
        const { AppTree } = ctx;
        const apolloClient = ( ctx.apolloClient = initialApolloClient());

        let pageProps = {};

        if(PageComponent.getInitialProps) {
            pageProps = await PageComponent.getInitialProps(ctx);
        }

        // If on server
        if(typeof window === 'undefined') {
            if( ctx.res && ctx.res.finished) {
                return pageProps;
            }

            try {
                const { getDataFromTree } = await import('@apollo/react-ssr');
                await getDataFromTree(
                    <AppTree 
                        pageProps = {{
                            ...pageProps,
                            apolloClient
                        }}
                    />
                )
            } catch (err) {
                console.error(err)
            }

            Head.rewind();
        }
        const apolloState = apolloClient.cache.extract();
        return {
            ...pageProps,
            apolloState
        }
    }
 
    return WithApollo;
};

const isDev = process.env.NODE_ENV !== "production";
const url = isDev ? 'http://localhost:3000' : 'https://wizardly-johnson-39468b.netlify.app'

const initialApolloClient = (initialState = {}) => {

    const ssrMode = typeof window === 'undefined';
    const cache = new InMemoryCache().restore(initialState);

    const client = new ApolloClient({
        ssrMode,
        uri: `${url}/api/graphql`,
        cache
    });

    return client;
};