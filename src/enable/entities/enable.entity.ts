import { Param } from 'src/param/entities/param.entity';
import { Player } from 'src/player/entities/player.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class Enable {
  // table association
  @PrimaryColumn({ nullable: false, type: 'integer' })
  id_players: number;

  @PrimaryColumn({ nullable: false, type: 'integer' })
  id_param: number;

  @Column()
  boo_status: boolean;

  @ManyToOne(() => Player, (player) => player.enable)
  @JoinColumn({ name: 'id_players' })
  players: Player[];
  @ManyToOne(() => Param, (param) => param.enable)
  @JoinColumn({ name: 'id_param' })
  param: Param[];
}
