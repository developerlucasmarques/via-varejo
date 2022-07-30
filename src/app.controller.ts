import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { CheckoutDto } from './dto/checkout.dto';

@ApiTags('checkout')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  checkout(@Body() dto: CheckoutDto) {
    return this.appService.checkout(dto);
  }
}
