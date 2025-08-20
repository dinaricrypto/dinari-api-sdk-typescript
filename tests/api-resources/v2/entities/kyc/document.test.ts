// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Dinari, { toFile } from '@dinari/api-sdk';

const client = new Dinari({
  apiKeyID: 'My API Key ID',
  apiSecretKey: 'My API Secret Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource document', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.v2.entities.kyc.document.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.v2.entities.kyc.document.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Prism tests are disabled
  test.skip('upload: only required params', async () => {
    const responsePromise = client.v2.entities.kyc.document.upload('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      document_type: 'GOVERNMENT_ID',
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('upload: required and optional params', async () => {
    const response = await client.v2.entities.kyc.document.upload('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      document_type: 'GOVERNMENT_ID',
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });
});
