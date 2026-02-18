import { Module } from '@nestjs/common';
import { LoginController } from './controller/login/login.controller';
import { RegisterController } from './controller/register/register.controller';
import { ForgetResetPasswordController } from './controller/forget_reset_password/forget_reset_password.controller';
import { RefreshController } from './controller/refresh/refresh.controller';
import { AuthController } from './auth.controller';
import { LoginService } from './controller/login/login.service';

@Module({
  controllers: [LoginController, RegisterController, ForgetResetPasswordController, RefreshController, AuthController],
  providers: [LoginService]
})
export class AuthModule { }
