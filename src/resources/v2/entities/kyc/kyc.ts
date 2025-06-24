// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as DocumentAPI from './document';
import {
  Document,
  DocumentRetrieveParams,
  DocumentRetrieveResponse,
  DocumentUploadParams,
  KYCDocument,
  KYCDocumentType,
} from './document';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class KYC extends APIResource {
  document: DocumentAPI.Document = new DocumentAPI.Document(this._client);

  /**
   * Get most recent KYC data of the `Entity`.
   *
   * If there are any completed KYC checks, data from the most recent one will be
   * returned. If there are no completed KYC checks, the most recent KYC check
   * information, regardless of status, will be returned.
   *
   * @example
   * ```ts
   * const kycInfo = await client.v2.entities.kyc.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(entityID: string, options?: RequestOptions): APIPromise<KYCInfo> {
    return this._client.get(path`/api/v2/entities/${entityID}/kyc`, options);
  }

  /**
   * Create a Dinari-managed KYC Check and get a URL for your end customer to
   * interact with.
   *
   * The URL points to a web-based KYC interface that can be presented to the end
   * customer for KYC verification. Once the customer completes this KYC flow, the
   * KYC check will be created and available in the KYC API.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v2.entities.kyc.createManagedCheck(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  createManagedCheck(entityID: string, options?: RequestOptions): APIPromise<KYCCreateManagedCheckResponse> {
    return this._client.post(path`/api/v2/entities/${entityID}/kyc/url`, options);
  }

  /**
   * Submit KYC data directly, for partners that are provisioned to provide their own
   * KYC data.
   *
   * This feature is available for everyone in sandbox mode, and for specifically
   * provisioned partners in production.
   *
   * @example
   * ```ts
   * const kycInfo = await client.v2.entities.kyc.submit(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     data: {
   *       address_country_code: 'SG',
   *       country_code: 'SG',
   *       last_name: 'Doe',
   *     },
   *     provider_name: 'x',
   *   },
   * );
   * ```
   */
  submit(entityID: string, body: KYCSubmitParams, options?: RequestOptions): APIPromise<KYCInfo> {
    return this._client.post(path`/api/v2/entities/${entityID}/kyc`, { body, ...options });
  }
}

/**
 * KYC data for an `Entity`.
 */
export interface KYCData {
  /**
   * Country of residence. ISO 3166-1 alpha 2 country code.
   */
  address_country_code: string;

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
 * URL for a managed KYC flow for an `Entity`.
 */
export interface KYCCreateManagedCheckResponse {
  /**
   * URL of a managed KYC flow interface for the `Entity`.
   */
  embed_url: string;

  /**
   * Datetime at which the KYC request will expired. ISO 8601 timestamp.
   */
  expiration_dt: string;
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

KYC.Document = Document;

export declare namespace KYC {
  export {
    type KYCData as KYCData,
    type KYCInfo as KYCInfo,
    type KYCCreateManagedCheckResponse as KYCCreateManagedCheckResponse,
    type KYCSubmitParams as KYCSubmitParams,
  };

  export {
    Document as Document,
    type KYCDocument as KYCDocument,
    type KYCDocumentType as KYCDocumentType,
    type DocumentRetrieveResponse as DocumentRetrieveResponse,
    type DocumentRetrieveParams as DocumentRetrieveParams,
    type DocumentUploadParams as DocumentUploadParams,
  };
}
