// tslint:disable
import * as Types from '../../../../graphql/types.d'

import gql from 'graphql-tag'
import * as ApolloReactCommon from '@apollo/react-common'
import * as ApolloReactHooks from '@apollo/react-hooks'
export type GetTodosQueryVariables = {
  top?: Types.Maybe<Types.Scalars['Int']>
}

export type GetTodosQuery = { __typename?: 'Query' } & {
  todos: Types.Maybe<
    Array<
      { __typename?: 'Todo' } & Pick<Types.Todo, 'id' | 'task'> & {
          user: Types.Maybe<
            { __typename?: 'User' } & Pick<Types.User, 'id' | 'name'>
          >
        }
    >
  >
}

export const GetTodosDocument = gql`
  query GetTodos($top: Int = 10) {
    todos(first: $top) {
      id
      task
      user {
        id
        name
      }
    }
  }
`

export function useGetTodosQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetTodosQuery,
    GetTodosQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetTodosQuery, GetTodosQueryVariables>(
    GetTodosDocument,
    baseOptions
  )
}
export function useGetTodosLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetTodosQuery,
    GetTodosQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<GetTodosQuery, GetTodosQueryVariables>(
    GetTodosDocument,
    baseOptions
  )
}

export type GetTodosQueryHookResult = ReturnType<typeof useGetTodosQuery>
export type GetTodosQueryResult = ApolloReactCommon.QueryResult<
  GetTodosQuery,
  GetTodosQueryVariables
>
