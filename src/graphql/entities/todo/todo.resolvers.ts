import { Resolvers } from '../../resolvers'

const TodoResolvers: Resolvers = {
  Query: {
    todos: (_root, args) =>
      [
        {
          id: '1',
          task: 'FE Project setup',
          user: {
            id: '1',
            name: 'Mike',
          },
        },
        {
          id: '2',
          task: 'Add router',
          user: {
            id: '1',
            name: 'Mike',
          },
        },
        {
          id: '3',
          task: 'Add graphql',
          user: {
            id: '1',
            name: 'Mike',
          },
        },
        {
          id: '4',
          task: 'Storybook setup',
          user: {
            id: '1',
            name: 'Mike',
          },
        },
      ].slice(0, args.first || 10),
  },
}

export default TodoResolvers
