import { PrimaryGeneratedColumn, Entity, Column, ManyToOne, CreateDateColumn } from "typeorm";
import { User } from "./user";

@Entity()
export class Payment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    payment_method: string;
    
    @Column('decimal')
    amount: number;
    
    @Column({
        unique: true
    })
    txn_id: string;
    
    @Column()
    status: 'pending' | 'success' | 'failed';
    
    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(() => User)
    user: User;
}