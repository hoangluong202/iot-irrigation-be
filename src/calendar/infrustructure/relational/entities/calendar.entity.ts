import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'calendar' })
export class CalendarEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'int' })
  k: number;

  @Column({ type: 'int' })
  p: number;

  @Column({ type: 'int' })
  mg: number;

  @Column({ type: 'int' })
  h2o: number;

  @Column({ type: 'int' })
  area: number;

  @Column({ type: 'int' })
  level: number;

  @Column({ type: 'timestamp' })
  startTime: Date;

  @Column({ type: 'int' })
  repeat: number;

  @Column({ type: 'int' })
  duration: number;

  @Column({ type: 'timestamp' })
  endTime: Date;
}
