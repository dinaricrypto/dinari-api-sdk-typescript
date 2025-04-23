// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as SplitsAPI from './splits';
import {
  SplitListParams,
  SplitListResponse,
  SplitRetrieveParams,
  SplitRetrieveResponse,
  Splits,
  StockSplit,
} from './splits';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Stocks extends APIResource {
  splits: SplitsAPI.Splits = new SplitsAPI.Splits(this._client);

  /**
   * Returns a list of stocks available for trading.
   */
  list(
    query: StockListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StockListResponse> {
    return this._client.get('/api/v2/market_data/stocks/', { query, ...options });
  }

  /**
   * Returns a list of announced stock dividend details for a specified stock. Note
   * that this data applies only to actual stocks. Yield received for holding dShares
   * may differ from this.
   */
  retrieveDividends(stockID: string, options?: RequestOptions): APIPromise<StockRetrieveDividendsResponse> {
    return this._client.get(path`/api/v2/market_data/stocks/${stockID}/dividends`, options);
  }

  /**
   * Returns a list of historical prices for a specified stock. Each index in the
   * array represents a single tick in a price chart.
   */
  retrieveHistoricalPrices(
    stockID: string,
    query: StockRetrieveHistoricalPricesParams,
    options?: RequestOptions,
  ): APIPromise<StockRetrieveHistoricalPricesResponse> {
    return this._client.get(path`/api/v2/market_data/stocks/${stockID}/historical_prices/`, {
      query,
      ...options,
    });
  }

  /**
   * Get the most recent news articles relating to a stock, including a summary of
   * the article and a link to the original source
   */
  retrieveNews(
    stockID: string,
    query: StockRetrieveNewsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StockRetrieveNewsResponse> {
    return this._client.get(path`/api/v2/market_data/stocks/${stockID}/news`, { query, ...options });
  }

  /**
   * Returns a stock quote for a specified stock.
   */
  retrieveQuote(stockID: string, options?: RequestOptions): APIPromise<StockRetrieveQuoteResponse> {
    return this._client.get(path`/api/v2/market_data/stocks/${stockID}/quote`, options);
  }
}

export type StockListResponse = Array<StockListResponse.StockListResponseItem>;

export namespace StockListResponse {
  /**
   * Information about stock available for trading.
   */
  export interface StockListResponseItem {
    /**
     * Unique identifier for the stock
     */
    id: string;

    /**
     * Whether the stock allows for fractional trading. If it is not fractionable,
     * Dinari only supports limit orders for the stock.
     */
    is_fractionable: boolean;

    /**
     * Stock Name
     */
    name: string;

    /**
     * Ticker symbol of the stock
     */
    symbol: string;

    /**
     * SEC Central Index Key. Refer to
     * [this link](https://www.sec.gov/submit-filings/filer-support-resources/how-do-i-guides/understand-utilize-edgar-ciks-passphrases-access-codes)
     */
    cik?: string | null;

    /**
     * Composite FIGI ID. Refer to [this link](https://www.openfigi.com/about/figi)
     */
    composite_figi?: string | null;

    /**
     * CUSIP ID. Refer to [this link](https://www.cusip.com/identifiers.html)
     */
    cusip?: string | null;

    /**
     * Description of the company and what they do/offer.
     */
    description?: string | null;

    /**
     * Name of Stock for application display
     */
    display_name?: string | null;

    /**
     * The URL of the logo of the stock. The preferred format is svg.
     */
    logo_url?: string | null;
  }
}

export type StockRetrieveDividendsResponse =
  Array<StockRetrieveDividendsResponse.StockRetrieveDividendsResponseItem>;

export namespace StockRetrieveDividendsResponse {
  /**
   * Details of a dividend announcement for a stock.
   */
  export interface StockRetrieveDividendsResponseItem {
    /**
     * Cash amount of the dividend per share owned.
     */
    cash_amount?: number;

    /**
     * Currency in which the dividend is paid.
     */
    currency?: string;

    /**
     * Date on which the dividend was announced.
     */
    declaration_date?: string;

    /**
     * Type of dividend. Dividends that have been paid and/or are expected to be paid
     * on consistent schedules are denoted as CD. Special Cash dividends that have been
     * paid that are infrequent or unusual, and/or can not be expected to occur in the
     * future are denoted as SC. Long-Term and Short-Term capital gain distributions
     * are denoted as LT and ST, respectively.
     */
    dividend_type?: string;

    /**
     * Date on or after which a stock is traded without the right to receive the next
     * dividend payment. (If you purchase a stock on or after the ex-dividend date, you
     * will not receive the upcoming dividend.)
     */
    ex_dividend_date?: string;

    /**
     * Frequency of the dividend. The following values are possible:
     *
     *                     1 - Annual
     *
     *                     2 - Semi-Annual
     *
     *                     4 - Quarterly
     *
     *                     12 - Monthly
     *
     *                     52 - Weekly
     *
     *                     365 - Daily
     */
    frequency?: number;

    /**
     * Date that the dividend is paid out.
     */
    pay_date?: string;

    /**
     * Date that the stock must be held to receive the dividend; set by the company.
     */
    record_date?: string;

    /**
     * Ticker symbol of the stock.
     */
    ticker?: string;
  }
}

export type StockRetrieveHistoricalPricesResponse =
  Array<StockRetrieveHistoricalPricesResponse.StockRetrieveHistoricalPricesResponseItem>;

export namespace StockRetrieveHistoricalPricesResponse {
  /**
   * Datapoint of historical price data for a stock.
   */
  export interface StockRetrieveHistoricalPricesResponseItem {
    /**
     * Close price of the stock in the given time period.
     */
    close: number;

    /**
     * Highest price of the stock in the given time period.
     */
    high: number;

    /**
     * Lowest price of the stock in the given time period.
     */
    low: number;

    /**
     * Open price of the stock in the given time period.
     */
    open: number;

    /**
     * The Unix timestamp in seconds for the start of the aggregate window.
     */
    timestamp: number;
  }
}

export type StockRetrieveNewsResponse = Array<StockRetrieveNewsResponse.StockRetrieveNewsResponseItem>;

export namespace StockRetrieveNewsResponse {
  /**
   * This represents a news article relating to a stock ticker symbol which includes
   * a summary of the article and a link to the original source.
   */
  export interface StockRetrieveNewsResponseItem {
    /**
     * URL of the news article
     */
    article_url: string;

    /**
     * Description of the news article
     */
    description: string;

    /**
     * URL of the image for the news article
     */
    image_url: string;

    /**
     * Timestamp when the article was published
     */
    published_dt: string;

    /**
     * The publisher of the news article
     */
    publisher: string;

    /**
     * The mobile friendly Accelerated Mobile Page (AMP) URL of the news article if
     * available
     */
    amp_url?: string;
  }
}

export interface StockRetrieveQuoteResponse {
  /**
   * The ask price.
   */
  price: number;

  stock_id: string;

  /**
   * The change in price from the previous close.
   */
  change?: number;

  /**
   * The percentage change in price from the previous close.
   */
  change_percent?: number;

  /**
   * The close price for the stock in the given time period.
   */
  close?: number;

  /**
   * The highest price for the stock in the given time period
   */
  high?: number;

  /**
   * The lowest price for the stock in the given time period.
   */
  low?: number;

  /**
   * The most recent close price of the ticker multiplied by weighted outstanding
   * shares
   */
  market_cap?: number;

  /**
   * The open price for the stock in the given time period.
   */
  open?: number;

  /**
   * The close price for the stock for the previous trading day.
   */
  previous_close?: number;

  /**
   * The trading volume of the stock in the given time period.
   */
  volume?: number;

  /**
   * The number of shares outstanding in the given time period
   */
  weighted_shares_outstanding?: number;
}

export interface StockListParams {
  page?: number;

  page_size?: number;

  /**
   * List of stock symbols to query. If not provided, all stocks are returned.
   */
  symbols?: Array<string>;
}

export interface StockRetrieveHistoricalPricesParams {
  /**
   * The timespan of the historical prices to query.
   */
  timespan: 'DAY' | 'WEEK' | 'MONTH' | 'YEAR';
}

export interface StockRetrieveNewsParams {
  /**
   * The number of news articles to return, default is 10 max is 25
   */
  limit?: number;
}

Stocks.Splits = Splits;

export declare namespace Stocks {
  export {
    type StockListResponse as StockListResponse,
    type StockRetrieveDividendsResponse as StockRetrieveDividendsResponse,
    type StockRetrieveHistoricalPricesResponse as StockRetrieveHistoricalPricesResponse,
    type StockRetrieveNewsResponse as StockRetrieveNewsResponse,
    type StockRetrieveQuoteResponse as StockRetrieveQuoteResponse,
    type StockListParams as StockListParams,
    type StockRetrieveHistoricalPricesParams as StockRetrieveHistoricalPricesParams,
    type StockRetrieveNewsParams as StockRetrieveNewsParams,
  };

  export {
    Splits as Splits,
    type StockSplit as StockSplit,
    type SplitRetrieveResponse as SplitRetrieveResponse,
    type SplitListResponse as SplitListResponse,
    type SplitRetrieveParams as SplitRetrieveParams,
    type SplitListParams as SplitListParams,
  };
}
