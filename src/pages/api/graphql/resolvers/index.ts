import postResolvers from './post';
import menuResolvers from './menu';
import categoryResolvers from './category';

const resolvers = [categoryResolvers, postResolvers, menuResolvers];

export default resolvers;
