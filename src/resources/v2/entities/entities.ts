// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountsAPI from './accounts';
import { Account, AccountListParams, AccountListResponse, Accounts } from './accounts';
import * as KYCAPI from './kyc/kyc';
import { KYC, KYCCreateManagedCheckResponse, KYCData, KYCInfo, KYCSubmitParams } from './kyc/kyc';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Entities extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  kyc: KYCAPI.KYC = new KYCAPI.KYC(this._client);

  /**
   * Create a new `Entity` to be managed by your organization. This `Entity`
   * represents an individual customer of your organization.
   *
   * @example
   * ```ts
   * const entity = await client.v2.entities.create({
   *   name: 'x',
   * });
   * ```
   */
  create(body: EntityCreateParams, options?: RequestOptions): APIPromise<Entity> {
    return this._client.post('/api/v2/entities/', { body, ...options });
  }

  /**
   * Update a specific customer `Entity` of your organization.
   *
   * @example
   * ```ts
   * const entity = await client.v2.entities.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  update(entityID: string, body: EntityUpdateParams, options?: RequestOptions): APIPromise<Entity> {
    return this._client.patch(path`/api/v2/entities/${entityID}`, { body, ...options });
  }

  /**
   * Get a list of direct `Entities` your organization manages. These `Entities`
   * represent individual customers of your organization.
   *
   * @example
   * ```ts
   * const entities = await client.v2.entities.list();
   * ```
   */
  list(
    query: EntityListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EntityListResponse> {
    return this._client.get('/api/v2/entities/', { query, ...options });
  }

  /**
   * Get a specific customer `Entity` of your organization by their ID.
   *
   * @example
   * ```ts
   * const entity = await client.v2.entities.retrieveByID(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieveByID(entityID: string, options?: RequestOptions): APIPromise<Entity> {
    return this._client.get(path`/api/v2/entities/${entityID}`, options);
  }

  /**
   * Get the current authenticated `Entity`, which represents your organization.
   *
   * @example
   * ```ts
   * const entity = await client.v2.entities.retrieveCurrent();
   * ```
   */
  retrieveCurrent(options?: RequestOptions): APIPromise<Entity> {
    return this._client.get('/api/v2/entities/me', options);
  }
}

/**
 * Information about an `Entity`, which can be either an individual or an
 * organization.
 */
export interface Entity {
  /**
   * Unique ID of the `Entity`.
   */
  id: string;

  /**
   * Type of `Entity`. `ORGANIZATION` for Dinari Partners and `INDIVIDUAL` for their
   * individual customers.
   */
  entity_type: 'INDIVIDUAL' | 'ORGANIZATION';

  /**
   * Indicates if `Entity` completed KYC.
   */
  is_kyc_complete: boolean;

  /**
   * Name of `Entity`.
   */
  name?: string;

  /**
   * Nationality or home country of the `Entity`.
   */
  nationality?: string;

  /**
   * Case sensitive unique reference ID that you can set for the `Entity`. We
   * recommend setting this to the unique ID of the `Entity` in your system.
   */
  reference_id?: string;
}

export type EntityListResponse = Array<Entity>;

export interface EntityCreateParams {
  /**
   * Name of the `Entity`.
   */
  name: string;

  /**
   * Case sensitive unique reference ID for the `Entity`. We recommend setting this
   * to the unique ID of the `Entity` in your system.
   */
  reference_id?: string;
}

export interface EntityUpdateParams {
  /**
   * Case sensitive unique reference ID for the `Entity`. We recommend setting this
   * to the unique ID of the `Entity` in your system.
   */
  reference_id?: string;
}

export interface EntityListParams {
  page?: number;

  page_size?: number;

  /**
   * Case sensitive unique reference ID for the `Entity`.
   */
  reference_id?: string;
}

Entities.Accounts = Accounts;
Entities.KYC = KYC;

export declare namespace Entities {
  export {
    type Entity as Entity,
    type EntityListResponse as EntityListResponse,
    type EntityCreateParams as EntityCreateParams,
    type EntityUpdateParams as EntityUpdateParams,
    type EntityListParams as EntityListParams,
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
    type KYCInfo as KYCInfo,
    type KYCCreateManagedCheckResponse as KYCCreateManagedCheckResponse,
    type KYCSubmitParams as KYCSubmitParams,
  };
}
