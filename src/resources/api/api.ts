// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V2API from './v2/v2';
import { V2 } from './v2/v2';

export class API extends APIResource {
  v2: V2API.V2 = new V2API.V2(this._client);
}

API.V2 = V2;

export declare namespace API {
  export { V2 as V2 };
}
