// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Dinari from '@dinari/api-sdk';

const client = new Dinari({
  apiKeyID: 'My API Key ID',
  apiSecretKey: 'My API Secret Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource orderFulfillments', () => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.v2.accounts.orderFulfillments.retrieve(
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

  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.v2.accounts.orderFulfillments.retrieve(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
    );
  });

  // Mock server tests are disabled
  test.skip('query', async () => {
    const responsePromise = client.v2.accounts.orderFulfillments.query(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('query: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v2.accounts.orderFulfillments.query(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          limit: 20,
          next: 'next',
          order: 'asc',
          order_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          previous: 'previous',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Dinari.NotFoundError);
  });
});
