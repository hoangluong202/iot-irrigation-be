import { Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import * as moment from 'moment';
import { LoggerEntity } from 'src/logger/logger.entity';
import { MqttService } from 'src/mqtt/mqtt.service';

@Injectable()
export class TasksService {
  constructor(private readonly mqttService: MqttService) {}

  private allTasks: Omit<LoggerEntity, 'id' | 'nameDevice'>[] = [];
  private tasks: Omit<LoggerEntity, 'id' | 'nameDevice'>[] = [];

  public addTasks(tasks: Omit<LoggerEntity, 'id' | 'nameDevice'>[]) {
    this.allTasks = this.allTasks.concat(tasks);
  }

  isSameTime(date1: Date, date2: Date) {
    return moment(date1).isSame(date2, 'second');
  }

  processTasks() {
    this.tasks.forEach((task) => {
      switch (task.keyDevice) {
        case 'k':
          this.mqttService.setK(task.value.toString());
          break;
        case 'p':
          this.mqttService.setP(task.value.toString());
          break;
        case 'mg':
          this.mqttService.setMg(task.value.toString());
          break;
        case 'h2o':
          this.mqttService.setH2o(task.value.toString());
          break;
        case 'mixer':
          this.mqttService.setMixer(task.value.toString());
          break;
        case 'area1':
          this.mqttService.setArea('1', task.value.toString());
          break;
        case 'area2':
          this.mqttService.setArea('2', task.value.toString());
          break;
        case 'area3':
          this.mqttService.setArea('3', task.value.toString());
          break;
        default:
          break;
      }
    });
  }

  @Interval(1000)
  handleInterval() {
    const now = moment().add(7, 'hours').toDate();
    this.allTasks.forEach((task) => {
      if (this.isSameTime(task.createdAt, now)) {
        this.tasks.push(task);
        //pop task
        this.allTasks = this.allTasks.filter((t) => t !== task);
      }
    });

    if (this.tasks.length > 0) {
      this.processTasks();
    }
  }
}
