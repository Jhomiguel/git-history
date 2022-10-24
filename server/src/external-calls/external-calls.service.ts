import { BadRequestException, Injectable } from '@nestjs/common';
import { OctokitService } from 'nestjs-octokit';
import { ConfigService } from '@nestjs/config';
import { UtilService } from 'src/utils/app-util.service';
import { GetCommitParamsDto } from 'src/commit-history/dto/get-commit-params.dto';
import * as _ from 'lodash';
import { Commit } from 'src/commit-history/dto/commit.dto';

@Injectable()
export class ExternalCallsService {
  constructor(
    private readonly octokitService: OctokitService,
    private readonly configService: ConfigService,
    private readonly utilService: UtilService,
  ) {}

  async findAllCommits(
    params?: GetCommitParamsDto,
  ): Promise<{ commit: Commit }> {
    try {
      const { data: response } = await this.octokitService.request(
        'GET /repos/{owner}/{repo}/commits',
        {
          owner: this.configService.get<string>('GITHUB_REPO_OWNER'),
          repo: this.configService.get<string>('GITHUB_REPO_NAME'),
          per_page: params.perPage,
          ...params,
        },
      );

      const commits = response.map((data) => _.pick(data, ['commit']));
      return this.utilService.fromSnakeToCamel(commits);
    } catch (e) {
      throw new BadRequestException(
        'An error occurred retrieving list of commits. \n Params: ',
        JSON.stringify(params),
      );
    }
  }
}
