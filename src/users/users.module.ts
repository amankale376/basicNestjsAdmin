import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { DefaultAdminModule, DefaultAdminSite } from 'nestjs-admin';
@Module({
  imports:[TypeOrmModule.forFeature([User]), DefaultAdminModule],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {
  constructor(private readonly adminSite: DefaultAdminSite) {
    adminSite.register('User', User);
  }
}
