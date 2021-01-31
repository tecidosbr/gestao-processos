import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { ComiteEntity, OrganismoEntity } from '../model';

export class OrganismoService extends InMemoryDBService<ComiteEntity> {
  public constructor(args) {
    super(args);
    this.records = records;
  }
}

export const records: OrganismoEntity[] = [
  { id: 'ABNT', description: 'ABNT' },
  { id: 'ISO', description: 'ISO' },
  { id: 'IEC', description: 'IEC' },
  { id: 'DIN', description: 'DIN' },
  { id: 'BSI ', description: 'BSI ' },
  { id: 'AFNOR', description: 'AFNOR' },
  { id: 'AENOR', description: 'AENOR' },
  { id: 'AMN', description: 'AMN' },
  { id: 'JIS', description: 'JIS' },
  { id: 'ASTM', description: 'ASTM' },
  { id: 'ASME', description: 'ASME' },
  { id: 'API', description: 'API' },
  { id: 'IEEE', description: 'IEEE' },
  { id: 'NFPA', description: 'NFPA' },
];
