import { ClientOptions, Transport } from "@nestjs/microservices";

export const microservicesConfig: ClientOptions = {
  transport: Transport.RMQ,
  options: {
    urls: ["amqp://guest:guest@127.0.0.1:5672"],
    queue: "my-app-queue",
    queueOptions: {
      durable: true,
    },
  },
};

export interface Imessage {
  url: string;
  body: object;
  headers?: object;
}
