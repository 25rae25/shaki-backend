import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/')
  https() {
    return 'https 성공';
  }
}
