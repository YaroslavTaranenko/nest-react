import { Injectable } from '@nestjs/common';
import { HelloResponse } from '../common/HelloResponse';

@Injectable()
export class AppService {
  // eslint-disable-next-line @typescript-eslint/ban-types
  getHello(): HelloResponse {
    return { text: 'Hello World from nest!' };
  }
}
