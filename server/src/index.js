const server = require('./api/server.js');

server.listen().then(({ url }) => console.log(`Server ready at ${url}`));