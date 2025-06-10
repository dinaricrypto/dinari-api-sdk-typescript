// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Dinari from '@dinari/api-sdk';

const client = new Dinari({
  apiKeyID: 'My API Key ID',
  apiSecretKey: 'My API Secret Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource eip155', () => {
  // skipped: tests are disabled for the time being
  test.skip('getFeeQuote: only required params', async () => {
    const responsePromise = client.v2.accounts.orders.stocks.eip155.getFeeQuote(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        chain_id: 'eip155:1',
        order_side: 'BUY',
        order_tif: 'DAY',
        order_type: 'MARKET',
        stock_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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

  // skipped: tests are disabled for the time being
  test.skip('getFeeQuote: required and optional params', async () => {
    const response = await client.v2.accounts.orders.stocks.eip155.getFeeQuote(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        chain_id: 'eip155:1',
        order_side: 'BUY',
        order_tif: 'DAY',
        order_type: 'MARKET',
        stock_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        asset_token_quantity: 0,
        limit_price: 0,
        payment_token: 'payment_token',
        payment_token_quantity: 0,
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('prepareOrder: only required params', async () => {
    const responsePromise = client.v2.accounts.orders.stocks.eip155.prepareOrder(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        chain_id: 'eip155:1',
        order_side: 'BUY',
        order_tif: 'DAY',
        order_type: 'MARKET',
        stock_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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

  // skipped: tests are disabled for the time being
  test.skip('prepareOrder: required and optional params', async () => {
    const response = await client.v2.accounts.orders.stocks.eip155.prepareOrder(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        chain_id: 'eip155:1',
        order_side: 'BUY',
        order_tif: 'DAY',
        order_type: 'MARKET',
        stock_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        asset_token_quantity: 0,
        limit_price: 0,
        payment_token: 'payment_token',
        payment_token_quantity: 0,
      },
    );
  });
});
