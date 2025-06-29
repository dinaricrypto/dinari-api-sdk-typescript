// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as StocksAPI from './stocks/stocks';
import {
  StockListParams,
  StockListResponse,
  StockRetrieveCurrentPriceResponse,
  StockRetrieveCurrentQuoteResponse,
  StockRetrieveDividendsResponse,
  StockRetrieveHistoricalPricesParams,
  StockRetrieveHistoricalPricesResponse,
  StockRetrieveNewsParams,
  StockRetrieveNewsResponse,
  Stocks,
} from './stocks/stocks';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class MarketData extends APIResource {
  stocks: StocksAPI.Stocks = new StocksAPI.Stocks(this._client);

  /**
   * Get the market hours for the current trading session and next open trading
   * session.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v2.marketData.retrieveMarketHours();
   * ```
   */
  retrieveMarketHours(options?: RequestOptions): APIPromise<MarketDataRetrieveMarketHoursResponse> {
    return this._client.get('/api/v2/market_data/market_hours/', options);
  }
}

export interface MarketDataRetrieveMarketHoursResponse {
  /**
   * Whether or not the market is open
   */
  is_market_open: boolean;

  /**
   * Datetime at which the next session closes. ISO 8601 timestamp.
   */
  next_session_close_dt: string;

  /**
   * Datetime at which the next session opens. ISO 8601 timestamp.
   */
  next_session_open_dt: string;

  /**
   * Datetime at which the current session closes. `null` if the market is currently
   * closed. ISO 8601 timestamp.
   */
  current_session_close_dt?: string;

  /**
   * Datetime at which the current session opened. `null` if the market is currently
   * closed. ISO 8601 timestamp.
   */
  current_session_open_dt?: string;
}

MarketData.Stocks = Stocks;

export declare namespace MarketData {
  export { type MarketDataRetrieveMarketHoursResponse as MarketDataRetrieveMarketHoursResponse };

  export {
    Stocks as Stocks,
    type StockListResponse as StockListResponse,
    type StockRetrieveCurrentPriceResponse as StockRetrieveCurrentPriceResponse,
    type StockRetrieveCurrentQuoteResponse as StockRetrieveCurrentQuoteResponse,
    type StockRetrieveDividendsResponse as StockRetrieveDividendsResponse,
    type StockRetrieveHistoricalPricesResponse as StockRetrieveHistoricalPricesResponse,
    type StockRetrieveNewsResponse as StockRetrieveNewsResponse,
    type StockListParams as StockListParams,
    type StockRetrieveHistoricalPricesParams as StockRetrieveHistoricalPricesParams,
    type StockRetrieveNewsParams as StockRetrieveNewsParams,
  };
}
