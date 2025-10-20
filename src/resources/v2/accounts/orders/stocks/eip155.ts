// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as Eip155API from './eip155';
import * as AccountsAPI from '../../accounts';
import * as OrdersAPI from '../orders';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Eip155 extends APIResource {
  /**
   * Get fee quote data for an `Order` to be placed on Dinari's EVM smart contracts.
   *
   * Dinari's EVM smart contracts require a fee quote to be provided when placing an
   * `Order`. Use this method to retrieve the quote.
   *
   * The `order_fee_contract_object` property contains the opaque fee quote structure
   * to be used.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v2.accounts.orders.stocks.eip155.getFeeQuote(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       chain_id: 'eip155:1',
   *       order_side: 'BUY',
   *       order_tif: 'DAY',
   *       order_type: 'MARKET',
   *       payment_token: 'payment_token',
   *       stock_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
   * ```
   */
  getFeeQuote(
    accountID: string,
    body: Eip155GetFeeQuoteParams,
    options?: RequestOptions,
  ): APIPromise<Eip155GetFeeQuoteResponse> {
    return this._client.post(path`/api/v2/accounts/${accountID}/orders/stocks/eip155/fee_quote`, {
      body,
      ...options,
    });
  }

  /**
   * Create a set of transactions to create an `Order` using Dinari's EVM smart
   * contracts.
   *
   * This is a convenience method to prepare the transactions needed to create an
   * `Order` using Dinari's EVM smart contracts. Once signed, the transactions can be
   * sent to the EVM network to create the order. Note that the fee quote is already
   * included in the transactions, so no additional fee quote lookup is needed.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v2.accounts.orders.stocks.eip155.prepareOrder(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       chain_id: 'eip155:1',
   *       order_side: 'BUY',
   *       order_tif: 'DAY',
   *       order_type: 'MARKET',
   *       payment_token: 'payment_token',
   *       stock_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
   * ```
   */
  prepareOrder(
    accountID: string,
    body: Eip155PrepareOrderParams,
    options?: RequestOptions,
  ): APIPromise<Eip155PrepareOrderResponse> {
    return this._client.post(path`/api/v2/accounts/${accountID}/orders/stocks/eip155/prepare`, {
      body,
      ...options,
    });
  }
}

export interface OrderFeeAmount {
  /**
   * The quantity of the fee paid via payment token in
   * [ETH](https://ethereum.org/en/developers/docs/intro-to-ether/#what-is-ether).
   */
  fee_in_eth: number;

  /**
   * The quantity of the fee paid via payment token in
   * [wei](https://ethereum.org/en/developers/docs/intro-to-ether/#denominations).
   */
  fee_in_wei: string;

  /**
   * Type of fee.
   */
  type: 'SPONSORED_NETWORK' | 'NETWORK' | 'TRADING' | 'ORDER' | 'PARTNER_ORDER' | 'PARTNER_TRADING';
}

export interface Eip155GetFeeQuoteResponse {
  /**
   * CAIP-2 chain ID of the blockchain where the `Order` will be placed
   */
  chain_id: AccountsAPI.Chain;

  /**
   * The total quantity of the fees paid via payment token.
   */
  fee: number;

  /**
   * Opaque fee quote object to pass into the contract when creating an `Order`
   * directly through Dinari's smart contracts.
   */
  order_fee_contract_object: Eip155GetFeeQuoteResponse.OrderFeeContractObject;
}

export namespace Eip155GetFeeQuoteResponse {
  /**
   * Opaque fee quote object to pass into the contract when creating an `Order`
   * directly through Dinari's smart contracts.
   */
  export interface OrderFeeContractObject {
    /**
     * EVM chain ID of the blockchain where the `Order` will be placed.
     */
    chain_id: 42161 | 1 | 8453 | 81457 | 98866 | 202110;

    /**
     * `FeeQuote` structure to pass into contracts.
     */
    fee_quote: OrderFeeContractObject.FeeQuote;

    /**
     * Signed `FeeQuote` structure to pass into contracts.
     */
    fee_quote_signature: string;

    /**
     * Breakdown of fees
     */
    fees: Array<Eip155API.OrderFeeAmount>;

    /**
     * Address of payment token used for fees
     */
    payment_token: string;
  }

  export namespace OrderFeeContractObject {
    /**
     * `FeeQuote` structure to pass into contracts.
     */
    export interface FeeQuote {
      deadline: number;

