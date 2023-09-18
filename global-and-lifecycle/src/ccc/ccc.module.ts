import { Global, Module } from '@nestjs/common';
import { CccService } from './ccc.service';
import { CccController } from './ccc.controller';

//全局模块使用， ddd就可以用
@Global()
@Module({
  controllers: [CccController],
  providers: [CccService],
  exports: [CccService],
})
export class CccModule {}
