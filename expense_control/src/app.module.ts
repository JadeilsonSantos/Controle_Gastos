import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FinanceController } from './finance/finance.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users/users.service';

@Module({
  imports: [TypeOrmModule.forRoot({
     type: 'postgres',
     host: 'woc.dev.br',
     port: 5432,
     username: 'woc_expense_control',
     password: '}cNj&bR)5%0h',
     database: 'woc_expense_control_db',
     autoLoadEntities: true ,
     synchronize: true,

})],
  controllers: [AppController, FinanceController],
  providers: [AppService, UsersService],
})
export class AppModule {}
