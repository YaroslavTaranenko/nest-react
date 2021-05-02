import { Injectable } from '@nestjs/common';
import { promisify } from "util";
import * as fs from "fs";
import { ConfigService } from "@nestjs/config";
import * as path from "path";
const promisifiedReadDir = promisify(fs.readdir);

@Injectable()
export class ArticleService {
  constructor(private readonly configService: ConfigService) {
  }
  getList(){
    return promisifiedReadDir(path.join(this.configService.get('dataPath'), 'articles'));
  }
}
