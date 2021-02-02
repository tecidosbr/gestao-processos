import { ApiProperty } from '@nestjs/swagger';
import { ListDto } from './list.dto';

export class SearchNormaDto {
  @ApiProperty()
  public readonly search: string;

  @ApiProperty({ required: false })
  public readonly filter: string;
}

export class NormaDto {
  @ApiProperty()
  public readonly id: string;

  @ApiProperty()
  public readonly titulo: string;

  @ApiProperty()
  public readonly codigo: string;

  @ApiProperty()
  public readonly objetivo: string;

  @ApiProperty()
  public readonly ics: string;

  @ApiProperty({ type: String, isArray: true })
  public readonly palavrasChave: string[];

  @ApiProperty()
  public readonly filename: string;
}

export class NormaListDto extends ListDto<NormaDto> {
  @ApiProperty({ type: NormaDto, isArray: true })
  readonly list: NormaDto[];
}
