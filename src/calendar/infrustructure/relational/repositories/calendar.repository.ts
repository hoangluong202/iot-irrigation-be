import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CalendarEntity } from '../entities/calendar.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCalendarDto } from 'src/calendar/dto/create-calendar.dto';

@Injectable()
export class CalendarRepository {
  constructor(
    @InjectRepository(CalendarEntity)
    private repository: Repository<CalendarEntity>,
  ) {}

  async findById(id: number): Promise<CalendarEntity> {
    return await this.repository.findOneBy({ id: id });
  }

  async findMany(): Promise<CalendarEntity[]> {
    return await this.repository.find();
  }

  async create(data: Omit<CalendarEntity, 'id'>): Promise<CalendarEntity> {
    try {
      return await this.repository.save(this.repository.create(data));
    } catch (err) {
      throw new BadRequestException('Check create calendar Repository');
    }
  }
}
