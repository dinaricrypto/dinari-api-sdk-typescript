// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as WalletAPI from './wallet';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class External extends APIResource {
  /**
   * Connects a wallet to the account using the nonce and signature
   */
  connect(
    accountID: string,
    body: ExternalConnectParams,
    options?: RequestOptions,
  ): APIPromise<WalletAPI.Wallet> {
    return this._client.post(path`/api/v2/accounts/${accountID}/wallet/external`, { body, ...options });
  }

  /**
   * Gets a nonce and message to be signed in order to verify wallet ownership.
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
 * Wallet connection message for Dinari-managed wallets
 */
export interface ExternalGetNonceResponse {
  /**
   * Message to be signed by the wallet
   */
  message: string;

  /**
   * Single-use identifier
   */
  nonce: string;
}

export interface ExternalConnectParams {
  /**
   * Blockchain the wallet to link is on
   */
  chain_id: number;

  /**
   * Nonce used to sign the wallet connection message
   */
  nonce: string;

  /**
   * Signature payload from signing the wallet connection message with the wallet
   */
  signature: string;

  /**
   * Address of the wallet
   */
  wallet_address: string;
}

export interface ExternalGetNonceParams {
  /**
   * Address of the wallet to connect
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
