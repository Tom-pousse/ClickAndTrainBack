import { Player } from 'src/player/entities/player.entity';
import { Upgrade } from 'src/upgrade/entities/upgrade.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Acquire {
  @PrimaryColumn({ nullable: false, type: 'integer' })
  id_upgrade: number;
  @PrimaryColumn({ nullable: false, type: 'integer' })
  id_players: number;
  @Column({ nullable: false, type: 'boolean' })
  boo_status: boolean;
  @Column({ nullable: false, type: 'integer' })
  num_enable: number;
  // ajout valeur supplementaire
  @Column({ nullable: false, type: 'integer' })
  num_value_upgrade: number;

  // @ManyToOne(() => Param, (param) => param.enables)
  // @JoinColumn({ name: 'id_param', referencedColumnName: 'id_param' })
  // params: Param;
  @ManyToOne(() => Player, (player) => player.acquire)
  @JoinColumn({ name: 'id_players' })
  players: Player[];
  @ManyToOne(() => Upgrade, (upgrade) => upgrade.acquire)
  @JoinColumn({ name: 'id_upgrade' })
  upgrades: Upgrade[];
}
