"use client";

import { ApolloProvider as Provider } from "@apollo/client";
import { client } from "../lib/apollo-client";


export const ApolloProvider = ({ children }) => (
    <Provider client={client}>{children}</Provider>
);
