import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeviceEntity } from 'src/device/infrastructure/relational/entities/device.entity';

@Injectable()
export class DeviceSeedService {
  constructor(
    @InjectRepository(DeviceEntity)
    private repository: Repository<DeviceEntity>,
  ) {}
  async run() {
    const devices: Omit<DeviceEntity, 'id'>[] = [
      {
        key: 'k',
        name: 'Bình chứa phân Kali',
        status: true,
        minValue: 0,
        maxValue: 5000,
        value: 3000,
      },
      {
        key: 'p',
        name: 'Bình chứa phân lân',
        status: true,
        minValue: 0,
        maxValue: 5000,
        value: 2000,
      },
      {
        key: 'mg',
        name: 'Bình chứa phân Mg',
        status: true,
        minValue: 0,
        maxValue: 5000,
        value: 4000,
      },
      {
        key: 'h2o',
        name: 'Bình chứa nước',
        status: true,
        minValue: 0,
        maxValue: 5000,
        value: 4500,
      },
      {
        key: 'mixer',
        name: 'Bình trộn phân',
        status: false,
        minValue: 0,
        maxValue: 1000,
        value: 0,
      },
      {
        key: 'area1',
        name: 'Khu vực 1',
        status: true,
        minValue: 0,
        maxValue: 1,
        value: 1,
      },
      {
        key: 'area2',
        name: 'Khu vực 2',
        status: false,
        minValue: 0,
        maxValue: 1,
        value: 0,
      },
      {
        key: 'area3',
        name: 'Khu vực 3',
        status: false,
        minValue: 0,
        maxValue: 1,
        value: 0,
      },
      {
        key: 'temp',
        name: 'Nhiệt độ',
        status: true,
        minValue: 0,
        maxValue: 60,
        value: 27,
      },
      {
        key: 'humid',
        name: 'Độ ẩm',
        status: true,
        minValue: 0,
        maxValue: 100,
        value: 65,
      },
      {
        key: 'light',
        name: 'Ánh sáng',
        status: true,
        minValue: 0,
        maxValue: 1000,
        value: 333,
      },
    ];
    await this.repository.save(devices);
  }
}
