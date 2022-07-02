import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Test } from './entites/test.entity';
import { TestResolver } from './test.resolver';
import { TestService } from './test.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Test]),
    ElasticsearchModule.register({
      node: 'http://elasticsearch:9200',
    }),
  ],
  providers: [TestResolver, TestService],
})
export class TestModule {}
