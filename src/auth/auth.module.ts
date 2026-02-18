import { Module } from '@nestjs/common';
import { LoginController } from './controller/login/login.controller';
import { RegisterController } from './controller/register/register.controller';
import { ForgetResetPasswordController } from './controller/forget_reset_password/forget_reset_password.controller';
import { RefreshController } from './controller/refresh/refresh.controller';
import { AuthController } from './auth.controller';

@Module({
  controllers: [LoginController, RegisterController, ForgetResetPasswordController, RefreshController, AuthController]
})
export class AuthModule { }
