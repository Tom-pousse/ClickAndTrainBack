import { Acquire } from 'src/acquire/entities/acquire.entity';
import { Enable } from 'src/enable/entities/enable.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'players' })
export class Player {
  @PrimaryGeneratedColumn()
  id_players: number;

  @Column({ nullable: false, length: 255 })
  nom_pseudo: string;

  @Column({ nullable: false, unique: true, length: 255 })
  nom_email: string;

  @Column({ nullable: false, length: 255 })
  nom_password: string;

  @Column({ nullable: false })
  num_score: number;

  @Column({ nullable: false, type: 'integer' })
  num_click: number;

  @OneToMany(() => Acquire, (acquire) => acquire.players, {
    cascade: true,
    eager: true,
  })
  acquire: Acquire[];

  @OneToMany(() => Enable, (enable) => enable.players, {
    cascade: true,
    eager: true,
  })
  enable: Enable[];
}
