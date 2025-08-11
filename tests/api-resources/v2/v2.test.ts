// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Dinari from '@dinari/api-sdk';

const client = new Dinari({
  apiKeyID: 'My API Key ID',
  apiSecretKey: 'My API Secret Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v2', () => {
  // Prism tests are disabled
  test.skip('listOrders', async () => {
    const responsePromise = client.v2.listOrders();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listOrders: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v2.listOrders(
        {
          chain_id: 'eip155:1',
          order_fulfillment_transaction_hash: 'order_fulfillment_transaction_hash',
          order_request_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          order_transaction_hash: 'order_transaction_hash',
          page: 1,
          page_size: 1,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Dinari.NotFoundError);
  });
});
