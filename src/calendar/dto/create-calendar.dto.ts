import { ApiProperty } from '@nestjs/swagger';

export class CreateCalendarDto {
  @ApiProperty({ example: 'Lịch tưới 1' })
  name: string;

  @ApiProperty({
    example: 30,
  })
  k: number;

  @ApiProperty({
    example: 10,
  })
  p: number;

  @ApiProperty({
    example: 10,
  })
  mg: number;

  @ApiProperty({
    example: 10,
  })
  h2o: number;

  @ApiProperty({
    example: 1,
  })
  area: number;

  @ApiProperty({
    example: 1,
  })
  level: number;

  @ApiProperty({
    example: new Date(2024, 6, 13, 9, 35),
  })
  startTime: Date;

  @ApiProperty({
    example: 5,
  })
  repeat: number;
}
