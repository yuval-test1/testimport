import * as graphql from "@nestjs/graphql";
import { YyyResolverBase } from "./base/yyy.resolver.base";
import { Yyy } from "./base/Yyy";
import { YyyService } from "./yyy.service";

@graphql.Resolver(() => Yyy)
export class YyyResolver extends YyyResolverBase {
  constructor(protected readonly service: YyyService) {
    super(service);
  }
}
