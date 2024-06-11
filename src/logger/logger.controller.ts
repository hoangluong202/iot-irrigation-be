import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoggerService } from './loger.service';
import { LoggerEntity } from './logger.entity';

@ApiTags('Logger')
@Controller('loggers')
export class LoggerController {
  constructor(private readonly loggerService: LoggerService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findMany(): Promise<LoggerEntity[]> {
    return this.loggerService.findMany();
  }
}
