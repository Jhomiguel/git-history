import { Module } from '@nestjs/common';
import { ExternalCallsService } from './external-calls.service';

@Module({
  providers: [ExternalCallsService],
  exports: [ExternalCallsService],
})
export class ExternalCallsModule {}
