import { buildConfig } from 'payload/config';
import Users from './collections/Users';
import Orders from './collections/Orders';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Orders,
    // Add Collections here
    // Examples
  ],
});
