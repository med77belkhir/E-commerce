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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum, ValidateNested } from "class-validator";
import { EnumCustomerRole } from "./EnumCustomerRole";
import { SubscriptionListRelationFilter } from "../../subscription/base/SubscriptionListRelationFilter";

@InputType()
class CustomerWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    enum: EnumCustomerRole,
  })
  @IsEnum(EnumCustomerRole)
  @IsOptional()
  @Field(() => EnumCustomerRole, {
    nullable: true,
  })
  role?: "Option1";

  @ApiProperty({
    required: false,
    type: () => SubscriptionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SubscriptionListRelationFilter)
  @IsOptional()
  @Field(() => SubscriptionListRelationFilter, {
    nullable: true,
  })
  subscriptions?: SubscriptionListRelationFilter;
}

export { CustomerWhereInput as CustomerWhereInput };
