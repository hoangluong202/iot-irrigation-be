import * as moment from 'moment';
import { Injectable } from '@nestjs/common';
import { CalendarRepository } from './infrustructure/relational/repositories/calendar.repository';
import { CreateCalendarDto } from './dto/create-calendar.dto';
import { CalendarEntity } from './infrustructure/relational/entities/calendar.entity';

@Injectable()
export class CalendarService {
  constructor(private readonly calendarRepository: CalendarRepository) {}

  findById(id: number): Promise<CalendarEntity> {
    return this.calendarRepository.findById(id);
  }

  findMany(): Promise<CalendarEntity[]> {
    return this.calendarRepository.findMany();
  }

  async create(createCalendarDto: CreateCalendarDto): Promise<CalendarEntity> {
    const k = createCalendarDto.k;
    const p = createCalendarDto.p;
    const mg = createCalendarDto.mg;
    const h2o = createCalendarDto.h2o;
    const repeat = createCalendarDto.repeat;
    const level = createCalendarDto.level;
    const startTime = createCalendarDto.startTime;
    const fertilizerFlowTime = Math.max(k, p, mg, h2o);
    const fertilizerMixerTime = (k + p + mg + h2o) * level;
    const duration = (fertilizerFlowTime + fertilizerMixerTime) * repeat;
    const endTime = moment(startTime).add(duration, 'seconds').toDate();
    const calendar: Omit<CalendarEntity, 'id'> = {
      ...createCalendarDto,
      duration: duration,
      endTime: endTime,
    };
    return this.calendarRepository.create(calendar);
  }
}
