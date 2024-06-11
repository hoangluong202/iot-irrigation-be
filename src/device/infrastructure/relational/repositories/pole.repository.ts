import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeviceEntity } from '../entities/device.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeviceRepository {
  constructor(
    @InjectRepository(DeviceEntity)
    private readonly deviceRepository: Repository<DeviceEntity>,
  ) {}

  async findMany(): Promise<DeviceEntity[]> {
    return this.deviceRepository.find();
  }
}
