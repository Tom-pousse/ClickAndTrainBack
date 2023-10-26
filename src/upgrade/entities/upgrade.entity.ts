import { Acquire } from 'src/acquire/entities/acquire.entity';
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
export class Upgrade {
  @PrimaryGeneratedColumn()
  id_upgrade: number;

  // supr de la valeur num_lvl

  @Column({ nullable: false, length: 255 })
  nom_name: string;

  @Column({ nullable: false, type: 'integer' })
  num_cost: number;

  @Column({ nullable: false, type: 'integer' })
  num_value: number;

  // @ManyToMany(() => Player, (player) => player.upgrade, { eager: false })
  // player: Player[];

  // @OneToMany(() => Acquire, (acquire) => acquire.upgrades, {
  //   // activation du mode cascade pour ouvrir le chmin vers acquire afin d'initialiser les upgrade par joueur
  //   cascade: true,
  //   eager: true,
  // })
  // acquire: Acquire[];
}
