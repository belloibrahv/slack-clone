export default {
  Query: {
    getUser: (parent, { id }, { models }) =>
      models.User.findOne({ where: { id } }),
    allUser: (parent, args, { models }) => models.User.findAll(),
  },

  Mutation: {
    createUser: (parent, args, { models }) => models.User.create(args),
  },
};
