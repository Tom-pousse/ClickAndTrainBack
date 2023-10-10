import { Acquire } from 'src/acquire/entities/acquire.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Upgrade {
  @PrimaryGeneratedColumn()
  id_upgrade: number;

  @Column({ nullable: false, type: 'integer' })
  num_level: number;

  @Column({ nullable: false, length: 255 })
  nom_name: string;

  @Column({ nullable: false, type: 'integer' })
  num_cost: number;

  @Column({ nullable: false, type: 'integer' })
  num_value: number;

  @ManyToMany(() => Acquire, (acquire) => acquire.upgrades)
  @JoinTable()
  acquires: Acquire[];
}
