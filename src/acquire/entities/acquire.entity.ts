import { Entity } from 'typeorm';

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
}
