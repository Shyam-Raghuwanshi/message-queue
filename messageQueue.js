const amqp = require('amqplib');

async function setup() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  const queueName = 'messageQueue';

  await channel.assertQueue(queueName, { durable: false });

  return { connection, channel, queueName };
}

module.exports = setup;
