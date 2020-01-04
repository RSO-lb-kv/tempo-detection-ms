import { ConsulConfig, InjectConfig } from '@nestcloud/config';
import { Injectable } from '@nestjs/common';
import { post } from 'request';

@Injectable()
export class TempoDetectionService {
  private EXTERNAL_ENDPOINT =
    'https://macgyverapi-song-tempo-detection-v1.p.rapidapi.com/';

  constructor(@InjectConfig() private config: ConsulConfig) {}

  getTempo(songUrl: string) {
    return new Promise((resolve, reject) => {
      post(
        this.EXTERNAL_ENDPOINT,
        {
          json: true,
          headers: {
            'X-RapidAPI-Key': this.config.get('rapidApiKey'),
          },
          body: {
            id: '6t7s5d7t',
            key: 'free',
            data: {
              audio_file: songUrl,
            },
          },
        },
        (err, res, body) => {
          if (err) return reject(err);
          if (res.statusCode > 204) return reject(body);
          return resolve(body);
        },
      );
    });
  }
}
