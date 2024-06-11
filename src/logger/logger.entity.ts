import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'logger' })
export class LoggerEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    type: 'timestamp',
  })
  createdAt: Date;

  @Column({ type: 'varchar' })
  keyDevice: string;

  @Column({ type: 'varchar' })
  nameDevice: string;

  @Column({ type: 'int' })
  value: number;
}
