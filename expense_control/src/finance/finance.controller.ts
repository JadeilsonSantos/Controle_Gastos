import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { create } from 'domain';
import { response } from 'express';
import { UsersService } from 'src/users/users.service';


@Controller('finance')
export class FinanceController {
    constructor(private readonly usersService: UsersService){}

@Get()
findAll(@Res()response){
    return this.usersService.findAll();
}
@Get(':id')
findOne(@Param('id') id:string){
  return this.usersService.findOne(id);  
}

@Post()
create(@Body()body){
    return this.usersService.create(body)
}

}
