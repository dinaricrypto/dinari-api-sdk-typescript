// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class OrderRequests extends APIResource {
  /**
   * Lists managed `OrderRequests`.
   */
  list(
    accountID: string,
    query: OrderRequestListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrderRequestListResponse> {
    return this._client.get(path`/api/v2/accounts/${accountID}/order_requests`, { query, ...options });
  }

  /**
   * Create a managed limit buy `OrderRequest`.
   */
  createLimitBuy(
    accountID: string,
    body: OrderRequestCreateLimitBuyParams,
    options?: RequestOptions,
  ): APIPromise<OrderRequest> {
    return this._client.post(path`/api/v2/accounts/${accountID}/order_requests/limit_buy`, {
      body,
      ...options,
    });
  }

  /**
   * Create a managed limit sell `OrderRequest`.
   */
  createLimitSell(
    accountID: string,
    body: OrderRequestCreateLimitSellParams,
    options?: RequestOptions,
  ): APIPromise<OrderRequest> {
    return this._client.post(path`/api/v2/accounts/${accountID}/order_requests/limit_sell`, {
      body,
      ...options,
    });
  }

  /**
   * Create a managed market buy `OrderRequest`.
   */
  createMarketBuy(
    accountID: string,
    body: OrderRequestCreateMarketBuyParams,
    options?: RequestOptions,
  ): APIPromise<OrderRequest> {
    return this._client.post(path`/api/v2/accounts/${accountID}/order_requests/market_buy`, {
      body,
      ...options,
    });
  }

  /**
   * Create a managed market sell `OrderRequest`.
   */
  createMarketSell(
    accountID: string,
    body: OrderRequestCreateMarketSellParams,
    options?: RequestOptions,
  ): APIPromise<OrderRequest> {
    return this._client.post(path`/api/v2/accounts/${accountID}/order_requests/market_sell`, {
      body,
      ...options,
    });
  }
}

/**
 * Input parameters for creating a limit `OrderRequest`.
 */
export interface LimitOrderRequestInput {
  /**
   * Quantity of shares to trade. Must be a positive integer.
   */
  asset_quantity: number;

  /**
   * Price at which to execute the order. Must be a positive number with a precision
   * of up to 2 decimal places.
   */
  limit_price: number;

  /**
   * ID of `Stock`.
   */
  stock_id: string;
}

/**
 * A request to create an `Order`.
 *
 * An `OrderRequest` is created when a user places an order through the Dinari API.
 * The `OrderRequest` is then fulfilled by creating an `Order` on-chain.
 *
 * The `OrderRequest` is a record of the user's intent to place an order, while the
 * `Order` is the actual transaction that occurs on the blockchain.
 */
export interface OrderRequest {
  /**
   * ID of `OrderRequest`. This is the primary identifier for the `/order_requests`
   * routes.
   */
  id: string;

  /**
   * ID of `Account` placing the `OrderRequest`.
   */
  account_id: string;

  /**
   * Datetime at which the `OrderRequest` was created. ISO 8601 timestamp.
   */
  created_dt: string;

  /**
   * Indicates whether `Order` is a buy or sell.
   */
  order_side: 'BUY' | 'SELL';

  /**
   * Indicates how long `Order` is valid for.
   */
  order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK';

  /**
   * Type of `Order`.
   */
  order_type: 'MARKET' | 'LIMIT';

  /**
   * Status of `OrderRequest`.
   */
  status: 'PENDING' | 'SUBMITTED' | 'ERROR' | 'CANCELLED';

  /**
   * ID of `Order` created from the `OrderRequest`. This is the primary identifier
   * for the `/orders` routes.
   */
  order_id?: string;
}

export type OrderRequestListResponse = Array<OrderRequest>;

export interface OrderRequestListParams {
  page?: number;

  page_size?: number;
}

export interface OrderRequestCreateLimitBuyParams {
  /**
   * Quantity of shares to trade. Must be a positive integer.
   */
  asset_quantity: number;

  /**
   * Price at which to execute the order. Must be a positive number with a precision
   * of up to 2 decimal places.
   */
  limit_price: number;

  /**
   * ID of `Stock`.
   */
  stock_id: string;
}

export interface OrderRequestCreateLimitSellParams {
  /**
   * Quantity of shares to trade. Must be a positive integer.
   */
  asset_quantity: number;

  /**
   * Price at which to execute the order. Must be a positive number with a precision
   * of up to 2 decimal places.
   */
  limit_price: number;

  /**
   * ID of `Stock`.
   */
  stock_id: string;
}

export interface OrderRequestCreateMarketBuyParams {
  /**
   * Amount of currency (USD for US equities and ETFS) to pay or receive for the
   * order. Must be a positive number with a precision of up to 2 decimal places.
   */
  payment_amount: number;

  /**
   * ID of `Stock`.
   */
  stock_id: string;
}

export interface OrderRequestCreateMarketSellParams {
  /**
   * Quantity of shares to trade. Must be a positive number with a precision of up to
   * 9 decimal places.
   */
  asset_quantity: number;

  /**
   * ID of `Stock`.
   */
  stock_id: string;
}

export declare namespace OrderRequests {
  export {
    type LimitOrderRequestInput as LimitOrderRequestInput,
    type OrderRequest as OrderRequest,
    type OrderRequestListResponse as OrderRequestListResponse,
    type OrderRequestListParams as OrderRequestListParams,
    type OrderRequestCreateLimitBuyParams as OrderRequestCreateLimitBuyParams,
    type OrderRequestCreateLimitSellParams as OrderRequestCreateLimitSellParams,
    type OrderRequestCreateMarketBuyParams as OrderRequestCreateMarketBuyParams,
    type OrderRequestCreateMarketSellParams as OrderRequestCreateMarketSellParams,
  };
}
