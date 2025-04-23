// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Splits extends APIResource {
  /**
   * Returns a list of stock splits for a given stock id. The splits are ordered by
   * the date they were created, with the most recent split first.
   *
   * In an example 10-for-1 stock split, trading will be halted for the stock at the
   * end of the `payable_date`, as the split transitions from `PENDING` to
   * `IN_PROGRESS`. This usually occurs over a weekend to minimize trading
   * disruptions. Each share of stock owned by a shareholder will then be converted
   * into 10 shares, and the split becomes `COMPLETE` as trading resumes on the
   * `ex_date` with new split-adjusted prices.
   */
  retrieve(
    stockID: string,
    query: SplitRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SplitRetrieveResponse> {
    return this._client.get(path`/api/v2/market_data/stocks/${stockID}/splits`, { query, ...options });
  }

  /**
   * Returns a list of stock splits. The splits are ordered by the date they were
   * created, with the most recent split first.
   *
   * In an example 10-for-1 stock split, trading will be halted for the stock at the
   * end of the `payable_date`, as the split transitions from `PENDING` to
   * `IN_PROGRESS`. This usually occurs over a weekend to minimize trading
   * disruptions. Each share of stock owned by a shareholder will then be converted
   * into 10 shares, and the split becomes `COMPLETE` as trading resumes on the
   * `ex_date` with new split-adjusted prices.
   */
  list(
    query: SplitListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SplitListResponse> {
    return this._client.get('/api/v2/market_data/stocks/splits', { query, ...options });
  }
}

/**
 * StockSplit contains data for a stock split, including the stock id, the number
 * of shares before and after the split, the record date, payable date, ex-date,
 * and the status of the split.
 */
export interface StockSplit {
  /**
   * Unique identifier for the stock split
   */
  id: string;

  /**
   * Ex-date of the split (Eastern Time Zone). First day the stock trades at
   * post-split prices. Typically is last in the process, and the main important date
   * for investors.
   */
  ex_date: string;

  /**
   * Payable date (Eastern Time Zone) of the split. Date when company will send out
   * the new shares. Mainly for record keeping by brokerages, who forward the shares
   * to eventual owners. Typically is second in the process.
   */
  payable_date: string;

  /**
   * Record date (Eastern Time Zone) of the split, for company to determine where to
   * send their new shares. Mainly for record keeping by brokerages, who forward the
   * shares to eventual owners. Typically is first in the process.
   */
  record_date: string;

  /**
   * The number of shares before the split. In a 10-for-1 split, this would be 1.
   */
  split_from: number;

  /**
   * The number of shares after the split. In a 10-for-1 split, this would be 10.
   */
  split_to: number;

  /**
   * The status of Dinari's processing of the split. Stocks for which a split is
   * `IN_PROGRESS` will not be available for trading.
   */
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETE';

  /**
   * Reference to the id of the stock for this split
   */
  stock_id: string;
}

export type SplitRetrieveResponse = Array<StockSplit>;

export type SplitListResponse = Array<StockSplit>;

export interface SplitRetrieveParams {
  page?: number;

  page_size?: number;
}

export interface SplitListParams {
  page?: number;

  page_size?: number;
}

export declare namespace Splits {
  export {
    type StockSplit as StockSplit,
    type SplitRetrieveResponse as SplitRetrieveResponse,
    type SplitListResponse as SplitListResponse,
    type SplitRetrieveParams as SplitRetrieveParams,
    type SplitListParams as SplitListParams,
  };
}
