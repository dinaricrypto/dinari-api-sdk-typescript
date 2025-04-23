// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Accounts extends APIResource {
  /**
   * Creates a new Account for the given Entity.
   */
  create(entityID: string, options?: RequestOptions): APIPromise<Account> {
    return this._client.post(path`/api/v2/entities/${entityID}/accounts`, options);
  }

  /**
   * Retrieves a list of Accounts that belong to a specific Entity.
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
 * Information about an account owned by an entity
 */
export interface Account {
  /**
   * Unique identifier for the account
   */
  id: string;

  /**
   * Timestamp when the account was created
   */
  created_dt: string;

  /**
   * Identifier for the Entity that owns the account
   */
  entity_id: string;

  /**
   * Indicates whether the account is active
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
