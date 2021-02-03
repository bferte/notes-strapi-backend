module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'mongoose',
        settings: {
            // uri: env('DATABASE_URI),
        host: env('DATABASE_HOST', 'strapi-cluster.rb5ft.mongodb.net'),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'backend'),
        username: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'Ny0tbOa2Aqppv6rd'),
        },
        options: {},
      },
    },
  });