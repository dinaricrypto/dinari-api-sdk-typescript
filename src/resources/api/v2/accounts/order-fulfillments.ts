// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class OrderFulfillments extends APIResource {
  /**
   * Retrieves details of a specific order fulfillment by its ID.
   */
  retrieve(
    fulfillmentID: string,
    params: OrderFulfillmentRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<OrderFulfillment> {
    const { account_id } = params;
    return this._client.get(
      path`/api/v2/accounts/${account_id}/order_fulfillments/${fulfillmentID}`,
      options,
    );
  }

  /**
   * Queries all order fulfillments under the account.
   */
  query(accountID: string, options?: RequestOptions): APIPromise<OrderFulfillmentQueryResponse> {
    return this._client.get(path`/api/v2/accounts/${accountID}/order_fulfillments`, options);
  }
}

/**
 * Information about a fulfillment of an order. An order may be fulfilled in
 * multiple transactions.
 */
export interface OrderFulfillment {
  /**
   * Identifier of the order fulfillment
   */
  id: string;

  /**
   * Amount of asset token filled
   */
  asset_token_filled: number;

  /**
   * Amount of asset token spent
   */
  asset_token_spent: number;

  /**
   * Identifier of the order this fulfillment is for
   */
  order_id: string;

  /**
   * Amount of payment token filled
   */
  payment_token_filled: number;

  /**
   * Amount of payment token spent
   */
  payment_token_spent: number;

  /**
   * Time when transaction occurred
   */
  transaction_dt: string;

  /**
   * Transaction hash for this fulfillment
   */
  transaction_hash: string;

  /**
   * Fee amount of payment token spent
   */
  payment_token_fee?: number;
}

export type OrderFulfillmentQueryResponse = Array<OrderFulfillment>;

export interface OrderFulfillmentRetrieveParams {
  account_id: string;
}

export declare namespace OrderFulfillments {
  export {
    type OrderFulfillment as OrderFulfillment,
    type OrderFulfillmentQueryResponse as OrderFulfillmentQueryResponse,
    type OrderFulfillmentRetrieveParams as OrderFulfillmentRetrieveParams,
  };
}
