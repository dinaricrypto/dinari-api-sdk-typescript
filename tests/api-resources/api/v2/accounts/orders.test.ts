// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Dinari from 'dinari-api-sdk';

const client = new Dinari({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource orders', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.api.v2.accounts.orders.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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

  // skipped: tests are disabled for the time being
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.api.v2.accounts.orders.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.api.v2.accounts.orders.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('cancel: only required params', async () => {
    const responsePromise = client.api.v2.accounts.orders.cancel('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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

  // skipped: tests are disabled for the time being
  test.skip('cancel: required and optional params', async () => {
    const response = await client.api.v2.accounts.orders.cancel('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('getEstimatedFee: only required params', async () => {
    const responsePromise = client.api.v2.accounts.orders.getEstimatedFee(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { chain_id: 0, contract_address: 'contract_address', order_data: { foo: 'string' } },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getEstimatedFee: required and optional params', async () => {
    const response = await client.api.v2.accounts.orders.getEstimatedFee(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { chain_id: 0, contract_address: 'contract_address', order_data: { foo: 'string' } },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveFulfillments: only required params', async () => {
    const responsePromise = client.api.v2.accounts.orders.retrieveFulfillments(
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

  // skipped: tests are disabled for the time being
  test.skip('retrieveFulfillments: required and optional params', async () => {
    const response = await client.api.v2.accounts.orders.retrieveFulfillments(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
    );
  });
});
