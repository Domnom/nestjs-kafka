import { Controller, Get, Post, Inject } from '@nestjs/common';

import { 
    MessagePattern, 
    Payload,
    ClientKafka
} from '@nestjs/microservices';

/**
 * @import Constants
 */
import { KAFKA_SERVICE_NAME } from '../../../constants';

@Controller()
export class KafkaConsumerController {

    @MessagePattern('order.new')
    newOrder(@Payload() message : any) {
        let { topic, value } = message;

        console.log("Topic: ", topic);
        console.log("Value: ", value);
        console.log("The whole packet: ", message);

    
    }
}
