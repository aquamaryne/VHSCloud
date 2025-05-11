import { Injectable } from '@nestjs/common';
import { User } from './entity/user';
import { Access } from './entity/access';
import { Payment } from './entity/payment';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymetnWebhookDTO } from './dto/payment';
import * as bcrypt from 'bcrypt';
import { sendEmail } from 'src/common/email';

@Injectable()
export class BillingService {
    constructor(
        @InjectRepository(User) private users: Repository<User>,
        @InjectRepository(Access) private access: Repository<Access>,
        @InjectRepository(Payment) private payment: Repository<Payment>,
    ){}

    async handlePayment(dto: PaymetnWebhookDTO) {
        let user = await this.users.findOne({
            where: {
                email: dto.email,
            }
        })
        
        if(!user) user = await this.users.save({
            email: dto.email,
        })

        await this.payment.save({
            user,
            payment_method: dto.method,
            amount: dto.amount,
            status: dto.status,
            txn_id: dto.txn_id,
        });

        const login = 'u' + Math.random().toString(36).substring(2, 8);
        const plainPassword = Math.random().toString(36).slice(-10);
        const hashedPassword = await bcrypt.hash(plainPassword, 10);
        const ip = `10.0.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;

        await this.access.save({
            user,
            login,
            password: hashedPassword,
            ip,
            storage_limit_gb: 10,
        });

        await sendEmail (user.email, {
            login,
            password: plainPassword,
            ip,
        })
    }
}
