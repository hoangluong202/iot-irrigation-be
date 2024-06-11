import { NestFactory } from '@nestjs/core';
import { SeedModule } from './seed.module';
import { DeviceSeedService } from './device/device-seed.service';

const runSeed = async () => {
  const app = await NestFactory.create(SeedModule);

  //run
  await app.get(DeviceSeedService).run();

  await app.close();
};
void runSeed();
