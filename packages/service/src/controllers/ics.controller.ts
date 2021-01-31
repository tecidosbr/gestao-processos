import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { IcsListDto } from '../dto';
import { IcsService } from '../service';

@Controller('ics')
export class IcsController {
  public constructor(private readonly service: IcsService) {}

  @Get()
  @ApiOkResponse({
    type: IcsListDto,
  })
  private findAll(): IcsListDto {
    return {
      list: this.service.getAll(),
    };
  }
}
