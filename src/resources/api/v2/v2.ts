// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountsAPI from './accounts/accounts';
import {
  AccountRetrieveCashResponse,
  AccountRetrieveDividendPaymentsParams,
  AccountRetrieveDividendPaymentsResponse,
  AccountRetrieveInterestPaymentsParams,
  AccountRetrieveInterestPaymentsResponse,
  AccountRetrievePortfolioResponse,
  Accounts,
} from './accounts/accounts';
import * as EntitiesAPI from './entities/entities';
import { Entities, Entity, EntityCreateParams, EntityListResponse } from './entities/entities';
import * as MarketDataAPI from './market-data/market-data';
import { MarketData, MarketDataGetMarketHoursResponse } from './market-data/market-data';

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
    type MarketDataGetMarketHoursResponse as MarketDataGetMarketHoursResponse,
  };

  export {
    Entities as Entities,
    type Entity as Entity,
    type EntityListResponse as EntityListResponse,
    type EntityCreateParams as EntityCreateParams,
  };

  export {
    Accounts as Accounts,
    type AccountRetrieveCashResponse as AccountRetrieveCashResponse,
    type AccountRetrieveDividendPaymentsResponse as AccountRetrieveDividendPaymentsResponse,
    type AccountRetrieveInterestPaymentsResponse as AccountRetrieveInterestPaymentsResponse,
    type AccountRetrievePortfolioResponse as AccountRetrievePortfolioResponse,
    type AccountRetrieveDividendPaymentsParams as AccountRetrieveDividendPaymentsParams,
    type AccountRetrieveInterestPaymentsParams as AccountRetrieveInterestPaymentsParams,
  };
}
