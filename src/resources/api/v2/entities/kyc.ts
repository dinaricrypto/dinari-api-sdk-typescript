// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class KYC extends APIResource {
  /**
   * Retrieves KYC data of the entity.
   */
  retrieve(entityID: string, options?: RequestOptions): APIPromise<KYCInfo> {
    return this._client.get(path`/api/v2/entities/${entityID}/kyc`, options);
  }

  /**
   * Gets an iframe URL for managed (self-service) KYC.
   */
  getURL(entityID: string, options?: RequestOptions): APIPromise<KYCGetURLResponse> {
    return this._client.get(path`/api/v2/entities/${entityID}/kyc/url`, options);
  }

  /**
   * Submits KYC data manually (for Partner KYC-enabled entities).
   */
  submit(entityID: string, body: KYCSubmitParams, options?: RequestOptions): APIPromise<KYCInfo> {
    return this._client.post(path`/api/v2/entities/${entityID}/kyc`, { body, ...options });
  }

  /**
   * Uploads KYC-related documentation (for Partner KYC-enabled entities).
   */
  uploadDocument(
    kycID: string,
    params: KYCUploadDocumentParams,
    options?: RequestOptions,
  ): APIPromise<KYCUploadDocumentResponse> {
    const { entity_id, ...body } = params;
    return this._client.post(path`/api/v2/entities/${entity_id}/kyc/${kycID}/document`, { body, ...options });
  }
}

/**
 * Object consisting of KYC data for an entity
 */
export interface KYCData {
  /**
   * ISO 3166-1 alpha 2 country code of citizenship or the country the organization
   * is based out of.
   */
  country_code: string;

  /**
   * Last name of the person
   */
  last_name: string;

  /**
   * City of address. Not all international addresses use this attribute.
   */
  address_city?: string;

  /**
   * ZIP or postal code of residence address. Not all international addresses use
   * this attribute.
   */
  address_postal_code?: string;

  /**
   * Street name of address.
   */
  address_street_1?: string;

  /**
   * Extension of address, usually apartment or suite number.
   */
  address_street_2?: string;

  /**
   * State or subdivision of address. In the US, this should be the unabbreviated
   * name. Not all international addresses use this attribute.
   */
  address_subdivision?: string;

  /**
   * Birth date of the individual
   */
  birth_date?: string;

  /**
   * Email address
   */
  email?: string | null;

  /**
   * First name of the person, or name of the organization
   */
  first_name?: string | null;

  /**
   * Middle name of the user
   */
  middle_name?: string | null;

  /**
   * ID number of the official tax document of the country the entity belongs to
   */
  tax_id_number?: string;
}

export type KYCDocumentType = 'GOVERNMENT_ID' | 'SELFIE' | 'RESIDENCY' | 'UNKNOWN';

/**
 * KYC information for an entity
 */
export interface KYCInfo {
  /**
   * Unique identifier for the KYC check
   */
  id: string;

  /**
   * KYC status
   */
  status: 'PASS' | 'FAIL' | 'PENDING' | 'INCOMPLETE';

  /**
   * Timestamp when the KYC was last checked
   */
  checked_dt?: string;

  /**
   * Object consisting of KYC data for an entity
   */
  data?: KYCData;

  /**
   * Name of the KYC provider that provided the KYC check
   */
  provider_name?: string;
}

/**
 * URL for a managed KYC flow for the entity that can be shown in an iframe
 */
export interface KYCGetURLResponse {
  /**
   * URL of a managed KYC flow interface for the entity. This URL is unique per KYC
   * attempt.
   */
  embed_url: string;

  /**
   * Timestamp at which the KYC request will be expired
   */
  expiration_dt: string;
}

/**
 * Document associated with KYC for an entity
 */
export interface KYCUploadDocumentResponse {
  /**
   * ID of the document
   */
  id: string;

  /**
   * Type of the document
   */
  document_type: KYCDocumentType;

  /**
   * Filename of the document
   */
  filename: string;

  /**
   * URL to access the document. Expires in 1 hour
   */
  url: string;
}

export interface KYCSubmitParams {
  /**
   * Object consisting of KYC data for an entity
   */
  data: KYCData;

  /**
   * Name of the KYC provider that provided the KYC information
   */
  provider_name: string;
}

export interface KYCUploadDocumentParams {
  /**
   * Path param:
   */
  entity_id: string;

  /**
   * Body param: Type of the document to be uploaded
   */
  document_type: KYCDocumentType;
}

export declare namespace KYC {
  export {
    type KYCData as KYCData,
    type KYCDocumentType as KYCDocumentType,
    type KYCInfo as KYCInfo,
    type KYCGetURLResponse as KYCGetURLResponse,
    type KYCUploadDocumentResponse as KYCUploadDocumentResponse,
    type KYCSubmitParams as KYCSubmitParams,
    type KYCUploadDocumentParams as KYCUploadDocumentParams,
  };
}
