import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export class OrganismoEntity implements InMemoryDBEntity {
  public readonly id: string;
  public readonly description: string;
}
