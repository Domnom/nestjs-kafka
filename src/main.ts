import { NestFactory } from '@nestjs/core';

import { 
    INestMicroservice, 
    INestApplication
} from '@nestjs/common';

/**
 * @import Modules
 */
import { AppModule } from './app.module';
import { KafkaConsumerModule } from './components/kafka-consumer/kafka-consumer.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
    /**
     * Resource server
     */
    const app = await NestFactory.create(AppModule);
    console.error("http_port", process.env.HTTP_PORT)
    await app.listen(process.env.HTTP_PORT);

    /**
     * Kafka Producer microservice
     */



    /**
     * Kafka Consumer microservice
     */
    const kafkaConsumerMicroservice = await NestFactory.createMicroservice(KafkaConsumerModule, {
        transport : Transport.KAFKA,
        options : {
            client : {
                clientId: "order",
                brokers : ['kafka:9092']
            },
            consumer : {
                groupId: "order-consumer"
            }
        }
    });

    await kafkaConsumerMicroservice.listen(() => { console.log("Kafka consumer serivce is now listening") });
}
bootstrap();
