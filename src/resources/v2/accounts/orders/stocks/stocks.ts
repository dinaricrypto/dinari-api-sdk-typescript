// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as Eip155API from './eip155';
import {
  Eip155,
  Eip155GetFeeQuoteParams,
  Eip155GetFeeQuoteResponse,
  Eip155PrepareOrderParams,
  Eip155PrepareOrderResponse,
  OrderFeeAmount,
} from './eip155';

export class Stocks extends APIResource {
  eip155: Eip155API.Eip155 = new Eip155API.Eip155(this._client);
}

Stocks.Eip155 = Eip155;

export declare namespace Stocks {
  export {
    Eip155 as Eip155,
    type OrderFeeAmount as OrderFeeAmount,
    type Eip155GetFeeQuoteResponse as Eip155GetFeeQuoteResponse,
    type Eip155PrepareOrderResponse as Eip155PrepareOrderResponse,
    type Eip155GetFeeQuoteParams as Eip155GetFeeQuoteParams,
    type Eip155PrepareOrderParams as Eip155PrepareOrderParams,
  };
}
