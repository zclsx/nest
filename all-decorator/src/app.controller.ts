import {
  Body,
  Controller,
  Delete,
  Dependencies,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Optional,
  Options,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  Session,
  SetMetadata,
  UseFilters,
  UsePipes,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ForbiddenFilter } from './forbidden/forbidden.filter';
import { AaaDto } from './bbb.dto';

//声明控制器
//3.Dependencies声明依赖
@Dependencies(AppService)
@Controller()
export class AppController {
  // 1.constructor
  // constructor(private readonly appService: AppService) {}

  // //2.inject 属性注入
  // @Inject(AppService)
  // appService: AppService;

  // 3.Dependencies
  appService: AppService;
  constructor(AppService) {
    this.appService = AppService;
  }

  // @Optional()
  //注入依赖没有，Optional可选跳过

  @Inject('mode')
  private readonly demo: Record<string, string>;

  @UseFilters(ForbiddenFilter)
  @UsePipes(ParseIntPipe)
  @Get()
  getHello(): string {
    console.log(this.demo);
    // throw new HttpException('nest', HttpStatus.BAD_REQUEST);
    return this.appService.getHello();
  }

  @Get('/xxx/:aaa')
  getHello2(
    @Param('aaa', ParseIntPipe) aaa: number,
    @Query('bbb', ParseBoolPipe) bbb: boolean,
  ) {
    console.log(typeof aaa, typeof bbb);
    console.log(aaa, bbb);
    return 'hello';
  }

  @Post('/bbb')
  getHello3(@Body() bbb: AaaDto) {
    console.log(bbb);
    return 'hello';
  }

  // PUT：用于向服务器上传或创建一个新的资源。如果资源已经存在，则会被替换。
  // DELETE：用于删除服务器上的资源。
  // PATCH：用于对服务器上的资源进行部分更新。只需要发送要更新的部分数据，而不是整个资源。
  // OPTIONS：用于获取关于服务器资源支持的请求方法、允许的头部等信息。
  // HEAD：类似于 GET 请求，但只返回响应头部，而不包含实际的响应体。
  @Put()
  getHello4() {
    return 'hello';
  }

  @Delete()
  getHello5() {
    return 'hello';
  }

  @Patch()
  getHello6() {
    return 'hello';
  }

  @Options()
  getHello7() {
    return 'hello';
  }

  @Get('/session')
  session(@Session() session) {
    if (!session.count) {
      session.count = 0;
    }
    console.log(session, 'session');
    session.count = session.count + 1;
    return session.count;
  }
}
