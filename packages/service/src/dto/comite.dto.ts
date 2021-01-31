import { ApiProperty } from '@nestjs/swagger';
import { ListDto } from './list.dto';

export class ComiteDto {
  @ApiProperty()
  public readonly id: string;
  @ApiProperty()
  public readonly description: string;
}

export class ComiteListDto extends ListDto<ComiteDto> {
  @ApiProperty({ type: ComiteDto, isArray: true })
  readonly list: ComiteDto[];
}
