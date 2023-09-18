import { Global, Module } from '@nestjs/common';
import { DddService } from './ddd.service';
import { DddController } from './ddd.controller';
import { CccModule } from 'src/ccc/ccc.module';


@Module({
  // imports: [CccModule],
  controllers: [DddController],
  providers: [DddService],
})
export class DddModule {}
