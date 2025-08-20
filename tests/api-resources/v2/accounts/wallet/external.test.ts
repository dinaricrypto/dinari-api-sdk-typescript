// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Dinari from '@dinari/api-sdk';

const client = new Dinari({
  apiKeyID: 'My API Key ID',
  apiSecretKey: 'My API Secret Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource external', () => {
  // Prism tests are disabled
  test.skip('connect: only required params', async () => {
    const responsePromise = client.v2.accounts.wallet.external.connect(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        chain_id: 'eip155:0',
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

  // Prism tests are disabled
  test.skip('connect: required and optional params', async () => {
    const response = await client.v2.accounts.wallet.external.connect(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        chain_id: 'eip155:0',
        nonce: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        signature: '0xeaF12bD1DfFd',
        wallet_address: 'wallet_address',
      },
    );
  });

  // Prism tests are disabled
  test.skip('getNonce: only required params', async () => {
    const responsePromise = client.v2.accounts.wallet.external.getNonce(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { chain_id: 'eip155:0', wallet_address: 'wallet_address' },
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
  test.skip('getNonce: required and optional params', async () => {
    const response = await client.v2.accounts.wallet.external.getNonce(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { chain_id: 'eip155:0', wallet_address: 'wallet_address' },
    );
  });
});
