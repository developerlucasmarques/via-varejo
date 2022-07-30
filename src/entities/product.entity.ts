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

  @IsNumber()
  @ApiProperty({
    description: 'Valor da compra',
    example: 3000,
  })
  total: number;
}
