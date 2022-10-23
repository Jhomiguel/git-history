import { Controller } from '@nestjs/common';
import { ExternalCallsService } from './external-calls.service';

@Controller('external-calls')
export class ExternalCallsController {
  constructor(private readonly externalCallsService: ExternalCallsService) {}
}
