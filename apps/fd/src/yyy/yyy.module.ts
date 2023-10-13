import { Module } from "@nestjs/common";
import { YyyModuleBase } from "./base/yyy.module.base";
import { YyyService } from "./yyy.service";
import { YyyController } from "./yyy.controller";
import { YyyResolver } from "./yyy.resolver";

@Module({
  imports: [YyyModuleBase],
  controllers: [YyyController],
  providers: [YyyService, YyyResolver],
  exports: [YyyService],
})
export class YyyModule {}
