import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserClient } from './user.client';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, UserClient],
  exports: [UserClient],
})
export class UserModule {}
