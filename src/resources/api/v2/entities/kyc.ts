// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { type Uploadable } from '../../../../core/uploads';
import { RequestOptions } from '../../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../../internal/uploads';
import { path } from '../../../../internal/utils/path';

export class KYC extends APIResource {
  /**
   * Get most recent KYC data of the `Entity`.
   *
   * If there are any completed KYC checks, data from the most recent one will be
   * returned. If there are no completed KYC checks, the most recent KYC check
   * information, regardless of status, will be returned.
   */
  retrieve(entityID: string, options?: RequestOptions): APIPromise<KYCInfo> {
    return this._client.get(path`/api/v2/entities/${entityID}/kyc`, options);
  }

  /**
   * Submit KYC data directly, for partners that are provisioned to provide their own
   * KYC data.
   *
   * This feature is available for everyone in sandbox mode, and for specifically
   * provisioned partners in production.
   */
  submit(entityID: string, body: KYCSubmitParams, options?: RequestOptions): APIPromise<KYCInfo> {
    return this._client.post(path`/api/v2/entities/${entityID}/kyc`, { body, ...options });
  }

  /**
   * Upload KYC-related documentation for partners that are provisioned to provide
   * their own KYC data.
   */
  uploadDocument(
    kycID: string,
    params: KYCUploadDocumentParams,
    options?: RequestOptions,
  ): APIPromise<KYCUploadDocumentResponse> {
    const { entity_id, document_type, ...body } = params;
    return this._client.post(
      path`/api/v2/entities/${entity_id}/kyc/${kycID}/document`,
      multipartFormRequestOptions({ query: { document_type }, body, ...options }, this._client),
    );
  }
}

/**
 * KYC data for an `Entity`.
 */
export interface KYCData {
  /**
   * Country of citizenship or home country of the organization. ISO 3166-1 alpha 2
   * country code.
   */
  country_code: string;

  /**
   * Last name of the person.
   */
  last_name: string;

  /**
   * City of address. Not all international addresses use this attribute.
   */
  address_city?: string;

  /**
   * Postal code of residence address. Not all international addresses use this
   * attribute.
   */
  address_postal_code?: string;

  /**
   * Street address of address.
   */
  address_street_1?: string;

  /**
   * Extension of address, usually apartment or suite number.
   */
  address_street_2?: string;

  /**
   * State or subdivision of address. In the US, this should be the unabbreviated
   * name of the state. Not all international addresses use this attribute.
   */
  address_subdivision?: string;

  /**
   * Birth date of the individual. In ISO 8601 format, YYYY-MM-DD.
   */
  birth_date?: string;

  /**
   * Email address.
   */
  email?: string;

  /**
   * First name of the person.
   */
  first_name?: string;

  /**
   * Middle name of the user
   */
  middle_name?: string;

  /**
   * ID number of the official tax document of the country the entity belongs to.
   */
  tax_id_number?: string;
}

export type KYCDocumentType = 'GOVERNMENT_ID' | 'SELFIE' | 'RESIDENCY' | 'UNKNOWN';

/**
 * KYC information for an `Entity`.
 */
export interface KYCInfo {
  /**
   * ID of the KYC check.
   */
  id: string;

  /**
   * KYC check status.
   */
  status: 'PASS' | 'FAIL' | 'PENDING' | 'INCOMPLETE';

  /**
   * Datetime when the KYC was last checked. ISO 8601 timestamp.
   */
  checked_dt?: string;

  /**
   * KYC data for an `Entity`.
   */
  data?: KYCData;
}

/**
 * A document associated with KYC for an `Entity`.
 */
export interface KYCUploadDocumentResponse {
  /**
   * ID of the document.
   */
  id: string;

  /**
   * Type of document.
   */
  document_type: KYCDocumentType;

  /**
   * Filename of document.
   */
  filename: string;

  /**
   * Temporary URL to access the document. Expires in 1 hour.
   */
  url: string;
}

export interface KYCSubmitParams {
  /**
   * KYC data for an `Entity`.
   */
  data: KYCData;

  /**
   * Name of the KYC provider that provided the KYC information.
   */
  provider_name: string;
}

export interface KYCUploadDocumentParams {
  /**
   * Path param:
   */
  entity_id: string;

  /**
   * Query param: Type of `KYCDocument` to be uploaded.
   */
  document_type: KYCDocumentType;

  /**
   * Body param: File to be uploaded. Must be a valid image or PDF file (jpg, jpeg,
   * png, pdf) less than 10MB in size.
   */
  file: Uploadable;
}

export declare namespace KYC {
  export {
    type KYCData as KYCData,
    type KYCDocumentType as KYCDocumentType,
    type KYCInfo as KYCInfo,
    type KYCUploadDocumentResponse as KYCUploadDocumentResponse,
    type KYCSubmitParams as KYCSubmitParams,
    type KYCUploadDocumentParams as KYCUploadDocumentParams,
  };
}
