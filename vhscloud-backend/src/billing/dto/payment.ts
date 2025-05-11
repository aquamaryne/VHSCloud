export class PaymetnWebhookDTO{
    email: string;
    amount: number;
    method: string;
    txn_id: string;
    status: 'success' | 'pending' | 'failed';
}