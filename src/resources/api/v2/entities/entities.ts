// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AccountsAPI from './accounts';
import { Account, AccountListParams, AccountListResponse, Accounts } from './accounts';
import * as KYCAPI from './kyc';
import {
  KYC,
  KYCData,
  KYCDocumentType,
  KYCGetURLResponse,
  KYCInfo,
  KYCSubmitParams,
  KYCUploadDocumentParams,
  KYCUploadDocumentResponse,
} from './kyc';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Entities extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  kyc: KYCAPI.KYC = new KYCAPI.KYC(this._client);

  /**
   * Creates a new Entity to be managed by your organization. The Entity represents
   * an individual customer of your organization.
   */
  create(body: EntityCreateParams, options?: RequestOptions): APIPromise<Entity> {
    return this._client.post('/api/v2/entities/', { body, ...options });
  }

  /**
   * Retrieves a specific customer Entity of your organization by their ID.
   */
  retrieve(entityID: string, options?: RequestOptions): APIPromise<Entity> {
    return this._client.get(path`/api/v2/entities/${entityID}`, options);
  }

  /**
   * Returns a list of all direct Entities your organization manages. An Entity
   * represents an individual customer of your organization.
   */
  list(options?: RequestOptions): APIPromise<EntityListResponse> {
    return this._client.get('/api/v2/entities/', options);
  }

  /**
   * Returns the current authenticated Entity.
   */
  retrieveCurrent(options?: RequestOptions): APIPromise<Entity> {
    return this._client.get('/api/v2/entities/me', options);
  }
}

/**
 * Information about an entity, which can be either an individual or an
 * organization.
 */
export interface Entity {
  /**
   * Unique identifier for the entity
   */
  id: string;

  /**
   * Type of entity
   */
  entity_type: 'INDIVIDUAL' | 'ORGANIZATION';

  /**
   * Indicates if Entity completed KYC
   */
  is_kyc_complete: boolean;

  /**
   * Name of Entity
   */
  name?: string;

  /**
   * Nationality of the entity
   */
  nationality?: string;
}

export type EntityListResponse = Array<Entity>;

export interface EntityCreateParams {
  /**
   * Name of the entity
   */
  name: string;
}

Entities.Accounts = Accounts;
Entities.KYC = KYC;

export declare namespace Entities {
  export {
    type Entity as Entity,
    type EntityListResponse as EntityListResponse,
    type EntityCreateParams as EntityCreateParams,
  };

  export {
    Accounts as Accounts,
    type Account as Account,
    type AccountListResponse as AccountListResponse,
    type AccountListParams as AccountListParams,
  };

  export {
    KYC as KYC,
    type KYCData as KYCData,
    type KYCDocumentType as KYCDocumentType,
    type KYCInfo as KYCInfo,
    type KYCGetURLResponse as KYCGetURLResponse,
    type KYCUploadDocumentResponse as KYCUploadDocumentResponse,
    type KYCSubmitParams as KYCSubmitParams,
    type KYCUploadDocumentParams as KYCUploadDocumentParams,
  };
}
