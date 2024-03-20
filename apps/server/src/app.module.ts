import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';

@Module({
  imports: [ConfigModule.forRoot(), TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
