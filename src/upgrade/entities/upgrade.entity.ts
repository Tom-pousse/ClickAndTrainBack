import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Upgrade {
  @PrimaryGeneratedColumn()
  id_upgrade: number;

  @Column({ nullable: false, length: 255 })
  nom_name: string;

  @Column({ nullable: false, type: 'integer' })
  num_cost: number;

  @Column({ nullable: false, type: 'integer' })
  num_value: number;
}
