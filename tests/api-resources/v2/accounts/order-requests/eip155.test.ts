// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Dinari from '@dinari/api-sdk';

const client = new Dinari({
  apiKeyID: 'My API Key ID',
  apiSecretKey: 'My API Secret Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource eip155', () => {
  // Prism tests are disabled
  test.skip('createPermit: only required params', async () => {
    const responsePromise = client.v2.accounts.orderRequests.eip155.createPermit(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        chain_id: 'eip155:1',
        order_side: 'BUY',
        order_tif: 'DAY',
        order_type: 'MARKET',
        payment_token: 'payment_token',
      },
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
  test.skip('createPermit: required and optional params', async () => {
    const response = await client.v2.accounts.orderRequests.eip155.createPermit(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        chain_id: 'eip155:1',
        order_side: 'BUY',
        order_tif: 'DAY',
        order_type: 'MARKET',
        payment_token: 'payment_token',
        asset_token_quantity: 0,
        client_order_id: 'client_order_id',
        limit_price: 0,
        payment_token_quantity: 0,
        stock_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        token_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
    );
  });

  // Prism tests are disabled
  test.skip('createPermitTransaction: only required params', async () => {
    const responsePromise = client.v2.accounts.orderRequests.eip155.createPermitTransaction(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { order_request_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', permit_signature: '0xeaF12bD1DfFd' },
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
  test.skip('createPermitTransaction: required and optional params', async () => {
    const response = await client.v2.accounts.orderRequests.eip155.createPermitTransaction(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { order_request_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', permit_signature: '0xeaF12bD1DfFd' },
    );
  });

  // Prism tests are disabled
  test.skip('submit: only required params', async () => {
    const responsePromise = client.v2.accounts.orderRequests.eip155.submit(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { order_request_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', permit_signature: '0xeaF12bD1DfFd' },
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
  test.skip('submit: required and optional params', async () => {
    const response = await client.v2.accounts.orderRequests.eip155.submit(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { order_request_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', permit_signature: '0xeaF12bD1DfFd' },
    );
  });
});
