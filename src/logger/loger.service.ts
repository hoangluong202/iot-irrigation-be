import { Injectable } from '@nestjs/common';
import { LoggerRepository } from './logger.repository';
import { LoggerEntity } from './logger.entity';

@Injectable()
export class LoggerService {
  constructor(private readonly loggerRepository: LoggerRepository) {}

  findMany(): Promise<LoggerEntity[]> {
    return this.loggerRepository.findMany();
  }

  createMany(data: Omit<LoggerEntity, 'id'>[]): Promise<LoggerEntity[]> {
    return this.loggerRepository.createMany(data);
  }
}
