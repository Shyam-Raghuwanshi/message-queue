const setupQueue = require('./messageQueue');

async function sendMessage(message) {
  const { connection, channel, queueName } = await setupQueue();

  channel.sendToQueue(queueName, Buffer.from(message));

  console.log(`Sent: ${message}`);

  setTimeout(() => {
    connection.close();
  }, 500);
}

sendMessage('Hello, Message Queue!');
