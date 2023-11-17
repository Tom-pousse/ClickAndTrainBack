import { Enable } from 'src/enable/entities/enable.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Param {
  @PrimaryGeneratedColumn()
  id_param: number;

  @Column({ nullable: false, length: 255 })
  nom_label: string;

  @Column()
  boo_status: boolean;

  @OneToMany(() => Enable, (enable) => enable.param)
  enable: Enable[];
}
