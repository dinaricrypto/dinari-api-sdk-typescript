// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as WalletAPI from './wallet';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class External extends APIResource {
  /**
   * Connect a `Wallet` to the `Account` after verifying the signature.
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
   * CAIP-2 formatted chain ID of the blockchain the `Wallet` to link is on.
   */
  chain_id: 'eip155:1' | 'eip155:42161' | 'eip155:8453' | 'eip155:81457' | 'eip155:7887' | 'eip155:98866';

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
