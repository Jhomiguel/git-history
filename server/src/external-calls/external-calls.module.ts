import { Module } from '@nestjs/common';
import { ExternalCallsService } from './external-calls.service';
import { ExternalCallsController } from './external-calls.controller';

@Module({
  controllers: [ExternalCallsController],
  providers: [ExternalCallsService]
})
export class ExternalCallsModule {}
