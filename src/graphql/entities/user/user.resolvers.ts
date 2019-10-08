import { Resolvers } from '../../resolvers.d'

const UserResolvers: Resolvers = {
  Query: {
    users: () => {
      return [
        {
          id: '1',
          name: 'Mike',
        },
      ]
    },
  },
}

export default UserResolvers
