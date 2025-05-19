// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Accounts extends APIResource {
  /**
   * Create a new `Account` for a specific `Entity`. This `Entity` represents your
   * organization itself, or an individual customer of your organization.
   */
  create(entityID: string, options?: RequestOptions): APIPromise<Account> {
    return this._client.post(path`/api/v2/entities/${entityID}/accounts`, options);
  }

  /**
   * Get a list of all `Accounts` that belong to a specific `Entity`. This `Entity`
   * represents your organization itself, or an individual customer of your
   * organization.
   */
  list(
    entityID: string,
    query: AccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountListResponse> {
    return this._client.get(path`/api/v2/entities/${entityID}/accounts`, { query, ...options });
  }
}

/**
 * Information about an `Account` owned by an `Entity`.
 */
export interface Account {
  /**
   * Unique ID for the `Account`.
   */
  id: string;

  /**
   * Datetime when the `Account` was created. ISO 8601 timestamp.
   */
  created_dt: string;

  /**
   * ID for the `Entity` that owns the `Account`.
   */
  entity_id: string;

  /**
   * Indicates whether the `Account` is active.
   */
  is_active: boolean;
}

export type AccountListResponse = Array<Account>;

export interface AccountListParams {
  page?: number;

  page_size?: number;
}

export declare namespace Accounts {
  export {
    type Account as Account,
    type AccountListResponse as AccountListResponse,
    type AccountListParams as AccountListParams,
  };
}
