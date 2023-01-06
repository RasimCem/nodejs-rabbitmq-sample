const amqplib = require('amqplib');

const startProducer = async () => {
    try {
        const queue = "emails";
        const conn = await amqplib.connect('amqp://admin:123456@localhost:5672');
        const emailChannel = await conn.createChannel();
        await emailChannel.assertQueue(queue);
        emailChannel.sendToQueue(queue, Buffer.from("Email gönderme görevi producer tarafından üretildi."));
    }catch(e){
        console.log('err', e);
    }
}

startProducer();