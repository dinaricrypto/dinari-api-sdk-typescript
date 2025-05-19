// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as OrderFulfillmentsAPI from './order-fulfillments';
import {
  OrderFulfillment,
  OrderFulfillmentQueryParams,
  OrderFulfillmentQueryResponse,
  OrderFulfillments,
} from './order-fulfillments';
import * as OrderRequestsAPI from './order-requests';
import {
  LimitOrderRequestInput,
  OrderRequest,
  OrderRequestCreateLimitBuyParams,
  OrderRequestCreateLimitSellParams,
  OrderRequestCreateMarketBuyParams,
  OrderRequestCreateMarketSellParams,
  OrderRequestListParams,
  OrderRequestListResponse,
  OrderRequests,
} from './order-requests';
import * as OrdersAPI from './orders';
import {
  Order,
  OrderCancelParams,
  OrderListParams,
  OrderListResponse,
  OrderRetrieveFulfillmentsParams,
  OrderRetrieveFulfillmentsResponse,
  OrderRetrieveParams,
  Orders,
} from './orders';
import * as EntitiesAccountsAPI from '../entities/accounts';
import * as WalletAPI from './wallet/wallet';
import { Wallet, WalletResource } from './wallet/wallet';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Accounts extends APIResource {
  wallet: WalletAPI.WalletResource = new WalletAPI.WalletResource(this._client);
  orders: OrdersAPI.Orders = new OrdersAPI.Orders(this._client);
  orderFulfillments: OrderFulfillmentsAPI.OrderFulfillments = new OrderFulfillmentsAPI.OrderFulfillments(
    this._client,
  );
  orderRequests: OrderRequestsAPI.OrderRequests = new OrderRequestsAPI.OrderRequests(this._client);

  /**
   * Get a specific `Account` by its ID.
   */
  retrieve(accountID: string, options?: RequestOptions): APIPromise<EntitiesAccountsAPI.Account> {
    return this._client.get(path`/api/v2/accounts/${accountID}`, options);
  }

  /**
   * Set the `Account` to be inactive. Inactive accounts cannot be used for trading.
   */
  deactivate(accountID: string, options?: RequestOptions): APIPromise<EntitiesAccountsAPI.Account> {
    return this._client.post(path`/api/v2/accounts/${accountID}/deactivate`, options);
  }

  /**
   * Get the cash balances of the `Account`, including stablecoins and other cash
   * equivalents.
   */
  retrieveCash(accountID: string, options?: RequestOptions): APIPromise<AccountRetrieveCashResponse> {
    return this._client.get(path`/api/v2/accounts/${accountID}/cash`, options);
  }

  /**
   * Get dividend payments made to the `Account` from dividend-bearing stock
   * holdings.
   */
  retrieveDividendPayments(
    accountID: string,
    query: AccountRetrieveDividendPaymentsParams,
    options?: RequestOptions,
  ): APIPromise<AccountRetrieveDividendPaymentsResponse> {
    return this._client.get(path`/api/v2/accounts/${accountID}/dividend_payments`, { query, ...options });
  }

  /**
   * Get interest payments made to the `Account` from yield-bearing cash holdings.
   *
   * Currently, the only yield-bearing stablecoin accepted by Dinari is
   * [USD+](https://usd.dinari.com/).
   */
  retrieveInterestPayments(
    accountID: string,
    query: AccountRetrieveInterestPaymentsParams,
    options?: RequestOptions,
  ): APIPromise<AccountRetrieveInterestPaymentsResponse> {
    return this._client.get(path`/api/v2/accounts/${accountID}/interest_payments`, { query, ...options });
  }

  /**
   * Get the portfolio of the `Account`, excluding cash equivalents such as
   * stablecoins.
   */
  retrievePortfolio(
    accountID: string,
    options?: RequestOptions,
  ): APIPromise<AccountRetrievePortfolioResponse> {
    return this._client.get(path`/api/v2/accounts/${accountID}/portfolio`, options);
  }
}

export type AccountRetrieveCashResponse = Array<AccountRetrieveCashResponse.AccountRetrieveCashResponseItem>;

export namespace AccountRetrieveCashResponse {
  /**
   * Balance of a payment token in an `Account`.
   */
  export interface AccountRetrieveCashResponseItem {
    /**
     * Total amount of the payment token in the `Account`.
     */
    amount: number;

    /**
     * CAIP-2 chain ID of the payment token.
     */
    chain_id: 'eip155:1' | 'eip155:42161' | 'eip155:8453' | 'eip155:81457' | 'eip155:7887' | 'eip155:98866';

    /**
     * Symbol of the payment token.
     */
    symbol: string;

    /**
     * Address of the payment token.
     */
    token_address: string;
  }
}

export type AccountRetrieveDividendPaymentsResponse =
  Array<AccountRetrieveDividendPaymentsResponse.AccountRetrieveDividendPaymentsResponseItem>;

