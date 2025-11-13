// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Dinari from '@dinari/api-sdk';

const client = new Dinari({
  apiKeyID: 'My API Key ID',
  apiSecretKey: 'My API Secret Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource orders', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.v2.accounts.orders.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.v2.accounts.orders.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.v2.accounts.orders.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v2.accounts.orders.list(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          chain_id: 'eip155:1',
          client_order_id: 'client_order_id',
          order_transaction_hash: 'order_transaction_hash',
          page: 1,
          page_size: 1,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Dinari.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('cancel: only required params', async () => {
    const responsePromise = client.v2.accounts.orders.cancel('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('cancel: required and optional params', async () => {
    const response = await client.v2.accounts.orders.cancel('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Prism tests are disabled
  test.skip('getFulfillments: only required params', async () => {
    const responsePromise = client.v2.accounts.orders.getFulfillments(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getFulfillments: required and optional params', async () => {
    const response = await client.v2.accounts.orders.getFulfillments('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      page: 1,
      page_size: 1,
    });
  });
});
