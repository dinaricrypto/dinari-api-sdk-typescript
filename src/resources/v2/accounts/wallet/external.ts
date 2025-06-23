// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as WalletAPI from './wallet';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class External extends APIResource {
  /**
   * Connect a `Wallet` to the `Account` after verifying the signature.
   *
   * @example
   * ```ts
   * const wallet =
   *   await client.v2.accounts.wallet.external.connect(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       chain_id: 'eip155:1',
   *       nonce: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       signature: '0xeaF12bD1DfFd',
   *       wallet_address: 'wallet_address',
   *     },
   *   );
   * ```
   */
  connect(
    accountID: string,
    body: ExternalConnectParams,
    options?: RequestOptions,
  ): APIPromise<WalletAPI.Wallet> {
    return this._client.post(path`/api/v2/accounts/${accountID}/wallet/external`, { body, ...options });
  }

  /**
   * Get a nonce and message to be signed in order to verify `Wallet` ownership.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v2.accounts.wallet.external.getNonce(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       chain_id: 'eip155:1',
   *       wallet_address: 'wallet_address',
   *     },
   *   );
   * ```
   */
  getNonce(
    accountID: string,
    query: ExternalGetNonceParams,
    options?: RequestOptions,
  ): APIPromise<ExternalGetNonceResponse> {
    return this._client.get(path`/api/v2/accounts/${accountID}/wallet/external/nonce`, { query, ...options });
  }
}

/**
 * Connection message to sign to prove ownership of the `Wallet`.
 */
export interface ExternalGetNonceResponse {
  /**
   * Message to be signed by the `Wallet`
   */
  message: string;

  /**
   * Single-use identifier
   */
  nonce: string;
}

export interface ExternalConnectParams {
  /**
   * CAIP-2 formatted chain ID of the blockchain the `Wallet` to link is on. eip155:0
   * is used for EOA wallets
   */
  chain_id:
    | 'eip155:1'
    | 'eip155:42161'
    | 'eip155:8453'
    | 'eip155:81457'
    | 'eip155:7887'
    | 'eip155:98866'
    | 'eip155:0';

  /**
   * Nonce contained within the connection message.
   */
  nonce: string;

  /**
   * Signature payload from signing the connection message with the `Wallet`.
   */
  signature: string;

  /**
   * Address of the `Wallet`.
   */
  wallet_address: string;
}

export interface ExternalGetNonceParams {
  /**
   * CAIP-2 formatted chain ID of the blockchain the `Wallet` is on. eip155:0 is used
   * for EOA wallets
   */
  chain_id:
    | 'eip155:1'
    | 'eip155:42161'
    | 'eip155:8453'
    | 'eip155:81457'
    | 'eip155:7887'
    | 'eip155:98866'
    | 'eip155:0';

  /**
   * Address of the `Wallet` to connect.
   */
  wallet_address: string;
}

export declare namespace External {
  export {
    type ExternalGetNonceResponse as ExternalGetNonceResponse,
    type ExternalConnectParams as ExternalConnectParams,
    type ExternalGetNonceParams as ExternalGetNonceParams,
  };
}
