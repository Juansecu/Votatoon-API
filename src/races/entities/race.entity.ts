import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('races')
export class RaceEntity {
  @PrimaryGeneratedColumn('increment', { name: 'Race_id', unsigned: true })
  raceId: number;
  @Column('tinyint', { name: 'Is_active', nullable: false, unsigned: true })
  isActive: boolean;
  @CreateDateColumn({
    name: 'Created_at'
  })
  createdAt: Date;
  @UpdateDateColumn({
    name: 'Updated_at'
  })
  updateAt: Date;
}
