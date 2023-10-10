import { Acquire } from 'src/acquire/entities/acquire.entity';
import { Enable } from 'src/enable/entities/enable.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @Column({ nullable: false, type: 'integer' })
  num_score: number;

  @Column()
  boo_admin: boolean;

  @ManyToMany(() => Acquire, (acquire) => acquire.players)
  @JoinTable({
    name: 'acquire',
    joinColumn: { name: 'id_players', referencedColumnName: 'id_players' },
    inverseJoinColumn: {
      name: 'id_upgrade',
      referencedColumnName: 'id_upgrade',
    },
  })
  acquires: Acquire[];

  @ManyToMany(() => Enable, (enable) => enable.players)
  @JoinTable({
    name: 'enable',
    joinColumn: { name: 'id_players', referencedColumnName: 'id_players' },
    inverseJoinColumn: {
      name: 'id_param',
      referencedColumnName: 'id_param',
    },
  })
  enables: Enable[];

  // @ManyToMany(() => Enable, (enable) => enable.players)
  // @JoinTable({
  //   name: 'enable',
  //   joinColumn: { name: 'id_players', referencedColumnName: 'id_players' },
  //   inverseJoinColumn: {
  //     name: 'id_param',
  //     referencedColumnName: 'id_param',
  //   },
  // })
  // enables: Enable[];
}
