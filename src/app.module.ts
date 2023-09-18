import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  // providers: [AppService],
  providers: [
    AppService,
    {
      provide: AppService,
      useClass: AppService,
    },
    {
      provide: 'parent',
      useValue: {
        name: 'parent',
        age: 30,
      },
    },
    {
      provide: 'parent2',
      useFactory() {
        return {
          name: 'parent2',
          desc: 'zhaoyu',
        };
      },
    },
    {
      provide: 'parent3',
      useFactory(parent: { name: string }, appService: AppService) {
        return {
          name: parent.name,
          appService: appService.getHello(),
        };
      },
      inject: ['parent', AppService],
    },
    {
      provide: 'parent4',
      useExisting: 'parent2',
    },
    {
      provide: 'parent5',
      async useFactory() {
        await new Promise((resolve) => {
          setTimeout(resolve, 1000);
        });
        return {
          name: 'aaa',
          desc: 'ccc',
        };
      },
    },
  ],
})
export class AppModule {}
