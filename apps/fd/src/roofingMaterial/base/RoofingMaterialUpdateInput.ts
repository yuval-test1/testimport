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
import {
  IsString,
  IsOptional,
  IsNumber,
  ValidateNested,
} from "class-validator";
import { ColorUpdateManyWithoutRoofingMaterialsInput } from "./ColorUpdateManyWithoutRoofingMaterialsInput";
import { Type } from "class-transformer";

@InputType()
class RoofingMaterialUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  manufacturer?: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  maxLifespan?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  minLifespan?: number;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  status?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  supplier?: string;

  @ApiProperty({
    required: false,
    type: () => ColorUpdateManyWithoutRoofingMaterialsInput,
  })
  @ValidateNested()
  @Type(() => ColorUpdateManyWithoutRoofingMaterialsInput)
  @IsOptional()
  @Field(() => ColorUpdateManyWithoutRoofingMaterialsInput, {
    nullable: true,
  })
  colors?: ColorUpdateManyWithoutRoofingMaterialsInput;
}

export { RoofingMaterialUpdateInput as RoofingMaterialUpdateInput };
