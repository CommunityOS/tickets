/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable */
/* prettier-ignore */
/* This file is automatically generated. Please do not modify it manually. */
import * as Types from '../../../../api/gql/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/experimental-nextjs-app-support/ssr';
const defaultOptions = {} as const;
export type FetchExampleEventsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type FetchExampleEventsQuery = { __typename?: 'Query', events: Array<{ __typename?: 'Event', id: string, description?: string | null, community?: { __typename?: 'Community', id: string, name?: string | null } | null, users: Array<{ __typename?: 'User', id: string }>, tags: Array<{ __typename?: 'Tag', id: string, name?: string | null, description?: string | null }> }> };


export const FetchExampleEventsDocument = gql`
    query FetchExampleEvents {
  events {
    id
    description
    community {
      id
      name
    }
    users {
      id
    }
    tags {
      id
      name
      description
    }
  }
}
    `;

/**
 * __useFetchExampleEventsQuery__
 *
 * To run a query within a React component, call `useFetchExampleEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchExampleEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchExampleEventsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchExampleEventsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FetchExampleEventsQuery, FetchExampleEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<FetchExampleEventsQuery, FetchExampleEventsQueryVariables>(FetchExampleEventsDocument, options);
      }
export function useFetchExampleEventsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FetchExampleEventsQuery, FetchExampleEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<FetchExampleEventsQuery, FetchExampleEventsQueryVariables>(FetchExampleEventsDocument, options);
        }
export function useFetchExampleEventsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<FetchExampleEventsQuery, FetchExampleEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<FetchExampleEventsQuery, FetchExampleEventsQueryVariables>(FetchExampleEventsDocument, options);
        }
export type FetchExampleEventsQueryHookResult = ReturnType<typeof useFetchExampleEventsQuery>;
export type FetchExampleEventsLazyQueryHookResult = ReturnType<typeof useFetchExampleEventsLazyQuery>;
export type FetchExampleEventsSuspenseQueryHookResult = ReturnType<typeof useFetchExampleEventsSuspenseQuery>;
export type FetchExampleEventsQueryResult = Apollo.QueryResult<FetchExampleEventsQuery, FetchExampleEventsQueryVariables>;