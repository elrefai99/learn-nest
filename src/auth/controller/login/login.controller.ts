import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth/login')
export class LoginController {
     @Post()
     loginData(@Body() body: any) {
          return body
     }
}
