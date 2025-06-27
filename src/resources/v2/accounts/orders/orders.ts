// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AccountsAPI from '../accounts';
import * as OrderFulfillmentsAPI from '../order-fulfillments';
import * as StocksAPI from './stocks/stocks';
import { Stocks } from './stocks/stocks';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Orders extends APIResource {
  stocks: StocksAPI.Stocks = new StocksAPI.Stocks(this._client);

  /**
   * Get a specific `Order` by its ID.
   *
   * @example
   * ```ts
   * const order = await client.v2.accounts.orders.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   * );
   * ```
   */
  retrieve(orderID: string, params: OrderRetrieveParams, options?: RequestOptions): APIPromise<Order> {
    const { account_id } = params;
    return this._client.get(path`/api/v2/accounts/${account_id}/orders/${orderID}`, options);
  }

  /**
   * Get a list of all `Orders` under the `Account`. Optionally `Orders` can be
   * filtered by chain ID or transaction hash.
   *
   * @example
   * ```ts
   * const orders = await client.v2.accounts.orders.list(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  list(
    accountID: string,
    query: OrderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrderListResponse> {
    return this._client.get(path`/api/v2/accounts/${accountID}/orders`, { query, ...options });
  }

  /**
   * Cancel an `Order` by its ID. Note that this requires the `Order` ID, not the
   * `OrderRequest` ID. Once you submit a cancellation request, it cannot be undone.
   * Be advised that orders with a status of PENDING_FILL, PENDING_ESCROW, FILLED,
   * REJECTED, or CANCELLED cannot be cancelled.
   *
   * `Order` cancellation is not guaranteed nor is it immediate. The `Order` may
   * still be executed if the cancellation request is not received in time.
   *
   * Check the status using the "Get Order by ID" endpoint to confirm whether the
   * `Order` has been cancelled.
   *
   * @example
   * ```ts
   * const order = await client.v2.accounts.orders.cancel(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   * );
   * ```
   */
  cancel(orderID: string, params: OrderCancelParams, options?: RequestOptions): APIPromise<Order> {
    const { account_id } = params;
    return this._client.post(path`/api/v2/accounts/${account_id}/orders/${orderID}/cancel`, options);
  }

  /**
   * Get `OrderFulfillments` for a specific `Order`.
   *
   * @example
   * ```ts
   * const fulfillments =
   *   await client.v2.accounts.orders.getFulfillments(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   *   );
   * ```
   */
  getFulfillments(
    orderID: string,
    params: OrderGetFulfillmentsParams,
    options?: RequestOptions,
  ): APIPromise<OrderGetFulfillmentsResponse> {
    const { account_id, ...query } = params;
    return this._client.get(path`/api/v2/accounts/${account_id}/orders/${orderID}/fulfillments`, {
      query,
      ...options,
    });
  }
}

export type BrokerageOrderStatus =
  | 'PENDING_SUBMIT'
  | 'PENDING_CANCEL'
  | 'PENDING_ESCROW'
  | 'PENDING_FILL'
  | 'ESCROWED'
  | 'SUBMITTED'
  | 'CANCELLED'
  | 'FILLED'
  | 'REJECTED'
  | 'REQUIRING_CONTACT'
  | 'ERROR';

export interface Order {
  /**
   * ID of the `Order`.
   */
  id: string;

  /**
   * CAIP-2 formatted chain ID of the blockchain that the `Order` transaction was run
   * on.
   */
  chain_id: AccountsAPI.Chain;

  /**
   * Datetime at which the `Order` was created. ISO 8601 timestamp.
   */
  created_dt: string;

  /**
   * Smart contract address that `Order` was created from.
   */
  order_contract_address: string;

  /**
   * Indicates whether `Order` is a buy or sell.
   */
  order_side: OrderSide;

  /**
   * Time in force. Indicates how long `Order` is valid for.
   */
  order_tif: OrderTif;

  /**
   * Transaction hash for the `Order` creation.
   */
  order_transaction_hash: string;

  /**
   * Type of `Order`.
   */
  order_type: OrderType;

  /**
   * Status of the `Order`.
   */
  status: BrokerageOrderStatus;

  /**
   * The `Stock` ID associated with the `Order`
   */
  stock_id: string;

  /**
   * The dShare asset token address.
   */
  asset_token?: string;

  /**
   * Total amount of assets involved.
   */
  asset_token_quantity?: number;

  /**
   * Transaction hash for cancellation of `Order`, if the `Order` was cancelled.
   */
  cancel_transaction_hash?: string;

  /**
   * Fee amount associated with `Order`.
   */
  fee?: number;

  /**
   * For limit `Orders`, the price per asset, specified in the `Stock`'s native
   * currency (USD for US equities and ETFs).
   */
  limit_price?: number;

  /**
   * Order Request ID for the `Order`
   */
  order_request_id?: string;

  /**
   * The payment token (stablecoin) address.
   */
  payment_token?: string;

  /**
   * Total amount of payment involved.
   */
  payment_token_quantity?: number;
}

export type OrderSide = 'BUY' | 'SELL';

export type OrderTif = 'DAY' | 'GTC' | 'IOC' | 'FOK';

export type OrderType = 'MARKET' | 'LIMIT';

export type OrderListResponse = Array<Order>;

export type OrderGetFulfillmentsResponse = Array<OrderFulfillmentsAPI.Fulfillment>;

export interface OrderRetrieveParams {
  account_id: string;
}

export interface OrderListParams {
  /**
   * CAIP-2 formatted chain ID of the blockchain the `Order` was made on.
   */
  chain_id?: AccountsAPI.Chain;

  /**
   * Transaction hash of the `Order`.
   */
  order_transaction_hash?: string;

  page?: number;

  page_size?: number;
}

export interface OrderCancelParams {
  account_id: string;
}

export interface OrderGetFulfillmentsParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Query param:
   */
  page?: number;

  /**
   * Query param:
   */
  page_size?: number;
}

Orders.Stocks = Stocks;

export declare namespace Orders {
  export {
    type BrokerageOrderStatus as BrokerageOrderStatus,
    type Order as Order,
    type OrderSide as OrderSide,
    type OrderTif as OrderTif,
    type OrderType as OrderType,
    type OrderListResponse as OrderListResponse,
    type OrderGetFulfillmentsResponse as OrderGetFulfillmentsResponse,
    type OrderRetrieveParams as OrderRetrieveParams,
    type OrderListParams as OrderListParams,
    type OrderCancelParams as OrderCancelParams,
    type OrderGetFulfillmentsParams as OrderGetFulfillmentsParams,
  };

  export { Stocks as Stocks };
}
