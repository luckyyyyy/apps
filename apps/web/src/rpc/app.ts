import { contract } from '@server/contract';
import { initClient } from '@ts-rest/core';

export const rpc = initClient(contract, {
  baseUrl: process.env.NEXT_PUBLIC_NESTJS_SERVER || 'http://localhost:3000',
  baseHeaders: {},
});
