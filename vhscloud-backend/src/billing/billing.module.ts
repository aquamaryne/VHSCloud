import { Module } from '@nestjs/common';
import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user';
import { Access } from './entity/access';
import { Payment } from './entity/payment';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([
      Access,
      User,
      Payment,
    ])
  ],
  controllers: [BillingController],
  providers: [BillingService]
})
export class BillingModule {}
