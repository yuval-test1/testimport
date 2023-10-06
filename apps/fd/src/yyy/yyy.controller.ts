import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { YyyService } from "./yyy.service";
import { YyyControllerBase } from "./base/yyy.controller.base";

@swagger.ApiTags("yyys")
@common.Controller("yyys")
export class YyyController extends YyyControllerBase {
  constructor(protected readonly service: YyyService) {
    super(service);
  }
}
