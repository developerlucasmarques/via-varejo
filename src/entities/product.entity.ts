import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Length } from 'class-validator';

export class Product {
  @IsNumber({
    maxDecimalPlaces: 0,
  })
  @ApiProperty({
    description: 'Código do produto',
    example: 123456,
  })
  code: number;

  @IsString()
  @Length(3, 50)
  @ApiProperty({
    description: 'Nome do produto',
    example: 'Geladeira',
  })
  name: string;

  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @ApiProperty({
    description: 'Valor da compra',
    example: 2299.89,
  })
  total: number;
}
