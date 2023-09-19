import { Injectable } from '@nestjs/common';

//声明provider
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
