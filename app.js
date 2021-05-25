const express = require('express');
const server = express();

server.listen(1293);

server.use(express.static('./'))