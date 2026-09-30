import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('start')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('helloi')
  getHello(): string {
    return this.appService.getHello();
  }
}
