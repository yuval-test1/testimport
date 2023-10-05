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
import { MeasurementWhereUniqueInput } from "./MeasurementWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MeasurementUpdateInput } from "./MeasurementUpdateInput";

@ArgsType()
class UpdateMeasurementArgs {
  @ApiProperty({
    required: true,
    type: () => MeasurementWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MeasurementWhereUniqueInput)
  @Field(() => MeasurementWhereUniqueInput, { nullable: false })
  where!: MeasurementWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MeasurementUpdateInput,
  })
  @ValidateNested()
  @Type(() => MeasurementUpdateInput)
  @Field(() => MeasurementUpdateInput, { nullable: false })
  data!: MeasurementUpdateInput;
}

export { UpdateMeasurementArgs as UpdateMeasurementArgs };
