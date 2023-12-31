/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, ValidateNested, IsOptional } from "class-validator";
import { CityCreateNestedManyWithoutMarketsInput } from "./CityCreateNestedManyWithoutMarketsInput";
import { Type } from "class-transformer";

@InputType()
class MarketCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  status!: string;

  @ApiProperty({
    required: false,
    type: () => CityCreateNestedManyWithoutMarketsInput,
  })
  @ValidateNested()
  @Type(() => CityCreateNestedManyWithoutMarketsInput)
  @IsOptional()
  @Field(() => CityCreateNestedManyWithoutMarketsInput, {
    nullable: true,
  })
  cities?: CityCreateNestedManyWithoutMarketsInput;
}

export { MarketCreateInput as MarketCreateInput };
