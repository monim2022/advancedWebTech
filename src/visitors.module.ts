
import { Module } from '@nestjs/common';
import { visitorsController } from './visitors.controller';

@Module({
  imports: [],
  controllers: [visitorsController],
  providers: [],
})
export class visitorsModule{

}