// tslint:disable
import * as Types from '../../../api/graphql-types'

import gql from 'graphql-tag'
import * as ApolloReactCommon from '@apollo/react-common'
import * as ApolloReactHooks from '@apollo/react-hooks'
export type TodoSearchQueryVariables = {
  search: Types.Scalars['String']
  page?: Types.Maybe<Types.Scalars['Int']>
}

export type TodoSearchQuery = { __typename?: 'Query' } & {
  todos: Types.Maybe<
    Array<
      Types.Maybe<
        { __typename?: 'Todo' } & Pick<Types.Todo, 'id' | 'task' | 'done'> & {
            user: { __typename?: 'User' } & Pick<Types.User, 'id' | 'username'>
          }
      >
    >
  >
}

export const TodoSearchDocument = gql`
  query TodoSearch($search: String!, $page: Int = 1) {
    todos(
      where: {
        or: [
          { user_username_contains: $search }
          { user_email_contains: $search }
        ]
      }
      limit: 10
      page: $page
    ) {
      id
      task
      done
      user {
        id
        username
      }
    }
  }
`

export function useTodoSearchQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    TodoSearchQuery,
    TodoSearchQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<TodoSearchQuery, TodoSearchQueryVariables>(
    TodoSearchDocument,
    baseOptions
  )
}
export function useTodoSearchLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    TodoSearchQuery,
    TodoSearchQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    TodoSearchQuery,
    TodoSearchQueryVariables
  >(TodoSearchDocument, baseOptions)
}

export type TodoSearchQueryHookResult = ReturnType<typeof useTodoSearchQuery>
export type TodoSearchQueryResult = ApolloReactCommon.QueryResult<
  TodoSearchQuery,
  TodoSearchQueryVariables
>
