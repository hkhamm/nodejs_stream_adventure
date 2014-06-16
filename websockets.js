var websocket = require('websocket-stream')

websocket('ws://localhost:8000').end('hello\n')
