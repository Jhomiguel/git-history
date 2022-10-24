import { Module } from '@nestjs/common';
import { CommitHistoryService } from './commit-history.service';
import { CommitHistoryController } from './commit-history.controller';
import { ExternalCallsModule } from 'src/external-calls/external-calls.module';

@Module({
  imports: [ExternalCallsModule],
  controllers: [CommitHistoryController],
  providers: [CommitHistoryService],
})
export class CommitHistoryModule {}
