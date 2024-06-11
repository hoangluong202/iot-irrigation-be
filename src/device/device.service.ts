import { Injectable } from '@nestjs/common';
import { DeviceRepository as DeviceRepository } from './infrastructure/relational/repositories/pole.repository';
import { DeviceEntity } from './infrastructure/relational/entities/device.entity';

@Injectable()
export class DeviceService {
  constructor(private readonly deviceRepository: DeviceRepository) {}

  findMany(): Promise<DeviceEntity[]> {
    return this.deviceRepository.findMany();
  }
}
