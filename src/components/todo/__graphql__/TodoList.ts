// tslint:disable
import * as Types from '../../../api/graphql-types'

import gql from 'graphql-tag'
import * as ApolloReactCommon from '@apollo/react-common'
import * as ApolloReactHooks from '@apollo/react-hooks'
export type TodoListQueryVariables = {
  userIds: Array<Types.Scalars['ID']>
}

export type TodoListQuery = { __typename?: 'Query' } & {
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

export const TodoListDocument = gql`
  query TodoList($userIds: [ID!]!) {
    todos(where: { user_id_in: $userIds }) {
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

export function useTodoListQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    TodoListQuery,
    TodoListQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<TodoListQuery, TodoListQueryVariables>(
    TodoListDocument,
    baseOptions
  )
}
export function useTodoListLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    TodoListQuery,
    TodoListQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<TodoListQuery, TodoListQueryVariables>(
    TodoListDocument,
    baseOptions
  )
}

export type TodoListQueryHookResult = ReturnType<typeof useTodoListQuery>
export type TodoListQueryResult = ApolloReactCommon.QueryResult<
  TodoListQuery,
  TodoListQueryVariables
>
