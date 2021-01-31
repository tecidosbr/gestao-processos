import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { ComiteListDto } from '../dto';
import { ComiteService } from '../service';

@Controller('comite')
export class ComiteController {
  public constructor(private readonly service: ComiteService) {}

  @Get()
  @ApiOkResponse({
    type: ComiteListDto,
  })
  private findAll(): ComiteListDto {
    return {
      list: this.service.getAll(),
    };
  }
}
