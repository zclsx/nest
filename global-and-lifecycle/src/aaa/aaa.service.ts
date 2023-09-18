import {
  BeforeApplicationShutdown,
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { CreateAaaDto } from './dto/create-aaa.dto';
import { UpdateAaaDto } from './dto/update-aaa.dto';
import { CccService } from 'src/ccc/ccc.service';

@Injectable()
export class AaaService
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    BeforeApplicationShutdown,
    OnModuleDestroy,
    OnApplicationShutdown
{
  constructor(private readonly cccService: CccService) {}
  onApplicationShutdown(signal?: string) {
    console.log('AaaService onApplicationShutdown');
  }
  onModuleDestroy() {
    console.log('AaaService onModuleDestroy');
  }
  beforeApplicationShutdown(signal?: string) {
    console.log('AaaService beforeApplicationShutdown');
  }
  onModuleInit() {
    console.log('AaaService onModuleInit');
  }
  onApplicationBootstrap() {
    console.log('AaaService onApplicationBootstrap');
  }
  create(createAaaDto: CreateAaaDto) {
    return 'This action adds a new aaa';
  }

  findAll() {
    console.log(this.cccService.findAll());
    return `This action returns all aaa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aaa`;
  }

  update(id: number, updateAaaDto: UpdateAaaDto) {
    return `This action updates a #${id} aaa`;
  }

  remove(id: number) {
    return `This action removes a #${id} aaa`;
  }
}
