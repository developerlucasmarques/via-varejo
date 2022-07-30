import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { PaymentCondition } from 'src/entities/paymentCondition.entity';
import { Product } from 'src/entities/product.entity';

export class CheckoutDto {
  @ValidateNested()
  @Type(() => Product)
  @ApiProperty({
    example: Product,
  })
  product: Product;

  @ValidateNested()
  @Type(() => PaymentCondition)
  @ApiProperty({
    example: PaymentCondition,
  })
  paymentCondition: PaymentCondition;
}
