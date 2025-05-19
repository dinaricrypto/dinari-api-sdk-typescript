// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountsAPI from './accounts';
import * as OrderFulfillmentsAPI from './order-fulfillments';
import {
  Fulfillment,
  OrderFulfillmentQueryParams,
  OrderFulfillmentQueryResponse,
  OrderFulfillmentRetrieveParams,
  OrderFulfillments,
} from './order-fulfillments';
import * as OrderRequestsAPI from './order-requests';
import {
  CreateLimitOrderInput,
  OrderRequest,
  OrderRequestCreateLimitBuyParams,
  OrderRequestCreateLimitSellParams,
  OrderRequestCreateMarketBuyParams,
  OrderRequestCreateMarketSellParams,
  OrderRequestListParams,
  OrderRequestListResponse,
  OrderRequestRetrieveParams,
  OrderRequests,
} from './order-requests';
import * as OrdersAPI from './orders';
import {
  BrokerageOrderStatus,
  Order,
  OrderCancelParams,
  OrderGetFeeQuoteParams,
  OrderGetFeeQuoteResponse,
  OrderGetFulfillmentsParams,
  OrderGetFulfillmentsResponse,
  OrderListParams,
  OrderListResponse,
  OrderRetrieveParams,
  OrderSide,
  OrderTif,
  OrderType,
  Orders,
} from './orders';
import * as WithdrawalRequestsAPI from './withdrawal-requests';
import {
  WithdrawalRequest,
  WithdrawalRequestCreateParams,
  WithdrawalRequestListParams,
  WithdrawalRequestListResponse,
  WithdrawalRequestRetrieveParams,
  WithdrawalRequests,
} from './withdrawal-requests';
import * as WithdrawalsAPI from './withdrawals';
import {
  Withdrawal,
  WithdrawalListParams,
  WithdrawalListResponse,
  WithdrawalRetrieveParams,
  Withdrawals,
} from './withdrawals';
import * as EntitiesAccountsAPI from '../entities/accounts';
import * as WalletAPI from './wallet/wallet';
import { Wallet, WalletResource } from './wallet/wallet';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Accounts extends APIResource {
  wallet: WalletAPI.WalletResource = new WalletAPI.WalletResource(this._client);
  orders: OrdersAPI.Orders = new OrdersAPI.Orders(this._client);
  orderFulfillments: OrderFulfillmentsAPI.OrderFulfillments = new OrderFulfillmentsAPI.OrderFulfillments(
    this._client,
  );
  orderRequests: OrderRequestsAPI.OrderRequests = new OrderRequestsAPI.OrderRequests(this._client);
  withdrawalRequests: WithdrawalRequestsAPI.WithdrawalRequests = new WithdrawalRequestsAPI.WithdrawalRequests(
    this._client,
  );
  withdrawals: WithdrawalsAPI.Withdrawals = new WithdrawalsAPI.Withdrawals(this._client);

  /**
   * Get a specific `Account` by its ID.
   *
   * @example
   * ```ts
   * const account = await client.v2.accounts.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(accountID: string, options?: RequestOptions): APIPromise<EntitiesAccountsAPI.Account> {
    return this._client.get(path`/api/v2/accounts/${accountID}`, options);
  }

  /**
   * Set the `Account` to be inactive. Inactive accounts cannot be used for trading.
   *
   * @example
   * ```ts
   * const account = await client.v2.accounts.deactivate(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  deactivate(accountID: string, options?: RequestOptions): APIPromise<EntitiesAccountsAPI.Account> {
    return this._client.post(path`/api/v2/accounts/${accountID}/deactivate`, options);
  }

  /**
   * Get the cash balances of the `Account`, including stablecoins and other cash
   * equivalents.
   *
   * @example
   * ```ts
   * const response = await client.v2.accounts.getCashBalances(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  getCashBalances(accountID: string, options?: RequestOptions): APIPromise<AccountGetCashBalancesResponse> {
    return this._client.get(path`/api/v2/accounts/${accountID}/cash`, options);
  }

  /**
   * Get dividend payments made to the `Account` from dividend-bearing stock
   * holdings.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v2.accounts.getDividendPayments(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { end_date: '2019-12-27', start_date: '2019-12-27' },
   *   );
   * ```
   */
  getDividendPayments(
    accountID: string,
    query: AccountGetDividendPaymentsParams,
    options?: RequestOptions,
  ): APIPromise<AccountGetDividendPaymentsResponse> {
    return this._client.get(path`/api/v2/accounts/${accountID}/dividend_payments`, { query, ...options });
  }

  /**
   * Get interest payments made to the `Account` from yield-bearing cash holdings.
   *
   * Currently, the only yield-bearing stablecoin accepted by Dinari is
   * [USD+](https://usd.dinari.com/).
   *
   * @example
   * ```ts
   * const response =
   *   await client.v2.accounts.getInterestPayments(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { end_date: '2019-12-27', start_date: '2019-12-27' },
   *   );
   * ```
   */
  getInterestPayments(
    accountID: string,
    query: AccountGetInterestPaymentsParams,
    options?: RequestOptions,
  ): APIPromise<AccountGetInterestPaymentsResponse> {
    return this._client.get(path`/api/v2/accounts/${accountID}/interest_payments`, { query, ...options });
  }

  /**
   * Get the portfolio of the `Account`, excluding cash equivalents such as
   * stablecoins.
   *
   * @example
   * ```ts
   * const response = await client.v2.accounts.getPortfolio(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  getPortfolio(accountID: string, options?: RequestOptions): APIPromise<AccountGetPortfolioResponse> {
    return this._client.get(path`/api/v2/accounts/${accountID}/portfolio`, options);
  }

  /**
   * Mints 1,000 mockUSD sandbox payment tokens to the `Wallet` connected to the
   * `Account`.
   *
   * This feature is only supported in sandbox mode.
   *
   * @example
   * ```ts
   * await client.v2.accounts.mintSandboxTokens(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  mintSandboxTokens(
    accountID: string,
    body: AccountMintSandboxTokensParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/api/v2/accounts/${accountID}/faucet`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type Chain =
  | 'eip155:1'
  | 'eip155:42161'
  | 'eip155:8453'
  | 'eip155:81457'
  | 'eip155:7887'
  | 'eip155:98866'
  | 'eip155:11155111'
  | 'eip155:421614'
  | 'eip155:84532'
  | 'eip155:168587773'
  | 'eip155:98867'
  | 'eip155:31337'
  | 'eip155:1337';

export type AccountGetCashBalancesResponse =
  Array<AccountGetCashBalancesResponse.AccountGetCashBalancesResponseItem>;

export namespace AccountGetCashBalancesResponse {
  /**
   * Balance of a payment token in an `Account`.
   */
  export interface AccountGetCashBalancesResponseItem {
    /**
     * Total amount of the payment token in the `Account`.
     */
    amount: number;

    /**
     * CAIP-2 chain ID of the payment token.
     */
    chain_id: AccountsAPI.Chain;

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

export type AccountGetDividendPaymentsResponse =
  Array<AccountGetDividendPaymentsResponse.AccountGetDividendPaymentsResponseItem>;

export namespace AccountGetDividendPaymentsResponse {
  /**
   * Represents a dividend payment event for an `Account`.
   */
  export interface AccountGetDividendPaymentsResponseItem {
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

export type AccountGetInterestPaymentsResponse =
  Array<AccountGetInterestPaymentsResponse.AccountGetInterestPaymentsResponseItem>;

export namespace AccountGetInterestPaymentsResponse {
  /**
   * An object representing an interest payment from stablecoin holdings.
   */
  export interface AccountGetInterestPaymentsResponseItem {
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
export interface AccountGetPortfolioResponse {
  /**
   * Balance details for all owned `Stocks`.
   */
  assets: Array<AccountGetPortfolioResponse.Asset>;
}

export namespace AccountGetPortfolioResponse {
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
    chain_id: AccountsAPI.Chain;

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

export interface AccountGetDividendPaymentsParams {
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

export interface AccountGetInterestPaymentsParams {
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

export interface AccountMintSandboxTokensParams {
  /**
   * CAIP-2 chain ID of blockchain in which to mint the sandbox payment tokens. If
   * none specified, defaults to eip155:421614. If the `Account` is linked to a
   * Dinari-managed `Wallet`, only eip155:42161 is allowed.
   */
  chain_id?: Chain;
}

Accounts.WalletResource = WalletResource;
Accounts.Orders = Orders;
Accounts.OrderFulfillments = OrderFulfillments;
Accounts.OrderRequests = OrderRequests;
Accounts.WithdrawalRequests = WithdrawalRequests;
Accounts.Withdrawals = Withdrawals;

export declare namespace Accounts {
  export {
    type Chain as Chain,
    type AccountGetCashBalancesResponse as AccountGetCashBalancesResponse,
    type AccountGetDividendPaymentsResponse as AccountGetDividendPaymentsResponse,
    type AccountGetInterestPaymentsResponse as AccountGetInterestPaymentsResponse,
    type AccountGetPortfolioResponse as AccountGetPortfolioResponse,
    type AccountGetDividendPaymentsParams as AccountGetDividendPaymentsParams,
    type AccountGetInterestPaymentsParams as AccountGetInterestPaymentsParams,
    type AccountMintSandboxTokensParams as AccountMintSandboxTokensParams,
  };

  export { WalletResource as WalletResource, type Wallet as Wallet };

  export {
    Orders as Orders,
    type BrokerageOrderStatus as BrokerageOrderStatus,
    type Order as Order,
    type OrderSide as OrderSide,
    type OrderTif as OrderTif,
    type OrderType as OrderType,
    type OrderListResponse as OrderListResponse,
    type OrderGetFeeQuoteResponse as OrderGetFeeQuoteResponse,
    type OrderGetFulfillmentsResponse as OrderGetFulfillmentsResponse,
    type OrderRetrieveParams as OrderRetrieveParams,
    type OrderListParams as OrderListParams,
    type OrderCancelParams as OrderCancelParams,
    type OrderGetFeeQuoteParams as OrderGetFeeQuoteParams,
    type OrderGetFulfillmentsParams as OrderGetFulfillmentsParams,
  };

  export {
    OrderFulfillments as OrderFulfillments,
    type Fulfillment as Fulfillment,
    type OrderFulfillmentQueryResponse as OrderFulfillmentQueryResponse,
    type OrderFulfillmentRetrieveParams as OrderFulfillmentRetrieveParams,
    type OrderFulfillmentQueryParams as OrderFulfillmentQueryParams,
  };

  export {
    OrderRequests as OrderRequests,
    type CreateLimitOrderInput as CreateLimitOrderInput,
    type OrderRequest as OrderRequest,
    type OrderRequestListResponse as OrderRequestListResponse,
    type OrderRequestRetrieveParams as OrderRequestRetrieveParams,
    type OrderRequestListParams as OrderRequestListParams,
    type OrderRequestCreateLimitBuyParams as OrderRequestCreateLimitBuyParams,
    type OrderRequestCreateLimitSellParams as OrderRequestCreateLimitSellParams,
    type OrderRequestCreateMarketBuyParams as OrderRequestCreateMarketBuyParams,
    type OrderRequestCreateMarketSellParams as OrderRequestCreateMarketSellParams,
  };

  export {
    WithdrawalRequests as WithdrawalRequests,
    type WithdrawalRequest as WithdrawalRequest,
    type WithdrawalRequestListResponse as WithdrawalRequestListResponse,
    type WithdrawalRequestCreateParams as WithdrawalRequestCreateParams,
    type WithdrawalRequestRetrieveParams as WithdrawalRequestRetrieveParams,
    type WithdrawalRequestListParams as WithdrawalRequestListParams,
  };

  export {
    Withdrawals as Withdrawals,
    type Withdrawal as Withdrawal,
    type WithdrawalListResponse as WithdrawalListResponse,
    type WithdrawalRetrieveParams as WithdrawalRetrieveParams,
    type WithdrawalListParams as WithdrawalListParams,
  };
}
