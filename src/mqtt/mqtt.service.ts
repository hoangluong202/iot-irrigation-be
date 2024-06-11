import { BadRequestException, Injectable } from '@nestjs/common';
import mqtt from 'mqtt';
import { InjectMqtt } from './config/mqtt.decorator';

@Injectable()
export class MqttService {
  constructor(@InjectMqtt() private client: mqtt.MqttClient) {
    this.setH2o('1');
    this.listener();
    this.subscribe();
  }

  private async subscribe() {
    try {
      this.client.subscribe('Khoa_hoc0186/feeds/temp');
      this.client.subscribe('Khoa_hoc0186/feeds/humid');
      this.client.publish('Khoa_hoc0186/feeds/temp', '32');
      this.client.publish('Khoa_hoc0186/feeds/humid', '80');
    } catch (e) {
      throw new BadRequestException('Error subscribe');
    }
  }

  private async listener() {
    this.client.on('message', (topic, message) => {
      console.log('Message received', message.toString());
      this.client.end();
    });
  }

  public async setH2o(message: string) {
    this.client.publish('Khoa_hoc0186/feeds/h2o', message, (err) => {
      if (err) {
        throw new BadRequestException('Error publish');
      } else {
      }
    });
  }

  public async setK(message: string) {
    this.client.publish('Khoa_hoc0186/feeds/k', message, (err) => {
      if (err) {
        throw new BadRequestException('Error publish');
      } else {
      }
    });
  }

  public async setP(message: string) {
    this.client.publish('Khoa_hoc0186/feeds/p', message, (err) => {
      if (err) {
        throw new BadRequestException('Error publish');
      } else {
      }
    });
  }

  public async setMg(message: string) {
    this.client.publish('Khoa_hoc0186/feeds/mg', message, (err) => {
      if (err) {
        throw new BadRequestException('Error publish');
      } else {
      }
    });
  }

  public async setMixer(message: string) {
    this.client.publish('Khoa_hoc0186/feeds/mixer', message, (err) => {
      if (err) {
        throw new BadRequestException('Error publish');
      } else {
      }
    });
  }

  public async setArea(area: string, message: string) {
    this.client.publish('Khoa_hoc0186/feeds/area' + area, message, (err) => {
      if (err) {
        throw new BadRequestException('Error publish');
      } else {
      }
    });
  }
}
