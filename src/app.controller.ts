import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  //inject的方式
  @Inject('parent')
  private readonly parent: {
    name: string;
    age: number;
  };
  @Inject('parent2')
  private readonly parent2: {
    name: string;
    desc: string;
  };
  @Inject('parent3')
  private readonly parent3: {
    name: string;
    appService: string;
  };
  @Inject('parent5')
  private readonly parent5: {
    name: string;
    desc: string;
  };
  @Inject('parent4')
  private readonly parent4: {
    name: string;
    desc: string;
  };
  @Get()
  getHello(): string {
    console.log(this.parent);
    console.log(this.parent2);
    console.log(this.parent3);
    console.log(this.parent4);
    console.log(this.parent5);
    // debugger;
    return this.appService.getHello();
  }
}
