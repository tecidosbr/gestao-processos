import { Provider } from '@nestjs/common';

import { ComiteService } from './comite.service';
import { IcsService } from './ics.service';
import { OrganismoService } from './organismo.service';

export { ComiteService, IcsService, OrganismoService };

export const providers: Provider[] = [
  ComiteService,
  IcsService,
  OrganismoService,
];
