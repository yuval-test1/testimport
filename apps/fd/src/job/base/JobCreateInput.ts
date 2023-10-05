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
import { IsString, IsOptional, IsDate, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AddressWhereUniqueInput } from "../../address/base/AddressWhereUniqueInput";
import { BidCreateNestedManyWithoutJobsInput } from "./BidCreateNestedManyWithoutJobsInput";
import { ImageCreateNestedManyWithoutJobsInput } from "./ImageCreateNestedManyWithoutJobsInput";
import { MeasurementCreateNestedManyWithoutJobsInput } from "./MeasurementCreateNestedManyWithoutJobsInput";
import { ReportCreateNestedManyWithoutJobsInput } from "./ReportCreateNestedManyWithoutJobsInput";

@InputType()
class JobCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  addressId?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  selectedBidAt?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  selectedBidId?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  status!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  userId!: string;

  @ApiProperty({
    required: false,
    type: () => AddressWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AddressWhereUniqueInput)
  @IsOptional()
  @Field(() => AddressWhereUniqueInput, {
    nullable: true,
  })
  address?: AddressWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => BidCreateNestedManyWithoutJobsInput,
  })
  @ValidateNested()
  @Type(() => BidCreateNestedManyWithoutJobsInput)
  @IsOptional()
  @Field(() => BidCreateNestedManyWithoutJobsInput, {
    nullable: true,
  })
  bids?: BidCreateNestedManyWithoutJobsInput;

  @ApiProperty({
    required: false,
    type: () => ImageCreateNestedManyWithoutJobsInput,
  })
  @ValidateNested()
  @Type(() => ImageCreateNestedManyWithoutJobsInput)
  @IsOptional()
  @Field(() => ImageCreateNestedManyWithoutJobsInput, {
    nullable: true,
  })
  images?: ImageCreateNestedManyWithoutJobsInput;

  @ApiProperty({
    required: false,
    type: () => MeasurementCreateNestedManyWithoutJobsInput,
  })
  @ValidateNested()
  @Type(() => MeasurementCreateNestedManyWithoutJobsInput)
  @IsOptional()
  @Field(() => MeasurementCreateNestedManyWithoutJobsInput, {
    nullable: true,
  })
  measurements?: MeasurementCreateNestedManyWithoutJobsInput;

  @ApiProperty({
    required: false,
    type: () => ReportCreateNestedManyWithoutJobsInput,
  })
  @ValidateNested()
  @Type(() => ReportCreateNestedManyWithoutJobsInput)
  @IsOptional()
  @Field(() => ReportCreateNestedManyWithoutJobsInput, {
    nullable: true,
  })
  reports?: ReportCreateNestedManyWithoutJobsInput;
}

export { JobCreateInput as JobCreateInput };
