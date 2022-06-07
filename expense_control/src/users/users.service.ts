import { Injectable } from '@nestjs/common';
import { find } from 'rxjs';
import { User } from './entities/finance.entity';

@Injectable()
export class UsersService {
  private users:User[] = [
   {
        id:1,
        name:"Jadeilson de Melo Santos",
        email: "jadeilsontechnology@gmail.com",
        password: 1234,
   } 
  ];  
  findAll(){
      return this.users;
  }
  findOne(id:string){
      return this.users.find((user:User) => user.id===Number(id));
  }
  create(createUserDto:any){
      this.users.push(createUserDto);
  }
  update(id: string, updateUserDto: any){  
    const indexUser = this.users.findIndex(
          (user:User) => user.id=== Number(id),
      );
        let userFound =  this.users[indexUser];
        updateUserDto = Object.assign(userFound, updateUserDto)
        userFound = updateUserDto;

  }
  remove(id:string){
      const indexUser = this.users.findIndex(
          (user:User)=> user.id===Number(id),
      );
      if (indexUser >= 0){
          this.users.splice(indexUser,  1)
      }
  }
}
