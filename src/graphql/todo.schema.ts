export default `
directive @external on FIELD_DEFINITION
directive @requires(fields: _FieldSet!) on FIELD_DEFINITION
directive @provides(fields: _FieldSet!) on FIELD_DEFINITION
directive @key(fields: _FieldSet!) on OBJECT | INTERFACE
directive @extends on OBJECT | INTERFACE
scalar _Any

union _Entity = User | Todo
scalar _FieldSet

type _Service {
  sdl: String
}

input CreateTodoInput {
  user_id: ID!
  task: String!
  done: Boolean!
}

input CreateUserInput {
  username: String!
  email: String!
  password: String!
}

scalar DateTime

enum MathOptions {
  ROUND
  FLOOR
  CEIL
}

type Mutation {
  createUser(input: CreateUserInput!): User!
  updateUser(id: ID!, input: UpdateUserInput!): User!
  deleteUser(id: ID!): ID!
  createTodo(input: CreateTodoInput!): Todo!
  updateTodo(id: ID!, input: UpdateTodoInput!): Todo!
  deleteTodo(id: ID!): ID!
  login(email: String!, password: String!): String!
  logout: Boolean!
  register(username: String!, email: String!, password: String!): User!
  _createSnapshot(key: String!): Boolean!
}

type Query {
  users(
    page: Int
    limit: Int
    sort: String
    dir: String
    where: UsersWhere
    ref: String
  ): [User]
  user(id: ID!): User
  todos(
    page: Int
    limit: Int
    sort: String
    dir: String
    where: TodosWhere
    ref: String
  ): [Todo]
  todo(id: ID!): Todo
  _typeDefs: String!
  _entities(representations: [_Any!]!): [_Entity]!
  _service: _Service!
  _aggregation(type: String, field: String, stat: String!, ref: String): Float!
}

type Todo {
  id: ID!
  _nest: Todo!
  _int(min: Int, max: Int): Int!
  _float(min: Float, max: Float, fixed: Int): Float!
  _boolean: Boolean!
  _string(
    type: String
    locale: String
    template: String
    length: Int
    syllables: Int
    casing: String
    min: Int
    max: Int
    pool: String
    sentences: Int
    words: Int
    nationality: String
    full: Boolean
  ): String!
  user: User!
  task(length: Int): String!
  done: Boolean!
}

input TodosWhere {
  and: [TodosWhere!]
  or: [TodosWhere!]
  not: [TodosWhere!]
  id_gt: Float
  id_ge: Float
  id_lt: Float
  id_le: Float
  id_eq: Float
  id_neq: Float
  id_in: [ID!]
  id_nin: [ID!]
  user_id_exists: Boolean
  task_contains: String
  task_startswith: String
  task_endswith: String
  task_eq: String
  task_neq: String
  task_in: [String!]
  task_nin: [String!]
  task_exists: Boolean
  done_eq: Boolean
  done_exists: Boolean
  search: String
  like: String
  user_and: [UsersWhere!]
  user_or: [UsersWhere!]
  user_not: [UsersWhere!]
  user_id_gt: Float
  user_id_ge: Float
  user_id_lt: Float
  user_id_le: Float
  user_id_eq: Float
  user_id_neq: Float
  user_id_in: [ID!]
  user_id_nin: [ID!]
  user_username_contains: String
  user_username_startswith: String
  user_username_endswith: String
  user_username_eq: String
  user_username_neq: String
  user_username_in: [String!]
  user_username_nin: [String!]
  user_username_exists: Boolean
  user_email_contains: String
  user_email_startswith: String
  user_email_endswith: String
  user_email_eq: String
  user_email_neq: String
  user_email_in: [String!]
  user_email_nin: [String!]
  user_email_exists: Boolean
  user_password_contains: String
  user_password_startswith: String
  user_password_endswith: String
  user_password_eq: String
  user_password_neq: String
  user_password_in: [String!]
  user_password_nin: [String!]
  user_password_exists: Boolean
  user_search: String
  user_like: String
}

input UpdateTodoInput {
  user_id: ID
  task: String
  done: Boolean
}

input UpdateUserInput {
  username: String
  email: String
  password: String
}

type User {
  id: ID!
  _nest: User!
  _int(min: Int, max: Int): Int!
  _float(min: Float, max: Float, fixed: Int): Float!
  _boolean: Boolean!
  _string(
    type: String
    locale: String
    template: String
    length: Int
    syllables: Int
    casing: String
    min: Int
    max: Int
    pool: String
    sentences: Int
    words: Int
    nationality: String
    full: Boolean
  ): String!
  todos(
    page: Int
    limit: Int
    sort: String
    dir: String
    where: TodosWhere
    ref: String
  ): [Todo]
  username(length: Int): String!
  email(length: Int): String!
  password(length: Int): String!
}

input UsersWhere {
  and: [UsersWhere!]
  or: [UsersWhere!]
  not: [UsersWhere!]
  id_gt: Float
  id_ge: Float
  id_lt: Float
  id_le: Float
  id_eq: Float
  id_neq: Float
  id_in: [ID!]
  id_nin: [ID!]
  username_contains: String
  username_startswith: String
  username_endswith: String
  username_eq: String
  username_neq: String
  username_in: [String!]
  username_nin: [String!]
  username_exists: Boolean
  email_contains: String
  email_startswith: String
  email_endswith: String
  email_eq: String
  email_neq: String
  email_in: [String!]
  email_nin: [String!]
  email_exists: Boolean
  password_contains: String
  password_startswith: String
  password_endswith: String
  password_eq: String
  password_neq: String
  password_in: [String!]
  password_nin: [String!]
  password_exists: Boolean
  search: String
  like: String
}


`
