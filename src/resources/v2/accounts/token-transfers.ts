// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountsAPI from './accounts';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class TokenTransfers extends APIResource {
  /**
   * Creates a `TokenTransfer` from this `Account`.
   *
   * A `TokenTransfer` represents a transfer of tokens through the Dinari platform
   * from one `Account` to another. As such, only `Account`s that are connected to
   * Dinari-managed `Wallet`s can initiate `TokenTransfer`s.
   *
   * @example
   * ```ts
   * const tokenTransfer =
   *   await client.v2.accounts.tokenTransfers.create(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       quantity: 0,
   *       recipient_account_id:
   *         '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       token_address: 'token_address',
   *     },
   *   );
   * ```
   */
  create(
    accountID: string,
    body: TokenTransferCreateParams,
    options?: RequestOptions,
  ): APIPromise<TokenTransfer> {
    return this._client.post(path`/api/v2/accounts/${accountID}/token_transfers`, { body, ...options });
  }

  /**
   * Get a specific `TokenTransfer` made from this `Account` by its ID.
   *
   * A `TokenTransfer` represents a transfer of tokens through the Dinari platform
   * from one `Account` to another. As such, only `Account`s that are connected to
   * Dinari-managed `Wallet`s can initiate `TokenTransfer`s.
   *
   * @example
   * ```ts
   * const tokenTransfer =
   *   await client.v2.accounts.tokenTransfers.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   *   );
   * ```
   */
  retrieve(
    transferID: string,
    params: TokenTransferRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<TokenTransfer> {
    const { account_id } = params;
    return this._client.get(path`/api/v2/accounts/${account_id}/token_transfers/${transferID}`, options);
  }

  /**
   * Get `TokenTransfer`s made from this `Account`.
   *
   * A `TokenTransfer` represents a transfer of tokens through the Dinari platform
   * from one `Account` to another. As such, only `Account`s that are connected to
   * Dinari-managed `Wallet`s can initiate `TokenTransfer`s.
   *
   * @example
   * ```ts
   * const tokenTransfers =
   *   await client.v2.accounts.tokenTransfers.list(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  list(
    accountID: string,
    query: TokenTransferListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TokenTransferListResponse> {
    return this._client.get(path`/api/v2/accounts/${accountID}/token_transfers`, { query, ...options });
  }
}

/**
 * Information about a token transfer between accounts.
 */
export interface TokenTransfer {
  /**
   * ID of the token transfer.
   */
  id: string;

  /**
   * CAIP-2 chain ID of the blockchain that the transfer is made on.
   */
  chain_id: AccountsAPI.Chain;

  /**
   * Datetime at which the transfer was created. ISO 8601 timestamp.
   */
  created_dt: string;

  /**
   * Quantity of the token being transferred.
   */
  quantity: number;

  /**
   * ID of the account to which the tokens are transferred.
   */
  recipient_account_id: string;

  /**
   * ID of the account from which the tokens are transferred.
   */
  sender_account_id: string;

  /**
   * Status of the token transfer.
   */
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETE' | 'FAILED';

  /**
   * Address of the token being transferred.
   */
  token_address: string;

  /**
   * Datetime at which the transfer was last updated. ISO 8601 timestamp.
   */
  updated_dt: string;

  /**
   * Transaction hash of the transfer on the blockchain, if applicable. This is only
   * present if the transfer has been executed on-chain.
   */
  transaction_hash?: string;
}

export type TokenTransferListResponse = Array<TokenTransfer>;

export interface TokenTransferCreateParams {
  /**
   * Quantity of the token to transfer.
   */
  quantity: number;

  /**
   * ID of the recipient account to which the tokens will be transferred.
   */
  recipient_account_id: string;

  /**
   * Address of the token to transfer.
   */
  token_address: string;
}

export interface TokenTransferRetrieveParams {
  account_id: string;
}

export interface TokenTransferListParams {
  page?: number;

  page_size?: number;
}

export declare namespace TokenTransfers {
  export {
    type TokenTransfer as TokenTransfer,
    type TokenTransferListResponse as TokenTransferListResponse,
    type TokenTransferCreateParams as TokenTransferCreateParams,
    type TokenTransferRetrieveParams as TokenTransferRetrieveParams,
    type TokenTransferListParams as TokenTransferListParams,
  };
}
