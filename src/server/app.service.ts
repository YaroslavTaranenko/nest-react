import { Injectable } from '@nestjs/common';
import { ArticleListResponse } from '../common/ArticleListResponse';

@Injectable()
export class AppService {
  // eslint-disable-next-line @typescript-eslint/ban-types
  getHello(): ArticleListResponse {
    return ['Hello World from nest!'];
  }
}
