// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Dinari from '@dinari/api-sdk';

const client = new Dinari({
  apiKey: 'My API Key',
  secret: 'My Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accounts', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.api.v2.accounts.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
    const responsePromise = client.api.v2.accounts.deactivate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveCash', async () => {
    const responsePromise = client.api.v2.accounts.retrieveCash('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveDividendPayments: only required params', async () => {
    const responsePromise = client.api.v2.accounts.retrieveDividendPayments(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { end_date: '2019-12-27', start_date: '2019-12-27' },
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
  test.skip('retrieveDividendPayments: required and optional params', async () => {
    const response = await client.api.v2.accounts.retrieveDividendPayments(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        end_date: '2019-12-27',
        start_date: '2019-12-27',
        page: 1,
        page_size: 1,
        stock_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveInterestPayments: only required params', async () => {
    const responsePromise = client.api.v2.accounts.retrieveInterestPayments(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { end_date: '2019-12-27', start_date: '2019-12-27' },
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
  test.skip('retrieveInterestPayments: required and optional params', async () => {
    const response = await client.api.v2.accounts.retrieveInterestPayments(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { end_date: '2019-12-27', start_date: '2019-12-27', page: 1, page_size: 1 },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('retrievePortfolio', async () => {
    const responsePromise = client.api.v2.accounts.retrievePortfolio('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
