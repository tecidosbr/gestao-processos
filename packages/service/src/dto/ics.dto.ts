import { ApiProperty } from '@nestjs/swagger';
import { ListDto } from './list.dto';

export class IcsDto {
  @ApiProperty()
  public readonly id: string;
  @ApiProperty()
  public readonly description: string;
}

export class IcsListDto extends ListDto<IcsDto> {
  @ApiProperty({ type: IcsDto, isArray: true })
  readonly list: IcsDto[];
}
