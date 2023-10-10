import { Enable } from 'src/enable/entities/enable.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Param {
  @PrimaryGeneratedColumn()
  id_param: number;

  @Column({ nullable: false, length: 255 })
  nom_label: string;

  // @ManyToMany(() => Enable, (enable) => enable.params)
  // @JoinTable()
  // enables: Enable[];
  @ManyToMany(() => Enable, (enable) => enable.params)
  @JoinTable()
  enables: Enable;
}
