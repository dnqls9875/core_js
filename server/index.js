// ? node 환경에서 읽을 수 있는 환경

const server = require('live-server');

const params = {
  host: 'localhost',
  port: 3000,
  open: false,
  root: './client',
};

server.start(params);
