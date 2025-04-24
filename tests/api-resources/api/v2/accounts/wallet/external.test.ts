// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Dinari from '@dinari/api-sdk';

const client = new Dinari({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource external', () => {
  // skipped: tests are disabled for the time being
  test.skip('connect: only required params', async () => {
    const responsePromise = client.api.v2.accounts.wallet.external.connect(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        chain_id: 0,
        nonce: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        signature: '0xeaF12bD1DfFd',
        wallet_address: 'wallet_address',
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
  test.skip('connect: required and optional params', async () => {
    const response = await client.api.v2.accounts.wallet.external.connect(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        chain_id: 0,
        nonce: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        signature: '0xeaF12bD1DfFd',
        wallet_address: 'wallet_address',
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('getNonce: only required params', async () => {
    const responsePromise = client.api.v2.accounts.wallet.external.getNonce(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { wallet_address: 'wallet_address' },
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
  test.skip('getNonce: required and optional params', async () => {
    const response = await client.api.v2.accounts.wallet.external.getNonce(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { wallet_address: 'wallet_address' },
    );
  });
});
