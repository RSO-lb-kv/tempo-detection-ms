import { Injectable } from '@nestjs/common';
import { TerminusEndpoint, TerminusModuleOptions, TerminusOptionsFactory } from '@nestjs/terminus';

import { DemoHealthIndicator } from './demo-health-indicator.service';

@Injectable()
export class TerminusService implements TerminusOptionsFactory {
  constructor(private readonly demo: DemoHealthIndicator) {}

  createTerminusOptions(): TerminusModuleOptions {
    const liveness: TerminusEndpoint = {
      url: '/health/live',
      healthIndicators: [async () => this.demo.isHealthy('music-catalog')],
    };

    const readiness: TerminusEndpoint = {
      url: '/health/ready',
      healthIndicators: [async () => this.demo.isHealthy('music-catalog')],
    };

    return {
      endpoints: [liveness, readiness],
    };
  }
}
