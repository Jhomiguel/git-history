import { BadRequestException, Injectable } from '@nestjs/common';
import { ExternalCallsService } from 'src/external-calls/external-calls.service';
import { GetCommitParamsDto } from './dto/get-commit-params.dto';

@Injectable()
export class CommitHistoryService {
  constructor(private readonly externalCallService: ExternalCallsService) {}
  async findAll(params?: GetCommitParamsDto) {
    try {
      return await this.externalCallService.findAllCommits(params);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
