import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices'

/**
 * @import Constants
 */
import { KAFKA_SERVICE_NAME } from '../../constants';
/**
 * @import Controllers
 */
import {
	KafkaConsumerController
} from './controllers'

@Module({
	imports: [

	],
	controllers: [KafkaConsumerController],
	providers: [],
})
export class KafkaConsumerModule {}
