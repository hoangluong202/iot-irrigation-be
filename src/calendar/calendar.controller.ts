import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { CalendarService } from './calendar.service';
import { CreateCalendarDto } from './dto/create-calendar.dto';
import { CalendarEntity } from './infrustructure/relational/entities/calendar.entity';

@ApiTags('Calendar')
@Controller('calendars')
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  @ApiParam({ name: 'id', type: 'number' })
  @Get(':id')
  async findById(@Param('id') id: number): Promise<CalendarEntity> {
    return this.calendarService.findById(id);
  }

  @ApiOkResponse({
    type: CalendarEntity,
    isArray: true,
  })
  @Get()
  async findMany(): Promise<CalendarEntity[]> {
    return this.calendarService.findMany();
  }

  @ApiOkResponse({
    type: CalendarEntity,
  })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() createCalendarDto: CreateCalendarDto,
  ): Promise<CalendarEntity> {
    return this.calendarService.create(createCalendarDto);
  }
}
