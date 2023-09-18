import { Module } from '@nestjs/common';
import { BbbService } from './bbb.service';
import { BbbController } from './bbb.controller';
import { AaaModule } from 'src/aaa/aaa.module';
import { AaaService } from 'src/aaa/aaa.service';
import { CccService } from 'src/ccc/ccc.service';

@Module({
  imports: [AaaModule],
  controllers: [BbbController],
  //通过providers直接引入会有问题
  //如果这个service依赖了其他依赖，都需要引入，但是关联依赖如果不知道是哪个就很烦
  //所以用模块 imports[]导入
  // providers: [BbbService, AaaService, CccService],
  providers: [BbbService],
})
export class BbbModule {}
