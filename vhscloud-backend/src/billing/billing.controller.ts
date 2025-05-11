import { Controller, Headers, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { BillingService } from './billing.service';
import Stripe from 'stripe';
import { ConfigService } from '@nestjs/config';

@Controller('webhook')
export class BillingController {
    private stripe: Stripe;

    constructor(
        private readonly billingService: BillingService,
        private readonly configService: ConfigService,
    ) {
        this.stripe = new Stripe(this.configService.get('STRIPE_SECRET_KEY'), {
            apiVersion: '2025-04-30.basil',
        })
    }

    @Post('stripe')
    async handleStripeWebhook(
        @Req() req: Request,
        @Headers('stripe-signature') sig: string,
    ) {
        const rawBody = (req as any).rawBody;

        let event: Stripe.Event;
        try{
            event = this.stripe.webhooks.constructEvent(
                rawBody,
                sig,
                this.configService.get('STRIPE_WEBHOOK_SECRET'),
            );
        } catch(err){
            console.error('Webhook error: ', err.message);
            return{
                error: err.message,
            }
        }

        if(event.type === 'checkout.session.completed'){
            const session = event.data.object as Stripe.Checkout.Session;

            await this.billingService.handlePayment({
                email: session.customer_email,
                amount: session.amount_total / 100,
                method: 'stripe',
                txn_id: session.id,
                status: 'success',
            })
        }

        return {
            recieved: true,
        }
    }

}
