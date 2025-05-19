// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as OrderFulfillmentsAPI from './order-fulfillments';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Orders extends APIResource {
  /**
   * Get a specific `Order` by its ID.
   */
  retrieve(orderID: string, params: OrderRetrieveParams, options?: RequestOptions): APIPromise<Order> {
    const { account_id } = params;
    return this._client.get(path`/api/v2/accounts/${account_id}/orders/${orderID}`, options);
  }

  /**
   * Get a list of all `Orders` under the `Account`.
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
   */
  cancel(orderID: string, params: OrderCancelParams, options?: RequestOptions): APIPromise<Order> {
    const { account_id } = params;
    return this._client.post(path`/api/v2/accounts/${account_id}/orders/${orderID}/cancel`, options);
  }

  /**
   * Get `OrderFulfillments` for a specific `Order`.
   */
  retrieveFulfillments(
    orderID: string,
    params: OrderRetrieveFulfillmentsParams,
    options?: RequestOptions,
  ): APIPromise<OrderRetrieveFulfillmentsResponse> {
    const { account_id, ...query } = params;
    return this._client.get(path`/api/v2/accounts/${account_id}/orders/${orderID}/fulfillments`, {
      query,
      ...options,
    });
  }
}

export interface Order {
  /**
   * ID of the `Order`.
   */
  id: string;

  /**
   * CAIP-2 formatted chain ID of the blockchain that the `Order` transaction was run
   * on.
   */
  chain_id: 'eip155:1' | 'eip155:42161' | 'eip155:8453' | 'eip155:81457' | 'eip155:7887' | 'eip155:98866';

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
  order_side: 'BUY' | 'SELL';

  /**
   * Time in force. Indicates how long `Order` is valid for.
   */
  order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK';

  /**
   * Transaction hash for the `Order` creation.
   */
  order_transaction_hash: string;

  /**
   * Type of `Order`.
   */
  order_type: 'MARKET' | 'LIMIT';

  /**
   * Status of the `Order`.
   */
  status:
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
   * The payment token (stablecoin) address.
   */
  payment_token?: string;

  /**
   * Total amount of payment involved.
   */
  payment_token_quantity?: number;
}

export type OrderListResponse = Array<Order>;

export type OrderRetrieveFulfillmentsResponse = Array<OrderFulfillmentsAPI.OrderFulfillment>;

export interface OrderRetrieveParams {
  account_id: string;
}

export interface OrderListParams {
  page?: number;

  page_size?: number;
}

export interface OrderCancelParams {
  account_id: string;
}

export interface OrderRetrieveFulfillmentsParams {
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

export declare namespace Orders {
  export {
    type Order as Order,
    type OrderListResponse as OrderListResponse,
    type OrderRetrieveFulfillmentsResponse as OrderRetrieveFulfillmentsResponse,
    type OrderRetrieveParams as OrderRetrieveParams,
    type OrderListParams as OrderListParams,
    type OrderCancelParams as OrderCancelParams,
    type OrderRetrieveFulfillmentsParams as OrderRetrieveFulfillmentsParams,
  };
}
