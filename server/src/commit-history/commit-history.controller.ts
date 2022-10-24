import { Controller, Get, Query } from '@nestjs/common';
import { CommitHistoryService } from './commit-history.service';
import { GetCommitParamsDto } from './dto/get-commit-params.dto';

@Controller({
  path: 'commits-history',
  version: '1',
})
export class CommitHistoryController {
  constructor(private readonly commitHistoryService: CommitHistoryService) {}

  @Get()
  findAll(@Query() params: GetCommitParamsDto) {
    return this.commitHistoryService.findAll(params);
  }
}
