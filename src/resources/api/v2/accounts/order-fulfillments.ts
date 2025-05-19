// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class OrderFulfillments extends APIResource {
  /**
   * Query `OrderFulfillments` under the `Account`.
   */
  query(
    accountID: string,
    query: OrderFulfillmentQueryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrderFulfillmentQueryResponse> {
    return this._client.get(path`/api/v2/accounts/${accountID}/order_fulfillments`, { query, ...options });
  }
}

/**
 * Information about a fulfillment of an `Order`. An order may be fulfilled in
 * multiple transactions.
 */
export interface OrderFulfillment {
  /**
   * ID of the `OrderFulfillment`.
   */
  id: string;

  /**
   * Amount of dShare asset token filled for `BUY` orders.
   */
  asset_token_filled: number;

  /**
   * Amount of dShare asset token spent for `SELL` orders.
   */
  asset_token_spent: number;

  /**
   * Blockchain that the transaction was run on.
   */
  chain_id: 'eip155:1' | 'eip155:42161' | 'eip155:8453' | 'eip155:81457' | 'eip155:7887' | 'eip155:98866';

  /**
   * ID of the `Order` this `OrderFulfillment` is for.
   */
  order_id: string;

  /**
   * Amount of payment token filled for `SELL` orders.
   */
  payment_token_filled: number;

  /**
   * Amount of payment token spent for `BUY` orders.
   */
  payment_token_spent: number;

  /**
   * Time when transaction occurred.
   */
  transaction_dt: string;

  /**
   * Transaction hash for this fulfillment.
   */
  transaction_hash: string;

  /**
   * Fee amount, in payment tokens.
   */
  payment_token_fee?: number;
}

export type OrderFulfillmentQueryResponse = Array<OrderFulfillment>;

export interface OrderFulfillmentQueryParams {
  /**
   * List of `Order` IDs to query `OrderFulfillments` for.
   */
  order_ids?: Array<string>;

  page?: number;

  page_size?: number;
}

export declare namespace OrderFulfillments {
  export {
    type OrderFulfillment as OrderFulfillment,
    type OrderFulfillmentQueryResponse as OrderFulfillmentQueryResponse,
    type OrderFulfillmentQueryParams as OrderFulfillmentQueryParams,
  };
}
