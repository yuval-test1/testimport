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
import { IsString, ValidateNested, IsOptional, IsDate } from "class-validator";
import { JobWhereUniqueInput } from "../../job/base/JobWhereUniqueInput";
import { Type } from "class-transformer";
import { LineItemCreateNestedManyWithoutBidsInput } from "./LineItemCreateNestedManyWithoutBidsInput";

@InputType()
class BidCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  companyId!: string;

  @ApiProperty({
    required: true,
    type: () => JobWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => JobWhereUniqueInput)
  @Field(() => JobWhereUniqueInput)
  job!: JobWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  quoteUrl?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => LineItemCreateNestedManyWithoutBidsInput,
  })
  @ValidateNested()
  @Type(() => LineItemCreateNestedManyWithoutBidsInput)
  @IsOptional()
  @Field(() => LineItemCreateNestedManyWithoutBidsInput, {
    nullable: true,
  })
  lineItems?: LineItemCreateNestedManyWithoutBidsInput;
}

export { BidCreateInput as BidCreateInput };
