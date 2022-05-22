import { Controller, Get, Module, Param, Post, Body } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import {
  ClientProxy,
  ClientProxyFactory,
  MessagePattern,
  ClientsModule,
  Transport,
} from "@nestjs/microservices";
import { microservicesConfig, Imessage } from "./microservices-config";
const fetch = require("node-fetch");

@Controller()
export class NotificationController {
  private readonly client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create(microservicesConfig);
  }

  @Post("/notification")
  public async sender(@Body() data: Imessage) {
    const result = this.client.emit("send-message", data);

    return {
      serverPid: process.pid,
      message: "Your message has been sent!",
    };
  }

  @MessagePattern("send-message")
  async recive(data: Imessage): Promise<void> {
    const response = await fetch(data.url, {
      method: "POST",
      body: JSON.stringify(data.body),
      headers: data.headers,
    });
    console.log(response);
  }
}
