import { Context, HttpRequest } from '@azure/functions';
import { AzureHttpAdapter } from '@nestjs/azure-func-http';
import { createApp } from '../src/main.azure';

export default function (context: Context, req: HttpRequest): void {
  setTimeout(() => process.exit(-1), 2000);
  throw new Error('runtime error');
  AzureHttpAdapter.handle(createApp, context, req);
}
