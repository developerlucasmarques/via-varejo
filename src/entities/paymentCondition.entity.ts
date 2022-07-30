import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class PaymentCondition {
  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @ApiProperty({
    description: 'Valor da entrada para a compra',
    example: 400.99,
  })
  entryValue: number;

  @IsNumber({
    maxDecimalPlaces: 0,
  })
  @ApiProperty({
    description: 'Quantidade de parcelas',
    example: 6,
  })
  installmentsAmount: number;
}
