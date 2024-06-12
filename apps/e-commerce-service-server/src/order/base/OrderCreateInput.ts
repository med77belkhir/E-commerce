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
import { DeliveryCreateNestedManyWithoutOrdersInput } from "./DeliveryCreateNestedManyWithoutOrdersInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { PaymentCreateNestedManyWithoutOrdersInput } from "./PaymentCreateNestedManyWithoutOrdersInput";

@InputType()
class OrderCreateInput {
  @ApiProperty({
    required: false,
    type: () => DeliveryCreateNestedManyWithoutOrdersInput,
  })
  @ValidateNested()
  @Type(() => DeliveryCreateNestedManyWithoutOrdersInput)
  @IsOptional()
  @Field(() => DeliveryCreateNestedManyWithoutOrdersInput, {
    nullable: true,
  })
  deliveries?: DeliveryCreateNestedManyWithoutOrdersInput;

  @ApiProperty({
    required: false,
    type: () => PaymentCreateNestedManyWithoutOrdersInput,
  })
  @ValidateNested()
  @Type(() => PaymentCreateNestedManyWithoutOrdersInput)
  @IsOptional()
  @Field(() => PaymentCreateNestedManyWithoutOrdersInput, {
    nullable: true,
  })
  payments?: PaymentCreateNestedManyWithoutOrdersInput;
}

export { OrderCreateInput as OrderCreateInput };