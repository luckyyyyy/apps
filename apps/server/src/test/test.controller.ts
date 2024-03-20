import { Controller, Get } from '@nestjs/common';
import { TsRestHandler, tsRestHandler } from '@ts-rest/nest';
import { contract } from './contract';

@Controller('test')
export class TestController {
  @Get()
  public getHello(): string {
    return 'Hello World!';
  }

  @TsRestHandler(contract.getPost)
  public getPost() {
    return tsRestHandler(contract.getPost, async ({ params }) => {
      console.log(params.id);
      return {
        status: 200,
        body: {
          id: '1',
          title: 'Title',
          body: 'Body',
        },
      };
    });
  }
}
