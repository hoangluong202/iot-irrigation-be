import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeviceEntity } from 'src/device/infrastructure/relational/entities/device.entity';
import { DeviceSeedService } from './device-seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([DeviceEntity])],
  providers: [DeviceSeedService],
  exports: [DeviceSeedService],
})
export class DeviceSeedModule {}
