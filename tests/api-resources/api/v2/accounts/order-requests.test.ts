// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Dinari from '@dinari/api-sdk';

const client = new Dinari({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource orderRequests', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.api.v2.accounts.orderRequests.retrieve(
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.api.v2.accounts.orderRequests.retrieve(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.api.v2.accounts.orderRequests.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createLimitBuy: only required params', async () => {
    const responsePromise = client.api.v2.accounts.orderRequests.createLimitBuy(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { asset_quantity: 0, limit_price: 0, stock_id: 'stock_id' },
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
  test.skip('createLimitBuy: required and optional params', async () => {
    const response = await client.api.v2.accounts.orderRequests.createLimitBuy(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { asset_quantity: 0, limit_price: 0, stock_id: 'stock_id' },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('createLimitSell: only required params', async () => {
    const responsePromise = client.api.v2.accounts.orderRequests.createLimitSell(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { asset_quantity: 0, limit_price: 0, stock_id: 'stock_id' },
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
  test.skip('createLimitSell: required and optional params', async () => {
    const response = await client.api.v2.accounts.orderRequests.createLimitSell(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { asset_quantity: 0, limit_price: 0, stock_id: 'stock_id' },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('createMarketBuy: only required params', async () => {
    const responsePromise = client.api.v2.accounts.orderRequests.createMarketBuy(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { payment_amount: 0, stock_id: 'stock_id' },
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
  test.skip('createMarketBuy: required and optional params', async () => {
    const response = await client.api.v2.accounts.orderRequests.createMarketBuy(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { payment_amount: 0, stock_id: 'stock_id', include_fees: true },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('createMarketSell: only required params', async () => {
    const responsePromise = client.api.v2.accounts.orderRequests.createMarketSell(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { asset_quantity: 0, stock_id: 'stock_id' },
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
  test.skip('createMarketSell: required and optional params', async () => {
    const response = await client.api.v2.accounts.orderRequests.createMarketSell(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { asset_quantity: 0, stock_id: 'stock_id' },
    );
  });
});
