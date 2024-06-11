import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './database/config/typeorm';
import { CalendarModule } from './calendar/calendar.module';
import { MqttModule } from './mqtt/mqtt.module';
import { DeviceModule } from './device/device.module';
import { LoggerModule } from './logger/logger.module';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksModule } from './task/task.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    DeviceModule,
    CalendarModule,
    MqttModule,
    LoggerModule,
    TasksModule,
    ScheduleModule.forRoot(),
  ],
})
export class AppModule {}
