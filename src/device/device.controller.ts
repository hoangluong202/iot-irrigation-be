import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { DeviceService } from './device.service';
import { ApiTags } from '@nestjs/swagger';
import { DeviceEntity } from './infrastructure/relational/entities/device.entity';

@ApiTags('Device')
@Controller('devices')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @Get('')
  @HttpCode(HttpStatus.OK)
  async findMany(): Promise<DeviceEntity[]> {
    return this.deviceService.findMany();
  }
}
