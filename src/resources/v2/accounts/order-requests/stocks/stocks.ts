// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as Eip155API from './eip155';
import { Eip155 } from './eip155';

export class Stocks extends APIResource {
  eip155: Eip155API.Eip155 = new Eip155API.Eip155(this._client);
}

Stocks.Eip155 = Eip155;

export declare namespace Stocks {
  export { Eip155 as Eip155 };
}
