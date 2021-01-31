import { ApiProperty } from '@nestjs/swagger';
import { ListDto } from './list.dto';

export class OrganismoDto {
  @ApiProperty()
  public readonly id: string;
  @ApiProperty()
  public readonly description: string;
}

export class OrganismoListDto extends ListDto<OrganismoDto> {
  @ApiProperty({ type: OrganismoDto, isArray: true })
  readonly list: OrganismoDto[];
}
