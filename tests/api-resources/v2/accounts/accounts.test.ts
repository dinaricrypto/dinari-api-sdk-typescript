// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Dinari from 'dinari';

const client = new Dinari({
  apiKeyID: 'My API Key ID',
  apiSecretKey: 'My API Secret Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accounts', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.v2.accounts.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('deactivate', async () => {
    const responsePromise = client.v2.accounts.deactivate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getCashBalances', async () => {
    const responsePromise = client.v2.accounts.getCashBalances('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getDividendPayments: only required params', async () => {
    const responsePromise = client.v2.accounts.getDividendPayments('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      end_date: '2019-12-27',
      start_date: '2019-12-27',
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
  test.skip('getDividendPayments: required and optional params', async () => {
    const response = await client.v2.accounts.getDividendPayments('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      end_date: '2019-12-27',
      start_date: '2019-12-27',
      page: 1,
      page_size: 1,
      stock_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('getInterestPayments: only required params', async () => {
    const responsePromise = client.v2.accounts.getInterestPayments('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      end_date: '2019-12-27',
      start_date: '2019-12-27',
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
  test.skip('getInterestPayments: required and optional params', async () => {
    const response = await client.v2.accounts.getInterestPayments('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      end_date: '2019-12-27',
      start_date: '2019-12-27',
      page: 1,
      page_size: 1,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('getPortfolio', async () => {
    const responsePromise = client.v2.accounts.getPortfolio('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('mintSandboxTokens', async () => {
    const responsePromise = client.v2.accounts.mintSandboxTokens('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
