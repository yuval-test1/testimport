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
import { BidWhereInput } from "./BidWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BidOrderByInput } from "./BidOrderByInput";

@ArgsType()
class BidFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BidWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BidWhereInput, { nullable: true })
  @Type(() => BidWhereInput)
  where?: BidWhereInput;

  @ApiProperty({
    required: false,
    type: [BidOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BidOrderByInput], { nullable: true })
  @Type(() => BidOrderByInput)
  orderBy?: Array<BidOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BidFindManyArgs as BidFindManyArgs };
