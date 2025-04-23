// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class OrderRequests extends APIResource {
  /**
   * Retrieves details of a specific managed order request by its ID.
   */
  retrieve(
    requestID: string,
    params: OrderRequestRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<OrderRequest> {
    const { account_id } = params;
    return this._client.get(path`/api/v2/accounts/${account_id}/order_requests/${requestID}`, options);
  }

  /**
   * Lists managed order requests.
   */
  list(accountID: string, options?: RequestOptions): APIPromise<OrderRequestListResponse> {
    return this._client.get(path`/api/v2/accounts/${accountID}/order_requests`, options);
  }

  /**
   * Creates a managed limit buy request.
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
   * Creates a managed limit sell request.
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
   * Creates a managed market buy request.
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
   * Creates a managed market sell request.
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
 * Input parameters for placing a limit order.
 */
export interface LimitOrderRequestInput {
  /**
   * Quantity of stock to trade. Must be a positive integer.
   */
  asset_quantity: number;

  /**
   * Price at which to execute the order. Must be a positive number with a precision
   * of up to 2 decimal places.
   */
  limit_price: number;

  /**
   * ID of stock, as returned by the `/stocks` endpoint, e.g. 1
   */
  stock_id: string;
}

/**
 * Request to create an order
 */
export interface OrderRequest {
  /**
   * ID of account placing the order
   */
  account_id: string;

  /**
   * Confirmation code of order request. This is the primary identifier for the
   * `/order_requests` endpoint
   */
  confirmation_code: string;

  /**
   * Timestamp at which the order request was created.
   */
  created_dt: string;

  /**
   * Status of order request
   */
  status: 'PENDING' | 'SUBMITTED' | 'ERROR' | 'CANCELLED';

  /**
   * ID of order created from the order request. This is the primary identifier for
   * the `/orders` endpoint
   */
  order_id?: string;
}

export type OrderRequestListResponse = Array<OrderRequest>;

export interface OrderRequestRetrieveParams {
  account_id: string;
}

export interface OrderRequestCreateLimitBuyParams {
  /**
   * Quantity of stock to trade. Must be a positive integer.
   */
  asset_quantity: number;

  /**
   * Price at which to execute the order. Must be a positive number with a precision
   * of up to 2 decimal places.
   */
  limit_price: number;

  /**
   * ID of stock, as returned by the `/stocks` endpoint, e.g. 1
   */
  stock_id: string;
}

export interface OrderRequestCreateLimitSellParams {
  /**
   * Quantity of stock to trade. Must be a positive integer.
   */
  asset_quantity: number;

  /**
   * Price at which to execute the order. Must be a positive number with a precision
   * of up to 2 decimal places.
   */
  limit_price: number;

  /**
   * ID of stock, as returned by the `/stocks` endpoint, e.g. 1
   */
  stock_id: string;
}

export interface OrderRequestCreateMarketBuyParams {
  /**
   * Amount of USD to pay or receive for the order. Must be a positive number with a
   * precision of up to 2 decimal places.
   */
  payment_amount: number;

  /**
   * ID of stock, as returned by the `/stocks` endpoint, e.g. 1
   */
  stock_id: string;

  /**
   * Whether to include fees in the `payment_amount` input field.
   */
  include_fees?: boolean;
}

export interface OrderRequestCreateMarketSellParams {
  /**
   * Quantity of stock to trade. Must be a positive number with a precision of up to
   * 9 decimal places.
   */
  asset_quantity: number;

  /**
   * ID of stock, as returned by the `/stocks` endpoint, e.g. 1
   */
  stock_id: string;
}

export declare namespace OrderRequests {
  export {
    type LimitOrderRequestInput as LimitOrderRequestInput,
    type OrderRequest as OrderRequest,
    type OrderRequestListResponse as OrderRequestListResponse,
    type OrderRequestRetrieveParams as OrderRequestRetrieveParams,
    type OrderRequestCreateLimitBuyParams as OrderRequestCreateLimitBuyParams,
    type OrderRequestCreateLimitSellParams as OrderRequestCreateLimitSellParams,
    type OrderRequestCreateMarketBuyParams as OrderRequestCreateMarketBuyParams,
    type OrderRequestCreateMarketSellParams as OrderRequestCreateMarketSellParams,
  };
}
