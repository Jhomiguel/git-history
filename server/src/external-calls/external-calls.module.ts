import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OctokitModule } from 'nestjs-octokit';
import { ExternalCallsService } from './external-calls.service';
import { UtilService } from 'src/utils/app-util.service';

@Module({
  imports: [
    OctokitModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        octokitOptions: {
          auth: configService.get<string>('GITHUB_AUTH_TOKEN'),
        },
      }),
    }),
  ],
  providers: [ExternalCallsService, UtilService],
  exports: [ExternalCallsService],
})
export class ExternalCallsModule {}
