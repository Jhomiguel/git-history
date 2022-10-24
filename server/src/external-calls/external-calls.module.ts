import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OctokitModule } from 'nestjs-octokit';
import { ExternalCallsService } from './external-calls.service';
import { ExternalCallsController } from './external-call.controller';
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
  controllers: [ExternalCallsController],
  providers: [ExternalCallsService, UtilService],
  exports: [ExternalCallsService],
})
export class ExternalCallsModule {}
