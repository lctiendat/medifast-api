import { NestFactory } from '@nestjs/core';
import { AppModule } from '@module';
import { setupSwagger } from '@setup';
import { appConfig } from '@setup';
import { Logger } from '@nestjs/common';
import { HttpExceptionFilter } from './shared/filter/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new HttpExceptionFilter)

  if (appConfig.NODE_ENV !== 'prod') {
    setupSwagger(app)
  }

  await app.listen(appConfig.SV_PORT, '0.0.0.0', () => {
    const logger = new Logger('___DevLog___')
    logger.log(`Application is running on: http://localhost:${appConfig.SV_PORT}`)
  });
}
bootstrap();
