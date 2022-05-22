import { Controller, Get, Module, Param } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import {
  ClientProxy,
  ClientProxyFactory,
  MessagePattern,
  ClientsModule,
  Transport,
} from "@nestjs/microservices";
import { microservicesConfig } from "./microservices-config";
