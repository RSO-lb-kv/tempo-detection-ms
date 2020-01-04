import { Module } from '@nestjs/common';
import { TempoDetectionController } from './tempo-detection.controller';
import { TempoDetectionService } from './tempo-detection.service';

@Module({
  controllers: [TempoDetectionController],
  providers: [TempoDetectionService]
})
export class TempoDetectionModule {}
