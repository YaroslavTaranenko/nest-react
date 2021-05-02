import { Controller, Get } from "@nestjs/common";
import { ArticleService } from "./article.service";

@Controller('api/article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService){}

  @Get('/')
  getAll(){
    return this.articleService.getList();
  }
}
