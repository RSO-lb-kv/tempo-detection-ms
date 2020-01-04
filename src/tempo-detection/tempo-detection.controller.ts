import { Body, Controller, Put } from '@nestjs/common';

import { TempoDetectionService } from './tempo-detection.service';

@Controller('tempo-detection')
export class TempoDetectionController {
  constructor(private tempoDetectionService: TempoDetectionService) {}

  @Put()
  async detectTempo(@Body() { url }) {
    return await this.tempoDetectionService.getTempo(url);
  }
}
