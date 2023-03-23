const Hapi = require('@Hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENW !== 'production' ? 'localhost' ? '0.0.0.0',
    routes:{
        cors:{
            origin:['*'],
        },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
