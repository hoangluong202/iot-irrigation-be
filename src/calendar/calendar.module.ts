import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalendarEntity } from './infrustructure/relational/entities/calendar.entity';
import { CalendarRepository } from './infrustructure/relational/repositories/calendar.repository';
import { CalendarService } from './calendar.service';
import { CalendarController } from './calendar.controller';
import { LoggerModule } from 'src/logger/logger.module';
import { TasksModule } from 'src/task/task.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CalendarEntity]),
    LoggerModule,
    TasksModule,
  ],
  controllers: [CalendarController],
  providers: [CalendarService, CalendarRepository],
  exports: [CalendarService],
})
export class CalendarModule {}
