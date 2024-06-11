import * as moment from 'moment';
import { Injectable } from '@nestjs/common';
import { CalendarRepository } from './infrustructure/relational/repositories/calendar.repository';
import { CreateCalendarDto } from './dto/create-calendar.dto';
import { CalendarEntity } from './infrustructure/relational/entities/calendar.entity';
import { TasksService } from 'src/task/task.service';
@Injectable()
export class CalendarService {
  constructor(
    private readonly calendarRepository: CalendarRepository,
    private readonly tasksService: TasksService,
  ) {}

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
    const area = createCalendarDto.area;
    const fertilizerFlowTime = Math.max(k, p, mg, h2o);
    const fertilizerMixerTime = (k + p + mg + h2o) * level;
    const pumpTime = k + p + mg + h2o;
    const cycleTime = fertilizerFlowTime + fertilizerMixerTime + pumpTime;
    const duration =
      (fertilizerFlowTime + fertilizerMixerTime + pumpTime) * repeat;
    const endTime = moment(startTime).add(duration, 'seconds').toDate();

    const calendar: Omit<CalendarEntity, 'id'> = {
      ...createCalendarDto,
      duration: duration,
      endTime: endTime,
    };

    for (let i = 0; i < repeat; i++) {
      const startTimeOfCycle = moment(startTime)
        .add(i * cycleTime, 'seconds')
        .toDate();
      this.tasksService.addTasks([
        {
          keyDevice: 'k',
          value: k > 0 ? 1 : 0,
          createdAt: startTimeOfCycle,
        },
        {
          keyDevice: 'k',
          value: 0,
          createdAt: moment(startTimeOfCycle).add(k, 'seconds').toDate(),
        },
        {
          keyDevice: 'p',
          value: p > 0 ? 1 : 0,
          createdAt: startTimeOfCycle,
        },
        {
          keyDevice: 'p',
          value: 0,
          createdAt: moment(startTimeOfCycle).add(p, 'seconds').toDate(),
        },
        {
          keyDevice: 'mg',
          value: mg > 0 ? 1 : 0,
          createdAt: startTimeOfCycle,
        },
        {
          keyDevice: 'mg',
          value: 0,
          createdAt: moment(startTimeOfCycle).add(mg, 'seconds').toDate(),
        },
        {
          keyDevice: 'h2o',
          value: h2o > 0 ? 1 : 0,
          createdAt: startTimeOfCycle,
        },
        {
          keyDevice: 'h2o',
          value: 0,
          createdAt: moment(startTimeOfCycle).add(h2o, 'seconds').toDate(),
        },
        {
          keyDevice: 'mixer',
          value: 1,
          createdAt: moment(startTimeOfCycle)
            .add(fertilizerFlowTime + fertilizerMixerTime, 'seconds')
            .toDate(),
        },
        {
          keyDevice: 'mixer',
          value: 0,
          createdAt: moment(startTimeOfCycle)
            .add(fertilizerFlowTime + fertilizerMixerTime + pumpTime, 'seconds')
            .toDate(),
        },
        {
          keyDevice: 'area' + area,
          value: 1,
          createdAt: moment(startTimeOfCycle)
            .add(fertilizerFlowTime + fertilizerMixerTime, 'seconds')
            .toDate(),
        },
        {
          keyDevice: 'area' + area,
          value: 0,
          createdAt: moment(startTimeOfCycle)
            .add(fertilizerFlowTime + fertilizerMixerTime + pumpTime, 'seconds')
            .toDate(),
        },
      ]);
    }
    return this.calendarRepository.create(calendar);
  }
}
