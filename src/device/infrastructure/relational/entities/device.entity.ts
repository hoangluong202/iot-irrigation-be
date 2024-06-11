import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'device' })
export class DeviceEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar' })
  key: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'boolean' })
  status: boolean;

  @Column({ type: 'int' })
  minValue: number;

  @Column({ type: 'int' })
  maxValue: number;

  @Column({ type: 'int' })
  value: number;
}
