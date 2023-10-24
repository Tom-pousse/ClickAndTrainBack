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
  id_players: number;
  @PrimaryColumn({ nullable: false, type: 'integer' })
  id_upgrade: number;

  @Column({ nullable: false, type: 'integer' })
  num_lvl: number;

  @ManyToOne(() => Player, (player) => player.acquire)
  @JoinColumn({ name: 'id_players' })
  players: Player[];

  @ManyToOne(() => Upgrade, (upgrade) => upgrade.acquire)
  @JoinColumn({ name: 'id_upgrade' })
  upgrades: Upgrade[];
}
