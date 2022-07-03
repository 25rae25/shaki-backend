import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppModuleLocal } from './app.moduleLocal';
import { HttpExceptionFilter } from './commons/filter/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
