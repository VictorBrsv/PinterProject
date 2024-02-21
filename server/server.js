// const express = require("express");
// const app = express();
// const serverConfig = require("./config/serverConfig");
// const PORT = process.env.PORT || 3001;

// const indexRouter = require('./routes/index.routes')


// serverConfig(app);
// app.use('/', indexRouter)

// app.listen(PORT, () => {
//   console.log(`Этот сервер умирает на ${PORT} порту`);
// });


const express = require("express");
const app = express();
const server = require("http").createServer(app);
const WebSocket = require("ws");
const serverConfig = require("./config/serverConfig");
const PORT = process.env.PORT || 3001;

const indexRouter = require('./routes/index.routes');


serverConfig(app);
app.use('/', indexRouter);

const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);

    // Декодируем сообщение, чтобы получить данные пользователя // добавила, удалить потом
    const data = JSON.parse(message);

// сообщения обратно всем подключенным клиентам
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(data));
        // client.send(message); // раскомментировать
      }
    });
  });

  ws.send('Брат мой, у тебя получилось подключиться к WebSocket серверу');
});


server.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});