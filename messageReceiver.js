const setupQueue = require('./messageQueue');

async function receiveMessage() {
  const { connection, channel, queueName } = await setupQueue();

  channel.consume(
    queueName,
    (message) => {
      console.log(`Received: ${message.content.toString()}`);
    },
    { noAck: true }
  );
}

receiveMessage();
