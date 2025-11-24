// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Dinari from '@dinari/api-sdk';

const client = new Dinari({
  apiKeyID: 'My API Key ID',
  apiSecretKey: 'My API Secret Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource activities', () => {
  // Prism tests are disabled
  test.skip('retrieveBrokerage', async () => {
    const responsePromise = client.v2.accounts.activities.retrieveBrokerage(
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

  // Prism tests are disabled
  test.skip('retrieveBrokerage: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v2.accounts.activities.retrieveBrokerage(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { page_size: 1, page_token: 'page_token' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Dinari.NotFoundError);
  });
});
