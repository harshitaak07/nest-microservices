import { NestFactory } from '@nestjs/core';
import { BookstoreApiGatewayModule } from './bookstore-api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(BookstoreApiGatewayModule);

  // Enable CORS if needed
  app.enableCors();

  // Use consistent port parsing
  const port = process.env.PORT || 3000;

  await app.listen(port, () => {
    console.log(`Bookstore API Gateway is running on port ${port}`);
  });
}
bootstrap();
