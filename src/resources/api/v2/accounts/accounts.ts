// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as OrderFulfillmentsAPI from './order-fulfillments';
import {
  OrderFulfillment,
  OrderFulfillmentQueryResponse,
  OrderFulfillmentRetrieveParams,
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
  OrderRequestListResponse,
  OrderRequestRetrieveParams,
  OrderRequests,
} from './order-requests';
import * as OrdersAPI from './orders';
import {
  Order,
  OrderCancelParams,
  OrderGetEstimatedFeeParams,
  OrderGetEstimatedFeeResponse,
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
   * Retrieves a specific account by its ID.
   */
  retrieve(accountID: string, options?: RequestOptions): APIPromise<EntitiesAccountsAPI.Account> {
    return this._client.get(path`/api/v2/accounts/${accountID}`, options);
  }

  /**
   * Sets the account to be inactive.
   */
  deactivate(accountID: string, options?: RequestOptions): APIPromise<EntitiesAccountsAPI.Account> {
    return this._client.post(path`/api/v2/accounts/${accountID}/deactivate`, options);
  }

  /**
   * Retrieves the cash amount in the account.
   */
  retrieveCash(accountID: string, options?: RequestOptions): APIPromise<AccountRetrieveCashResponse> {
    return this._client.get(path`/api/v2/accounts/${accountID}/cash`, options);
  }

  /**
   * Retrieves dividend payments made to the account.
   */
  retrieveDividendPayments(
    accountID: string,
    options?: RequestOptions,
  ): APIPromise<AccountRetrieveDividendPaymentsResponse> {
    return this._client.get(path`/api/v2/accounts/${accountID}/dividend_payments`, options);
  }

  /**
   * Retrieves interest payments made to the account.
   */
  retrieveInterestPayments(
    accountID: string,
    options?: RequestOptions,
  ): APIPromise<AccountRetrieveInterestPaymentsResponse> {
    return this._client.get(path`/api/v2/accounts/${accountID}/interest_payments`, options);
  }

  /**
   * Retrieves the portfolio of the account, sans cash equivalents.
   */
  retrievePortfolio(
    accountID: string,
    options?: RequestOptions,
  ): APIPromise<AccountRetrievePortfolioResponse> {
    return this._client.get(path`/api/v2/accounts/${accountID}/portfolio`, options);
  }
}

/**
 * Balance of cash and cash equivalents currently in the account.
 */
export interface AccountRetrieveCashResponse {
  /**
   * Total amount of cash and cash equivalents
   */
  amount: number;

  /**
   * Currency (e.g. USD)
   */
  currency: string;
}

export type AccountRetrieveDividendPaymentsResponse =
  Array<AccountRetrieveDividendPaymentsResponse.AccountRetrieveDividendPaymentsResponseItem>;

export namespace AccountRetrieveDividendPaymentsResponse {
  /**
   * AccountDividendPayment represents a stock dividend payment event for an account.
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
     * Date the dividend was distributed to the account.
     */
    payment_date: string;

    /**
     * ID of the stock for which the dividend was paid.
     */
    stock_id: string;
  }
}

export type AccountRetrieveInterestPaymentsResponse =
  Array<AccountRetrieveInterestPaymentsResponse.AccountRetrieveInterestPaymentsResponseItem>;

export namespace AccountRetrieveInterestPaymentsResponse {
  /**
   * An object representing interest payment details.
   */
  export interface AccountRetrieveInterestPaymentsResponseItem {
    /**
     * Amount of interest paid
     */
    amount: number;

    /**
     * Type of currency (e.g. USD)
     */
    currency: string;

    /**
     * Date of interest payment. In US Eastern time zone
     */
    payment_date: string;
  }
}

/**
 * This is an object representing the balance of cash and stock assets in your
 * account.
 */
export interface AccountRetrievePortfolioResponse {
  /**
   * Stock Balance details for all owned stocks
   */
  assets: Array<AccountRetrievePortfolioResponse.Asset>;
}

export namespace AccountRetrievePortfolioResponse {
  /**
   * Balance of a stock in the account
   */
  export interface Asset {
    /**
     * Total amount of the stock
     */
    amount: number;

    /**
     * Total market value of the stock
     */
    market_value: number;

    /**
     * ID of Stock
     */
    stock_id: string;
  }
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
  };

  export { WalletResource as WalletResource, type Wallet as Wallet };

  export {
    Orders as Orders,
    type Order as Order,
    type OrderListResponse as OrderListResponse,
    type OrderGetEstimatedFeeResponse as OrderGetEstimatedFeeResponse,
    type OrderRetrieveFulfillmentsResponse as OrderRetrieveFulfillmentsResponse,
    type OrderRetrieveParams as OrderRetrieveParams,
    type OrderCancelParams as OrderCancelParams,
    type OrderGetEstimatedFeeParams as OrderGetEstimatedFeeParams,
    type OrderRetrieveFulfillmentsParams as OrderRetrieveFulfillmentsParams,
  };

  export {
    OrderFulfillments as OrderFulfillments,
    type OrderFulfillment as OrderFulfillment,
    type OrderFulfillmentQueryResponse as OrderFulfillmentQueryResponse,
    type OrderFulfillmentRetrieveParams as OrderFulfillmentRetrieveParams,
  };

  export {
    OrderRequests as OrderRequests,
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
