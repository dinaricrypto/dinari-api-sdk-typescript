// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AccountsAPI from '../accounts';
import * as OrdersAPI from '../orders/orders';
import * as StocksAPI from './stocks/stocks';
import { Stocks } from './stocks/stocks';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class OrderRequests extends APIResource {
  stocks: StocksAPI.Stocks = new StocksAPI.Stocks(this._client);

  /**
   * Get a specific `OrderRequest` by its ID.
   *
   * @example
   * ```ts
   * const orderRequest =
   *   await client.v2.accounts.orderRequests.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   *   );
   * ```
   */
  retrieve(
    orderRequestID: string,
    params: OrderRequestRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<OrderRequest> {
    const { account_id } = params;
    return this._client.get(path`/api/v2/accounts/${account_id}/order_requests/${orderRequestID}`, options);
  }

  /**
   * Lists `OrderRequests`. Optionally `OrderRequests` can be filtered by certain
   * parameters.
   *
   * @example
   * ```ts
   * const orderRequests =
   *   await client.v2.accounts.orderRequests.list(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  list(
    accountID: string,
    query: OrderRequestListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrderRequestListResponse> {
    return this._client.get(path`/api/v2/accounts/${accountID}/order_requests`, { query, ...options });
  }

  /**
   * Create a managed `OrderRequest` to place a limit buy `Order`.
   *
   * Fees for the `Order` are included in the transaction. Refer to our
   * [Fee Quote API](https://docs.dinari.com/reference/createproxiedorderfeequote#/)
   * for fee estimation.
   *
   * If an `OrderRequest` with the same `client_order_id` already exists for the
   * given account, the existing `OrderRequest` will be returned instead of creating
   * a new one.
   *
   * @example
   * ```ts
   * const orderRequest =
   *   await client.v2.accounts.orderRequests.createLimitBuy(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       asset_quantity: 0,
   *       limit_price: 0,
   *       stock_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
   * ```
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
   * Create a managed `OrderRequest` to place a limit sell `Order`.
   *
   * Fees for the `Order` are included in the transaction. Refer to our
   * [Fee Quote API](https://docs.dinari.com/reference/createproxiedorderfeequote#/)
   * for fee estimation.
   *
   * If an `OrderRequest` with the same `client_order_id` already exists for the
   * given account, the existing `OrderRequest` will be returned instead of creating
   * a new one.
   *
   * @example
   * ```ts
   * const orderRequest =
   *   await client.v2.accounts.orderRequests.createLimitSell(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       asset_quantity: 0,
   *       limit_price: 0,
   *       stock_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
   * ```
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
   * Create a managed `OrderRequest` to place a market buy `Order`.
   *
   * Fees for the `Order` are included in the transaction. Refer to our
   * [Fee Quote API](https://docs.dinari.com/reference/createproxiedorderfeequote#/)
   * for fee estimation.
   *
   * If an `OrderRequest` with the same `client_order_id` already exists for the
   * given account, the existing `OrderRequest` will be returned instead of creating
   * a new one.
   *
   * @example
   * ```ts
   * const orderRequest =
   *   await client.v2.accounts.orderRequests.createMarketBuy(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       payment_amount: 0,
   *       stock_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
   * ```
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
   * Create a managed `OrderRequest` to place a market sell `Order`.
   *
   * Fees for the `Order` are included in the transaction. Refer to our
   * [Fee Quote API](https://docs.dinari.com/reference/createproxiedorderfeequote#/)
   * for fee estimation.
   *
   * If an `OrderRequest` with the same `client_order_id` already exists for the
   * given account, the existing `OrderRequest` will be returned instead of creating
   * a new one.
   *
   * @example
   * ```ts
   * const orderRequest =
   *   await client.v2.accounts.orderRequests.createMarketSell(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       asset_quantity: 0,
   *       stock_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
   * ```
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

  /**
   * Get fee quote data for an `Order Request`. This is provided primarily for
   * informational purposes.
   *
   * For market buy orders, the notional amount of the order includes the fees. For
   * market and limit sell orders, fees are deducted from the proceeds of the sale.
   * For limit buy orders, the fees are added to the total cost of the order.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v2.accounts.orderRequests.getFeeQuote(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       order_side: 'BUY',
   *       order_type: 'MARKET',
   *       stock_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
   * ```
   */
  getFeeQuote(
    accountID: string,
    body: OrderRequestGetFeeQuoteParams,
    options?: RequestOptions,
  ): APIPromise<OrderRequestGetFeeQuoteResponse> {
    return this._client.post(path`/api/v2/accounts/${accountID}/order_requests/fee_quote`, {
      body,
      ...options,
    });
  }
}

/**
 * Input parameters for creating a limit buy `OrderRequest`.
 */
export interface CreateLimitBuyOrderInput {
  /**
   * Amount of dShare asset involved. Required for limit `Orders` and market sell
   * `Orders`.
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

  /**
   * Customer-supplied ID to map this order to an order in their own systems. Must be
   * unique within the entity.
   */
  client_order_id?: string | null;

  /**
   * ID of `Account` to receive the `Order`.
   */
  recipient_account_id?: string | null;
}

/**
 * Input parameters for creating a limit sell `OrderRequest`.
 */
export interface CreateLimitSellOrderInput {
  /**
   * Amount of dShare asset involved. Required for limit `Orders` and market sell
   * `Orders`.
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

  /**
   * Customer-supplied ID to map this order to an order in their own systems. Must be
   * unique within the entity.
   */
  client_order_id?: string | null;

  /**
   * Address of the payment token to be used for the sell order. If not provided, the
   * default payment token (USD+) will be used. Should only be specified if
   * `recipient_account_id` for a non-managed wallet account is also provided.
   */
  payment_token_address?: string | null;

  /**
   * ID of `Account` to receive the `Order`.
   */
  recipient_account_id?: string | null;
}

/**
 * Input parameters for creating a market buy `OrderRequest`.
 */
export interface CreateMarketBuyOrderInput {
  /**
   * Amount of currency (USD for US equities and ETFs) to pay for the order. Must be
   * a positive number with a precision of up to 2 decimal places.
   */
  payment_amount: number;

  /**
   * ID of `Stock`.
   */
  stock_id: string;

  /**
   * Customer-supplied ID to map this order to an order in their own systems. Must be
   * unique within the entity.
   */
  client_order_id?: string | null;

  /**
   * ID of `Account` to receive the `Order`.
   */
  recipient_account_id?: string | null;
}

/**
 * Input parameters for creating a market sell `OrderRequest`.
 */
export interface CreateMarketSellOrderInput {
  /**
   * Quantity of shares to trade. Must be a positive number with a precision of up to
   * 9 decimal places.
   */
  asset_quantity: number;

  /**
   * ID of `Stock`.
   */
  stock_id: string;

  /**
   * Customer-supplied ID to map this order to an order in their own systems. Must be
   * unique within the entity.
   */
  client_order_id?: string | null;

  /**
   * Address of the payment token to be used for the sell order. If not provided, the
   * default payment token (USD+) will be used. Should only be specified if
   * `recipient_account_id` for a non-managed wallet account is also provided.
   */
  payment_token_address?: string | null;

  /**
   * ID of `Account` to receive the `Order`.
   */
  recipient_account_id?: string | null;
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
  order_side: OrdersAPI.OrderSide;

  /**
   * Indicates how long `Order` is valid for.
   */
  order_tif: OrdersAPI.OrderTif;

  /**
   * Type of `Order`.
   */
  order_type: OrdersAPI.OrderType;

  /**
   * Status of `OrderRequest`.
   */
  status: 'QUOTED' | 'PENDING' | 'PENDING_BRIDGE' | 'SUBMITTED' | 'ERROR' | 'CANCELLED' | 'EXPIRED';

  /**
   * Customer-supplied ID to map this `OrderRequest` to an order in their own
   * systems.
   */
  client_order_id?: string | null;

  /**
   * ID of `Order` created from the `OrderRequest`. This is the primary identifier
   * for the `/orders` routes.
   */
  order_id?: string | null;

  /**
   * ID of recipient `Account`.
   */
  recipient_account_id?: string | null;
}

export type OrderRequestListResponse = Array<OrderRequest>;

/**
 * A preview of the fee that would be collected when placing an Order Request.
 */
export interface OrderRequestGetFeeQuoteResponse {
  /**
   * Cash amount in USD paid for fees for the Order Request.
   */
  fee: number;
}

export interface OrderRequestRetrieveParams {
  account_id: string;
}

export interface OrderRequestListParams {
  /**
   * Customer-supplied ID to map this `OrderRequest` to an order in their own
   * systems.
   */
  client_order_id?: string | null;

  /**
   * Order ID for the `OrderRequest`
   */
  order_id?: string | null;

  /**
   * Order Request ID for the `OrderRequest`
   */
  order_request_id?: string | null;

  page?: number;

  page_size?: number;
}

export interface OrderRequestCreateLimitBuyParams {
  /**
   * Amount of dShare asset involved. Required for limit `Orders` and market sell
   * `Orders`.
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

  /**
   * Customer-supplied ID to map this order to an order in their own systems. Must be
   * unique within the entity.
   */
  client_order_id?: string | null;

  /**
   * ID of `Account` to receive the `Order`.
   */
  recipient_account_id?: string | null;
}

export interface OrderRequestCreateLimitSellParams {
  /**
   * Amount of dShare asset involved. Required for limit `Orders` and market sell
   * `Orders`.
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

  /**
   * Customer-supplied ID to map this order to an order in their own systems. Must be
   * unique within the entity.
   */
  client_order_id?: string | null;

  /**
   * Address of the payment token to be used for the sell order. If not provided, the
   * default payment token (USD+) will be used. Should only be specified if
   * `recipient_account_id` for a non-managed wallet account is also provided.
   */
  payment_token_address?: string | null;

  /**
   * ID of `Account` to receive the `Order`.
   */
  recipient_account_id?: string | null;
}

export interface OrderRequestCreateMarketBuyParams {
  /**
   * Amount of currency (USD for US equities and ETFs) to pay for the order. Must be
   * a positive number with a precision of up to 2 decimal places.
   */
  payment_amount: number;

  /**
   * ID of `Stock`.
   */
  stock_id: string;

  /**
   * Customer-supplied ID to map this order to an order in their own systems. Must be
   * unique within the entity.
   */
  client_order_id?: string | null;

  /**
   * ID of `Account` to receive the `Order`.
   */
  recipient_account_id?: string | null;
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

  /**
   * Customer-supplied ID to map this order to an order in their own systems. Must be
   * unique within the entity.
   */
  client_order_id?: string | null;

  /**
   * Address of the payment token to be used for the sell order. If not provided, the
   * default payment token (USD+) will be used. Should only be specified if
   * `recipient_account_id` for a non-managed wallet account is also provided.
   */
  payment_token_address?: string | null;

  /**
   * ID of `Account` to receive the `Order`.
   */
  recipient_account_id?: string | null;
}

export interface OrderRequestGetFeeQuoteParams {
  /**
   * Indicates whether `Order Request` is a buy or sell.
   */
  order_side: OrdersAPI.OrderSide;

  /**
   * Type of `Order Request`.
   */
  order_type: OrdersAPI.OrderType;

  /**
   * The Stock ID associated with the Order Request
   */
  stock_id: string;

  /**
   * Amount of dShare asset tokens involved. Required for limit `Orders` and market
   * sell `Order Requests`.
   */
  asset_token_quantity?: number | null;

  /**
   * CAIP-2 chain ID of the blockchain where the `Order Request` will be placed. If
   * not provided, the default chain ID (eip155:42161) will be used.
   */
  chain_id?: AccountsAPI.Chain | null;

  /**
   * Price per asset in the asset's native currency. USD for US equities and ETFs.
   * Required for limit `Order Requests`.
   */
  limit_price?: number | null;

  /**
   * Address of the payment token to be used for an order. If not provided, the
   * default payment token (USD+) will be used.
   */
  payment_token_address?: string | null;

  /**
   * Amount of payment tokens involved. Required for market buy `Order Requests`.
   */
  payment_token_quantity?: number | null;
}

OrderRequests.Stocks = Stocks;

export declare namespace OrderRequests {
  export {
    type CreateLimitBuyOrderInput as CreateLimitBuyOrderInput,
    type CreateLimitSellOrderInput as CreateLimitSellOrderInput,
    type CreateMarketBuyOrderInput as CreateMarketBuyOrderInput,
    type CreateMarketSellOrderInput as CreateMarketSellOrderInput,
    type OrderRequest as OrderRequest,
    type OrderRequestListResponse as OrderRequestListResponse,
    type OrderRequestGetFeeQuoteResponse as OrderRequestGetFeeQuoteResponse,
    type OrderRequestRetrieveParams as OrderRequestRetrieveParams,
    type OrderRequestListParams as OrderRequestListParams,
    type OrderRequestCreateLimitBuyParams as OrderRequestCreateLimitBuyParams,
    type OrderRequestCreateLimitSellParams as OrderRequestCreateLimitSellParams,
    type OrderRequestCreateMarketBuyParams as OrderRequestCreateMarketBuyParams,
    type OrderRequestCreateMarketSellParams as OrderRequestCreateMarketSellParams,
    type OrderRequestGetFeeQuoteParams as OrderRequestGetFeeQuoteParams,
  };

  export { Stocks as Stocks };
}
