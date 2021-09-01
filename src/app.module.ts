import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DefaultAdminModule } from 'nestjs-admin';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(), DefaultAdminModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
