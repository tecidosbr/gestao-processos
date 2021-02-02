import { Provider } from '@nestjs/common';

import { ComiteService } from './comite.service';
import { IcsService } from './ics.service';
import { NormaService } from './norma.service';
import { OrganismoService } from './organismo.service';

export { ComiteService, IcsService, NormaService, OrganismoService };

export const providers: Provider[] = [
  ComiteService,
  IcsService,
  NormaService,
  OrganismoService,
];
