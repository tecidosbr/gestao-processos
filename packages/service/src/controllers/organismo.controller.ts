import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { OrganismoListDto } from '../dto';
import { OrganismoService } from '../service';

@Controller('organismo')
export class OrganismoController {
  public constructor(private readonly service: OrganismoService) {}

  @Get()
  @ApiOkResponse({
    type: OrganismoListDto,
  })
  private findAll(): OrganismoListDto {
    return {
      list: this.service.getAll(),
    };
  }
}
