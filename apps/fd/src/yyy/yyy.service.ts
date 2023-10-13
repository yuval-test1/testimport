import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { YyyServiceBase } from "./base/yyy.service.base";

@Injectable()
export class YyyService extends YyyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
