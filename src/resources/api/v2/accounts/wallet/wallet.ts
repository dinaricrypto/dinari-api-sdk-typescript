// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as ExternalAPI from './external';
import {
  External,
  ExternalConnectParams,
  ExternalGetNonceParams,
  ExternalGetNonceResponse,
} from './external';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class WalletResource extends APIResource {
  external: ExternalAPI.External = new ExternalAPI.External(this._client);

  /**
   * Retrieves details of the wallet connected to the account.
   */
  retrieve(accountID: string, options?: RequestOptions): APIPromise<Wallet> {
    return this._client.get(path`/api/v2/accounts/${accountID}/wallet`, options);
  }
}

/**
 * Information about a digital wallet
 */
export interface Wallet {
  /**
   * Address of the wallet
   */
  address: string;

  /**
   * Indicates whether the wallet is flagged for AML violations
   */
  is_aml_flagged: boolean;

  /**
   * Indicates whether the wallet is a Dinari-managed wallet
   */
  is_managed_wallet: boolean;
}

WalletResource.External = External;

export declare namespace WalletResource {
  export { type Wallet as Wallet };

  export {
    External as External,
    type ExternalGetNonceResponse as ExternalGetNonceResponse,
    type ExternalConnectParams as ExternalConnectParams,
    type ExternalGetNonceParams as ExternalGetNonceParams,
  };
}
