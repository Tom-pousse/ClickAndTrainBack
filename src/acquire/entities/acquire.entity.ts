import { Player } from 'src/player/entities/player.entity';
import { Upgrade } from 'src/upgrade/entities/upgrade.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

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

  // Clé étrangère vers Export
  @ManyToOne(() => Upgrade, (upgrade) => upgrade.acquires)
  @JoinColumn({ name: 'id_upgrade', referencedColumnName: 'id_upgrade' })
  upgrades: Upgrade;
  // Clé étrangère vers Import
  @ManyToOne(() => Player, (player) => player.acquires)
  @JoinColumn({ name: 'id_players', referencedColumnName: 'id_players' })
  players: Player;
}
