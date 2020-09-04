import { 
    Injectable,
    Inject
} from '@nestjs/common';

import {
    ClientKafka,
    MessagePattern,
    Payload
} from '@nestjs/microservices'

/**
 * @import Constants
 */
import { KAFKA_SERVICE_NAME } from './constants';

@Injectable()
export class AppService {

    constructor(
        @Inject(KAFKA_SERVICE_NAME) private readonly kafkaClient: ClientKafka
    ){}

    async onModuleInit() {
        this.kafkaClient.subscribeToResponseOf('order.new');
        await this.kafkaClient.connect();
    } 

    sendNewOrder() 
    {
        this.kafkaClient.emit('order.new', { name : "Cupcake", quantity: 6 })
    }

    @MessagePattern('order.new.reply')
    sendNewOrderResponse()
    {
        console.error("This is the response on the client!")
    }


    getHello(): string {
        return 'Hello World!';
    }
}
