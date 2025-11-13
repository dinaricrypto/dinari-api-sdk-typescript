// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as AccountsAPI from '../../accounts';
import * as OrdersAPI from '../../orders/orders';
import * as StocksEip155API from '../../orders/stocks/eip155';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Eip155 extends APIResource {
  /**
   * Prepare a proxied order to be placed on EVM. The returned structure contains the
   * necessary data to create an `OrderRequest` with a `Wallet` that is not
   * Dinari-managed.
   *
   * **⚠️ This endpoint will be deprecated on 2025-12-15.**
   *
   * @deprecated
   */
  prepareProxiedOrder(
    accountID: string,
    body: Eip155PrepareProxiedOrderParams,
    options?: RequestOptions,
  ): APIPromise<Eip155PrepareProxiedOrderResponse> {
    return this._client.post(path`/api/v2/accounts/${accountID}/order_requests/stocks/eip155/prepare`, {
      body,
      ...options,
    });
  }
}

/**
 * [EIP-712](https://eips.ethereum.org/EIPS/eip-712) typed data to be signed with a
 * wallet.
 */
export interface EvmTypedData {
  /**
   * Domain separator for the typed data.
   */
  domain: unknown;

  /**
   * Message to be signed. Contains the actual data that will be signed with the
   * wallet.
   */
  message: unknown;

  /**
   * Primary type of the typed data.
   */
  primaryType: string;

  /**
   * Types used in the typed data.
   */
  types: unknown;
}

/**
 * Prepared data for creating an `OrderRequest` through the EVM proxied order API
 * route.
 */
export interface Eip155PrepareProxiedOrderResponse {
  /**
   * ID of the EvmPreparedProxiedOrder.
   */
  id: string;

  /**
   * Deadline for the prepared order to be placed.
   */
  deadline: string;

  /**
   * Fees involved in the order. Provided here as a reference.
   */
  fees: Array<StocksEip155API.OrderFeeAmount>;

  /**
   * [EIP-712](https://eips.ethereum.org/EIPS/eip-712) typed data to be signed with a
   * wallet.
   */
  order_typed_data: EvmTypedData;

  /**
   * [EIP-712](https://eips.ethereum.org/EIPS/eip-712) typed data to be signed with a
   * wallet.
   */
  permit_typed_data: EvmTypedData;
}

export interface Eip155PrepareProxiedOrderParams {
  /**
   * CAIP-2 chain ID of the blockchain where the `Order` will be placed.
   */
  chain_id: AccountsAPI.Chain;

  /**
   * Indicates whether `Order` is a buy or sell.
   */
  order_side: OrdersAPI.OrderSide;

  /**
   * Time in force. Indicates how long `Order` is valid for.
   */
  order_tif: OrdersAPI.OrderTif;

  /**
   * Type of `Order`.
   */
  order_type: OrdersAPI.OrderType;

  /**
   * Address of payment token.
   */
  payment_token: string;

  /**
   * Amount of dShare asset tokens involved. Required for limit `Orders` and market
   * sell `Orders`.
   */
  asset_token_quantity?: number | null;

  /**
   * Customer-supplied unique identifier to map this `Order` to an order in the
   * customer's systems.
   */
  client_order_id?: string | null;

  /**
   * Price per asset in the asset's native currency. USD for US equities and ETFs.
   * Required for limit `Orders`.
   */
  limit_price?: number | null;

  /**
   * Amount of payment tokens involved. Required for market buy `Orders`.
   */
  payment_token_quantity?: number | null;

  /**
   * The ID of the `Stock` for which the `Order` is being placed.
   */
  stock_id?: string | null;

  /**
   * The ID of the `Token` for which the `Order` is being placed.
   */
  token_id?: string | null;
}

export declare namespace Eip155 {
  export {
    type EvmTypedData as EvmTypedData,
    type Eip155PrepareProxiedOrderResponse as Eip155PrepareProxiedOrderResponse,
    type Eip155PrepareProxiedOrderParams as Eip155PrepareProxiedOrderParams,
  };
}
