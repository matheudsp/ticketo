import { Injectable } from '@nestjs/common';
import { config } from '@ticketo/common';

@Injectable()
export class AppService {
  getBaseURL(): string {
    return 'The base URL is ' + config.server.baseUrl;
  }
}
