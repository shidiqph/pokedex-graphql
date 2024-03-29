import { ApolloClient, InMemoryCache } from '@apollo/client';
import { API_URL } from './api';

const client = () => {
    return new ApolloClient({
        uri: API_URL,
        cache: new InMemoryCache(),
    });
};

export default client;