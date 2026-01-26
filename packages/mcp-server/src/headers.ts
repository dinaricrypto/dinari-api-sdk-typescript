// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { IncomingMessage } from 'node:http';
import { ClientOptions } from '@dinari/api-sdk';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  const apiKeyID =
    Array.isArray(req.headers['x-api-key-id']) ? req.headers['x-api-key-id'][0] : req.headers['x-api-key-id'];
  const apiSecretKey =
    Array.isArray(req.headers['x-api-secret-key']) ?
      req.headers['x-api-secret-key'][0]
    : req.headers['x-api-secret-key'];
  return { apiKeyID, apiSecretKey };
};
