const Hapi = require('@hapi/hapi');
const notes = require('./routes.js');

const initServer = async () => {
  const server = Hapi.server(
      {host: process.env.NODE_ENV !== `production`? `localhost`:`0.0.0.0`,
        port: 5000, routes: {cors: {origin: ['*']}}});
  console.log(`server start in port 5000`);

  server.route(notes);
  server.start();
};


initServer();
