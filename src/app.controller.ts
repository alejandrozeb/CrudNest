import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    //    return this.appService.getHello();
    return 'holamundo';
  }

  @Get('nuevo')
  newEndpoint() {
    return 'yosoy un nuevo';
  }

  @Get('/ruta/')
  hello() {
    return 'con /sas/';
  }

  @Get('products/:productId')
  getProduct(@Param() params: any) {
    return `product ${params.productId}`;
  }

  @Get('products2/:productId')
  getProduct2(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  @Get('categories/:id/products/:productId')
  getCategory(@Param('id') id: number, @Param('productId') productId: string) {
    return `product ${productId} category ${id}`;
  }
}
