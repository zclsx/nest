import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AaaController } from './aaa.controller';

//声明模块
@Global() //声明全局模块
@Module({
  imports: [],
  controllers: [AppController, AaaController],
  providers: [
    AppService,
    //useClass
    //useValue
    //useFactory
    //useExisting
    {
      provide: 'mode',
      useFactory() {
        return {
          name: 'nest',
          desc: 'study',
        };
      },
    },
  ],
})
export class AppModule {}
