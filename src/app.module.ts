import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

/**
 * @import Constants
 */
import { KAFKA_SERVICE_NAME } from './constants';

/**
 * @import Controller
 */
import { AppController } from './app.controller';

/**
 * @import Services
 */
import { AppService } from './app.service';


@Module({
    imports: [
        ClientsModule.register([
			{ 
				name: KAFKA_SERVICE_NAME, 
				transport: Transport.KAFKA,
				options: {
                    client: {
                        clientId: 'order',
                        brokers: ['kafka:9092'],
                    },
                    consumer: {
                        groupId: 'order-consumer'
                    }
				},
			},
        ])
    ],
    controllers: [AppController],
    providers: [
        AppService
    ],
})
export class AppModule {}
