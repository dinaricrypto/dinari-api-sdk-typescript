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

export class V2 extends APIResource {
  marketData: MarketDataAPI.MarketData = new MarketDataAPI.MarketData(this._client);
  entities: EntitiesAPI.Entities = new EntitiesAPI.Entities(this._client);
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
}

V2.MarketData = MarketData;
V2.Entities = Entities;
V2.Accounts = Accounts;

export declare namespace V2 {
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
