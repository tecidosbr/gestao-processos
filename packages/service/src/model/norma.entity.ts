import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export class NormaEntity implements InMemoryDBEntity {
  public readonly id: string;
  public readonly titulo: string;
  public readonly objetivo: string;
  public readonly ics: string;
  public readonly palavrasChave: string[];
}