export namespace AccountRetrieveDividendPaymentsResponse {
  /**
   * Represents a dividend payment event for an `Account`.
   */
  export interface AccountRetrieveDividendPaymentsResponseItem {
    /**
     * Amount of the dividend paid.
     */
    amount: number;

    /**
     * Currency in which the dividend was paid. (e.g. USD)
     */
    currency: string;

    /**
     * Date the dividend was distributed to the account. ISO 8601 format, YYYY-MM-DD.
     */
    payment_date: string;

    /**
     * ID of the `Stock` for which the dividend was paid.
     */
    stock_id: string;
  }
}

export type AccountRetrieveInterestPaymentsResponse =
  Array<AccountRetrieveInterestPaymentsResponse.AccountRetrieveInterestPaymentsResponseItem>;

export namespace AccountRetrieveInterestPaymentsResponse {
  /**
   * An object representing an interest payment from stablecoin holdings.
   */
  export interface AccountRetrieveInterestPaymentsResponseItem {
    /**
     * Amount of interest paid.
     */
    amount: number;

    /**
     * Currency in which the interest was paid (e.g. USD).
     */
    currency: string;

    /**
     * Date of interest payment in US Eastern time zone. ISO 8601 format, YYYY-MM-DD.
     */
    payment_date: string;
  }
}

/**
 * Balance information of `Stock` assets in your `Account`.
 */
export interface AccountRetrievePortfolioResponse {
  /**
   * Balance details for all owned `Stocks`.
   */
  assets: Array<AccountRetrievePortfolioResponse.Asset>;
}

export namespace AccountRetrievePortfolioResponse {
  /**
   * Balance of a dShare in an `Account`.
   */
  export interface Asset {
    /**
     * Total amount of the dShare asset token in the `Account`.
     */
    amount: number;

    /**
     * CAIP-2 chain ID of the blockchain where the dShare asset token exists.
     */
    chain_id: 'eip155:1' | 'eip155:42161' | 'eip155:8453' | 'eip155:81457' | 'eip155:7887' | 'eip155:98866';

    /**
     * ID of the underlying `Stock` represented by the dShare asset token.
     */
    stock_id: string;

    /**
     * Token symbol of the dShare asset token.
     */
    symbol: string;

    /**
     * Address of the dShare asset token.
     */
    token_address: string;
  }
}

export interface AccountRetrieveDividendPaymentsParams {
  /**
   * End date, exclusive, in US Eastern time zone. ISO 8601 format, YYYY-MM-DD.
   */
  end_date: string;

  /**
   * Start date, inclusive, in US Eastern time zone. ISO 8601 format, YYYY-MM-DD.
   */
  start_date: string;

  page?: number;

  page_size?: number;

  /**
   * Optional ID of the `Stock` to filter by
   */
  stock_id?: string;
}

export interface AccountRetrieveInterestPaymentsParams {
  /**
   * End date, exclusive, in US Eastern time zone. ISO 8601 format, YYYY-MM-DD.
   */
  end_date: string;

  /**
   * Start date, inclusive, in US Eastern time zone. ISO 8601 format, YYYY-MM-DD.
   */
  start_date: string;

  page?: number;

  page_size?: number;
}

Accounts.WalletResource = WalletResource;
Accounts.Orders = Orders;
Accounts.OrderFulfillments = OrderFulfillments;
Accounts.OrderRequests = OrderRequests;

export declare namespace Accounts {
  export {
    type AccountRetrieveCashResponse as AccountRetrieveCashResponse,
    type AccountRetrieveDividendPaymentsResponse as AccountRetrieveDividendPaymentsResponse,
    type AccountRetrieveInterestPaymentsResponse as AccountRetrieveInterestPaymentsResponse,
    type AccountRetrievePortfolioResponse as AccountRetrievePortfolioResponse,
    type AccountRetrieveDividendPaymentsParams as AccountRetrieveDividendPaymentsParams,
    type AccountRetrieveInterestPaymentsParams as AccountRetrieveInterestPaymentsParams,
  };

  export { WalletResource as WalletResource, type Wallet as Wallet };

  export {
    Orders as Orders,
    type Order as Order,
    type OrderListResponse as OrderListResponse,
    type OrderRetrieveFulfillmentsResponse as OrderRetrieveFulfillmentsResponse,
    type OrderRetrieveParams as OrderRetrieveParams,
    type OrderListParams as OrderListParams,
    type OrderCancelParams as OrderCancelParams,
    type OrderRetrieveFulfillmentsParams as OrderRetrieveFulfillmentsParams,
  };

  export {
    OrderFulfillments as OrderFulfillments,
    type OrderFulfillment as OrderFulfillment,
    type OrderFulfillmentQueryResponse as OrderFulfillmentQueryResponse,
    type OrderFulfillmentQueryParams as OrderFulfillmentQueryParams,
  };

  export {
    OrderRequests as OrderRequests,
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
