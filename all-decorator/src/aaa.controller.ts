import {
  Controller,
  Get,
  Header,
  HostParam,
  HttpCode,
  Next,
  Redirect,
  Render,
  Req,
  Res,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Controller({ host: ':host.0.0.1', path: 'aaa' })
export class AaaController {
  @Get('bbb')
  hello(@HostParam('host') host, @Req() req: Request) {
    console.log(host, 'host'); //127 host
    console.log(req.hostname); //127.0.0.1
    console.log(req.url); //aaa/bbb
    return 'hello';
  }

  @Get('res')
  responseDemo(@Res() res: Response) {
    //不会执行handler作为返回值
    //return 'xxxx'
    res.json({
      //自定义一些返回内容
      message: 'nest',
    });
  }

  @Get('res1')
  //passthrough: true 不自己返回一些内容，通过参数指定
  responseDemo1(@Res({ passthrough: true }) res: Response) {
    return '1111';
  }

  @Get('xxx')
  nextDemo(@Next() next: NextFunction) {
    console.log('nextDemo');
    // next('xxxx');
    next();
    return 'next result';
  }

  @Get('xxx')
  nextDemo1(@Res({ passthrough: true }) res: Response) {
    console.log('nextDemo1');
    return 'xxxx';
  }

  //   @Get('fff')
  //   @HttpCode(222)
  //   fff() {
  //     return 'hello';
  //   }

  //   @Get('ggg')
  //   @Header('aaa', 'bbb')
  //   ggg() {
  //     return 'hello';
  //   }

  //重定向
  @Get('hhh')
  @Redirect('http://juejin.cn')
  hhh() {}

  //返回的响应内容指定渲染引擎
  @Get('user')
  @Render('user')
  user() {
    return { name: 'chao', age: 20 };
  }
}
