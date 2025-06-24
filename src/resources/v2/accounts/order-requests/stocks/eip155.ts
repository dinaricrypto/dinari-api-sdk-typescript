// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as AccountsAPI from '../../accounts';
import * as OrderRequestsAPI from '../order-requests';
import * as OrdersAPI from '../../orders/orders';
import * as StocksEip155API from '../../orders/stocks/eip155';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Eip155 extends APIResource {
  /**
   * Create a proxied order on EVM from a prepared proxied order. An `OrderRequest`
   * representing the proxied order is returned.
   *
   * @example
   * ```ts
   * const orderRequest =
   *   await client.v2.accounts.orderRequests.stocks.eip155.createProxiedOrder(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       order_signature: '0xeaF12bD1DfFd',
   *       permit_signature: '0xeaF12bD1DfFd',
   *       prepared_proxied_order_id:
   *         '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
   * ```
   */
  createProxiedOrder(
    accountID: string,
    body: Eip155CreateProxiedOrderParams,
    options?: RequestOptions,
  ): APIPromise<OrderRequestsAPI.OrderRequest> {
    return this._client.post(path`/api/v2/accounts/${accountID}/order_requests/stocks/eip155`, {
      body,
      ...options,
    });
  }

  /**
   * Prepare a proxied order to be placed on EVM. The returned structure contains the
   * necessary data to create an `OrderRequest` with a `Wallet` that is not
   * Dinari-managed.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v2.accounts.orderRequests.stocks.eip155.prepareProxiedOrder(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       chain_id: 'eip155:1',
   *       order_side: 'BUY',
   *       order_tif: 'DAY',
   *       order_type: 'MARKET',
   *       stock_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
   * ```
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

export interface Eip155CreateProxiedOrderParams {
  /**
   * Signature of the order typed data, allowing Dinari to place the proxied order on
   * behalf of the `Wallet`.
   */
  order_signature: string;

  /**
   * Signature of the permit typed data, allowing Dinari to spend the payment token
   * or dShare asset token on behalf of the owner.
   */
  permit_signature: string;

  /**
   * ID of the prepared proxied order to be submitted as a proxied order.
   */
  prepared_proxied_order_id: string;
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
   * The ID of the `Stock` for which the `Order` is being placed.
   */
  stock_id: string;

  /**
   * Amount of dShare asset tokens involved. Required for limit `Orders` and market
   * sell `Orders`.
   */
  asset_token_quantity?: number;

  /**
   * Price per asset in the asset's native currency. USD for US equities and ETFs.
   * Required for limit `Orders`.
   */
  limit_price?: number;

  /**
   * Address of payment token.
   */
  payment_token?: string;

  /**
   * Amount of payment tokens involved. Required for market buy `Orders`.
   */
  payment_token_quantity?: number;
}

export declare namespace Eip155 {
  export {
    type EvmTypedData as EvmTypedData,
    type Eip155PrepareProxiedOrderResponse as Eip155PrepareProxiedOrderResponse,
    type Eip155CreateProxiedOrderParams as Eip155CreateProxiedOrderParams,
    type Eip155PrepareProxiedOrderParams as Eip155PrepareProxiedOrderParams,
  };
}
