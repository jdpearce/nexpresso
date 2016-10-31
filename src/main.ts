import { Server } from './server';

const port = 5001; //or from a configuration file
const server = new Server();
server.run(port);
console.info(`listening on ${port}`);