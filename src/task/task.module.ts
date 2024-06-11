import { Module } from '@nestjs/common';
import { TasksService } from './task.service';
import { MqttModule } from 'src/mqtt/mqtt.module';

@Module({
  imports: [MqttModule],
  providers: [TasksService],
  exports: [TasksService],
})
export class TasksModule {}
