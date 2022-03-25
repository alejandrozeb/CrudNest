import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Body,
  Delete,
  Put,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('filter')
  getProductFilter() {
    return {
      message: `yo soy un filter`,
    };
  }
  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
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

  @Post()
  create(@Body() payload: any) {
    return {
      message: `accion de crear ${payload.product} ${payload.price}`,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id,
    };
  }
}
