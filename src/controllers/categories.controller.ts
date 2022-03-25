import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/products/:productId')
  getCategory(@Param('id') id: number, @Param('productId') productId: string) {
    return `product ${productId} category ${id}`;
  }
}
