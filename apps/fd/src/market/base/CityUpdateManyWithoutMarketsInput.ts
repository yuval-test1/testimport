/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CityWhereUniqueInput } from "../../city/base/CityWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CityUpdateManyWithoutMarketsInput {
  @Field(() => [CityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CityWhereUniqueInput],
  })
  connect?: Array<CityWhereUniqueInput>;

  @Field(() => [CityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CityWhereUniqueInput],
  })
  disconnect?: Array<CityWhereUniqueInput>;

  @Field(() => [CityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CityWhereUniqueInput],
  })
  set?: Array<CityWhereUniqueInput>;
}

export { CityUpdateManyWithoutMarketsInput as CityUpdateManyWithoutMarketsInput };