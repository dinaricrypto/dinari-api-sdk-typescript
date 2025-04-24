// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Dinari from 'dinari-api-sdk';

const client = new Dinari({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource kyc', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.api.v2.entities.kyc.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getURL', async () => {
    const responsePromise = client.api.v2.entities.kyc.getURL('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('submit: only required params', async () => {
    const responsePromise = client.api.v2.entities.kyc.submit('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      data: { country_code: 'SG', last_name: 'Doe' },
      provider_name: 'provider_name',
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
  test.skip('submit: required and optional params', async () => {
    const response = await client.api.v2.entities.kyc.submit('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      data: {
        country_code: 'SG',
        last_name: 'Doe',
        address_city: 'San Francisco',
        address_postal_code: '94111',
        address_street_1: '123 Main St.',
        address_street_2: 'Apt. 123',
        address_subdivision: 'California',
        birth_date: '2019-12-27',
        email: 'johndoe@website.com',
        first_name: 'John',
        middle_name: 'middle_name',
        tax_id_number: '123456789',
      },
      provider_name: 'provider_name',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('uploadDocument: only required params', async () => {
    const responsePromise = client.api.v2.entities.kyc.uploadDocument('kyc_id', {
      entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      document_type: 'GOVERNMENT_ID',
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
  test.skip('uploadDocument: required and optional params', async () => {
    const response = await client.api.v2.entities.kyc.uploadDocument('kyc_id', {
      entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      document_type: 'GOVERNMENT_ID',
    });
  });
});
