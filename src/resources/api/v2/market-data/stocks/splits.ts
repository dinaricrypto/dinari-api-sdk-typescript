// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Splits extends APIResource {
  /**
   * Get a list of stock splits for a specific `Stock`. The splits are ordered by the
   * date they were created, with the most recent split first.
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
   * Get a list of stock splits for `Stocks` available for trade via Dinari. The
   * splits are ordered by the date they were created, with the most recent split
   * first.
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
 * Information about a stock split, including the `Stock` ID, the number of shares
 * before and after the split, the record date, payable date, ex-date, and the
 * status of the split.
 */
export interface StockSplit {
  /**
   * ID of the `StockSplit`
   */
  id: string;

  /**
   * Ex-date of the split in Eastern Time Zone. First day the stock trades at
   * post-split prices. Typically is last date in the process, and the main important
   * date for investors. In ISO 8601 format, YYYY-MM-DD.
   */
  ex_date: string;

  /**
   * Payable date of the split in Eastern Time Zone. This is the date when company
   * will send out the new shares. Mainly for record keeping by brokerages, who
   * forward the shares to eventual owners. Typically is the second date in the
   * process. In ISO 8601 format, YYYY-MM-DD.
   */
  payable_date: string;

  /**
   * Record date of the split in Eastern Time Zone, for company to determine where to
   * send their new shares. Mainly for record keeping by brokerages, who forward the
   * shares to eventual owners. Typically is the first date in the process. In ISO
   * 8601 format, YYYY-MM-DD.
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
   * The status of Dinari's processing of the `StockSplit`. `Stocks` for which this
   * status is `IN_PROGRESS` will not be available for trading.
   */
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETE';

  /**
   * ID of the `Stock` whose shares are being split.
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
