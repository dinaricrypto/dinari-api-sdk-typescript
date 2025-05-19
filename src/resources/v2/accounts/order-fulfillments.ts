// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountsAPI from './accounts';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class OrderFulfillments extends APIResource {
  /**
   * Get a specific `OrderFulfillment` by its ID.
   *
   * @example
   * ```ts
   * const fulfillment =
   *   await client.v2.accounts.orderFulfillments.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   *   );
   * ```
   */
  retrieve(
    orderFulfillmentID: string,
    params: OrderFulfillmentRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Fulfillment> {
    const { account_id } = params;
    return this._client.get(
      path`/api/v2/accounts/${account_id}/order_fulfillments/${orderFulfillmentID}`,
      options,
    );
  }

  /**
   * Query `OrderFulfillments` under the `Account`.
   *
   * @example
   * ```ts
   * const fulfillments =
   *   await client.v2.accounts.orderFulfillments.query(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
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
export interface Fulfillment {
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
  chain_id: AccountsAPI.Chain;

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

export type OrderFulfillmentQueryResponse = Array<Fulfillment>;

export interface OrderFulfillmentRetrieveParams {
  account_id: string;
}

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
    type Fulfillment as Fulfillment,
    type OrderFulfillmentQueryResponse as OrderFulfillmentQueryResponse,
    type OrderFulfillmentRetrieveParams as OrderFulfillmentRetrieveParams,
    type OrderFulfillmentQueryParams as OrderFulfillmentQueryParams,
  };
}
