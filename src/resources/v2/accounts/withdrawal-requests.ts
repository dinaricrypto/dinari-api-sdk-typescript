// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class WithdrawalRequests extends APIResource {
  /**
   * Request to withdraw USD+ payment tokens from a managed `Account` and send the
   * equivalent amount of USDC to the specified recipient `Account`.
   *
   * The recipient `Account` must belong to the same `Entity` as the managed
   * `Account`.
   *
   * @example
   * ```ts
   * const withdrawalRequest =
   *   await client.v2.accounts.withdrawalRequests.create(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       payment_token_quantity: 0,
   *       recipient_account_id:
   *         '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
   * ```
   */
  create(
    accountID: string,
    body: WithdrawalRequestCreateParams,
    options?: RequestOptions,
  ): APIPromise<WithdrawalRequest> {
    return this._client.post(path`/api/v2/accounts/${accountID}/withdrawal_requests`, { body, ...options });
  }

  /**
   * Get a specific `WithdrawalRequest` by its ID.
   *
   * @example
   * ```ts
   * const withdrawalRequest =
   *   await client.v2.accounts.withdrawalRequests.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   *   );
   * ```
   */
  retrieve(
    withdrawalRequestID: string,
    params: WithdrawalRequestRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<WithdrawalRequest> {
    const { account_id } = params;
    return this._client.get(
      path`/api/v2/accounts/${account_id}/withdrawal_requests/${withdrawalRequestID}`,
      options,
    );
  }

  /**
   * List `WithdrawalRequests` under the `Account`, sorted by most recent.
   *
   * @example
   * ```ts
   * const withdrawalRequests =
   *   await client.v2.accounts.withdrawalRequests.list(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  list(
    accountID: string,
    query: WithdrawalRequestListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WithdrawalRequestListResponse> {
    return this._client.get(path`/api/v2/accounts/${accountID}/withdrawal_requests`, { query, ...options });
  }
}

/**
 * Information for a withdrawal request of payment tokens from an `Account` backed
 * by a Dinari-managed `Wallet`.
 */
export interface WithdrawalRequest {
  /**
   * ID of the `WithdrawalRequest`.
   */
  id: string;

  /**
   * ID of the `Account` of the `WithdrawalRequest`.
   */
  account_id: string;

  /**
   * Datetime at which the `WithdrawalRequest` was created. ISO 8601 timestamp.
   */
  created_dt: string;

  /**
   * Amount of USD+ payment tokens submitted for withdrawal.
   */
  payment_token_amount: number;

  /**
   * ID of the `Account` that will receive USDC payment tokens from the `Withdrawal`.
   * This `Account` must be connected to a non-managed `Wallet` and belong to the
   * same `Entity`.
   */
  recipient_account_id: string;

  /**
   * Status of the `WithdrawalRequest`
   */
  status: 'PENDING' | 'SUBMITTED' | 'ERROR' | 'CANCELLED';

  /**
   * Datetime at which the `WithdrawalRequest` was updated. ISO 8601 timestamp.
   */
  updated_dt: string;
}

export type WithdrawalRequestListResponse = Array<WithdrawalRequest>;

export interface WithdrawalRequestCreateParams {
  /**
   * Amount of USD+ payment tokens to be withdrawn. Must be greater than 0 and have
   * at most 6 decimal places.
   */
  payment_token_quantity: number;

  /**
   * ID of the `Account` that will receive payment tokens from the `Withdrawal`.
   */
  recipient_account_id: string;
}

export interface WithdrawalRequestRetrieveParams {
  account_id: string;
}

export interface WithdrawalRequestListParams {
  page?: number;

  page_size?: number;
}

export declare namespace WithdrawalRequests {
  export {
    type WithdrawalRequest as WithdrawalRequest,
    type WithdrawalRequestListResponse as WithdrawalRequestListResponse,
    type WithdrawalRequestCreateParams as WithdrawalRequestCreateParams,
    type WithdrawalRequestRetrieveParams as WithdrawalRequestRetrieveParams,
    type WithdrawalRequestListParams as WithdrawalRequestListParams,
  };
}
