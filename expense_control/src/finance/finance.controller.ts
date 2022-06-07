import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { create } from 'domain';
import { UsersService } from 'src/users/users.service';


@Controller('finance')
export class FinanceController {
    constructor(private readonly usersService: UsersService){}

@Get()
findAll(){
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

@Patch(':id')
update(@Param('id')id:string, @Body() body){

    return this.usersService.update(id,body);
}

@Delete(':id')
remove(@Param('id') id: string) {
    return this.usersService.remove(id)
}

}
