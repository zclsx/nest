import {
  BeforeApplicationShutdown,
  Global,
  Module,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { AaaService } from './aaa.service';
import { AaaController } from './aaa.controller';
import { CccService } from 'src/ccc/ccc.service';
import { CccModule } from 'src/ccc/ccc.module';

// 不过全局模块还是尽量少用，不然注入的很多
// provider 都不知道来源，会降低代码的可维护性

//将AaaModule声明为全局
// @Global()
@Module({
  imports: [CccModule],
  controllers: [AaaController],
  // providers: [AaaService,CccService],
  providers: [AaaService],
  exports: [AaaService],
})
export class AaaModule
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    BeforeApplicationShutdown,
    OnModuleDestroy,
    OnApplicationShutdown
{
  onApplicationShutdown(signal?: string) {
    console.log('AaaModule onApplicationShutdown');
  }
  onModuleDestroy() {
    console.log('AaaModule onModuleDestroy');
  }
  beforeApplicationShutdown(signal?: string) {
    console.log('AaaModule beforeApplicationShutdown');
  }
  onModuleInit() {
    console.log('AaaModule onModuleInit');
  }
  onApplicationBootstrap() {
    console.log('AaaModule onApplicationBootstrap');
  }
}
