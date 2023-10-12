import { Acquire } from 'src/acquire/entities/acquire.entity';
import { Enable } from 'src/enable/entities/enable.entity';
import { Param } from 'src/param/entities/param.entity';
import { Upgrade } from 'src/upgrade/entities/upgrade.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
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

  @ManyToMany(() => Upgrade, (upgrade) => upgrade.player, { eager: true })
  @JoinTable({
    name: 'acquire',
    joinColumn: { name: 'id_players', referencedColumnName: 'id_players' },
    inverseJoinColumn: {
      name: 'id_upgrade',
      referencedColumnName: 'id_upgrade',
    },
  })
  upgrade: Upgrade[];

  @ManyToMany(() => Param, (param) => param.player, { eager: true })
  @JoinTable({
    name: 'enable',
    joinColumn: { name: 'id_players', referencedColumnName: 'id_players' },
    inverseJoinColumn: {
      name: 'id_param',
      referencedColumnName: 'id_param',
    },
  })
  param: Param[];

  @OneToMany(() => Acquire, (acquire) => acquire.players, { eager: true })
  acquire: Acquire[];
  @OneToMany(() => Enable, (enable) => enable.players, { eager: true })
  enable: Enable[];
}
