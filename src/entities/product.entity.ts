import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Length } from 'class-validator';

export class Product {
  @IsString()
  @Length(4, 20)
  @ApiProperty({
    description: 'Código do produto',
    example: '123456',
  })
  code: string;

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
