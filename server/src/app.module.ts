import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ExternalCallsModule } from './external-calls/external-calls.module';
import { CommitHistoryModule } from './commit-history/commit-history.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ExternalCallsModule,
    CommitHistoryModule,
  ],
})
export class AppModule {}
