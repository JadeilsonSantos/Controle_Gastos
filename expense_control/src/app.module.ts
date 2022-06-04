import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FinanceController } from './finance/finance.controller';

@Module({
  imports: [],
  controllers: [AppController, FinanceController],
  providers: [AppService],
})
export class AppModule {}
