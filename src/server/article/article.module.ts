import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { ConfigModule } from "@nestjs/config";

@Module({
  providers: [ArticleService, ConfigModule],
  controllers: [ArticleController]
})
export class ArticleModule {}
