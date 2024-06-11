import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalendarEntity } from './infrustructure/relational/entities/calendar.entity';
import { CalendarRepository } from './infrustructure/relational/repositories/calendar.repository';
import { CalendarService } from './calendar.service';
import { CalendarController } from './calendar.controller';
import { LoggerService } from 'src/logger/loger.service';
import { LoggerModule } from 'src/logger/logger.module';

@Module({
  imports: [TypeOrmModule.forFeature([CalendarEntity]), LoggerModule],
  controllers: [CalendarController],
  providers: [CalendarService, CalendarRepository],
  exports: [CalendarService],
})
export class CalendarModule {}
