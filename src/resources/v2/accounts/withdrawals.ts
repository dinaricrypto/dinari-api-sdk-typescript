// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountsAPI from './accounts';
import * as OrdersAPI from './orders';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Withdrawals extends APIResource {
  /**
   * Get a specific `Withdrawal` by its ID.
   *
   * @example
   * ```ts
   * const withdrawal =
   *   await client.v2.accounts.withdrawals.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   *   );
   * ```
   */
  retrieve(
    withdrawalID: string,
    params: WithdrawalRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Withdrawal> {
    const { account_id } = params;
    return this._client.get(path`/api/v2/accounts/${account_id}/withdrawals/${withdrawalID}`, options);
  }

  /**
   * Get a list of all `Withdrawals` under the `Account`, sorted by most recent.
   *
   * @example
   * ```ts
   * const withdrawals =
   *   await client.v2.accounts.withdrawals.list(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  list(
    accountID: string,
    query: WithdrawalListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WithdrawalListResponse> {
    return this._client.get(path`/api/v2/accounts/${accountID}/withdrawals`, { query, ...options });
  }
}

/**
 * Information for a withdrawal of payment tokens from an `Account` backed by a
 * Dinari-managed `Wallet`.
 */
export interface Withdrawal {
  /**
   * ID of the `Withdrawal`.
   */
  id: string;

  /**
   * ID of the `Account` from which the `Withdrawal` is made.
   */
  account_id: string;

  /**
   * CAIP-2 chain ID of the blockchain where the `Withdrawal` is made.
   */
  chain_id: AccountsAPI.Chain;

  /**
   * Address of USDC payment token that the `Withdrawal` will be received in.
   */
  payment_token_address: string;

  /**
   * Amount of USDC payment tokens to be withdrawn.
   */
  payment_token_amount: number;

  /**
   * ID of the `Account` that will receive payment tokens from the `Withdrawal`. This
   * `Account` must be connected to a non-managed `Wallet` and belong to the same
   * `Entity`.
   */
  recipient_account_id: string;

  /**
   * Status of the `Withdrawal`.
   */
  status: OrdersAPI.BrokerageOrderStatus;

  /**
   * Datetime at which the `Withdrawal` was transacted. ISO 8601 timestamp.
   */
  transaction_dt: string;

  /**
   * Hash of the transaction for the `Withdrawal`.
   */
  transaction_hash: string;

  /**
   * ID of the `WithdrawalRequest` associated with this `Withdrawal`.
   */
  withdrawal_request_id: string;
}

export type WithdrawalListResponse = Array<Withdrawal>;

export interface WithdrawalRetrieveParams {
  account_id: string;
}

export interface WithdrawalListParams {
  page?: number;

  page_size?: number;

  /**
   * ID of the `WithdrawalRequest` to find `Withdrawals` for.
   */
  withdrawal_request_id?: string;
}

export declare namespace Withdrawals {
  export {
    type Withdrawal as Withdrawal,
    type WithdrawalListResponse as WithdrawalListResponse,
    type WithdrawalRetrieveParams as WithdrawalRetrieveParams,
    type WithdrawalListParams as WithdrawalListParams,
  };
}
