import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { NormaListDto, SearchNormaDto } from '../dto';
import { NormaService } from '../service';

@Controller('norma')
export class NormaController {
  public constructor(private readonly service: NormaService) {}

  @Get('search')
  @ApiOkResponse({
    type: NormaListDto,
  })
  private async search(@Query() query: SearchNormaDto): Promise<NormaListDto> {
    return {
      list: await this.service.search(query),
    };
  }
}
