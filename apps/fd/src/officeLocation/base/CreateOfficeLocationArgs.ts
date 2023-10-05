/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OfficeLocationCreateInput } from "./OfficeLocationCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateOfficeLocationArgs {
  @ApiProperty({
    required: true,
    type: () => OfficeLocationCreateInput,
  })
  @ValidateNested()
  @Type(() => OfficeLocationCreateInput)
  @Field(() => OfficeLocationCreateInput, { nullable: false })
  data!: OfficeLocationCreateInput;
}

export { CreateOfficeLocationArgs as CreateOfficeLocationArgs };