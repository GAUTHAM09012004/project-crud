import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TrpcRouter } from '././trpc/trpc.router';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const trpcRouter = app.get(TrpcRouter);
  await trpcRouter.applyMiddleware(app);
  await app.listen(3000);
}
bootstrap();

