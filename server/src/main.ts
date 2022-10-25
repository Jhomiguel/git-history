import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 4000;
  const app = await NestFactory.create(AppModule);

  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.enableCors();
  await app.listen(PORT, () =>
    console.log(`Server is running on PORT: ${PORT}`),
  );
}
bootstrap();
