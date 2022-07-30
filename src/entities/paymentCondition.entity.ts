import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class PaymentCondition {
  @IsNumber()
  @ApiProperty({
    description: 'Valor da entrada para a compra',
    example: 400,
  })
  entryValue: number;

  @IsNumber()
  @ApiProperty({
    description: 'Quantidade de parcelas',
    example: 6,
  })
  installmentsAmount: number;
}
