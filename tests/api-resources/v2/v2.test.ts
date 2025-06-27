// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Dinari from '@dinari/api-sdk';

const client = new Dinari({
  apiKeyID: 'My API Key ID',
  apiSecretKey: 'My API Secret Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v2', () => {
  // skipped: tests are disabled for the time being
  test.skip('listOrders: only required params', async () => {
    const responsePromise = client.v2.listOrders({ chain_id: 'eip155:1' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listOrders: required and optional params', async () => {
    const response = await client.v2.listOrders({
      chain_id: 'eip155:1',
      order_fulfillment_transaction_hash: 'order_fulfillment_transaction_hash',
      order_transaction_hash: 'order_transaction_hash',
      page: 1,
      page_size: 1,
    });
  });
});
