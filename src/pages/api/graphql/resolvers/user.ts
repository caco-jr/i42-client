export default {
  Query: {
    users(parent, args, context) {
      return [{ name: 'Nextjs' }];
    }
  }
};
