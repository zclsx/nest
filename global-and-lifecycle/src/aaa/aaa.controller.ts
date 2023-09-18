import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  OnApplicationBootstrap,
  OnModuleInit,
  OnApplicationShutdown,
  OnModuleDestroy,
  BeforeApplicationShutdown,
} from '@nestjs/common';
import { AaaService } from './aaa.service';
import { CreateAaaDto } from './dto/create-aaa.dto';
import { UpdateAaaDto } from './dto/update-aaa.dto';
import { ModuleRef } from '@nestjs/core';

@Controller('aaa')
export class AaaController
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    BeforeApplicationShutdown,
    OnModuleDestroy,
    OnApplicationShutdown
{
  constructor(
    private readonly aaaService: AaaService,
    private moduleRef: ModuleRef,
  ) {}

  onApplicationShutdown(signal?: string) {
    console.log('AaaController onApplicationShutdown');
  }
  onModuleDestroy() {
    console.log('AaaController onModuleDestroy');
  }
  beforeApplicationShutdown(signal?: string) {
    //销毁的时候也可以获取到
    console.log(this.moduleRef.get(AaaService));
    console.log('AaaController beforeApplicationShutdown');
  }
  onModuleInit() {
    console.log('AaaController onModuleInit');
  }
  onApplicationBootstrap() {
    //获取moduleRef 就是当前模块的对象
    console.log(this.moduleRef.get(AaaService));
    console.log('AaaController onApplicationBootstrap');
  }
  @Post()
  create(@Body() createAaaDto: CreateAaaDto) {
    return this.aaaService.create(createAaaDto);
  }

  @Get()
  findAll() {
    return this.aaaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aaaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAaaDto: UpdateAaaDto) {
    return this.aaaService.update(+id, updateAaaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aaaService.remove(+id);
  }
}
