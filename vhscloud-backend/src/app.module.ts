import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BillingModule } from './billing/billing.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './billing/entity/user';
import { Access } from './billing/entity/access';
import { Payment } from './billing/entity/payment';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      password: process.env.DB_PASS,
      username: process.env.DB_USER,
      database: process.env.DB_NAME,
      entities: [User, Access, Payment],
      synchronize: true,
      logging: true,
    }),
    BillingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
