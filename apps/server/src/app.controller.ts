import { Controller, Get } from '@nestjs/common';
import { TsRestHandler, tsRestHandler } from '@ts-rest/nest';
import { AppService } from './app.service';
import { contract } from './contract';

@Controller()
export class AppController {
  public constructor(private readonly appService: AppService) {}

  @Get()
  public getHello(): string {
    return this.appService.getHello();
  }

  @TsRestHandler(contract.hello)
  public hello() {
    return tsRestHandler(contract.hello, async () => {
      return {
        status: 200,
        body: 'hello world',
      };
    });
  }
}
