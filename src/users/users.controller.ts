import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
     @Get("me")
     withoutId(@Query() query: any) {
          const data = query;
          return { code: 200, status: "OK", timestamp: new Date(), success: true, error: false, message: "Data retrieved successfully", data };
     }
     @Get("me/:id")
     findAll(@Param() param: any, @Query() query: any) {
          const params = param;
          const data = query;
          return { code: 200, status: "OK", timestamp: new Date(), success: true, error: false, message: "Data retrieved successfully", params, data };
     }
}
