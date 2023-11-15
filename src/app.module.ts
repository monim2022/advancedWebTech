import { Module } from '@nestjs/common';
import { visitorsModule } from './visitors.module';

@Module({
  imports: [visitorsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
