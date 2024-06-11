import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoggerEntity } from './logger.entity';

@Injectable()
export class LoggerRepository {
  constructor(
    @InjectRepository(LoggerEntity)
    private readonly loggerRepository: Repository<LoggerEntity>,
  ) {}

  async findMany(): Promise<LoggerEntity[]> {
    return this.loggerRepository.find();
  }

  async createMany(data: Omit<LoggerEntity, 'id'>[]): Promise<LoggerEntity[]> {
    return this.loggerRepository.save(data);
  }
}
