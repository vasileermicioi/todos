// tslint:disable
export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Mutation = {
  __typename?: 'Mutation'
  createTodo: Todo
  createUser: User
}

export type MutationCreateTodoArgs = {
  task?: Maybe<Scalars['String']>
}

export type MutationCreateUserArgs = {
  name?: Maybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  todos?: Maybe<Array<Todo>>
  users?: Maybe<Array<User>>
}

export type QueryTodosArgs = {
  first?: Maybe<Scalars['Int']>
}

export type Todo = {
  __typename?: 'Todo'
  id: Scalars['ID']
  task: Scalars['String']
  user?: Maybe<User>
}

export type User = {
  __typename?: 'User'
  id: Scalars['ID']
  name: Scalars['String']
}
