import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`;
  }
  @Get(':productId')
  getProduct(@Param() params: any) {
    return `product ${params.productId}`;
  }

  @Get('secondVersion/:productId')
  getProduct2(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  @Get('products')
  getProducts(@Query('limit') limit: number, @Query('offset') offset: number) {
    return `products limit:${limit} offset:${offset}`;
  }
}
