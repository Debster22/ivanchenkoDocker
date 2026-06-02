import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable global validation pipe
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));
  
  // Додаємо || '3000', щоб уникнути помилки типу undefined
  const port = process.env.APP_PORT || '3000';
  
  await app.listen(parseInt(port, 10));
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();