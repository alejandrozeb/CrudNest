import { Controller, Get, Param, Query } from '@nestjs/common';
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
}
