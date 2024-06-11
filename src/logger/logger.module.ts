import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerEntity } from './logger.entity';
import { LoggerController } from './logger.controller';
import { LoggerRepository } from './logger.repository';
import { LoggerService } from './loger.service';

@Module({
  imports: [TypeOrmModule.forFeature([LoggerEntity])],
  controllers: [LoggerController],
  providers: [LoggerService, LoggerRepository],
  exports: [LoggerService],
})
export class LoggerModule {}
