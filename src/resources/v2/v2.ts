// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountsAPI from './accounts/accounts';
import {
  AccountGetCashBalancesResponse,
  AccountGetDividendPaymentsParams,
  AccountGetDividendPaymentsResponse,
  AccountGetInterestPaymentsParams,
  AccountGetInterestPaymentsResponse,
  AccountGetPortfolioResponse,
  AccountMintSandboxTokensParams,
  Accounts,
  Chain,
} from './accounts/accounts';
import * as EntitiesAPI from './entities/entities';
import {
  Entities,
  Entity,
  EntityCreateParams,
  EntityListParams,
  EntityListResponse,
  EntityUpdateParams,
} from './entities/entities';
import * as MarketDataAPI from './market-data/market-data';
import { MarketData, MarketDataRetrieveMarketHoursResponse } from './market-data/market-data';
import * as OrdersAPI from './accounts/orders/orders';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class V2 extends APIResource {
  marketData: MarketDataAPI.MarketData = new MarketDataAPI.MarketData(this._client);
  entities: EntitiesAPI.Entities = new EntitiesAPI.Entities(this._client);
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);

  /**
   * Get a list of all `Orders` under the `Entity`. Optionally `Orders` can be
   * transaction hash or fulfillment transaction hash.
   *
   * @example
   * ```ts
   * const response = await client.v2.listOrders({
   *   chain_id: 'eip155:1',
   * });
   * ```
   */
  listOrders(query: V2ListOrdersParams, options?: RequestOptions): APIPromise<V2ListOrdersResponse> {
    return this._client.get('/api/v2/orders/', { query, ...options });
  }
}

export type V2ListOrdersResponse = Array<V2ListOrdersResponse.V2ListOrdersResponseItem>;

export namespace V2ListOrdersResponse {
  export interface V2ListOrdersResponseItem {
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
    order_side: OrdersAPI.OrderSide;

    /**
     * Time in force. Indicates how long `Order` is valid for.
     */
    order_tif: OrdersAPI.OrderTif;

    /**
     * Transaction hash for the `Order` creation.
     */
    order_transaction_hash: string;

    /**
     * Type of `Order`.
     */
    order_type: OrdersAPI.OrderType;

    /**
     * Status of the `Order`.
     */
    status: OrdersAPI.BrokerageOrderStatus;

    /**
     * The `Stock` ID associated with the `Order`
     */
    stock_id: string;

    /**
     * Account ID the order was made for.
     */
    account_id?: string;

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
     * Entity ID of the Order
     */
    entity_id?: string;

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
}

export interface V2ListOrdersParams {
  /**
   * CAIP-2 formatted chain ID of the blockchain the `Order` was made on.
   */
  chain_id: AccountsAPI.Chain;

  /**
   * Fulfillment transaction hash of the `Order`.
   */
  order_fulfillment_transaction_hash?: string;

  /**
   * Transaction hash of the `Order`.
   */
  order_transaction_hash?: string;

  page?: number;

  page_size?: number;
}

V2.MarketData = MarketData;
V2.Entities = Entities;
V2.Accounts = Accounts;

export declare namespace V2 {
  export { type V2ListOrdersResponse as V2ListOrdersResponse, type V2ListOrdersParams as V2ListOrdersParams };

  export {
    MarketData as MarketData,
    type MarketDataRetrieveMarketHoursResponse as MarketDataRetrieveMarketHoursResponse,
  };

  export {
    Entities as Entities,
    type Entity as Entity,
    type EntityListResponse as EntityListResponse,
    type EntityCreateParams as EntityCreateParams,
    type EntityUpdateParams as EntityUpdateParams,
    type EntityListParams as EntityListParams,
  };

  export {
    Accounts as Accounts,
    type Chain as Chain,
    type AccountGetCashBalancesResponse as AccountGetCashBalancesResponse,
    type AccountGetDividendPaymentsResponse as AccountGetDividendPaymentsResponse,
    type AccountGetInterestPaymentsResponse as AccountGetInterestPaymentsResponse,
    type AccountGetPortfolioResponse as AccountGetPortfolioResponse,
    type AccountGetDividendPaymentsParams as AccountGetDividendPaymentsParams,
    type AccountGetInterestPaymentsParams as AccountGetInterestPaymentsParams,
    type AccountMintSandboxTokensParams as AccountMintSandboxTokensParams,
  };
}
