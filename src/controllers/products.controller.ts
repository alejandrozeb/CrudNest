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
  ParseIntPipe,
} from '@nestjs/common';

import { ProductService } from 'src/services/product.service';

@Controller('products')
export class ProductsController {
  //usamos el servicio con inyecion de dependencias
  constructor(private productService: ProductService) {}

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
  getProduct2(@Param('productId', ParseIntPipe) productId: number) {
    //return `product ${productId}`;
    return this.productService.findOne(+productId);
    //con + convetimos a tipo  number
  }

  @Get()
  getProducts(/* @Query('limit') limit: number, @Query('offset') offset: number */) {
    //return `products limit:${limit} offset:${offset}`;
    return this.productService.findAll();
  }

  @Post()
  create(@Body() payload: any) {
    /* return {
      message: `accion de crear ${payload.product} ${payload.price}`,
    }; */

    return this.productService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return this.productService.update(+id, payload);
    //parsear a number
    /*    return {
      id,
      payload,
    }; */
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productService.remove(+id);
  }
}
