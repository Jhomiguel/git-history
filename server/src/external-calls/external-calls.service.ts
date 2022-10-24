import { BadRequestException, Injectable } from '@nestjs/common';
import { OctokitService } from 'nestjs-octokit';
import { ConfigService } from '@nestjs/config';
import { GitParamsDto } from './dto/git-params.dto';
import { UtilService } from 'src/utils/app-util.service';

@Injectable()
export class ExternalCallsService {
  constructor(
    private readonly octokitService: OctokitService,
    private readonly configService: ConfigService,
    private readonly utilService: UtilService,
  ) {}

  async findAllCommits(params?: GitParamsDto) {
    try {
      const { data } = await this.octokitService.request(
        'GET /repos/{owner}/{repo}/commits',
        {
          owner: this.configService.get<string>('GITHUB_REPO_OWNER'),
          repo: this.configService.get<string>('GITHUB_REPO_NAME'),
          per_page: params.perPage,
          ...params,
        },
      );

      return this.utilService.fromSnakeToCamel(data);
    } catch (e) {
      throw new BadRequestException(
        'An error occurred retrieving list of commits. \n Params: ',
        JSON.stringify(params),
      );
    }
  }
}
