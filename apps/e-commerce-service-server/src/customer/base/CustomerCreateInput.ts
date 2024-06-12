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
import { EnumCustomerRole } from "./EnumCustomerRole";
import { IsEnum, IsOptional, ValidateNested } from "class-validator";
import { SubscriptionCreateNestedManyWithoutCustomersInput } from "./SubscriptionCreateNestedManyWithoutCustomersInput";
import { Type } from "class-transformer";

@InputType()
class CustomerCreateInput {
  @ApiProperty({
    required: false,
    enum: EnumCustomerRole,
  })
  @IsEnum(EnumCustomerRole)
  @IsOptional()
  @Field(() => EnumCustomerRole, {
    nullable: true,
  })
  role?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => SubscriptionCreateNestedManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => SubscriptionCreateNestedManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => SubscriptionCreateNestedManyWithoutCustomersInput, {
    nullable: true,
  })
  subscriptions?: SubscriptionCreateNestedManyWithoutCustomersInput;
}

export { CustomerCreateInput as CustomerCreateInput };