      fee: string;

      orderId: string;

      requester: string;

      timestamp: number;
    }
  }
}

/**
 * Prepared transactions to place an order on an EIP-155 (EVM) chain.
 */
export interface Eip155PrepareOrderResponse {
  /**
   * Fees included in the order transaction. Provided here as a reference.
   */
  fees: Array<OrderFeeAmount>;

  /**
   * List of contract addresses and call data for building transactions to be signed
   * and submitted on chain. Transactions should be submitted on chain in the order
   * provided in this property.
   */
  transaction_data: Array<Eip155PrepareOrderResponse.TransactionData>;
}

export namespace Eip155PrepareOrderResponse {
  /**
   * Information about a transaction to be signed with a wallet and submitted on
   * chain.
   *
   * Typically the transactions will include an ERC20 approval transaction to allow
   * the Dinari smart contract to spend the payment token or Dshare asset tokens on
   * behalf of the user, followed by a transaction to call the Dinari smart contract
   * to create an `Order`.
   */
  export interface TransactionData {
    /**
     * [JSON ABI](https://docs.soliditylang.org/en/v0.8.30/abi-spec.html#json) of the
     * smart contract function encoded in the transaction. Provided for informational
     * purposes.
     */
    abi: unknown;

    /**
     * Arguments to the smart contract function encoded in the transaction. Provided
     * for informational purposes.
     */
    args: unknown;

    /**
     * Smart contract address that the transaction should call.
     */
    contract_address: string;

    /**
     * Hex-encoded function call.
     */
    data: string;
  }
}

export interface Eip155GetFeeQuoteParams {
  /**
   * CAIP-2 chain ID of the blockchain where the `Order` will be placed.
   */
  chain_id: AccountsAPI.Chain;

  /**
   * Indicates whether `Order` is a buy or sell.
   */
  order_side: OrdersAPI.OrderSide;

  /**
   * Time in force. Indicates how long `Order` is valid for.
   */
  order_tif: OrdersAPI.OrderTif;

  /**
   * Type of `Order`.
   */
  order_type: OrdersAPI.OrderType;

  /**
   * Address of payment token.
   */
  payment_token: string;

  /**
   * The ID of the `Stock` for which the `Order` is being placed.
   */
  stock_id: string;

  /**
   * Amount of dShare asset tokens involved. Required for limit `Orders` and market
   * sell `Orders`.
   */
  asset_token_quantity?: number;

  /**
   * Price per asset in the asset's native currency. USD for US equities and ETFs.
   * Required for limit `Orders`.
   */
  limit_price?: number;

  /**
   * Amount of payment tokens involved. Required for market buy `Orders`.
   */
  payment_token_quantity?: number;
}

export interface Eip155PrepareOrderParams {
  /**
   * CAIP-2 chain ID of the blockchain where the `Order` will be placed.
   */
  chain_id: AccountsAPI.Chain;

  /**
   * Indicates whether `Order` is a buy or sell.
   */
  order_side: OrdersAPI.OrderSide;

  /**
   * Time in force. Indicates how long `Order` is valid for.
   */
  order_tif: OrdersAPI.OrderTif;

  /**
   * Type of `Order`.
   */
  order_type: OrdersAPI.OrderType;

  /**
   * Address of payment token.
   */
  payment_token: string;

  /**
   * The ID of the `Stock` for which the `Order` is being placed.
   */
  stock_id: string;

  /**
   * Amount of dShare asset tokens involved. Required for limit `Orders` and market
   * sell `Orders`.
   */
  asset_token_quantity?: number;

  /**
   * Price per asset in the asset's native currency. USD for US equities and ETFs.
   * Required for limit `Orders`.
   */
  limit_price?: number;

  /**
   * Amount of payment tokens involved. Required for market buy `Orders`.
   */
  payment_token_quantity?: number;
}

export declare namespace Eip155 {
  export {
    type OrderFeeAmount as OrderFeeAmount,
    type Eip155GetFeeQuoteResponse as Eip155GetFeeQuoteResponse,
    type Eip155PrepareOrderResponse as Eip155PrepareOrderResponse,
    type Eip155GetFeeQuoteParams as Eip155GetFeeQuoteParams,
    type Eip155PrepareOrderParams as Eip155PrepareOrderParams,
  };
}
