import { PrimaryGeneratedColumn, Entity, Column, CreateDateColumn  } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true,
    })
    email: string;

    @Column()
    username: string;

    @CreateDateColumn()
    created_at: Date;
}