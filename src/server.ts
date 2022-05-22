import { Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { microservicesConfig } from "./microservices-config";
import { NotificationController } from "./notification.controller";

@Module({
  controllers: [NotificationController],
})
class ServerModule {}

async function bootstrap() {
  const serverApp = await NestFactory.create(ServerModule);

  await serverApp.listen(4444);

  const microserviceApp = await NestFactory.createMicroservice(
    ServerModule,
    microservicesConfig
  );

  await microserviceApp.listen();
  console.log(`Server is listening process(pid: ${process.pid})!`);
}

bootstrap();
