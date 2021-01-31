import { ApiProperty } from '@nestjs/swagger';

export abstract class ListDto<T> {
  @ApiProperty()
  readonly list: T[];
}
