const amqplib = require('amqplib');

const startConsumer = async () => {
    try {
        const queue = "emails";
        const conn = await amqplib.connect('amqp://admin:123456@localhost:5672');
        const emailChannel = await conn.createChannel();
        await emailChannel.assertQueue(queue);
        emailChannel.consume(queue, (message) => {
            console.log(message.content.toString());
            emailChannel.ack(message);
        });
    }catch(e){
        console.log('err', e);
    }
}

startConsumer();