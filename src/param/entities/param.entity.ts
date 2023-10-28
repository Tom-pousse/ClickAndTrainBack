import { Enable } from 'src/enable/entities/enable.entity';
import { Player } from 'src/player/entities/player.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Param {
  @PrimaryGeneratedColumn()
  id_param: number;

  @Column({ nullable: false, length: 255 })
  nom_label: string;

  @Column()
  boo_status: boolean;

  // @ManyToMany(() => Player, (player) => player.param)
  // player: Player[];

  @OneToMany(() => Enable, (enable) => enable.param)
  enable: Enable[];
}
