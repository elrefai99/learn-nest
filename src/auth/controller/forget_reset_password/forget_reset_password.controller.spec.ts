import { Test, TestingModule } from '@nestjs/testing';
import { ForgetResetPasswordController } from './forget_reset_password.controller';

describe('ForgetResetPasswordController', () => {
  let controller: ForgetResetPasswordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ForgetResetPasswordController],
    }).compile();

    controller = module.get<ForgetResetPasswordController>(ForgetResetPasswordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
