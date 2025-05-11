import { PrimaryGeneratedColumn, Entity, Column, ManyToOne } from "typeorm";
import { User } from "./user";

@Entity()
export class Access {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ 
        unique: true,
    })
    login: string;

    @Column()
    password: string;

    @Column()
    ip: string;

    @Column()
    storage_limit_gb: number;

    @ManyToOne(() => User)
    user: User;
}