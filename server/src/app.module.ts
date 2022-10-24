import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ExternalCallsModule } from './external-calls/external-calls.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ExternalCallsModule],
})
export class AppModule {}
