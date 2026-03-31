// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'list_orders',
    endpoint: '/api/v2/orders/',
    httpMethod: 'get',
    summary: 'Get Orders for Entity',
    description:
      'Get a list of all `Orders` under the `Entity`.<br>Optionally `Orders` can be transaction hash or fulfillment transaction hash.',
    stainlessPath: '(resource) v2 > (method) list_orders',
    qualified: 'client.v2.listOrders',
    params: [
      'chain_id?: string;',
      'order_fulfillment_transaction_hash?: string;',
      'order_request_id?: string;',
      'order_transaction_hash?: string;',
      'page?: number;',
      'page_size?: number;',
    ],
    response:
      "{ id: string; chain_id: string; created_dt: string; order_contract_address: string; order_side: 'BUY' | 'SELL'; order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK'; order_transaction_hash: string; order_type: 'MARKET' | 'LIMIT'; payment_token: string; status: string; account_id?: string; alloy_id?: string; asset_token?: string; asset_token_quantity?: number; cancel_transaction_hash?: string; client_order_id?: string; entity_id?: string; fee?: number; limit_price?: number; order_request_id?: string; payment_token_quantity?: number; stock_id?: string; }[]",
    markdown:
      "## list_orders\n\n`client.v2.listOrders(chain_id?: string, order_fulfillment_transaction_hash?: string, order_request_id?: string, order_transaction_hash?: string, page?: number, page_size?: number): { id: string; chain_id: chain; created_dt: string; order_contract_address: string; order_side: order_side; order_tif: order_tif; order_transaction_hash: string; order_type: order_type; payment_token: string; status: brokerage_order_status; account_id?: string; alloy_id?: string; asset_token?: string; asset_token_quantity?: number; cancel_transaction_hash?: string; client_order_id?: string; entity_id?: string; fee?: number; limit_price?: number; order_request_id?: string; payment_token_quantity?: number; stock_id?: string; }[]`\n\n**get** `/api/v2/orders/`\n\nGet a list of all `Orders` under the `Entity`.<br>Optionally `Orders` can be transaction hash or fulfillment transaction hash.\n\n### Parameters\n\n- `chain_id?: string`\n  CAIP-2 formatted chain ID of the blockchain the `Order` was made on.\n\n- `order_fulfillment_transaction_hash?: string`\n  Fulfillment transaction hash of the `Order`.\n\n- `order_request_id?: string`\n  Order Request ID for the `Order`\n\n- `order_transaction_hash?: string`\n  Transaction hash of the `Order`.\n\n- `page?: number`\n\n- `page_size?: number`\n\n### Returns\n\n- `{ id: string; chain_id: string; created_dt: string; order_contract_address: string; order_side: 'BUY' | 'SELL'; order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK'; order_transaction_hash: string; order_type: 'MARKET' | 'LIMIT'; payment_token: string; status: string; account_id?: string; alloy_id?: string; asset_token?: string; asset_token_quantity?: number; cancel_transaction_hash?: string; client_order_id?: string; entity_id?: string; fee?: number; limit_price?: number; order_request_id?: string; payment_token_quantity?: number; stock_id?: string; }[]`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst response = await client.v2.listOrders();\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.ListOrders',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\tresponse, err := client.V2.ListOrders(context.TODO(), dinariapisdkgo.V2ListOrdersParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/orders/ \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().listOrders',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.V2ListOrdersParams;\nimport com.dinari.api.models.v2.V2ListOrdersResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        List<V2ListOrdersResponse> response = client.v2().listOrders();\n    }\n}',
      },
      python: {
        method: 'v2.list_orders',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v2.list_orders()\nprint(response)',
      },
      typescript: {
        method: 'client.v2.listOrders',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v2.listOrders();\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'retrieve_market_hours',
    endpoint: '/api/v2/market_data/market_hours/',
    httpMethod: 'get',
    summary: 'Get Market Hours',
    description: 'Get the market hours for the current trading session and next open trading session.',
    stainlessPath: '(resource) v2.market_data > (method) retrieve_market_hours',
    qualified: 'client.v2.marketData.retrieveMarketHours',
    response:
      '{ is_market_open: boolean; next_session_close_dt: string; next_session_open_dt: string; current_session_after_hours_close_time_dt?: string; current_session_close_dt?: string; current_session_open_dt?: string; current_session_overnight_open_time_dt?: string; current_session_pre_market_open_time_dt?: string; next_session_after_hours_close_time_dt?: string; next_session_overnight_open_time_dt?: string; next_session_pre_market_open_time_dt?: string; }',
    markdown:
      "## retrieve_market_hours\n\n`client.v2.marketData.retrieveMarketHours(): { is_market_open: boolean; next_session_close_dt: string; next_session_open_dt: string; current_session_after_hours_close_time_dt?: string; current_session_close_dt?: string; current_session_open_dt?: string; current_session_overnight_open_time_dt?: string; current_session_pre_market_open_time_dt?: string; next_session_after_hours_close_time_dt?: string; next_session_overnight_open_time_dt?: string; next_session_pre_market_open_time_dt?: string; }`\n\n**get** `/api/v2/market_data/market_hours/`\n\nGet the market hours for the current trading session and next open trading session.\n\n### Returns\n\n- `{ is_market_open: boolean; next_session_close_dt: string; next_session_open_dt: string; current_session_after_hours_close_time_dt?: string; current_session_close_dt?: string; current_session_open_dt?: string; current_session_overnight_open_time_dt?: string; current_session_pre_market_open_time_dt?: string; next_session_after_hours_close_time_dt?: string; next_session_overnight_open_time_dt?: string; next_session_pre_market_open_time_dt?: string; }`\n\n  - `is_market_open: boolean`\n  - `next_session_close_dt: string`\n  - `next_session_open_dt: string`\n  - `current_session_after_hours_close_time_dt?: string`\n  - `current_session_close_dt?: string`\n  - `current_session_open_dt?: string`\n  - `current_session_overnight_open_time_dt?: string`\n  - `current_session_pre_market_open_time_dt?: string`\n  - `next_session_after_hours_close_time_dt?: string`\n  - `next_session_overnight_open_time_dt?: string`\n  - `next_session_pre_market_open_time_dt?: string`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst response = await client.v2.marketData.retrieveMarketHours();\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.MarketData.GetMarketHours',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\tresponse, err := client.V2.MarketData.GetMarketHours(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.IsMarketOpen)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/market_data/market_hours/ \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().marketData().retrieveMarketHours',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.marketdata.MarketDataRetrieveMarketHoursParams;\nimport com.dinari.api.models.v2.marketdata.MarketDataRetrieveMarketHoursResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        MarketDataRetrieveMarketHoursResponse response = client.v2().marketData().retrieveMarketHours();\n    }\n}',
      },
      python: {
        method: 'v2.market_data.retrieve_market_hours',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v2.market_data.retrieve_market_hours()\nprint(response.is_market_open)',
      },
      typescript: {
        method: 'client.v2.marketData.retrieveMarketHours',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v2.marketData.retrieveMarketHours();\n\nconsole.log(response.is_market_open);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v2/market_data/stocks/',
    httpMethod: 'get',
    summary: 'Get Stocks',
    description: 'Get a list of `Stocks`.',
    stainlessPath: '(resource) v2.market_data.stocks > (method) list',
    qualified: 'client.v2.marketData.stocks.list',
    params: ['page?: number;', 'page_size?: number;', 'symbols?: string[];'],
    response:
      '{ id: string; is_fractionable: boolean; is_tradable: boolean; name: string; symbol: string; tokens: string[]; cik?: string; composite_figi?: string; cusip?: string; description?: string; display_name?: string; logo_url?: string; }[]',
    markdown:
      "## list\n\n`client.v2.marketData.stocks.list(page?: number, page_size?: number, symbols?: string[]): { id: string; is_fractionable: boolean; is_tradable: boolean; name: string; symbol: string; tokens: string[]; cik?: string; composite_figi?: string; cusip?: string; description?: string; display_name?: string; logo_url?: string; }[]`\n\n**get** `/api/v2/market_data/stocks/`\n\nGet a list of `Stocks`.\n\n### Parameters\n\n- `page?: number`\n\n- `page_size?: number`\n\n- `symbols?: string[]`\n  List of `Stock` symbols to query. If not provided, all `Stocks` are returned.\n\n### Returns\n\n- `{ id: string; is_fractionable: boolean; is_tradable: boolean; name: string; symbol: string; tokens: string[]; cik?: string; composite_figi?: string; cusip?: string; description?: string; display_name?: string; logo_url?: string; }[]`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst stocks = await client.v2.marketData.stocks.list();\n\nconsole.log(stocks);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.MarketData.Stocks.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\tstocks, err := client.V2.MarketData.Stocks.List(context.TODO(), dinariapisdkgo.V2MarketDataStockListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", stocks)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/market_data/stocks/ \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().marketData().stocks().list',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.marketdata.stocks.StockListParams;\nimport com.dinari.api.models.v2.marketdata.stocks.StockListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        List<StockListResponse> stocks = client.v2().marketData().stocks().list();\n    }\n}',
      },
      python: {
        method: 'v2.market_data.stocks.list',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nstocks = client.v2.market_data.stocks.list()\nprint(stocks)',
      },
      typescript: {
        method: 'client.v2.marketData.stocks.list',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst stocks = await client.v2.marketData.stocks.list();\n\nconsole.log(stocks);",
      },
    },
  },
  {
    name: 'retrieve_historical_prices',
    endpoint: '/api/v2/market_data/stocks/{stock_id}/historical_prices/',
    httpMethod: 'get',
    summary: 'Get Historical Stock Prices',
    description:
      'Get historical price data for a specified `Stock`. Each index in the array represents a single tick in a price chart.',
    stainlessPath: '(resource) v2.market_data.stocks > (method) retrieve_historical_prices',
    qualified: 'client.v2.marketData.stocks.retrieveHistoricalPrices',
    params: ['stock_id: string;', "timespan: 'DAY' | 'WEEK' | 'MONTH' | 'YEAR';"],
    response: '{ close: number; high: number; low: number; open: number; timestamp: number; }[]',
    markdown:
      "## retrieve_historical_prices\n\n`client.v2.marketData.stocks.retrieveHistoricalPrices(stock_id: string, timespan: 'DAY' | 'WEEK' | 'MONTH' | 'YEAR'): { close: number; high: number; low: number; open: number; timestamp: number; }[]`\n\n**get** `/api/v2/market_data/stocks/{stock_id}/historical_prices/`\n\nGet historical price data for a specified `Stock`. Each index in the array represents a single tick in a price chart.\n\n### Parameters\n\n- `stock_id: string`\n\n- `timespan: 'DAY' | 'WEEK' | 'MONTH' | 'YEAR'`\n  The timespan of the historical prices to query.\n\n### Returns\n\n- `{ close: number; high: number; low: number; open: number; timestamp: number; }[]`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst response = await client.v2.marketData.stocks.retrieveHistoricalPrices('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { timespan: 'DAY' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.MarketData.Stocks.GetHistoricalPrices',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\tresponse, err := client.V2.MarketData.Stocks.GetHistoricalPrices(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2MarketDataStockGetHistoricalPricesParams{\n\t\t\tTimespan: dinariapisdkgo.V2MarketDataStockGetHistoricalPricesParamsTimespanDay,\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/market_data/stocks/$STOCK_ID/historical_prices/ \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().marketData().stocks().retrieveHistoricalPrices',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.marketdata.stocks.StockRetrieveHistoricalPricesParams;\nimport com.dinari.api.models.v2.marketdata.stocks.StockRetrieveHistoricalPricesResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        StockRetrieveHistoricalPricesParams params = StockRetrieveHistoricalPricesParams.builder()\n            .stockId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .timespan(StockRetrieveHistoricalPricesParams.Timespan.DAY)\n            .build();\n        List<StockRetrieveHistoricalPricesResponse> response = client.v2().marketData().stocks().retrieveHistoricalPrices(params);\n    }\n}',
      },
      python: {
        method: 'v2.market_data.stocks.retrieve_historical_prices',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v2.market_data.stocks.retrieve_historical_prices(\n    stock_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    timespan="DAY",\n)\nprint(response)',
      },
      typescript: {
        method: 'client.v2.marketData.stocks.retrieveHistoricalPrices',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v2.marketData.stocks.retrieveHistoricalPrices(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { timespan: 'DAY' },\n);\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'retrieve_news',
    endpoint: '/api/v2/market_data/stocks/{stock_id}/news',
    httpMethod: 'get',
    summary: 'Get News Articles for Stock',
    description:
      'Get the most recent news articles relating to a `Stock`, including a summary of the article \n        and a link to the original source.',
    stainlessPath: '(resource) v2.market_data.stocks > (method) retrieve_news',
    qualified: 'client.v2.marketData.stocks.retrieveNews',
    params: ['stock_id: string;', 'limit?: number;'],
    response:
      '{ article_url: string; description: string; image_url: string; published_dt: string; publisher: string; amp_url?: string; }[]',
    markdown:
      "## retrieve_news\n\n`client.v2.marketData.stocks.retrieveNews(stock_id: string, limit?: number): { article_url: string; description: string; image_url: string; published_dt: string; publisher: string; amp_url?: string; }[]`\n\n**get** `/api/v2/market_data/stocks/{stock_id}/news`\n\nGet the most recent news articles relating to a `Stock`, including a summary of the article \n        and a link to the original source.\n\n### Parameters\n\n- `stock_id: string`\n\n- `limit?: number`\n  The number of articles to return.\n\n### Returns\n\n- `{ article_url: string; description: string; image_url: string; published_dt: string; publisher: string; amp_url?: string; }[]`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst response = await client.v2.marketData.stocks.retrieveNews('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.MarketData.Stocks.GetNews',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\tresponse, err := client.V2.MarketData.Stocks.GetNews(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2MarketDataStockGetNewsParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/market_data/stocks/$STOCK_ID/news \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().marketData().stocks().retrieveNews',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.marketdata.stocks.StockRetrieveNewsParams;\nimport com.dinari.api.models.v2.marketdata.stocks.StockRetrieveNewsResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        List<StockRetrieveNewsResponse> response = client.v2().marketData().stocks().retrieveNews("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e");\n    }\n}',
      },
      python: {
        method: 'v2.market_data.stocks.retrieve_news',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v2.market_data.stocks.retrieve_news(\n    stock_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response)',
      },
      typescript: {
        method: 'client.v2.marketData.stocks.retrieveNews',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v2.marketData.stocks.retrieveNews(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'retrieve_dividends',
    endpoint: '/api/v2/market_data/stocks/{stock_id}/dividends',
    httpMethod: 'get',
    summary: 'Get Stock Dividend Announcements',
    description:
      '\nGet a list of announced stock dividend details for a specified `Stock`.\n\nNote that this data applies only to actual stocks. Yield received for holding tokenized shares may differ from this.\n',
    stainlessPath: '(resource) v2.market_data.stocks > (method) retrieve_dividends',
    qualified: 'client.v2.marketData.stocks.retrieveDividends',
    params: ['stock_id: string;'],
    response:
      '{ cash_amount?: number; currency?: string; dividend_type?: string; ex_dividend_date?: string; pay_date?: string; record_date?: string; ticker?: string; }[]',
    markdown:
      "## retrieve_dividends\n\n`client.v2.marketData.stocks.retrieveDividends(stock_id: string): { cash_amount?: number; currency?: string; dividend_type?: string; ex_dividend_date?: string; pay_date?: string; record_date?: string; ticker?: string; }[]`\n\n**get** `/api/v2/market_data/stocks/{stock_id}/dividends`\n\n\nGet a list of announced stock dividend details for a specified `Stock`.\n\nNote that this data applies only to actual stocks. Yield received for holding tokenized shares may differ from this.\n\n\n### Parameters\n\n- `stock_id: string`\n\n### Returns\n\n- `{ cash_amount?: number; currency?: string; dividend_type?: string; ex_dividend_date?: string; pay_date?: string; record_date?: string; ticker?: string; }[]`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst response = await client.v2.marketData.stocks.retrieveDividends('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.MarketData.Stocks.GetDividends',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\tresponse, err := client.V2.MarketData.Stocks.GetDividends(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/market_data/stocks/$STOCK_ID/dividends \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().marketData().stocks().retrieveDividends',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.marketdata.stocks.StockRetrieveDividendsParams;\nimport com.dinari.api.models.v2.marketdata.stocks.StockRetrieveDividendsResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        List<StockRetrieveDividendsResponse> response = client.v2().marketData().stocks().retrieveDividends("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e");\n    }\n}',
      },
      python: {
        method: 'v2.market_data.stocks.retrieve_dividends',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v2.market_data.stocks.retrieve_dividends(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response)',
      },
      typescript: {
        method: 'client.v2.marketData.stocks.retrieveDividends',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v2.marketData.stocks.retrieveDividends(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'retrieve_current_price',
    endpoint: '/api/v2/market_data/stocks/{stock_id}/current_price',
    httpMethod: 'get',
    summary: 'Get Stock current price',
    description: 'Get current price for a specified `Stock`.',
    stainlessPath: '(resource) v2.market_data.stocks > (method) retrieve_current_price',
    qualified: 'client.v2.marketData.stocks.retrieveCurrentPrice',
    params: ['stock_id: string;'],
    response:
      '{ price: number; stock_id: string; timestamp: string; change?: number; change_percent?: number; close?: number; high?: number; low?: number; market_cap?: number; open?: number; previous_close?: number; volume?: number; weighted_shares_outstanding?: number; }',
    markdown:
      "## retrieve_current_price\n\n`client.v2.marketData.stocks.retrieveCurrentPrice(stock_id: string): { price: number; stock_id: string; timestamp: string; change?: number; change_percent?: number; close?: number; high?: number; low?: number; market_cap?: number; open?: number; previous_close?: number; volume?: number; weighted_shares_outstanding?: number; }`\n\n**get** `/api/v2/market_data/stocks/{stock_id}/current_price`\n\nGet current price for a specified `Stock`.\n\n### Parameters\n\n- `stock_id: string`\n\n### Returns\n\n- `{ price: number; stock_id: string; timestamp: string; change?: number; change_percent?: number; close?: number; high?: number; low?: number; market_cap?: number; open?: number; previous_close?: number; volume?: number; weighted_shares_outstanding?: number; }`\n\n  - `price: number`\n  - `stock_id: string`\n  - `timestamp: string`\n  - `change?: number`\n  - `change_percent?: number`\n  - `close?: number`\n  - `high?: number`\n  - `low?: number`\n  - `market_cap?: number`\n  - `open?: number`\n  - `previous_close?: number`\n  - `volume?: number`\n  - `weighted_shares_outstanding?: number`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst response = await client.v2.marketData.stocks.retrieveCurrentPrice('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.MarketData.Stocks.GetCurrentPrice',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\tresponse, err := client.V2.MarketData.Stocks.GetCurrentPrice(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.StockID)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/market_data/stocks/$STOCK_ID/current_price \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().marketData().stocks().retrieveCurrentPrice',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.marketdata.stocks.StockRetrieveCurrentPriceParams;\nimport com.dinari.api.models.v2.marketdata.stocks.StockRetrieveCurrentPriceResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        StockRetrieveCurrentPriceResponse response = client.v2().marketData().stocks().retrieveCurrentPrice("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e");\n    }\n}',
      },
      python: {
        method: 'v2.market_data.stocks.retrieve_current_price',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v2.market_data.stocks.retrieve_current_price(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.stock_id)',
      },
      typescript: {
        method: 'client.v2.marketData.stocks.retrieveCurrentPrice',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v2.marketData.stocks.retrieveCurrentPrice(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(response.stock_id);",
      },
    },
  },
  {
    name: 'retrieve_current_quote',
    endpoint: '/api/v2/market_data/stocks/{stock_id}/current_quote',
    httpMethod: 'get',
    summary: 'Get Stock Quote',
    description: 'Get quote for a specified `Stock`.',
    stainlessPath: '(resource) v2.market_data.stocks > (method) retrieve_current_quote',
    qualified: 'client.v2.marketData.stocks.retrieveCurrentQuote',
    params: ['stock_id: string;'],
    response:
      '{ ask_price: number; ask_size: number; bid_price: number; bid_size: number; stock_id: string; timestamp: string; }',
    markdown:
      "## retrieve_current_quote\n\n`client.v2.marketData.stocks.retrieveCurrentQuote(stock_id: string): { ask_price: number; ask_size: number; bid_price: number; bid_size: number; stock_id: string; timestamp: string; }`\n\n**get** `/api/v2/market_data/stocks/{stock_id}/current_quote`\n\nGet quote for a specified `Stock`.\n\n### Parameters\n\n- `stock_id: string`\n\n### Returns\n\n- `{ ask_price: number; ask_size: number; bid_price: number; bid_size: number; stock_id: string; timestamp: string; }`\n\n  - `ask_price: number`\n  - `ask_size: number`\n  - `bid_price: number`\n  - `bid_size: number`\n  - `stock_id: string`\n  - `timestamp: string`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst response = await client.v2.marketData.stocks.retrieveCurrentQuote('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.MarketData.Stocks.GetCurrentQuote',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\tresponse, err := client.V2.MarketData.Stocks.GetCurrentQuote(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.BidPrice)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/market_data/stocks/$STOCK_ID/current_quote \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().marketData().stocks().retrieveCurrentQuote',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.marketdata.stocks.StockRetrieveCurrentQuoteParams;\nimport com.dinari.api.models.v2.marketdata.stocks.StockRetrieveCurrentQuoteResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        StockRetrieveCurrentQuoteResponse response = client.v2().marketData().stocks().retrieveCurrentQuote("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e");\n    }\n}',
      },
      python: {
        method: 'v2.market_data.stocks.retrieve_current_quote',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v2.market_data.stocks.retrieve_current_quote(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.bid_price)',
      },
      typescript: {
        method: 'client.v2.marketData.stocks.retrieveCurrentQuote',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v2.marketData.stocks.retrieveCurrentQuote(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(response.bid_price);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v2/market_data/stocks/splits',
    httpMethod: 'get',
    summary: 'Get Stock Splits',
    description:
      '\nGet a list of stock splits for `Stocks` available for trade via Dinari.\nThe splits are ordered by the date they were created, with the most recent split first.\n\nIn an example 10-for-1 stock split, trading will be halted for the stock at the end of the `payable_date`, as\nthe split transitions from `PENDING` to `IN_PROGRESS`. This usually occurs over a weekend to minimize trading\ndisruptions. Each share of stock owned by a shareholder will then be converted into 10 shares, and the split\nbecomes `COMPLETE` as trading resumes on the `ex_date` with new split-adjusted prices.\n',
    stainlessPath: '(resource) v2.market_data.stocks.splits > (method) list',
    qualified: 'client.v2.marketData.stocks.splits.list',
    params: ['page?: number;', 'page_size?: number;'],
    response:
      "{ id: string; ex_date: string; payable_date: string; record_date: string; split_from: number; split_to: number; status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETE'; stock_id: string; }[]",
    markdown:
      "## list\n\n`client.v2.marketData.stocks.splits.list(page?: number, page_size?: number): object[]`\n\n**get** `/api/v2/market_data/stocks/splits`\n\n\nGet a list of stock splits for `Stocks` available for trade via Dinari.\nThe splits are ordered by the date they were created, with the most recent split first.\n\nIn an example 10-for-1 stock split, trading will be halted for the stock at the end of the `payable_date`, as\nthe split transitions from `PENDING` to `IN_PROGRESS`. This usually occurs over a weekend to minimize trading\ndisruptions. Each share of stock owned by a shareholder will then be converted into 10 shares, and the split\nbecomes `COMPLETE` as trading resumes on the `ex_date` with new split-adjusted prices.\n\n\n### Parameters\n\n- `page?: number`\n\n- `page_size?: number`\n\n### Returns\n\n- `{ id: string; ex_date: string; payable_date: string; record_date: string; split_from: number; split_to: number; status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETE'; stock_id: string; }[]`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst stockSplits = await client.v2.marketData.stocks.splits.list();\n\nconsole.log(stockSplits);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.MarketData.Stocks.Splits.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\tstockSplits, err := client.V2.MarketData.Stocks.Splits.List(context.TODO(), dinariapisdkgo.V2MarketDataStockSplitListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", stockSplits)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/market_data/stocks/splits \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().marketData().stocks().splits().list',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.marketdata.stocks.splits.SplitListParams;\nimport com.dinari.api.models.v2.marketdata.stocks.splits.StockSplit;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        List<StockSplit> stockSplits = client.v2().marketData().stocks().splits().list();\n    }\n}',
      },
      python: {
        method: 'v2.market_data.stocks.splits.list',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nstock_splits = client.v2.market_data.stocks.splits.list()\nprint(stock_splits)',
      },
      typescript: {
        method: 'client.v2.marketData.stocks.splits.list',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst stockSplits = await client.v2.marketData.stocks.splits.list();\n\nconsole.log(stockSplits);",
      },
    },
  },
  {
    name: 'list_for_stock',
    endpoint: '/api/v2/market_data/stocks/{stock_id}/splits',
    httpMethod: 'get',
    summary: 'Get Stock Splits for Stock',
    description:
      '\nGet a list of stock splits for a specific `Stock`.\nThe splits are ordered by the date they were created, with the most recent split first.\n\nIn an example 10-for-1 stock split, trading will be halted for the stock at the end of the `payable_date`, as\nthe split transitions from `PENDING` to `IN_PROGRESS`. This usually occurs over a weekend to minimize trading\ndisruptions. Each share of stock owned by a shareholder will then be converted into 10 shares, and the split\nbecomes `COMPLETE` as trading resumes on the `ex_date` with new split-adjusted prices.\n',
    stainlessPath: '(resource) v2.market_data.stocks.splits > (method) list_for_stock',
    qualified: 'client.v2.marketData.stocks.splits.listForStock',
    params: ['stock_id: string;', 'page?: number;', 'page_size?: number;'],
    response:
      "{ id: string; ex_date: string; payable_date: string; record_date: string; split_from: number; split_to: number; status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETE'; stock_id: string; }[]",
    markdown:
      "## list_for_stock\n\n`client.v2.marketData.stocks.splits.listForStock(stock_id: string, page?: number, page_size?: number): object[]`\n\n**get** `/api/v2/market_data/stocks/{stock_id}/splits`\n\n\nGet a list of stock splits for a specific `Stock`.\nThe splits are ordered by the date they were created, with the most recent split first.\n\nIn an example 10-for-1 stock split, trading will be halted for the stock at the end of the `payable_date`, as\nthe split transitions from `PENDING` to `IN_PROGRESS`. This usually occurs over a weekend to minimize trading\ndisruptions. Each share of stock owned by a shareholder will then be converted into 10 shares, and the split\nbecomes `COMPLETE` as trading resumes on the `ex_date` with new split-adjusted prices.\n\n\n### Parameters\n\n- `stock_id: string`\n\n- `page?: number`\n\n- `page_size?: number`\n\n### Returns\n\n- `{ id: string; ex_date: string; payable_date: string; record_date: string; split_from: number; split_to: number; status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETE'; stock_id: string; }[]`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst stockSplits = await client.v2.marketData.stocks.splits.listForStock('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(stockSplits);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.MarketData.Stocks.Splits.ListForStock',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\tstockSplits, err := client.V2.MarketData.Stocks.Splits.ListForStock(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2MarketDataStockSplitListForStockParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", stockSplits)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/market_data/stocks/$STOCK_ID/splits \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().marketData().stocks().splits().listForStock',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.marketdata.stocks.splits.SplitListForStockParams;\nimport com.dinari.api.models.v2.marketdata.stocks.splits.StockSplit;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        List<StockSplit> stockSplits = client.v2().marketData().stocks().splits().listForStock("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e");\n    }\n}',
      },
      python: {
        method: 'v2.market_data.stocks.splits.list_for_stock',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nstock_splits = client.v2.market_data.stocks.splits.list_for_stock(\n    stock_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(stock_splits)',
      },
      typescript: {
        method: 'client.v2.marketData.stocks.splits.listForStock',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst stockSplits = await client.v2.marketData.stocks.splits.listForStock(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(stockSplits);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v2/market_data/alloys/',
    httpMethod: 'get',
    summary: 'Get Alloys',
    description: 'Returns available `Alloys` with cursor-based pagination.',
    stainlessPath: '(resource) v2.market_data.alloys > (method) list',
    qualified: 'client.v2.marketData.alloys.list',
    params: [
      'limit?: number;',
      'next?: string;',
      "order?: 'asc' | 'desc';",
      'previous?: string;',
      'symbols?: string[];',
    ],
    response:
      "{ data: { id: string; is_tradable: boolean; name: string; symbol: string; _sv?: 'Alloy:v1'; }[]; pagination_metadata: { next?: string; previous?: string; }; _sv?: 'PaginatedAlloyResponse:v1'; }",
    markdown:
      "## list\n\n`client.v2.marketData.alloys.list(limit?: number, next?: string, order?: 'asc' | 'desc', previous?: string, symbols?: string[]): { data: object[]; pagination_metadata: object; _sv?: 'PaginatedAlloyResponse:v1'; }`\n\n**get** `/api/v2/market_data/alloys/`\n\nReturns available `Alloys` with cursor-based pagination.\n\n### Parameters\n\n- `limit?: number`\n  Number of results to return\n\n- `next?: string`\n  Cursor for next page\n\n- `order?: 'asc' | 'desc'`\n  Sort order\n\n- `previous?: string`\n  Cursor for previous page\n\n- `symbols?: string[]`\n  If set, this endpoint will return Alloys that match the symbols specified\n\n### Returns\n\n- `{ data: { id: string; is_tradable: boolean; name: string; symbol: string; _sv?: 'Alloy:v1'; }[]; pagination_metadata: { next?: string; previous?: string; }; _sv?: 'PaginatedAlloyResponse:v1'; }`\n  Paginated response containing a list of Alloys.\n\n  - `data: { id: string; is_tradable: boolean; name: string; symbol: string; _sv?: 'Alloy:v1'; }[]`\n  - `pagination_metadata: { next?: string; previous?: string; }`\n  - `_sv?: 'PaginatedAlloyResponse:v1'`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst alloys = await client.v2.marketData.alloys.list();\n\nconsole.log(alloys);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.MarketData.Alloys.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\talloys, err := client.V2.MarketData.Alloys.List(context.TODO(), dinariapisdkgo.V2MarketDataAlloyListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", alloys.Data)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/market_data/alloys/ \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().marketData().alloys().list',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.marketdata.alloys.AlloyListParams;\nimport com.dinari.api.models.v2.marketdata.alloys.AlloyListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        AlloyListResponse alloys = client.v2().marketData().alloys().list();\n    }\n}',
      },
      python: {
        method: 'v2.market_data.alloys.list',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nalloys = client.v2.market_data.alloys.list()\nprint(alloys.data)',
      },
      typescript: {
        method: 'client.v2.marketData.alloys.list',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst alloys = await client.v2.marketData.alloys.list();\n\nconsole.log(alloys.data);",
      },
    },
  },
  {
    name: 'retrieve_current_price',
    endpoint: '/api/v2/market_data/alloys/{alloy_id}/current_price',
    httpMethod: 'get',
    summary: 'Get Alloy current price',
    description: 'Get the current price for a specified `Alloy`.',
    stainlessPath: '(resource) v2.market_data.alloys > (method) retrieve_current_price',
    qualified: 'client.v2.marketData.alloys.retrieveCurrentPrice',
    params: ['alloy_id: string;'],
    response: "{ id: string; price: number; timestamp: string; _sv?: 'AlloyPrice:v1'; }",
    markdown:
      "## retrieve_current_price\n\n`client.v2.marketData.alloys.retrieveCurrentPrice(alloy_id: string): { id: string; price: number; timestamp: string; _sv?: 'AlloyPrice:v1'; }`\n\n**get** `/api/v2/market_data/alloys/{alloy_id}/current_price`\n\nGet the current price for a specified `Alloy`.\n\n### Parameters\n\n- `alloy_id: string`\n\n### Returns\n\n- `{ id: string; price: number; timestamp: string; _sv?: 'AlloyPrice:v1'; }`\n\n  - `id: string`\n  - `price: number`\n  - `timestamp: string`\n  - `_sv?: 'AlloyPrice:v1'`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst response = await client.v2.marketData.alloys.retrieveCurrentPrice('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.MarketData.Alloys.GetCurrentPrice',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\tresponse, err := client.V2.MarketData.Alloys.GetCurrentPrice(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/market_data/alloys/$ALLOY_ID/current_price \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().marketData().alloys().retrieveCurrentPrice',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.marketdata.alloys.AlloyRetrieveCurrentPriceParams;\nimport com.dinari.api.models.v2.marketdata.alloys.AlloyRetrieveCurrentPriceResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        AlloyRetrieveCurrentPriceResponse response = client.v2().marketData().alloys().retrieveCurrentPrice("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e");\n    }\n}',
      },
      python: {
        method: 'v2.market_data.alloys.retrieve_current_price',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v2.market_data.alloys.retrieve_current_price(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.id)',
      },
      typescript: {
        method: 'client.v2.marketData.alloys.retrieveCurrentPrice',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v2.marketData.alloys.retrieveCurrentPrice(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(response.id);",
      },
    },
  },
  {
    name: 'retrieve_historical_prices',
    endpoint: '/api/v2/market_data/alloys/{alloy_id}/historical_prices/',
    httpMethod: 'get',
    summary: 'Get Historical Alloy Prices',
    description:
      'Get historical price data for a specified `Alloy`. Each index in the array represents a single tick in a price chart.',
    stainlessPath: '(resource) v2.market_data.alloys > (method) retrieve_historical_prices',
    qualified: 'client.v2.marketData.alloys.retrieveHistoricalPrices',
    params: ['alloy_id: string;', "timespan: 'DAY' | 'WEEK';"],
    response:
      "{ close: number; high: number; low: number; open: number; timestamp: number; _sv?: 'AlloyHistoricalPriceDataPointV1:v1'; }[]",
    markdown:
      "## retrieve_historical_prices\n\n`client.v2.marketData.alloys.retrieveHistoricalPrices(alloy_id: string, timespan: 'DAY' | 'WEEK'): { close: number; high: number; low: number; open: number; timestamp: number; _sv?: 'AlloyHistoricalPriceDataPointV1:v1'; }[]`\n\n**get** `/api/v2/market_data/alloys/{alloy_id}/historical_prices/`\n\nGet historical price data for a specified `Alloy`. Each index in the array represents a single tick in a price chart.\n\n### Parameters\n\n- `alloy_id: string`\n\n- `timespan: 'DAY' | 'WEEK'`\n  The timespan of the historical prices to query.\n\n### Returns\n\n- `{ close: number; high: number; low: number; open: number; timestamp: number; _sv?: 'AlloyHistoricalPriceDataPointV1:v1'; }[]`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst response = await client.v2.marketData.alloys.retrieveHistoricalPrices('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { timespan: 'DAY' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.MarketData.Alloys.GetHistoricalPrices',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\tresponse, err := client.V2.MarketData.Alloys.GetHistoricalPrices(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2MarketDataAlloyGetHistoricalPricesParams{\n\t\t\tTimespan: dinariapisdkgo.V2MarketDataAlloyGetHistoricalPricesParamsTimespanDay,\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/market_data/alloys/$ALLOY_ID/historical_prices/ \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().marketData().alloys().retrieveHistoricalPrices',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.marketdata.alloys.AlloyRetrieveHistoricalPricesParams;\nimport com.dinari.api.models.v2.marketdata.alloys.AlloyRetrieveHistoricalPricesResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        AlloyRetrieveHistoricalPricesParams params = AlloyRetrieveHistoricalPricesParams.builder()\n            .alloyId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .timespan(AlloyRetrieveHistoricalPricesParams.Timespan.DAY)\n            .build();\n        List<AlloyRetrieveHistoricalPricesResponse> response = client.v2().marketData().alloys().retrieveHistoricalPrices(params);\n    }\n}',
      },
      python: {
        method: 'v2.market_data.alloys.retrieve_historical_prices',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v2.market_data.alloys.retrieve_historical_prices(\n    alloy_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    timespan="DAY",\n)\nprint(response)',
      },
      typescript: {
        method: 'client.v2.marketData.alloys.retrieveHistoricalPrices',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v2.marketData.alloys.retrieveHistoricalPrices(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { timespan: 'DAY' },\n);\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v2/entities/',
    httpMethod: 'get',
    summary: 'Get Entities',
    description:
      'Get a list of direct `Entities` your organization manages. These `Entities` represent individual customers of your organization.',
    stainlessPath: '(resource) v2.entities > (method) list',
    qualified: 'client.v2.entities.list',
    params: ['page?: number;', 'page_size?: number;', 'reference_id?: string;'],
    response:
      "{ id: string; entity_type: 'INDIVIDUAL' | 'ORGANIZATION'; is_kyc_complete: boolean; name?: string; nationality?: string; reference_id?: string; }[]",
    markdown:
      "## list\n\n`client.v2.entities.list(page?: number, page_size?: number, reference_id?: string): object[]`\n\n**get** `/api/v2/entities/`\n\nGet a list of direct `Entities` your organization manages. These `Entities` represent individual customers of your organization.\n\n### Parameters\n\n- `page?: number`\n\n- `page_size?: number`\n\n- `reference_id?: string`\n  Case sensitive unique reference ID for the `Entity`.\n\n### Returns\n\n- `{ id: string; entity_type: 'INDIVIDUAL' | 'ORGANIZATION'; is_kyc_complete: boolean; name?: string; nationality?: string; reference_id?: string; }[]`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst entities = await client.v2.entities.list();\n\nconsole.log(entities);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Entities.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\tentities, err := client.V2.Entities.List(context.TODO(), dinariapisdkgo.V2EntityListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", entities)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/entities/ \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().entities().list',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.entities.Entity;\nimport com.dinari.api.models.v2.entities.EntityListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        List<Entity> entities = client.v2().entities().list();\n    }\n}',
      },
      python: {
        method: 'v2.entities.list',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nentities = client.v2.entities.list()\nprint(entities)',
      },
      typescript: {
        method: 'client.v2.entities.list',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst entities = await client.v2.entities.list();\n\nconsole.log(entities);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/v2/entities/',
    httpMethod: 'post',
    summary: 'Create Entity',
    description:
      'Create a new `Entity` to be managed by your organization. This `Entity` represents an individual customer of your organization.',
    stainlessPath: '(resource) v2.entities > (method) create',
    qualified: 'client.v2.entities.create',
    params: ['name: string;', 'reference_id?: string;'],
    response:
      "{ id: string; entity_type: 'INDIVIDUAL' | 'ORGANIZATION'; is_kyc_complete: boolean; name?: string; nationality?: string; reference_id?: string; }",
    markdown:
      "## create\n\n`client.v2.entities.create(name: string, reference_id?: string): { id: string; entity_type: 'INDIVIDUAL' | 'ORGANIZATION'; is_kyc_complete: boolean; name?: string; nationality?: string; reference_id?: string; }`\n\n**post** `/api/v2/entities/`\n\nCreate a new `Entity` to be managed by your organization. This `Entity` represents an individual customer of your organization.\n\n### Parameters\n\n- `name: string`\n  Name of the `Entity`.\n\n- `reference_id?: string`\n  Case sensitive unique reference ID for the `Entity`. We recommend setting this to the unique ID of the `Entity` in your system.\n\n### Returns\n\n- `{ id: string; entity_type: 'INDIVIDUAL' | 'ORGANIZATION'; is_kyc_complete: boolean; name?: string; nationality?: string; reference_id?: string; }`\n  Information about an `Entity`, which can be either an individual or an organization.\n\n  - `id: string`\n  - `entity_type: 'INDIVIDUAL' | 'ORGANIZATION'`\n  - `is_kyc_complete: boolean`\n  - `name?: string`\n  - `nationality?: string`\n  - `reference_id?: string`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst entity = await client.v2.entities.create({ name: 'x' });\n\nconsole.log(entity);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Entities.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\tentity, err := client.V2.Entities.New(context.TODO(), dinariapisdkgo.V2EntityNewParams{\n\t\tName: "x",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", entity.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/entities/ \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY" \\\n    -d \'{\n          "name": "x"\n        }\'',
      },
      java: {
        method: 'v2().entities().create',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.entities.Entity;\nimport com.dinari.api.models.v2.entities.EntityCreateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        EntityCreateParams params = EntityCreateParams.builder()\n            .name("x")\n            .build();\n        Entity entity = client.v2().entities().create(params);\n    }\n}',
      },
      python: {
        method: 'v2.entities.create',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nentity = client.v2.entities.create(\n    name="x",\n)\nprint(entity.id)',
      },
      typescript: {
        method: 'client.v2.entities.create',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst entity = await client.v2.entities.create({ name: 'x' });\n\nconsole.log(entity.id);",
      },
    },
  },
  {
    name: 'retrieve_current',
    endpoint: '/api/v2/entities/me',
    httpMethod: 'get',
    summary: 'Get Current Entity',
    description: 'Get the current authenticated `Entity`, which represents your organization.',
    stainlessPath: '(resource) v2.entities > (method) retrieve_current',
    qualified: 'client.v2.entities.retrieveCurrent',
    response:
      "{ id: string; entity_type: 'INDIVIDUAL' | 'ORGANIZATION'; is_kyc_complete: boolean; name?: string; nationality?: string; reference_id?: string; }",
    markdown:
      "## retrieve_current\n\n`client.v2.entities.retrieveCurrent(): { id: string; entity_type: 'INDIVIDUAL' | 'ORGANIZATION'; is_kyc_complete: boolean; name?: string; nationality?: string; reference_id?: string; }`\n\n**get** `/api/v2/entities/me`\n\nGet the current authenticated `Entity`, which represents your organization.\n\n### Returns\n\n- `{ id: string; entity_type: 'INDIVIDUAL' | 'ORGANIZATION'; is_kyc_complete: boolean; name?: string; nationality?: string; reference_id?: string; }`\n  Information about an `Entity`, which can be either an individual or an organization.\n\n  - `id: string`\n  - `entity_type: 'INDIVIDUAL' | 'ORGANIZATION'`\n  - `is_kyc_complete: boolean`\n  - `name?: string`\n  - `nationality?: string`\n  - `reference_id?: string`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst entity = await client.v2.entities.retrieveCurrent();\n\nconsole.log(entity);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Entities.GetCurrent',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\tentity, err := client.V2.Entities.GetCurrent(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", entity.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/entities/me \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().entities().retrieveCurrent',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.entities.Entity;\nimport com.dinari.api.models.v2.entities.EntityRetrieveCurrentParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        Entity entity = client.v2().entities().retrieveCurrent();\n    }\n}',
      },
      python: {
        method: 'v2.entities.retrieve_current',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nentity = client.v2.entities.retrieve_current()\nprint(entity.id)',
      },
      typescript: {
        method: 'client.v2.entities.retrieveCurrent',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst entity = await client.v2.entities.retrieveCurrent();\n\nconsole.log(entity.id);",
      },
    },
  },
  {
    name: 'retrieve_by_id',
    endpoint: '/api/v2/entities/{entity_id}',
    httpMethod: 'get',
    summary: 'Get Entity by ID',
    description: 'Get a specific customer `Entity` of your organization by their ID.',
    stainlessPath: '(resource) v2.entities > (method) retrieve_by_id',
    qualified: 'client.v2.entities.retrieveByID',
    params: ['entity_id: string;'],
    response:
      "{ id: string; entity_type: 'INDIVIDUAL' | 'ORGANIZATION'; is_kyc_complete: boolean; name?: string; nationality?: string; reference_id?: string; }",
    markdown:
      "## retrieve_by_id\n\n`client.v2.entities.retrieveByID(entity_id: string): { id: string; entity_type: 'INDIVIDUAL' | 'ORGANIZATION'; is_kyc_complete: boolean; name?: string; nationality?: string; reference_id?: string; }`\n\n**get** `/api/v2/entities/{entity_id}`\n\nGet a specific customer `Entity` of your organization by their ID.\n\n### Parameters\n\n- `entity_id: string`\n\n### Returns\n\n- `{ id: string; entity_type: 'INDIVIDUAL' | 'ORGANIZATION'; is_kyc_complete: boolean; name?: string; nationality?: string; reference_id?: string; }`\n  Information about an `Entity`, which can be either an individual or an organization.\n\n  - `id: string`\n  - `entity_type: 'INDIVIDUAL' | 'ORGANIZATION'`\n  - `is_kyc_complete: boolean`\n  - `name?: string`\n  - `nationality?: string`\n  - `reference_id?: string`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst entity = await client.v2.entities.retrieveByID('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(entity);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Entities.GetByID',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\tentity, err := client.V2.Entities.GetByID(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", entity.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/entities/$ENTITY_ID \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().entities().retrieveById',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.entities.Entity;\nimport com.dinari.api.models.v2.entities.EntityRetrieveByIdParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        Entity entity = client.v2().entities().retrieveById("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e");\n    }\n}',
      },
      python: {
        method: 'v2.entities.retrieve_by_id',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nentity = client.v2.entities.retrieve_by_id(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(entity.id)',
      },
      typescript: {
        method: 'client.v2.entities.retrieveByID',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst entity = await client.v2.entities.retrieveByID('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(entity.id);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/api/v2/entities/{entity_id}',
    httpMethod: 'patch',
    summary: 'Update Entity',
    description: 'Update a specific customer `Entity` of your organization.',
    stainlessPath: '(resource) v2.entities > (method) update',
    qualified: 'client.v2.entities.update',
    params: ['entity_id: string;', 'reference_id?: string;'],
    response:
      "{ id: string; entity_type: 'INDIVIDUAL' | 'ORGANIZATION'; is_kyc_complete: boolean; name?: string; nationality?: string; reference_id?: string; }",
    markdown:
      "## update\n\n`client.v2.entities.update(entity_id: string, reference_id?: string): { id: string; entity_type: 'INDIVIDUAL' | 'ORGANIZATION'; is_kyc_complete: boolean; name?: string; nationality?: string; reference_id?: string; }`\n\n**patch** `/api/v2/entities/{entity_id}`\n\nUpdate a specific customer `Entity` of your organization.\n\n### Parameters\n\n- `entity_id: string`\n\n- `reference_id?: string`\n  Case sensitive unique reference ID for the `Entity`. We recommend setting this to the unique ID of the `Entity` in your system.\n\n### Returns\n\n- `{ id: string; entity_type: 'INDIVIDUAL' | 'ORGANIZATION'; is_kyc_complete: boolean; name?: string; nationality?: string; reference_id?: string; }`\n  Information about an `Entity`, which can be either an individual or an organization.\n\n  - `id: string`\n  - `entity_type: 'INDIVIDUAL' | 'ORGANIZATION'`\n  - `is_kyc_complete: boolean`\n  - `name?: string`\n  - `nationality?: string`\n  - `reference_id?: string`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst entity = await client.v2.entities.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(entity);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Entities.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\tentity, err := client.V2.Entities.Update(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2EntityUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", entity.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/entities/$ENTITY_ID \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY" \\\n    -d \'{}\'',
      },
      java: {
        method: 'v2().entities().update',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.entities.Entity;\nimport com.dinari.api.models.v2.entities.EntityUpdateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        Entity entity = client.v2().entities().update("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e");\n    }\n}',
      },
      python: {
        method: 'v2.entities.update',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nentity = client.v2.entities.update(\n    entity_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(entity.id)',
      },
      typescript: {
        method: 'client.v2.entities.update',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst entity = await client.v2.entities.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(entity.id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v2/entities/{entity_id}/accounts',
    httpMethod: 'get',
    summary: 'Get Accounts for Entity',
    description:
      'Get a list of all `Accounts` that belong to a specific `Entity`. This `Entity` represents your organization itself, or an individual customer of your organization.',
    stainlessPath: '(resource) v2.entities.accounts > (method) list',
    qualified: 'client.v2.entities.accounts.list',
    params: ['entity_id: string;', 'page?: number;', 'page_size?: number;'],
    response:
      "{ id: string; created_dt: string; entity_id: string; is_active: boolean; jurisdiction: 'BASELINE' | 'US'; brokerage_account_id?: string; }[]",
    markdown:
      "## list\n\n`client.v2.entities.accounts.list(entity_id: string, page?: number, page_size?: number): object[]`\n\n**get** `/api/v2/entities/{entity_id}/accounts`\n\nGet a list of all `Accounts` that belong to a specific `Entity`. This `Entity` represents your organization itself, or an individual customer of your organization.\n\n### Parameters\n\n- `entity_id: string`\n\n- `page?: number`\n\n- `page_size?: number`\n\n### Returns\n\n- `{ id: string; created_dt: string; entity_id: string; is_active: boolean; jurisdiction: 'BASELINE' | 'US'; brokerage_account_id?: string; }[]`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst accounts = await client.v2.entities.accounts.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(accounts);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Entities.Accounts.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\taccounts, err := client.V2.Entities.Accounts.List(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2EntityAccountListParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", accounts)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/entities/$ENTITY_ID/accounts \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().entities().accounts().list',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.entities.accounts.Account;\nimport com.dinari.api.models.v2.entities.accounts.AccountListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        List<Account> accounts = client.v2().entities().accounts().list("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e");\n    }\n}',
      },
      python: {
        method: 'v2.entities.accounts.list',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\naccounts = client.v2.entities.accounts.list(\n    entity_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(accounts)',
      },
      typescript: {
        method: 'client.v2.entities.accounts.list',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst accounts = await client.v2.entities.accounts.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(accounts);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/v2/entities/{entity_id}/accounts',
    httpMethod: 'post',
    summary: 'Create Account for Entity',
    description:
      'Create a new `Account` for a specific `Entity`. This `Entity` represents your organization itself, or an individual customer of your organization.',
    stainlessPath: '(resource) v2.entities.accounts > (method) create',
    qualified: 'client.v2.entities.accounts.create',
    params: ['entity_id: string;', "jurisdiction?: 'BASELINE' | 'US';"],
    response:
      "{ id: string; created_dt: string; entity_id: string; is_active: boolean; jurisdiction: 'BASELINE' | 'US'; brokerage_account_id?: string; }",
    markdown:
      "## create\n\n`client.v2.entities.accounts.create(entity_id: string, jurisdiction?: 'BASELINE' | 'US'): { id: string; created_dt: string; entity_id: string; is_active: boolean; jurisdiction: jurisdiction; brokerage_account_id?: string; }`\n\n**post** `/api/v2/entities/{entity_id}/accounts`\n\nCreate a new `Account` for a specific `Entity`. This `Entity` represents your organization itself, or an individual customer of your organization.\n\n### Parameters\n\n- `entity_id: string`\n\n- `jurisdiction?: 'BASELINE' | 'US'`\n  Jurisdiction of the `Account`.\n\n### Returns\n\n- `{ id: string; created_dt: string; entity_id: string; is_active: boolean; jurisdiction: 'BASELINE' | 'US'; brokerage_account_id?: string; }`\n  Information about an `Account` owned by an `Entity`.\n\n  - `id: string`\n  - `created_dt: string`\n  - `entity_id: string`\n  - `is_active: boolean`\n  - `jurisdiction: 'BASELINE' | 'US'`\n  - `brokerage_account_id?: string`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst account = await client.v2.entities.accounts.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(account);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Entities.Accounts.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\taccount, err := client.V2.Entities.Accounts.New(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2EntityAccountNewParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", account.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/entities/$ENTITY_ID/accounts \\\n    -X POST \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().entities().accounts().create',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.entities.accounts.Account;\nimport com.dinari.api.models.v2.entities.accounts.AccountCreateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        Account account = client.v2().entities().accounts().create("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e");\n    }\n}',
      },
      python: {
        method: 'v2.entities.accounts.create',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\naccount = client.v2.entities.accounts.create(\n    entity_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(account.id)',
      },
      typescript: {
        method: 'client.v2.entities.accounts.create',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst account = await client.v2.entities.accounts.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(account.id);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/v2/entities/{entity_id}/kyc',
    httpMethod: 'get',
    summary: 'Get KYC Data',
    description:
      '\nGet most recent KYC data of the `Entity`.\n\nIf there are any completed KYC checks, data from the most recent one will be returned.\nIf there are no completed KYC checks, the most recent KYC check information, regardless of status, will be returned.\n',
    stainlessPath: '(resource) v2.entities.kyc > (method) retrieve',
    qualified: 'client.v2.entities.kyc.retrieve',
    params: ['entity_id: string;'],
    response:
      "{ id: string; status: 'PASS' | 'FAIL' | 'PENDING' | 'INCOMPLETE' | 'NEEDS_REVIEW'; checked_dt?: string; data?: { address_country_code: string; country_code: string; last_name: string; address_city?: string; address_postal_code?: string; address_street_1?: string; address_street_2?: string; address_subdivision?: string; birth_date?: string; email?: string; first_name?: string; middle_name?: string; tax_id_number?: string; }; jurisdiction?: 'BASELINE'; } | { id: string; status: 'PASS' | 'FAIL' | 'PENDING' | 'INCOMPLETE' | 'NEEDS_REVIEW'; checked_dt?: string; data?: { alpaca_customer_agreement: object; aml_check: object; data_citation: object; employment: object; financial_profile: object; identity: object; kyc_metadata: object; non_professional_trader_attestation: object; risk_disclosure: object; trusted_contact: object; us_immigration_info?: object; }; jurisdiction?: 'US'; }",
    markdown:
      "## retrieve\n\n`client.v2.entities.kyc.retrieve(entity_id: string): { id: string; status: kyc_status; checked_dt?: string; data?: baseline_kyc_check_data; jurisdiction?: 'BASELINE'; } | { id: string; status: kyc_status; checked_dt?: string; data?: us_kyc_check_data; jurisdiction?: 'US'; }`\n\n**get** `/api/v2/entities/{entity_id}/kyc`\n\n\nGet most recent KYC data of the `Entity`.\n\nIf there are any completed KYC checks, data from the most recent one will be returned.\nIf there are no completed KYC checks, the most recent KYC check information, regardless of status, will be returned.\n\n\n### Parameters\n\n- `entity_id: string`\n\n### Returns\n\n- `{ id: string; status: 'PASS' | 'FAIL' | 'PENDING' | 'INCOMPLETE' | 'NEEDS_REVIEW'; checked_dt?: string; data?: { address_country_code: string; country_code: string; last_name: string; address_city?: string; address_postal_code?: string; address_street_1?: string; address_street_2?: string; address_subdivision?: string; birth_date?: string; email?: string; first_name?: string; middle_name?: string; tax_id_number?: string; }; jurisdiction?: 'BASELINE'; } | { id: string; status: 'PASS' | 'FAIL' | 'PENDING' | 'INCOMPLETE' | 'NEEDS_REVIEW'; checked_dt?: string; data?: { alpaca_customer_agreement: object; aml_check: object; data_citation: object; employment: object; financial_profile: object; identity: object; kyc_metadata: object; non_professional_trader_attestation: object; risk_disclosure: object; trusted_contact: object; us_immigration_info?: object; }; jurisdiction?: 'US'; }`\n  KYC information for an `Entity` in the baseline jurisdiction.\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst kycInfo = await client.v2.entities.kyc.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(kycInfo);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Entities.KYC.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\tkycInfo, err := client.V2.Entities.KYC.Get(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", kycInfo)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/entities/$ENTITY_ID/kyc \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().entities().kyc().retrieve',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.entities.kyc.KycInfo;\nimport com.dinari.api.models.v2.entities.kyc.KycRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        KycInfo kycInfo = client.v2().entities().kyc().retrieve("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e");\n    }\n}',
      },
      python: {
        method: 'v2.entities.kyc.retrieve',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nkyc_info = client.v2.entities.kyc.retrieve(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(kyc_info)',
      },
      typescript: {
        method: 'client.v2.entities.kyc.retrieve',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst kycInfo = await client.v2.entities.kyc.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(kycInfo);",
      },
    },
  },
  {
    name: 'submit',
    endpoint: '/api/v2/entities/{entity_id}/kyc',
    httpMethod: 'post',
    summary: 'Submit KYC Data',
    description:
      '\nSubmit KYC data directly, for partners that are provisioned to provide their own KYC data.\n\nThis feature is available for everyone in sandbox mode, and for specifically provisioned partners in production.\n',
    stainlessPath: '(resource) v2.entities.kyc > (method) submit',
    qualified: 'client.v2.entities.kyc.submit',
    params: [
      'entity_id: string;',
      "body: { data: { address_country_code: string; country_code: string; last_name: string; address_city?: string; address_postal_code?: string; address_street_1?: string; address_street_2?: string; address_subdivision?: string; birth_date?: string; email?: string; first_name?: string; middle_name?: string; tax_id_number?: string; }; provider_name: string; jurisdiction?: 'BASELINE'; } | { data: { alpaca_customer_agreement: { ip_address: string; signed_at: string; }; aml_check: { check_created_at: string; is_adverse_media_match: boolean; is_monitored_lists_match: boolean; is_politically_exposed_person_match: boolean; is_sanctions_match: boolean; records: string[]; ref_id: string; }; data_citation: { address_sources: string[]; date_of_birth_sources: string[]; tax_id_sources: string[]; }; employment: { employment_status: 'UNEMPLOYED' | 'EMPLOYED' | 'STUDENT' | 'RETIRED'; employer_address?: string; employer_name?: string; employment_position?: string; }; financial_profile: { funding_sources: 'EMPLOYMENT_INCOME' | 'INVESTMENTS' | 'INHERITANCE' | 'BUSINESS_INCOME' | 'SAVINGS' | 'FAMILY'[]; liquid_net_worth_max: number; liquid_net_worth_min: number; }; identity: { city: string; country_of_citizenship: string; country_of_tax_residence: 'US'; date_of_birth: string; email_address: string; family_name: string; given_name: string; phone_number: string; postal_code: string; street_address: string; tax_id: string; middle_name?: string; state?: string; unit?: string; }; kyc_metadata: { check_completed_at: string; check_initiated_at: string; ip_address: string; ref_id: string; }; non_professional_trader_attestation: { attestation_dt: string; is_non_professional_trader: boolean; }; risk_disclosure: { immediate_family_exposed: boolean; is_affiliated_exchange_or_finra: boolean; is_control_person: boolean; is_politically_exposed: boolean; }; trusted_contact: { family_name: string; given_name: string; email_address?: string; phone_number?: string; }; us_immigration_info?: { country_of_birth: string; is_permanent_resident: boolean; departure_from_us_date?: string; visa_expiration_date?: string; visa_type?: string; }; }; provider_name: string; jurisdiction?: 'US'; };",
    ],
    response:
      "{ id: string; status: 'PASS' | 'FAIL' | 'PENDING' | 'INCOMPLETE' | 'NEEDS_REVIEW'; checked_dt?: string; data?: { address_country_code: string; country_code: string; last_name: string; address_city?: string; address_postal_code?: string; address_street_1?: string; address_street_2?: string; address_subdivision?: string; birth_date?: string; email?: string; first_name?: string; middle_name?: string; tax_id_number?: string; }; jurisdiction?: 'BASELINE'; } | { id: string; status: 'PASS' | 'FAIL' | 'PENDING' | 'INCOMPLETE' | 'NEEDS_REVIEW'; checked_dt?: string; data?: { alpaca_customer_agreement: object; aml_check: object; data_citation: object; employment: object; financial_profile: object; identity: object; kyc_metadata: object; non_professional_trader_attestation: object; risk_disclosure: object; trusted_contact: object; us_immigration_info?: object; }; jurisdiction?: 'US'; }",
    perLanguage: {
      go: {
        method: 'client.V2.Entities.KYC.Submit',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\tkycInfo, err := client.V2.Entities.KYC.Submit(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2EntityKYCSubmitParams{\n\t\t\tOfBaseline: &dinariapisdkgo.V2EntityKYCSubmitParamsBodyBaseline{\n\t\t\t\tData: dinariapisdkgo.BaselineKYCCheckDataParam{\n\t\t\t\t\tAddressCountryCode: "SG",\n\t\t\t\t\tCountryCode:        "SG",\n\t\t\t\t\tLastName:           "Doe",\n\t\t\t\t},\n\t\t\t\tProviderName: "x",\n\t\t\t\tJurisdiction: "BASELINE",\n\t\t\t},\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", kycInfo)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/entities/$ENTITY_ID/kyc \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY" \\\n    -d \'{\n          "data": {\n            "address_country_code": "SG",\n            "country_code": "SG",\n            "last_name": "Doe"\n          },\n          "provider_name": "x"\n        }\'',
      },
      java: {
        method: 'v2().entities().kyc().submit',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.entities.kyc.BaselineKycCheckData;\nimport com.dinari.api.models.v2.entities.kyc.KycInfo;\nimport com.dinari.api.models.v2.entities.kyc.KycSubmitParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        KycSubmitParams params = KycSubmitParams.builder()\n            .entityId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .body(KycSubmitParams.Body.Baseline.builder()\n                .data(BaselineKycCheckData.builder()\n                    .addressCountryCode("SG")\n                    .countryCode("SG")\n                    .lastName("Doe")\n                    .build())\n                .providerName("x")\n                .jurisdiction(KycSubmitParams.Body.Baseline.Jurisdiction.BASELINE)\n                .build())\n            .build();\n        KycInfo kycInfo = client.v2().entities().kyc().submit(params);\n    }\n}',
      },
      python: {
        method: 'v2.entities.kyc.submit',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nkyc_info = client.v2.entities.kyc.submit(\n    entity_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    data={\n        "address_country_code": "SG",\n        "country_code": "SG",\n        "last_name": "Doe",\n    },\n    provider_name="x",\n)\nprint(kyc_info)',
      },
      typescript: {
        method: 'client.v2.entities.kyc.submit',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst kycInfo = await client.v2.entities.kyc.submit('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  data: {\n    address_country_code: 'SG',\n    country_code: 'SG',\n    last_name: 'Doe',\n  },\n  provider_name: 'x',\n});\n\nconsole.log(kycInfo);",
      },
    },
  },
  {
    name: 'create_managed_check',
    endpoint: '/api/v2/entities/{entity_id}/kyc/url',
    httpMethod: 'post',
    summary: 'Create Managed KYC Check',
    description:
      '\nCreate a Dinari-managed KYC Check and get a URL for your end customer to interact with.\n\nThe URL points to a web-based KYC interface that can be presented to the end customer for KYC verification.\nOnce the customer completes this KYC flow, the KYC check will be created and available in the KYC API.\n',
    stainlessPath: '(resource) v2.entities.kyc > (method) create_managed_check',
    qualified: 'client.v2.entities.kyc.createManagedCheck',
    params: ['entity_id: string;'],
    response: '{ embed_url: string; expiration_dt: string; }',
    markdown:
      "## create_managed_check\n\n`client.v2.entities.kyc.createManagedCheck(entity_id: string): { embed_url: string; expiration_dt: string; }`\n\n**post** `/api/v2/entities/{entity_id}/kyc/url`\n\n\nCreate a Dinari-managed KYC Check and get a URL for your end customer to interact with.\n\nThe URL points to a web-based KYC interface that can be presented to the end customer for KYC verification.\nOnce the customer completes this KYC flow, the KYC check will be created and available in the KYC API.\n\n\n### Parameters\n\n- `entity_id: string`\n\n### Returns\n\n- `{ embed_url: string; expiration_dt: string; }`\n  URL for a managed KYC flow for an `Entity`.\n\n  - `embed_url: string`\n  - `expiration_dt: string`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst response = await client.v2.entities.kyc.createManagedCheck('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Entities.KYC.NewManagedCheck',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\tresponse, err := client.V2.Entities.KYC.NewManagedCheck(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.EmbedURL)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/entities/$ENTITY_ID/kyc/url \\\n    -X POST \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().entities().kyc().createManagedCheck',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.entities.kyc.KycCreateManagedCheckParams;\nimport com.dinari.api.models.v2.entities.kyc.KycCreateManagedCheckResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        KycCreateManagedCheckResponse response = client.v2().entities().kyc().createManagedCheck("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e");\n    }\n}',
      },
      python: {
        method: 'v2.entities.kyc.create_managed_check',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v2.entities.kyc.create_managed_check(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.embed_url)',
      },
      typescript: {
        method: 'client.v2.entities.kyc.createManagedCheck',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v2.entities.kyc.createManagedCheck(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(response.embed_url);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/v2/entities/{entity_id}/kyc/{kyc_id}/document',
    httpMethod: 'get',
    summary: 'Get KYC Documents',
    description: 'Get uploaded documents for a KYC check',
    stainlessPath: '(resource) v2.entities.kyc.document > (method) retrieve',
    qualified: 'client.v2.entities.kyc.document.retrieve',
    params: ['entity_id: string;', 'kyc_id: string;'],
    response:
      "{ id: string; document_type: 'GOVERNMENT_ID' | 'SELFIE' | 'RESIDENCY' | 'UNKNOWN'; filename: string; url: string; }[]",
    markdown:
      "## retrieve\n\n`client.v2.entities.kyc.document.retrieve(entity_id: string, kyc_id: string): object[]`\n\n**get** `/api/v2/entities/{entity_id}/kyc/{kyc_id}/document`\n\nGet uploaded documents for a KYC check\n\n### Parameters\n\n- `entity_id: string`\n\n- `kyc_id: string`\n\n### Returns\n\n- `{ id: string; document_type: 'GOVERNMENT_ID' | 'SELFIE' | 'RESIDENCY' | 'UNKNOWN'; filename: string; url: string; }[]`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst kycDocuments = await client.v2.entities.kyc.document.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(kycDocuments);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Entities.KYC.Document.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\tkycDocuments, err := client.V2.Entities.KYC.Document.Get(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2EntityKYCDocumentGetParams{\n\t\t\tEntityID: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", kycDocuments)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/entities/$ENTITY_ID/kyc/$KYC_ID/document \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().entities().kyc().document().retrieve',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.entities.kyc.document.DocumentRetrieveParams;\nimport com.dinari.api.models.v2.entities.kyc.document.KycDocument;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        DocumentRetrieveParams params = DocumentRetrieveParams.builder()\n            .entityId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .kycId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .build();\n        List<KycDocument> kycDocuments = client.v2().entities().kyc().document().retrieve(params);\n    }\n}',
      },
      python: {
        method: 'v2.entities.kyc.document.retrieve',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nkyc_documents = client.v2.entities.kyc.document.retrieve(\n    kyc_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    entity_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(kyc_documents)',
      },
      typescript: {
        method: 'client.v2.entities.kyc.document.retrieve',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst kycDocuments = await client.v2.entities.kyc.document.retrieve(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },\n);\n\nconsole.log(kycDocuments);",
      },
    },
  },
  {
    name: 'upload',
    endpoint: '/api/v2/entities/{entity_id}/kyc/{kyc_id}/document',
    httpMethod: 'post',
    summary: 'Upload KYC Documents',
    description:
      '\nUpload KYC-related documentation for partners that are provisioned to provide their own KYC data.\n',
    stainlessPath: '(resource) v2.entities.kyc.document > (method) upload',
    qualified: 'client.v2.entities.kyc.document.upload',
    params: [
      'entity_id: string;',
      'kyc_id: string;',
      "document_type: 'GOVERNMENT_ID' | 'SELFIE' | 'RESIDENCY' | 'UNKNOWN';",
      'file: string;',
    ],
    response:
      "{ id: string; document_type: 'GOVERNMENT_ID' | 'SELFIE' | 'RESIDENCY' | 'UNKNOWN'; filename: string; url: string; }",
    markdown:
      "## upload\n\n`client.v2.entities.kyc.document.upload(entity_id: string, kyc_id: string, document_type: 'GOVERNMENT_ID' | 'SELFIE' | 'RESIDENCY' | 'UNKNOWN', file: string): { id: string; document_type: kyc_document_type; filename: string; url: string; }`\n\n**post** `/api/v2/entities/{entity_id}/kyc/{kyc_id}/document`\n\n\nUpload KYC-related documentation for partners that are provisioned to provide their own KYC data.\n\n\n### Parameters\n\n- `entity_id: string`\n\n- `kyc_id: string`\n\n- `document_type: 'GOVERNMENT_ID' | 'SELFIE' | 'RESIDENCY' | 'UNKNOWN'`\n  Type of `KYCDocument` to be uploaded.\n\n- `file: string`\n  File to be uploaded. Must be a valid image or PDF file (jpg, jpeg, png, pdf) less than 10MB in size.\n\n### Returns\n\n- `{ id: string; document_type: 'GOVERNMENT_ID' | 'SELFIE' | 'RESIDENCY' | 'UNKNOWN'; filename: string; url: string; }`\n  A document associated with KYC for an `Entity`.\n\n  - `id: string`\n  - `document_type: 'GOVERNMENT_ID' | 'SELFIE' | 'RESIDENCY' | 'UNKNOWN'`\n  - `filename: string`\n  - `url: string`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst kycDocument = await client.v2.entities.kyc.document.upload('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  document_type: 'GOVERNMENT_ID',\n  file: fs.createReadStream('path/to/file'),\n});\n\nconsole.log(kycDocument);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Entities.KYC.Document.Upload',
        example:
          'package main\n\nimport (\n\t"bytes"\n\t"context"\n\t"fmt"\n\t"io"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\tkycDocument, err := client.V2.Entities.KYC.Document.Upload(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2EntityKYCDocumentUploadParams{\n\t\t\tEntityID:     "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\t\tDocumentType: dinariapisdkgo.KYCDocumentTypeGovernmentID,\n\t\t\tFile:         io.Reader(bytes.NewBuffer([]byte("Example data"))),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", kycDocument.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/entities/$ENTITY_ID/kyc/$KYC_ID/document \\\n    -H \'Content-Type: multipart/form-data\' \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY" \\\n    -F \'file=@/path/to/file\'',
      },
      java: {
        method: 'v2().entities().kyc().document().upload',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.entities.kyc.document.DocumentUploadParams;\nimport com.dinari.api.models.v2.entities.kyc.document.KycDocument;\nimport com.dinari.api.models.v2.entities.kyc.document.KycDocumentType;\nimport java.io.ByteArrayInputStream;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        DocumentUploadParams params = DocumentUploadParams.builder()\n            .entityId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .kycId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .documentType(KycDocumentType.GOVERNMENT_ID)\n            .file(new ByteArrayInputStream("Example data".getBytes()))\n            .build();\n        KycDocument kycDocument = client.v2().entities().kyc().document().upload(params);\n    }\n}',
      },
      python: {
        method: 'v2.entities.kyc.document.upload',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nkyc_document = client.v2.entities.kyc.document.upload(\n    kyc_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    entity_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    document_type="GOVERNMENT_ID",\n    file=b"Example data",\n)\nprint(kyc_document.id)',
      },
      typescript: {
        method: 'client.v2.entities.kyc.document.upload',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst kycDocument = await client.v2.entities.kyc.document.upload(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  {\n    entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n    document_type: 'GOVERNMENT_ID',\n    file: fs.createReadStream('path/to/file'),\n  },\n);\n\nconsole.log(kycDocument.id);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/v2/accounts/{account_id}',
    httpMethod: 'get',
    summary: 'Get Account by ID',
    description: 'Get a specific `Account` by its ID.',
    stainlessPath: '(resource) v2.accounts > (method) retrieve',
    qualified: 'client.v2.accounts.retrieve',
    params: ['account_id: string;'],
    response:
      "{ id: string; created_dt: string; entity_id: string; is_active: boolean; jurisdiction: 'BASELINE' | 'US'; brokerage_account_id?: string; }",
    markdown:
      "## retrieve\n\n`client.v2.accounts.retrieve(account_id: string): { id: string; created_dt: string; entity_id: string; is_active: boolean; jurisdiction: jurisdiction; brokerage_account_id?: string; }`\n\n**get** `/api/v2/accounts/{account_id}`\n\nGet a specific `Account` by its ID.\n\n### Parameters\n\n- `account_id: string`\n\n### Returns\n\n- `{ id: string; created_dt: string; entity_id: string; is_active: boolean; jurisdiction: 'BASELINE' | 'US'; brokerage_account_id?: string; }`\n  Information about an `Account` owned by an `Entity`.\n\n  - `id: string`\n  - `created_dt: string`\n  - `entity_id: string`\n  - `is_active: boolean`\n  - `jurisdiction: 'BASELINE' | 'US'`\n  - `brokerage_account_id?: string`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst account = await client.v2.accounts.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(account);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\taccount, err := client.V2.Accounts.Get(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", account.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().accounts().retrieve',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.AccountRetrieveParams;\nimport com.dinari.api.models.v2.entities.accounts.Account;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        Account account = client.v2().accounts().retrieve("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e");\n    }\n}',
      },
      python: {
        method: 'v2.accounts.retrieve',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\naccount = client.v2.accounts.retrieve(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(account.id)',
      },
      typescript: {
        method: 'client.v2.accounts.retrieve',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst account = await client.v2.accounts.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(account.id);",
      },
    },
  },
  {
    name: 'deactivate',
    endpoint: '/api/v2/accounts/{account_id}/deactivate',
    httpMethod: 'post',
    summary: 'Deactivate Account',
    description: 'Set the `Account` to be inactive. Inactive accounts cannot be used for trading.',
    stainlessPath: '(resource) v2.accounts > (method) deactivate',
    qualified: 'client.v2.accounts.deactivate',
    params: ['account_id: string;'],
    response:
      "{ id: string; created_dt: string; entity_id: string; is_active: boolean; jurisdiction: 'BASELINE' | 'US'; brokerage_account_id?: string; }",
    markdown:
      "## deactivate\n\n`client.v2.accounts.deactivate(account_id: string): { id: string; created_dt: string; entity_id: string; is_active: boolean; jurisdiction: jurisdiction; brokerage_account_id?: string; }`\n\n**post** `/api/v2/accounts/{account_id}/deactivate`\n\nSet the `Account` to be inactive. Inactive accounts cannot be used for trading.\n\n### Parameters\n\n- `account_id: string`\n\n### Returns\n\n- `{ id: string; created_dt: string; entity_id: string; is_active: boolean; jurisdiction: 'BASELINE' | 'US'; brokerage_account_id?: string; }`\n  Information about an `Account` owned by an `Entity`.\n\n  - `id: string`\n  - `created_dt: string`\n  - `entity_id: string`\n  - `is_active: boolean`\n  - `jurisdiction: 'BASELINE' | 'US'`\n  - `brokerage_account_id?: string`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst account = await client.v2.accounts.deactivate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(account);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.Deactivate',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\taccount, err := client.V2.Accounts.Deactivate(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", account.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/deactivate \\\n    -X POST \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().accounts().deactivate',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.AccountDeactivateParams;\nimport com.dinari.api.models.v2.entities.accounts.Account;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        Account account = client.v2().accounts().deactivate("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e");\n    }\n}',
      },
      python: {
        method: 'v2.accounts.deactivate',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\naccount = client.v2.accounts.deactivate(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(account.id)',
      },
      typescript: {
        method: 'client.v2.accounts.deactivate',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst account = await client.v2.accounts.deactivate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(account.id);",
      },
    },
  },
  {
    name: 'get_portfolio',
    endpoint: '/api/v2/accounts/{account_id}/portfolio',
    httpMethod: 'get',
    summary: 'Get Portfolio',
    description: 'Get the portfolio of the `Account`, excluding cash equivalents such as stablecoins.',
    stainlessPath: '(resource) v2.accounts > (method) get_portfolio',
    qualified: 'client.v2.accounts.getPortfolio',
    params: ['account_id: string;', 'page?: number;', 'page_size?: number;'],
    response:
      '{ assets: { amount: number; chain_id: string; stock_id: string; symbol: string; token_address: string; }[]; }',
    markdown:
      "## get_portfolio\n\n`client.v2.accounts.getPortfolio(account_id: string, page?: number, page_size?: number): { assets: object[]; }`\n\n**get** `/api/v2/accounts/{account_id}/portfolio`\n\nGet the portfolio of the `Account`, excluding cash equivalents such as stablecoins.\n\n### Parameters\n\n- `account_id: string`\n\n- `page?: number`\n  The page number.\n\n- `page_size?: number`\n  The number of stocks to return per page, maximum number is 200.\n\n### Returns\n\n- `{ assets: { amount: number; chain_id: string; stock_id: string; symbol: string; token_address: string; }[]; }`\n  Balance information of `Stock` assets in your `Account`.\n\n  - `assets: { amount: number; chain_id: string; stock_id: string; symbol: string; token_address: string; }[]`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst response = await client.v2.accounts.getPortfolio('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.GetPortfolio',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\tresponse, err := client.V2.Accounts.GetPortfolio(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2AccountGetPortfolioParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Assets)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/portfolio \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().accounts().getPortfolio',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.AccountGetPortfolioParams;\nimport com.dinari.api.models.v2.accounts.AccountGetPortfolioResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        AccountGetPortfolioResponse response = client.v2().accounts().getPortfolio("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e");\n    }\n}',
      },
      python: {
        method: 'v2.accounts.get_portfolio',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v2.accounts.get_portfolio(\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.assets)',
      },
      typescript: {
        method: 'client.v2.accounts.getPortfolio',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v2.accounts.getPortfolio('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.assets);",
      },
    },
  },
  {
    name: 'get_cash_balances',
    endpoint: '/api/v2/accounts/{account_id}/cash',
    httpMethod: 'get',
    summary: 'Get Cash Balances',
    description: 'Get the cash balances of the `Account`, including stablecoins and other cash equivalents.',
    stainlessPath: '(resource) v2.accounts > (method) get_cash_balances',
    qualified: 'client.v2.accounts.getCashBalances',
    params: ['account_id: string;'],
    response: '{ amount: number; chain_id: string; symbol: string; token_address: string; }[]',
    markdown:
      "## get_cash_balances\n\n`client.v2.accounts.getCashBalances(account_id: string): { amount: number; chain_id: chain; symbol: string; token_address: string; }[]`\n\n**get** `/api/v2/accounts/{account_id}/cash`\n\nGet the cash balances of the `Account`, including stablecoins and other cash equivalents.\n\n### Parameters\n\n- `account_id: string`\n\n### Returns\n\n- `{ amount: number; chain_id: string; symbol: string; token_address: string; }[]`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst response = await client.v2.accounts.getCashBalances('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.GetCashBalances',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\tresponse, err := client.V2.Accounts.GetCashBalances(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/cash \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().accounts().getCashBalances',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.AccountGetCashBalancesParams;\nimport com.dinari.api.models.v2.accounts.AccountGetCashBalancesResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        List<AccountGetCashBalancesResponse> response = client.v2().accounts().getCashBalances("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e");\n    }\n}',
      },
      python: {
        method: 'v2.accounts.get_cash_balances',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v2.accounts.get_cash_balances(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response)',
      },
      typescript: {
        method: 'client.v2.accounts.getCashBalances',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v2.accounts.getCashBalances('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_interest_payments',
    endpoint: '/api/v2/accounts/{account_id}/interest_payments',
    httpMethod: 'get',
    summary: 'Get Interest Payments',
    description:
      '\nGet interest payments made to the `Account` from yield-bearing cash holdings.\n\nCurrently, the only yield-bearing stablecoin accepted by Dinari is [USD+](https://usd.dinari.com/).\n',
    stainlessPath: '(resource) v2.accounts > (method) get_interest_payments',
    qualified: 'client.v2.accounts.getInterestPayments',
    params: [
      'account_id: string;',
      'end_date: string;',
      'start_date: string;',
      'page?: number;',
      'page_size?: number;',
    ],
    response: '{ amount: number; currency: string; payment_date: string; }[]',
    markdown:
      "## get_interest_payments\n\n`client.v2.accounts.getInterestPayments(account_id: string, end_date: string, start_date: string, page?: number, page_size?: number): { amount: number; currency: string; payment_date: string; }[]`\n\n**get** `/api/v2/accounts/{account_id}/interest_payments`\n\n\nGet interest payments made to the `Account` from yield-bearing cash holdings.\n\nCurrently, the only yield-bearing stablecoin accepted by Dinari is [USD+](https://usd.dinari.com/).\n\n\n### Parameters\n\n- `account_id: string`\n\n- `end_date: string`\n  End date, exclusive, in US Eastern time zone. ISO 8601 format, YYYY-MM-DD.\n\n- `start_date: string`\n  Start date, inclusive, in US Eastern time zone. ISO 8601 format, YYYY-MM-DD.\n\n- `page?: number`\n\n- `page_size?: number`\n\n### Returns\n\n- `{ amount: number; currency: string; payment_date: string; }[]`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst response = await client.v2.accounts.getInterestPayments('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { end_date: '2019-12-27', start_date: '2019-12-27' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.GetInterestPayments',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\tresponse, err := client.V2.Accounts.GetInterestPayments(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2AccountGetInterestPaymentsParams{\n\t\t\tEndDate:   time.Now(),\n\t\t\tStartDate: time.Now(),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/interest_payments \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().accounts().getInterestPayments',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.AccountGetInterestPaymentsParams;\nimport com.dinari.api.models.v2.accounts.AccountGetInterestPaymentsResponse;\nimport java.time.LocalDate;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        AccountGetInterestPaymentsParams params = AccountGetInterestPaymentsParams.builder()\n            .accountId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .endDate(LocalDate.parse("2019-12-27"))\n            .startDate(LocalDate.parse("2019-12-27"))\n            .build();\n        List<AccountGetInterestPaymentsResponse> response = client.v2().accounts().getInterestPayments(params);\n    }\n}',
      },
      python: {
        method: 'v2.accounts.get_interest_payments',
        example:
          'import os\nfrom datetime import date\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v2.accounts.get_interest_payments(\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date=date.fromisoformat("2019-12-27"),\n    start_date=date.fromisoformat("2019-12-27"),\n)\nprint(response)',
      },
      typescript: {
        method: 'client.v2.accounts.getInterestPayments',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v2.accounts.getInterestPayments(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { end_date: '2019-12-27', start_date: '2019-12-27' },\n);\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_dividend_payments',
    endpoint: '/api/v2/accounts/{account_id}/dividend_payments',
    httpMethod: 'get',
    summary: 'Get Dividend Payments',
    description: 'Get dividend payments made to the `Account` from dividend-bearing stock holdings.',
    stainlessPath: '(resource) v2.accounts > (method) get_dividend_payments',
    qualified: 'client.v2.accounts.getDividendPayments',
    params: [
      'account_id: string;',
      'end_date: string;',
      'start_date: string;',
      'page?: number;',
      'page_size?: number;',
      'stock_id?: string;',
    ],
    response: '{ amount: number; currency: string; payment_date: string; stock_id: string; }[]',
    markdown:
      "## get_dividend_payments\n\n`client.v2.accounts.getDividendPayments(account_id: string, end_date: string, start_date: string, page?: number, page_size?: number, stock_id?: string): { amount: number; currency: string; payment_date: string; stock_id: string; }[]`\n\n**get** `/api/v2/accounts/{account_id}/dividend_payments`\n\nGet dividend payments made to the `Account` from dividend-bearing stock holdings.\n\n### Parameters\n\n- `account_id: string`\n\n- `end_date: string`\n  End date, exclusive, in US Eastern time zone. ISO 8601 format, YYYY-MM-DD.\n\n- `start_date: string`\n  Start date, inclusive, in US Eastern time zone. ISO 8601 format, YYYY-MM-DD.\n\n- `page?: number`\n\n- `page_size?: number`\n\n- `stock_id?: string`\n  Optional ID of the `Stock` to filter by\n\n### Returns\n\n- `{ amount: number; currency: string; payment_date: string; stock_id: string; }[]`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst response = await client.v2.accounts.getDividendPayments('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { end_date: '2019-12-27', start_date: '2019-12-27' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.GetDividendPayments',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\tresponse, err := client.V2.Accounts.GetDividendPayments(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2AccountGetDividendPaymentsParams{\n\t\t\tEndDate:   time.Now(),\n\t\t\tStartDate: time.Now(),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/dividend_payments \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().accounts().getDividendPayments',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.AccountGetDividendPaymentsParams;\nimport com.dinari.api.models.v2.accounts.AccountGetDividendPaymentsResponse;\nimport java.time.LocalDate;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        AccountGetDividendPaymentsParams params = AccountGetDividendPaymentsParams.builder()\n            .accountId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .endDate(LocalDate.parse("2019-12-27"))\n            .startDate(LocalDate.parse("2019-12-27"))\n            .build();\n        List<AccountGetDividendPaymentsResponse> response = client.v2().accounts().getDividendPayments(params);\n    }\n}',
      },
      python: {
        method: 'v2.accounts.get_dividend_payments',
        example:
          'import os\nfrom datetime import date\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v2.accounts.get_dividend_payments(\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date=date.fromisoformat("2019-12-27"),\n    start_date=date.fromisoformat("2019-12-27"),\n)\nprint(response)',
      },
      typescript: {
        method: 'client.v2.accounts.getDividendPayments',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v2.accounts.getDividendPayments(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { end_date: '2019-12-27', start_date: '2019-12-27' },\n);\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'mint_sandbox_tokens',
    endpoint: '/api/v2/accounts/{account_id}/faucet',
    httpMethod: 'post',
    summary: 'Sandbox Faucet',
    description:
      '\nMints 1,000 mockUSD sandbox payment tokens to the `Wallet` connected to the `Account`.\n\nThis feature is only supported in sandbox mode.\n',
    stainlessPath: '(resource) v2.accounts > (method) mint_sandbox_tokens',
    qualified: 'client.v2.accounts.mintSandboxTokens',
    params: ['account_id: string;', 'chain_id?: string;'],
    markdown:
      "## mint_sandbox_tokens\n\n`client.v2.accounts.mintSandboxTokens(account_id: string, chain_id?: string): void`\n\n**post** `/api/v2/accounts/{account_id}/faucet`\n\n\nMints 1,000 mockUSD sandbox payment tokens to the `Wallet` connected to the `Account`.\n\nThis feature is only supported in sandbox mode.\n\n\n### Parameters\n\n- `account_id: string`\n\n- `chain_id?: string`\n  CAIP-2 chain ID of blockchain in which to mint the sandbox payment tokens. If none specified, defaults to eip155:421614. If the `Account` is linked to a Dinari-managed `Wallet`, only eip155:42161 is allowed.\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nawait client.v2.accounts.mintSandboxTokens('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e')\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.MintSandboxTokens',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\terr := client.V2.Accounts.MintSandboxTokens(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2AccountMintSandboxTokensParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/faucet \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY" \\\n    -d \'{}\'',
      },
      java: {
        method: 'v2().accounts().mintSandboxTokens',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.AccountMintSandboxTokensParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        client.v2().accounts().mintSandboxTokens("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e");\n    }\n}',
      },
      python: {
        method: 'v2.accounts.mint_sandbox_tokens',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nclient.v2.accounts.mint_sandbox_tokens(\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)',
      },
      typescript: {
        method: 'client.v2.accounts.mintSandboxTokens',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nawait client.v2.accounts.mintSandboxTokens('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');",
      },
    },
  },
  {
    name: 'get',
    endpoint: '/api/v2/accounts/{account_id}/wallet',
    httpMethod: 'get',
    summary: 'Get Wallet',
    description: 'Get the wallet connected to the `Account`.',
    stainlessPath: '(resource) v2.accounts.wallet > (method) get',
    qualified: 'client.v2.accounts.wallet.get',
    params: ['account_id: string;'],
    response: '{ address: string; chain_id: string; is_aml_flagged: boolean; is_managed_wallet: boolean; }',
    markdown:
      "## get\n\n`client.v2.accounts.wallet.get(account_id: string): { address: string; chain_id: wallet_chain_id; is_aml_flagged: boolean; is_managed_wallet: boolean; }`\n\n**get** `/api/v2/accounts/{account_id}/wallet`\n\nGet the wallet connected to the `Account`.\n\n### Parameters\n\n- `account_id: string`\n\n### Returns\n\n- `{ address: string; chain_id: string; is_aml_flagged: boolean; is_managed_wallet: boolean; }`\n  Information about a blockchain `Wallet`.\n\n  - `address: string`\n  - `chain_id: string`\n  - `is_aml_flagged: boolean`\n  - `is_managed_wallet: boolean`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst wallet = await client.v2.accounts.wallet.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(wallet);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.Wallet.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\twallet, err := client.V2.Accounts.Wallet.Get(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", wallet.ChainID)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/wallet \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().accounts().wallet().get',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.wallet.Wallet;\nimport com.dinari.api.models.v2.accounts.wallet.WalletGetParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        Wallet wallet = client.v2().accounts().wallet().get("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e");\n    }\n}',
      },
      python: {
        method: 'v2.accounts.wallet.get',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nwallet = client.v2.accounts.wallet.get(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(wallet.chain_id)',
      },
      typescript: {
        method: 'client.v2.accounts.wallet.get',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst wallet = await client.v2.accounts.wallet.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(wallet.chain_id);",
      },
    },
  },
  {
    name: 'connect_internal',
    endpoint: '/api/v2/accounts/{account_id}/wallet/internal',
    httpMethod: 'post',
    summary: 'Connect an internal Wallet to Account',
    description: 'Connect an internal `Wallet` to the `Account`.',
    stainlessPath: '(resource) v2.accounts.wallet > (method) connect_internal',
    qualified: 'client.v2.accounts.wallet.connectInternal',
    params: ['account_id: string;', 'chain_id: string;', 'wallet_address: string;', 'is_shared?: boolean;'],
    response: '{ address: string; chain_id: string; is_aml_flagged: boolean; is_managed_wallet: boolean; }',
    markdown:
      "## connect_internal\n\n`client.v2.accounts.wallet.connectInternal(account_id: string, chain_id: string, wallet_address: string, is_shared?: boolean): { address: string; chain_id: wallet_chain_id; is_aml_flagged: boolean; is_managed_wallet: boolean; }`\n\n**post** `/api/v2/accounts/{account_id}/wallet/internal`\n\nConnect an internal `Wallet` to the `Account`.\n\n### Parameters\n\n- `account_id: string`\n\n- `chain_id: string`\n  CAIP-2 formatted chain ID of the blockchain the `Wallet` to link is on. eip155:0 is used for EOA wallets\n\n- `wallet_address: string`\n  Address of the `Wallet`.\n\n- `is_shared?: boolean`\n  Is the linked Wallet shared or not\n\n### Returns\n\n- `{ address: string; chain_id: string; is_aml_flagged: boolean; is_managed_wallet: boolean; }`\n  Information about a blockchain `Wallet`.\n\n  - `address: string`\n  - `chain_id: string`\n  - `is_aml_flagged: boolean`\n  - `is_managed_wallet: boolean`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst wallet = await client.v2.accounts.wallet.connectInternal('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { chain_id: 'eip155:0', wallet_address: 'wallet_address' });\n\nconsole.log(wallet);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.Wallet.ConnectInternal',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\twallet, err := client.V2.Accounts.Wallet.ConnectInternal(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2AccountWalletConnectInternalParams{\n\t\t\tChainID:       dinariapisdkgo.WalletChainIDEip155_0,\n\t\t\tWalletAddress: "wallet_address",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", wallet.ChainID)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/wallet/internal \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY" \\\n    -d \'{\n          "chain_id": "eip155:0",\n          "wallet_address": "wallet_address"\n        }\'',
      },
      java: {
        method: 'v2().accounts().wallet().connectInternal',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.wallet.Wallet;\nimport com.dinari.api.models.v2.accounts.wallet.WalletConnectInternalParams;\nimport com.dinari.api.models.v2.accounts.wallet.external.WalletChainId;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        WalletConnectInternalParams params = WalletConnectInternalParams.builder()\n            .accountId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .chainId(WalletChainId.EIP155_0)\n            .walletAddress("wallet_address")\n            .build();\n        Wallet wallet = client.v2().accounts().wallet().connectInternal(params);\n    }\n}',
      },
      python: {
        method: 'v2.accounts.wallet.connect_internal',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nwallet = client.v2.accounts.wallet.connect_internal(\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    chain_id="eip155:0",\n    wallet_address="wallet_address",\n)\nprint(wallet.chain_id)',
      },
      typescript: {
        method: 'client.v2.accounts.wallet.connectInternal',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst wallet = await client.v2.accounts.wallet.connectInternal(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { chain_id: 'eip155:0', wallet_address: 'wallet_address' },\n);\n\nconsole.log(wallet.chain_id);",
      },
    },
  },
  {
    name: 'get_nonce',
    endpoint: '/api/v2/accounts/{account_id}/wallet/external/nonce',
    httpMethod: 'get',
    summary: 'Get Wallet Connection Nonce',
    description: 'Get a nonce and message to be signed in order to verify `Wallet` ownership.',
    stainlessPath: '(resource) v2.accounts.wallet.external > (method) get_nonce',
    qualified: 'client.v2.accounts.wallet.external.getNonce',
    params: ['account_id: string;', 'chain_id: string;', 'wallet_address: string;'],
    response: '{ message: string; nonce: string; }',
    markdown:
      "## get_nonce\n\n`client.v2.accounts.wallet.external.getNonce(account_id: string, chain_id: string, wallet_address: string): { message: string; nonce: string; }`\n\n**get** `/api/v2/accounts/{account_id}/wallet/external/nonce`\n\nGet a nonce and message to be signed in order to verify `Wallet` ownership.\n\n### Parameters\n\n- `account_id: string`\n\n- `chain_id: string`\n  CAIP-2 formatted chain ID of the blockchain the `Wallet` is on. eip155:0 is used for EOA wallets\n\n- `wallet_address: string`\n  Address of the `Wallet` to connect.\n\n### Returns\n\n- `{ message: string; nonce: string; }`\n  Connection message to sign to prove ownership of the `Wallet`.\n\n  - `message: string`\n  - `nonce: string`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst response = await client.v2.accounts.wallet.external.getNonce('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { chain_id: 'eip155:0', wallet_address: 'wallet_address' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.Wallet.External.GetNonce',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\tresponse, err := client.V2.Accounts.Wallet.External.GetNonce(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2AccountWalletExternalGetNonceParams{\n\t\t\tChainID:       dinariapisdkgo.WalletChainIDEip155_0,\n\t\t\tWalletAddress: "wallet_address",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Message)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/wallet/external/nonce \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().accounts().wallet().external().getNonce',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.wallet.external.ExternalGetNonceParams;\nimport com.dinari.api.models.v2.accounts.wallet.external.ExternalGetNonceResponse;\nimport com.dinari.api.models.v2.accounts.wallet.external.WalletChainId;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        ExternalGetNonceParams params = ExternalGetNonceParams.builder()\n            .accountId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .chainId(WalletChainId.EIP155_0)\n            .walletAddress("wallet_address")\n            .build();\n        ExternalGetNonceResponse response = client.v2().accounts().wallet().external().getNonce(params);\n    }\n}',
      },
      python: {
        method: 'v2.accounts.wallet.external.get_nonce',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v2.accounts.wallet.external.get_nonce(\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    chain_id="eip155:0",\n    wallet_address="wallet_address",\n)\nprint(response.message)',
      },
      typescript: {
        method: 'client.v2.accounts.wallet.external.getNonce',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v2.accounts.wallet.external.getNonce(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { chain_id: 'eip155:0', wallet_address: 'wallet_address' },\n);\n\nconsole.log(response.message);",
      },
    },
  },
  {
    name: 'connect',
    endpoint: '/api/v2/accounts/{account_id}/wallet/external',
    httpMethod: 'post',
    summary: 'Connect Wallet to Account',
    description: 'Connect a `Wallet` to the `Account` after verifying the signature.',
    stainlessPath: '(resource) v2.accounts.wallet.external > (method) connect',
    qualified: 'client.v2.accounts.wallet.external.connect',
    params: [
      'account_id: string;',
      'chain_id: string;',
      'nonce: string;',
      'signature: string;',
      'wallet_address: string;',
    ],
    response: '{ address: string; chain_id: string; is_aml_flagged: boolean; is_managed_wallet: boolean; }',
    markdown:
      "## connect\n\n`client.v2.accounts.wallet.external.connect(account_id: string, chain_id: string, nonce: string, signature: string, wallet_address: string): { address: string; chain_id: wallet_chain_id; is_aml_flagged: boolean; is_managed_wallet: boolean; }`\n\n**post** `/api/v2/accounts/{account_id}/wallet/external`\n\nConnect a `Wallet` to the `Account` after verifying the signature.\n\n### Parameters\n\n- `account_id: string`\n\n- `chain_id: string`\n  CAIP-2 formatted chain ID of the blockchain the `Wallet` to link is on. eip155:0 is used for EOA wallets\n\n- `nonce: string`\n  Nonce contained within the connection message.\n\n- `signature: string`\n  Signature payload from signing the connection message with the `Wallet`.\n\n- `wallet_address: string`\n  Address of the `Wallet`.\n\n### Returns\n\n- `{ address: string; chain_id: string; is_aml_flagged: boolean; is_managed_wallet: boolean; }`\n  Information about a blockchain `Wallet`.\n\n  - `address: string`\n  - `chain_id: string`\n  - `is_aml_flagged: boolean`\n  - `is_managed_wallet: boolean`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst wallet = await client.v2.accounts.wallet.external.connect('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  chain_id: 'eip155:0',\n  nonce: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  signature: '0xeaF12bD1DfFd',\n  wallet_address: 'wallet_address',\n});\n\nconsole.log(wallet);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.Wallet.External.Connect',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\twallet, err := client.V2.Accounts.Wallet.External.Connect(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2AccountWalletExternalConnectParams{\n\t\t\tChainID:       dinariapisdkgo.WalletChainIDEip155_0,\n\t\t\tNonce:         "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\t\tSignature:     "0xeaF12bD1DfFd",\n\t\t\tWalletAddress: "wallet_address",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", wallet.ChainID)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/wallet/external \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY" \\\n    -d \'{\n          "chain_id": "eip155:0",\n          "nonce": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "signature": "0xeaF12bD1DfFd",\n          "wallet_address": "wallet_address"\n        }\'',
      },
      java: {
        method: 'v2().accounts().wallet().external().connect',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.wallet.Wallet;\nimport com.dinari.api.models.v2.accounts.wallet.external.ExternalConnectParams;\nimport com.dinari.api.models.v2.accounts.wallet.external.WalletChainId;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        ExternalConnectParams params = ExternalConnectParams.builder()\n            .accountId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .chainId(WalletChainId.EIP155_0)\n            .nonce("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .signature("0xeaF12bD1DfFd")\n            .walletAddress("wallet_address")\n            .build();\n        Wallet wallet = client.v2().accounts().wallet().external().connect(params);\n    }\n}',
      },
      python: {
        method: 'v2.accounts.wallet.external.connect',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nwallet = client.v2.accounts.wallet.external.connect(\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    chain_id="eip155:0",\n    nonce="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    signature="0xeaF12bD1DfFd",\n    wallet_address="wallet_address",\n)\nprint(wallet.chain_id)',
      },
      typescript: {
        method: 'client.v2.accounts.wallet.external.connect',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst wallet = await client.v2.accounts.wallet.external.connect(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  {\n    chain_id: 'eip155:0',\n    nonce: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n    signature: '0xeaF12bD1DfFd',\n    wallet_address: 'wallet_address',\n  },\n);\n\nconsole.log(wallet.chain_id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v2/accounts/{account_id}/orders',
    httpMethod: 'get',
    summary: 'Get Orders',
    description:
      'Get a list of all `Orders` under the `Account`.<br>Optionally `Orders` can be filtered by chain ID, transaction hash, or client order ID.',
    stainlessPath: '(resource) v2.accounts.orders > (method) list',
    qualified: 'client.v2.accounts.orders.list',
    params: [
      'account_id: string;',
      'chain_id?: string;',
      'client_order_id?: string;',
      'order_transaction_hash?: string;',
      'page?: number;',
      'page_size?: number;',
    ],
    response:
      "{ id: string; chain_id: string; created_dt: string; order_contract_address: string; order_side: 'BUY' | 'SELL'; order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK'; order_transaction_hash: string; order_type: 'MARKET' | 'LIMIT'; payment_token: string; status: string; alloy_id?: string; asset_token?: string; asset_token_quantity?: number; cancel_transaction_hash?: string; client_order_id?: string; fee?: number; limit_price?: number; order_request_id?: string; payment_token_quantity?: number; stock_id?: string; }[]",
    markdown:
      "## list\n\n`client.v2.accounts.orders.list(account_id: string, chain_id?: string, client_order_id?: string, order_transaction_hash?: string, page?: number, page_size?: number): object[]`\n\n**get** `/api/v2/accounts/{account_id}/orders`\n\nGet a list of all `Orders` under the `Account`.<br>Optionally `Orders` can be filtered by chain ID, transaction hash, or client order ID.\n\n### Parameters\n\n- `account_id: string`\n\n- `chain_id?: string`\n  CAIP-2 formatted chain ID of the blockchain the `Order` was made on.\n\n- `client_order_id?: string`\n  Customer-supplied identifier to search for `Order`s.\n\n- `order_transaction_hash?: string`\n  Transaction hash of the `Order`.\n\n- `page?: number`\n\n- `page_size?: number`\n\n### Returns\n\n- `{ id: string; chain_id: string; created_dt: string; order_contract_address: string; order_side: 'BUY' | 'SELL'; order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK'; order_transaction_hash: string; order_type: 'MARKET' | 'LIMIT'; payment_token: string; status: string; alloy_id?: string; asset_token?: string; asset_token_quantity?: number; cancel_transaction_hash?: string; client_order_id?: string; fee?: number; limit_price?: number; order_request_id?: string; payment_token_quantity?: number; stock_id?: string; }[]`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst orders = await client.v2.accounts.orders.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(orders);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.Orders.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\torders, err := client.V2.Accounts.Orders.List(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2AccountOrderListParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", orders)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/orders \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().accounts().orders().list',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.orders.Order;\nimport com.dinari.api.models.v2.accounts.orders.OrderListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        List<Order> orders = client.v2().accounts().orders().list("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e");\n    }\n}',
      },
      python: {
        method: 'v2.accounts.orders.list',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\norders = client.v2.accounts.orders.list(\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(orders)',
      },
      typescript: {
        method: 'client.v2.accounts.orders.list',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst orders = await client.v2.accounts.orders.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(orders);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/v2/accounts/{account_id}/orders/{order_id}',
    httpMethod: 'get',
    summary: 'Get Order by ID',
    description: 'Get a specific `Order` by its ID.',
    stainlessPath: '(resource) v2.accounts.orders > (method) retrieve',
    qualified: 'client.v2.accounts.orders.retrieve',
    params: ['account_id: string;', 'order_id: string;'],
    response:
      "{ id: string; chain_id: string; created_dt: string; order_contract_address: string; order_side: 'BUY' | 'SELL'; order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK'; order_transaction_hash: string; order_type: 'MARKET' | 'LIMIT'; payment_token: string; status: string; alloy_id?: string; asset_token?: string; asset_token_quantity?: number; cancel_transaction_hash?: string; client_order_id?: string; fee?: number; limit_price?: number; order_request_id?: string; payment_token_quantity?: number; stock_id?: string; }",
    markdown:
      "## retrieve\n\n`client.v2.accounts.orders.retrieve(account_id: string, order_id: string): { id: string; chain_id: chain; created_dt: string; order_contract_address: string; order_side: order_side; order_tif: order_tif; order_transaction_hash: string; order_type: order_type; payment_token: string; status: brokerage_order_status; alloy_id?: string; asset_token?: string; asset_token_quantity?: number; cancel_transaction_hash?: string; client_order_id?: string; fee?: number; limit_price?: number; order_request_id?: string; payment_token_quantity?: number; stock_id?: string; }`\n\n**get** `/api/v2/accounts/{account_id}/orders/{order_id}`\n\nGet a specific `Order` by its ID.\n\n### Parameters\n\n- `account_id: string`\n\n- `order_id: string`\n\n### Returns\n\n- `{ id: string; chain_id: string; created_dt: string; order_contract_address: string; order_side: 'BUY' | 'SELL'; order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK'; order_transaction_hash: string; order_type: 'MARKET' | 'LIMIT'; payment_token: string; status: string; alloy_id?: string; asset_token?: string; asset_token_quantity?: number; cancel_transaction_hash?: string; client_order_id?: string; fee?: number; limit_price?: number; order_request_id?: string; payment_token_quantity?: number; stock_id?: string; }`\n\n  - `id: string`\n  - `chain_id: string`\n  - `created_dt: string`\n  - `order_contract_address: string`\n  - `order_side: 'BUY' | 'SELL'`\n  - `order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK'`\n  - `order_transaction_hash: string`\n  - `order_type: 'MARKET' | 'LIMIT'`\n  - `payment_token: string`\n  - `status: string`\n  - `alloy_id?: string`\n  - `asset_token?: string`\n  - `asset_token_quantity?: number`\n  - `cancel_transaction_hash?: string`\n  - `client_order_id?: string`\n  - `fee?: number`\n  - `limit_price?: number`\n  - `order_request_id?: string`\n  - `payment_token_quantity?: number`\n  - `stock_id?: string`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst order = await client.v2.accounts.orders.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(order);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.Orders.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\torder, err := client.V2.Accounts.Orders.Get(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2AccountOrderGetParams{\n\t\t\tAccountID: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", order.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/orders/$ORDER_ID \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().accounts().orders().retrieve',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.orders.Order;\nimport com.dinari.api.models.v2.accounts.orders.OrderRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        OrderRetrieveParams params = OrderRetrieveParams.builder()\n            .accountId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .orderId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .build();\n        Order order = client.v2().accounts().orders().retrieve(params);\n    }\n}',
      },
      python: {
        method: 'v2.accounts.orders.retrieve',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\norder = client.v2.accounts.orders.retrieve(\n    order_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(order.id)',
      },
      typescript: {
        method: 'client.v2.accounts.orders.retrieve',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst order = await client.v2.accounts.orders.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(order.id);",
      },
    },
  },
  {
    name: 'get_fulfillments',
    endpoint: '/api/v2/accounts/{account_id}/orders/{order_id}/fulfillments',
    httpMethod: 'get',
    summary: 'Get Order Fulfillments',
    description: 'Get `OrderFulfillments` for a specific `Order`.',
    stainlessPath: '(resource) v2.accounts.orders > (method) get_fulfillments',
    qualified: 'client.v2.accounts.orders.getFulfillments',
    params: ['account_id: string;', 'order_id: string;', 'page?: number;', 'page_size?: number;'],
    response:
      '{ id: string; asset_token_filled: number; asset_token_spent: number; chain_id: string; order_id: string; payment_token_filled: number; payment_token_spent: number; transaction_dt: string; transaction_hash: string; alloy_id?: string; payment_token_fee?: number; stock_id?: string; }[]',
    markdown:
      "## get_fulfillments\n\n`client.v2.accounts.orders.getFulfillments(account_id: string, order_id: string, page?: number, page_size?: number): object[]`\n\n**get** `/api/v2/accounts/{account_id}/orders/{order_id}/fulfillments`\n\nGet `OrderFulfillments` for a specific `Order`.\n\n### Parameters\n\n- `account_id: string`\n\n- `order_id: string`\n\n- `page?: number`\n\n- `page_size?: number`\n\n### Returns\n\n- `{ id: string; asset_token_filled: number; asset_token_spent: number; chain_id: string; order_id: string; payment_token_filled: number; payment_token_spent: number; transaction_dt: string; transaction_hash: string; alloy_id?: string; payment_token_fee?: number; stock_id?: string; }[]`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst fulfillments = await client.v2.accounts.orders.getFulfillments('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(fulfillments);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.Orders.GetFulfillments',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\tfulfillments, err := client.V2.Accounts.Orders.GetFulfillments(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2AccountOrderGetFulfillmentsParams{\n\t\t\tAccountID: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", fulfillments)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/orders/$ORDER_ID/fulfillments \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().accounts().orders().getFulfillments',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.orderfulfillments.Fulfillment;\nimport com.dinari.api.models.v2.accounts.orders.OrderGetFulfillmentsParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        OrderGetFulfillmentsParams params = OrderGetFulfillmentsParams.builder()\n            .accountId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .orderId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .build();\n        List<Fulfillment> fulfillments = client.v2().accounts().orders().getFulfillments(params);\n    }\n}',
      },
      python: {
        method: 'v2.accounts.orders.get_fulfillments',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nfulfillments = client.v2.accounts.orders.get_fulfillments(\n    order_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(fulfillments)',
      },
      typescript: {
        method: 'client.v2.accounts.orders.getFulfillments',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst fulfillments = await client.v2.accounts.orders.getFulfillments(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },\n);\n\nconsole.log(fulfillments);",
      },
    },
  },
  {
    name: 'batch_cancel',
    endpoint: '/api/v2/accounts/{account_id}/orders/cancel',
    httpMethod: 'post',
    summary: 'Cancel Orders',
    description:
      '\nCancel multiple `Orders` by their IDs in a single request. Note that this requires the `Order` IDs, not the `OrderRequest` IDs.\nOnce you submit a cancellation request, it cannot be undone. Be advised that orders with a\nstatus of PENDING_FILL, PENDING_ESCROW, FILLED, REJECTED, or CANCELLED cannot be cancelled.\n\n`Order` cancellation is not guaranteed nor is it immediate. The `Orders` may still be executed\nif the cancellation request is not received in time.\n\nThe response will indicate which orders were successfully queued to cancel and which failed to queue.\nCheck the status using the "Get Order by ID" endpoint to confirm whether individual `Orders` have been cancelled.\n',
    stainlessPath: '(resource) v2.accounts.orders > (method) batch_cancel',
    qualified: 'client.v2.accounts.orders.batchCancel',
    params: ['account_id: string;', 'order_ids: string[];'],
    response:
      '{ cancel_queued_orders: { id: string; chain_id: chain; created_dt: string; order_contract_address: string; order_side: order_side; order_tif: order_tif; order_transaction_hash: string; order_type: order_type; payment_token: string; status: brokerage_order_status; alloy_id?: string; asset_token?: string; asset_token_quantity?: number; cancel_transaction_hash?: string; client_order_id?: string; fee?: number; limit_price?: number; order_request_id?: string; payment_token_quantity?: number; stock_id?: string; }[]; failed_to_cancel_orders: { id: string; chain_id: chain; created_dt: string; order_contract_address: string; order_side: order_side; order_tif: order_tif; order_transaction_hash: string; order_type: order_type; payment_token: string; status: brokerage_order_status; alloy_id?: string; asset_token?: string; asset_token_quantity?: number; cancel_transaction_hash?: string; client_order_id?: string; fee?: number; limit_price?: number; order_request_id?: string; payment_token_quantity?: number; stock_id?: string; }[]; }',
    markdown:
      "## batch_cancel\n\n`client.v2.accounts.orders.batchCancel(account_id: string, order_ids: string[]): { cancel_queued_orders: order[]; failed_to_cancel_orders: order[]; }`\n\n**post** `/api/v2/accounts/{account_id}/orders/cancel`\n\n\nCancel multiple `Orders` by their IDs in a single request. Note that this requires the `Order` IDs, not the `OrderRequest` IDs.\nOnce you submit a cancellation request, it cannot be undone. Be advised that orders with a\nstatus of PENDING_FILL, PENDING_ESCROW, FILLED, REJECTED, or CANCELLED cannot be cancelled.\n\n`Order` cancellation is not guaranteed nor is it immediate. The `Orders` may still be executed\nif the cancellation request is not received in time.\n\nThe response will indicate which orders were successfully queued to cancel and which failed to queue.\nCheck the status using the \"Get Order by ID\" endpoint to confirm whether individual `Orders` have been cancelled.\n\n\n### Parameters\n\n- `account_id: string`\n\n- `order_ids: string[]`\n  List of `Order` IDs to cancel\n\n### Returns\n\n- `{ cancel_queued_orders: { id: string; chain_id: chain; created_dt: string; order_contract_address: string; order_side: order_side; order_tif: order_tif; order_transaction_hash: string; order_type: order_type; payment_token: string; status: brokerage_order_status; alloy_id?: string; asset_token?: string; asset_token_quantity?: number; cancel_transaction_hash?: string; client_order_id?: string; fee?: number; limit_price?: number; order_request_id?: string; payment_token_quantity?: number; stock_id?: string; }[]; failed_to_cancel_orders: { id: string; chain_id: chain; created_dt: string; order_contract_address: string; order_side: order_side; order_tif: order_tif; order_transaction_hash: string; order_type: order_type; payment_token: string; status: brokerage_order_status; alloy_id?: string; asset_token?: string; asset_token_quantity?: number; cancel_transaction_hash?: string; client_order_id?: string; fee?: number; limit_price?: number; order_request_id?: string; payment_token_quantity?: number; stock_id?: string; }[]; }`\n\n  - `cancel_queued_orders: { id: string; chain_id: string; created_dt: string; order_contract_address: string; order_side: 'BUY' | 'SELL'; order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK'; order_transaction_hash: string; order_type: 'MARKET' | 'LIMIT'; payment_token: string; status: string; alloy_id?: string; asset_token?: string; asset_token_quantity?: number; cancel_transaction_hash?: string; client_order_id?: string; fee?: number; limit_price?: number; order_request_id?: string; payment_token_quantity?: number; stock_id?: string; }[]`\n  - `failed_to_cancel_orders: { id: string; chain_id: string; created_dt: string; order_contract_address: string; order_side: 'BUY' | 'SELL'; order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK'; order_transaction_hash: string; order_type: 'MARKET' | 'LIMIT'; payment_token: string; status: string; alloy_id?: string; asset_token?: string; asset_token_quantity?: number; cancel_transaction_hash?: string; client_order_id?: string; fee?: number; limit_price?: number; order_request_id?: string; payment_token_quantity?: number; stock_id?: string; }[]`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst response = await client.v2.accounts.orders.batchCancel('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { order_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'] });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.Orders.BatchCancel',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\tresponse, err := client.V2.Accounts.Orders.BatchCancel(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2AccountOrderBatchCancelParams{\n\t\t\tOrderIDs: []string{"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"},\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.CancelQueuedOrders)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/orders/cancel \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY" \\\n    -d \'{\n          "order_ids": [\n            "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n          ]\n        }\'',
      },
      java: {
        method: 'v2().accounts().orders().batchCancel',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.orders.OrderBatchCancelParams;\nimport com.dinari.api.models.v2.accounts.orders.OrderBatchCancelResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        OrderBatchCancelParams params = OrderBatchCancelParams.builder()\n            .accountId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .addOrderId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .build();\n        OrderBatchCancelResponse response = client.v2().accounts().orders().batchCancel(params);\n    }\n}',
      },
      python: {
        method: 'v2.accounts.orders.batch_cancel',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v2.accounts.orders.batch_cancel(\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    order_ids=["182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"],\n)\nprint(response.cancel_queued_orders)',
      },
      typescript: {
        method: 'client.v2.accounts.orders.batchCancel',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v2.accounts.orders.batchCancel(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { order_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'] },\n);\n\nconsole.log(response.cancel_queued_orders);",
      },
    },
  },
  {
    name: 'cancel',
    endpoint: '/api/v2/accounts/{account_id}/orders/{order_id}/cancel',
    httpMethod: 'post',
    summary: 'Cancel Order',
    description:
      '\nCancel an `Order` by its ID. Note that this requires the `Order` ID, not the `OrderRequest` ID.\nOnce you submit a cancellation request, it cannot be undone. Be advised that orders with a\nstatus of PENDING_FILL, PENDING_ESCROW, FILLED, REJECTED, or CANCELLED cannot be cancelled.\n\n`Order` cancellation is not guaranteed nor is it immediate. The `Order` may still be executed\nif the cancellation request is not received in time.\n\nCheck the status using the "Get Order by ID" endpoint to confirm whether the `Order` has been cancelled.\n',
    stainlessPath: '(resource) v2.accounts.orders > (method) cancel',
    qualified: 'client.v2.accounts.orders.cancel',
    params: ['account_id: string;', 'order_id: string;'],
    response:
      "{ id: string; chain_id: string; created_dt: string; order_contract_address: string; order_side: 'BUY' | 'SELL'; order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK'; order_transaction_hash: string; order_type: 'MARKET' | 'LIMIT'; payment_token: string; status: string; alloy_id?: string; asset_token?: string; asset_token_quantity?: number; cancel_transaction_hash?: string; client_order_id?: string; fee?: number; limit_price?: number; order_request_id?: string; payment_token_quantity?: number; stock_id?: string; }",
    markdown:
      "## cancel\n\n`client.v2.accounts.orders.cancel(account_id: string, order_id: string): { id: string; chain_id: chain; created_dt: string; order_contract_address: string; order_side: order_side; order_tif: order_tif; order_transaction_hash: string; order_type: order_type; payment_token: string; status: brokerage_order_status; alloy_id?: string; asset_token?: string; asset_token_quantity?: number; cancel_transaction_hash?: string; client_order_id?: string; fee?: number; limit_price?: number; order_request_id?: string; payment_token_quantity?: number; stock_id?: string; }`\n\n**post** `/api/v2/accounts/{account_id}/orders/{order_id}/cancel`\n\n\nCancel an `Order` by its ID. Note that this requires the `Order` ID, not the `OrderRequest` ID.\nOnce you submit a cancellation request, it cannot be undone. Be advised that orders with a\nstatus of PENDING_FILL, PENDING_ESCROW, FILLED, REJECTED, or CANCELLED cannot be cancelled.\n\n`Order` cancellation is not guaranteed nor is it immediate. The `Order` may still be executed\nif the cancellation request is not received in time.\n\nCheck the status using the \"Get Order by ID\" endpoint to confirm whether the `Order` has been cancelled.\n\n\n### Parameters\n\n- `account_id: string`\n\n- `order_id: string`\n\n### Returns\n\n- `{ id: string; chain_id: string; created_dt: string; order_contract_address: string; order_side: 'BUY' | 'SELL'; order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK'; order_transaction_hash: string; order_type: 'MARKET' | 'LIMIT'; payment_token: string; status: string; alloy_id?: string; asset_token?: string; asset_token_quantity?: number; cancel_transaction_hash?: string; client_order_id?: string; fee?: number; limit_price?: number; order_request_id?: string; payment_token_quantity?: number; stock_id?: string; }`\n\n  - `id: string`\n  - `chain_id: string`\n  - `created_dt: string`\n  - `order_contract_address: string`\n  - `order_side: 'BUY' | 'SELL'`\n  - `order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK'`\n  - `order_transaction_hash: string`\n  - `order_type: 'MARKET' | 'LIMIT'`\n  - `payment_token: string`\n  - `status: string`\n  - `alloy_id?: string`\n  - `asset_token?: string`\n  - `asset_token_quantity?: number`\n  - `cancel_transaction_hash?: string`\n  - `client_order_id?: string`\n  - `fee?: number`\n  - `limit_price?: number`\n  - `order_request_id?: string`\n  - `payment_token_quantity?: number`\n  - `stock_id?: string`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst order = await client.v2.accounts.orders.cancel('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(order);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.Orders.Cancel',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\torder, err := client.V2.Accounts.Orders.Cancel(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2AccountOrderCancelParams{\n\t\t\tAccountID: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", order.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/orders/$ORDER_ID/cancel \\\n    -X POST \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().accounts().orders().cancel',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.orders.Order;\nimport com.dinari.api.models.v2.accounts.orders.OrderCancelParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        OrderCancelParams params = OrderCancelParams.builder()\n            .accountId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .orderId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .build();\n        Order order = client.v2().accounts().orders().cancel(params);\n    }\n}',
      },
      python: {
        method: 'v2.accounts.orders.cancel',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\norder = client.v2.accounts.orders.cancel(\n    order_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(order.id)',
      },
      typescript: {
        method: 'client.v2.accounts.orders.cancel',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst order = await client.v2.accounts.orders.cancel('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(order.id);",
      },
    },
  },
  {
    name: 'query',
    endpoint: '/api/v2/accounts/{account_id}/order_fulfillments',
    httpMethod: 'get',
    summary: 'Query Order Fulfillments',
    description: 'Query `OrderFulfillments` under the `Account`.',
    stainlessPath: '(resource) v2.accounts.order_fulfillments > (method) query',
    qualified: 'client.v2.accounts.orderFulfillments.query',
    params: ['account_id: string;', 'order_ids?: string[];', 'page?: number;', 'page_size?: number;'],
    response:
      '{ id: string; asset_token_filled: number; asset_token_spent: number; chain_id: string; order_id: string; payment_token_filled: number; payment_token_spent: number; transaction_dt: string; transaction_hash: string; alloy_id?: string; payment_token_fee?: number; stock_id?: string; }[]',
    markdown:
      "## query\n\n`client.v2.accounts.orderFulfillments.query(account_id: string, order_ids?: string[], page?: number, page_size?: number): object[]`\n\n**get** `/api/v2/accounts/{account_id}/order_fulfillments`\n\nQuery `OrderFulfillments` under the `Account`.\n\n### Parameters\n\n- `account_id: string`\n\n- `order_ids?: string[]`\n  List of `Order` IDs to query `OrderFulfillments` for.\n\n- `page?: number`\n\n- `page_size?: number`\n\n### Returns\n\n- `{ id: string; asset_token_filled: number; asset_token_spent: number; chain_id: string; order_id: string; payment_token_filled: number; payment_token_spent: number; transaction_dt: string; transaction_hash: string; alloy_id?: string; payment_token_fee?: number; stock_id?: string; }[]`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst fulfillments = await client.v2.accounts.orderFulfillments.query('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(fulfillments);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.OrderFulfillments.Query',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\tfulfillments, err := client.V2.Accounts.OrderFulfillments.Query(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2AccountOrderFulfillmentQueryParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", fulfillments)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/order_fulfillments \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().accounts().orderFulfillments().query',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.orderfulfillments.Fulfillment;\nimport com.dinari.api.models.v2.accounts.orderfulfillments.OrderFulfillmentQueryParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        List<Fulfillment> fulfillments = client.v2().accounts().orderFulfillments().query("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e");\n    }\n}',
      },
      python: {
        method: 'v2.accounts.order_fulfillments.query',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nfulfillments = client.v2.accounts.order_fulfillments.query(\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(fulfillments)',
      },
      typescript: {
        method: 'client.v2.accounts.orderFulfillments.query',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst fulfillments = await client.v2.accounts.orderFulfillments.query(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(fulfillments);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/v2/accounts/{account_id}/order_fulfillments/{order_fulfillment_id}',
    httpMethod: 'get',
    summary: 'Get Order Fulfillment by ID',
    description: 'Get a specific `OrderFulfillment` by its ID.',
    stainlessPath: '(resource) v2.accounts.order_fulfillments > (method) retrieve',
    qualified: 'client.v2.accounts.orderFulfillments.retrieve',
    params: ['account_id: string;', 'order_fulfillment_id: string;'],
    response:
      '{ id: string; asset_token_filled: number; asset_token_spent: number; chain_id: string; order_id: string; payment_token_filled: number; payment_token_spent: number; transaction_dt: string; transaction_hash: string; alloy_id?: string; payment_token_fee?: number; stock_id?: string; }',
    markdown:
      "## retrieve\n\n`client.v2.accounts.orderFulfillments.retrieve(account_id: string, order_fulfillment_id: string): { id: string; asset_token_filled: number; asset_token_spent: number; chain_id: chain; order_id: string; payment_token_filled: number; payment_token_spent: number; transaction_dt: string; transaction_hash: string; alloy_id?: string; payment_token_fee?: number; stock_id?: string; }`\n\n**get** `/api/v2/accounts/{account_id}/order_fulfillments/{order_fulfillment_id}`\n\nGet a specific `OrderFulfillment` by its ID.\n\n### Parameters\n\n- `account_id: string`\n\n- `order_fulfillment_id: string`\n\n### Returns\n\n- `{ id: string; asset_token_filled: number; asset_token_spent: number; chain_id: string; order_id: string; payment_token_filled: number; payment_token_spent: number; transaction_dt: string; transaction_hash: string; alloy_id?: string; payment_token_fee?: number; stock_id?: string; }`\n  Information about a fulfillment of an `Order`. An order may be fulfilled in multiple transactions.\n\n  - `id: string`\n  - `asset_token_filled: number`\n  - `asset_token_spent: number`\n  - `chain_id: string`\n  - `order_id: string`\n  - `payment_token_filled: number`\n  - `payment_token_spent: number`\n  - `transaction_dt: string`\n  - `transaction_hash: string`\n  - `alloy_id?: string`\n  - `payment_token_fee?: number`\n  - `stock_id?: string`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst fulfillment = await client.v2.accounts.orderFulfillments.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(fulfillment);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.OrderFulfillments.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\tfulfillment, err := client.V2.Accounts.OrderFulfillments.Get(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2AccountOrderFulfillmentGetParams{\n\t\t\tAccountID: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", fulfillment.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/order_fulfillments/$ORDER_FULFILLMENT_ID \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().accounts().orderFulfillments().retrieve',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.orderfulfillments.Fulfillment;\nimport com.dinari.api.models.v2.accounts.orderfulfillments.OrderFulfillmentRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        OrderFulfillmentRetrieveParams params = OrderFulfillmentRetrieveParams.builder()\n            .accountId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .orderFulfillmentId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .build();\n        Fulfillment fulfillment = client.v2().accounts().orderFulfillments().retrieve(params);\n    }\n}',
      },
      python: {
        method: 'v2.accounts.order_fulfillments.retrieve',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nfulfillment = client.v2.accounts.order_fulfillments.retrieve(\n    order_fulfillment_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(fulfillment.id)',
      },
      typescript: {
        method: 'client.v2.accounts.orderFulfillments.retrieve',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst fulfillment = await client.v2.accounts.orderFulfillments.retrieve(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },\n);\n\nconsole.log(fulfillment.id);",
      },
    },
  },
  {
    name: 'create_market_buy',
    endpoint: '/api/v2/accounts/{account_id}/order_requests/market_buy',
    httpMethod: 'post',
    summary: 'Create Market Buy Managed Order Request',
    description:
      '\nCreate a managed `OrderRequest` to place a market buy `Order`.\n\nFees for the `Order` are included in the transaction. Refer to our [Fee Quote API](https://docs.dinari.com/reference/createproxiedorderfeequote#/) for fee estimation.\n\nIf an `OrderRequest` with the same `client_order_id` already exists for the given account, the creation call will fail.\n',
    stainlessPath: '(resource) v2.accounts.order_requests > (method) create_market_buy',
    qualified: 'client.v2.accounts.orderRequests.createMarketBuy',
    params: [
      'account_id: string;',
      'payment_amount: number;',
      'alloy_id?: string;',
      'client_order_id?: string;',
      'recipient_account_id?: string;',
      'stock_id?: string;',
    ],
    response:
      "{ id: string; account_id: string; created_dt: string; order_side: 'BUY' | 'SELL'; order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK'; order_type: 'MARKET' | 'LIMIT'; status: string; cancel_message?: string; client_order_id?: string; order_id?: string; recipient_account_id?: string; reject_message?: string; }",
    markdown:
      "## create_market_buy\n\n`client.v2.accounts.orderRequests.createMarketBuy(account_id: string, payment_amount: number, alloy_id?: string, client_order_id?: string, recipient_account_id?: string, stock_id?: string): { id: string; account_id: string; created_dt: string; order_side: order_side; order_tif: order_tif; order_type: order_type; status: order_request_status; cancel_message?: string; client_order_id?: string; order_id?: string; recipient_account_id?: string; reject_message?: string; }`\n\n**post** `/api/v2/accounts/{account_id}/order_requests/market_buy`\n\n\nCreate a managed `OrderRequest` to place a market buy `Order`.\n\nFees for the `Order` are included in the transaction. Refer to our [Fee Quote API](https://docs.dinari.com/reference/createproxiedorderfeequote#/) for fee estimation.\n\nIf an `OrderRequest` with the same `client_order_id` already exists for the given account, the creation call will fail.\n\n\n### Parameters\n\n- `account_id: string`\n\n- `payment_amount: number`\n  \nAmount of currency (USD for US equities and ETFs) to pay for the order.\nMust be a positive number with a precision of up to 2 decimal places.\n\n\n- `alloy_id?: string`\n  ID of `Alloy`.\n\n- `client_order_id?: string`\n  Customer-supplied ID to map this order to an order in their own systems. Must be unique within the entity.\n\n- `recipient_account_id?: string`\n  ID of `Account` to receive the `Order`.\n\n- `stock_id?: string`\n  ID of `Stock`.\n\n### Returns\n\n- `{ id: string; account_id: string; created_dt: string; order_side: 'BUY' | 'SELL'; order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK'; order_type: 'MARKET' | 'LIMIT'; status: string; cancel_message?: string; client_order_id?: string; order_id?: string; recipient_account_id?: string; reject_message?: string; }`\n  \nA request to create an `Order`.\n\nAn `OrderRequest` is created when a user places an order through the Dinari API.\nThe `OrderRequest` is then fulfilled by creating an `Order` on-chain.\n\nThe `OrderRequest` is a record of the user's intent to place an order, while the `Order` is the actual transaction that occurs on the blockchain.\n    \n\n  - `id: string`\n  - `account_id: string`\n  - `created_dt: string`\n  - `order_side: 'BUY' | 'SELL'`\n  - `order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK'`\n  - `order_type: 'MARKET' | 'LIMIT'`\n  - `status: string`\n  - `cancel_message?: string`\n  - `client_order_id?: string`\n  - `order_id?: string`\n  - `recipient_account_id?: string`\n  - `reject_message?: string`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst orderRequest = await client.v2.accounts.orderRequests.createMarketBuy('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { payment_amount: 0 });\n\nconsole.log(orderRequest);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.OrderRequests.NewMarketBuy',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\torderRequest, err := client.V2.Accounts.OrderRequests.NewMarketBuy(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2AccountOrderRequestNewMarketBuyParams{\n\t\t\tCreateMarketBuyOrderInput: dinariapisdkgo.CreateMarketBuyOrderInputParam{\n\t\t\t\tPaymentAmount: 0,\n\t\t\t},\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", orderRequest.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/order_requests/market_buy \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY" \\\n    -d \'{\n          "payment_amount": 0\n        }\'',
      },
      java: {
        method: 'v2().accounts().orderRequests().createMarketBuy',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.orderrequests.CreateMarketBuyOrderInput;\nimport com.dinari.api.models.v2.accounts.orderrequests.OrderRequest;\nimport com.dinari.api.models.v2.accounts.orderrequests.OrderRequestCreateMarketBuyParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        OrderRequestCreateMarketBuyParams params = OrderRequestCreateMarketBuyParams.builder()\n            .accountId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .createMarketBuyOrderInput(CreateMarketBuyOrderInput.builder()\n                .paymentAmount(0.0)\n                .build())\n            .build();\n        OrderRequest orderRequest = client.v2().accounts().orderRequests().createMarketBuy(params);\n    }\n}',
      },
      python: {
        method: 'v2.accounts.order_requests.create_market_buy',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\norder_request = client.v2.accounts.order_requests.create_market_buy(\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    payment_amount=0,\n)\nprint(order_request.id)',
      },
      typescript: {
        method: 'client.v2.accounts.orderRequests.createMarketBuy',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst orderRequest = await client.v2.accounts.orderRequests.createMarketBuy(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { payment_amount: 0 },\n);\n\nconsole.log(orderRequest.id);",
      },
    },
  },
  {
    name: 'create_market_sell',
    endpoint: '/api/v2/accounts/{account_id}/order_requests/market_sell',
    httpMethod: 'post',
    summary: 'Create Market Sell Managed Order Request',
    description:
      '\nCreate a managed `OrderRequest` to place a market sell `Order`.\n\nFees for the `Order` are included in the transaction. Refer to our [Fee Quote API](https://docs.dinari.com/reference/createproxiedorderfeequote#/) for fee estimation.\n\nIf an `OrderRequest` with the same `client_order_id` already exists for the given account, the creation call will fail.\n',
    stainlessPath: '(resource) v2.accounts.order_requests > (method) create_market_sell',
    qualified: 'client.v2.accounts.orderRequests.createMarketSell',
    params: [
      'account_id: string;',
      'asset_quantity: number;',
      'alloy_id?: string;',
      'client_order_id?: string;',
      'payment_token_address?: string;',
      'recipient_account_id?: string;',
      'stock_id?: string;',
    ],
    response:
      "{ id: string; account_id: string; created_dt: string; order_side: 'BUY' | 'SELL'; order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK'; order_type: 'MARKET' | 'LIMIT'; status: string; cancel_message?: string; client_order_id?: string; order_id?: string; recipient_account_id?: string; reject_message?: string; }",
    markdown:
      "## create_market_sell\n\n`client.v2.accounts.orderRequests.createMarketSell(account_id: string, asset_quantity: number, alloy_id?: string, client_order_id?: string, payment_token_address?: string, recipient_account_id?: string, stock_id?: string): { id: string; account_id: string; created_dt: string; order_side: order_side; order_tif: order_tif; order_type: order_type; status: order_request_status; cancel_message?: string; client_order_id?: string; order_id?: string; recipient_account_id?: string; reject_message?: string; }`\n\n**post** `/api/v2/accounts/{account_id}/order_requests/market_sell`\n\n\nCreate a managed `OrderRequest` to place a market sell `Order`.\n\nFees for the `Order` are included in the transaction. Refer to our [Fee Quote API](https://docs.dinari.com/reference/createproxiedorderfeequote#/) for fee estimation.\n\nIf an `OrderRequest` with the same `client_order_id` already exists for the given account, the creation call will fail.\n\n\n### Parameters\n\n- `account_id: string`\n\n- `asset_quantity: number`\n  Quantity of shares to trade. Must be a positive number with a precision of up to 6 decimal places.\n\n- `alloy_id?: string`\n  ID of `Alloy`.\n\n- `client_order_id?: string`\n  Customer-supplied ID to map this order to an order in their own systems. Must be unique within the entity.\n\n- `payment_token_address?: string`\n  Address of the payment token to be used for the sell order. If not provided, the default payment token (USD+) will be used. Should only be specified if `recipient_account_id` for a non-managed wallet account is also provided.\n\n- `recipient_account_id?: string`\n  ID of `Account` to receive the `Order`.\n\n- `stock_id?: string`\n  ID of `Stock`.\n\n### Returns\n\n- `{ id: string; account_id: string; created_dt: string; order_side: 'BUY' | 'SELL'; order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK'; order_type: 'MARKET' | 'LIMIT'; status: string; cancel_message?: string; client_order_id?: string; order_id?: string; recipient_account_id?: string; reject_message?: string; }`\n  \nA request to create an `Order`.\n\nAn `OrderRequest` is created when a user places an order through the Dinari API.\nThe `OrderRequest` is then fulfilled by creating an `Order` on-chain.\n\nThe `OrderRequest` is a record of the user's intent to place an order, while the `Order` is the actual transaction that occurs on the blockchain.\n    \n\n  - `id: string`\n  - `account_id: string`\n  - `created_dt: string`\n  - `order_side: 'BUY' | 'SELL'`\n  - `order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK'`\n  - `order_type: 'MARKET' | 'LIMIT'`\n  - `status: string`\n  - `cancel_message?: string`\n  - `client_order_id?: string`\n  - `order_id?: string`\n  - `recipient_account_id?: string`\n  - `reject_message?: string`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst orderRequest = await client.v2.accounts.orderRequests.createMarketSell('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { asset_quantity: 0 });\n\nconsole.log(orderRequest);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.OrderRequests.NewMarketSell',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\torderRequest, err := client.V2.Accounts.OrderRequests.NewMarketSell(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2AccountOrderRequestNewMarketSellParams{\n\t\t\tCreateMarketSellOrderInput: dinariapisdkgo.CreateMarketSellOrderInputParam{\n\t\t\t\tAssetQuantity: 0,\n\t\t\t},\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", orderRequest.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/order_requests/market_sell \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY" \\\n    -d \'{\n          "asset_quantity": 0\n        }\'',
      },
      java: {
        method: 'v2().accounts().orderRequests().createMarketSell',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.orderrequests.CreateMarketSellOrderInput;\nimport com.dinari.api.models.v2.accounts.orderrequests.OrderRequest;\nimport com.dinari.api.models.v2.accounts.orderrequests.OrderRequestCreateMarketSellParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        OrderRequestCreateMarketSellParams params = OrderRequestCreateMarketSellParams.builder()\n            .accountId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .createMarketSellOrderInput(CreateMarketSellOrderInput.builder()\n                .assetQuantity(0.0)\n                .build())\n            .build();\n        OrderRequest orderRequest = client.v2().accounts().orderRequests().createMarketSell(params);\n    }\n}',
      },
      python: {
        method: 'v2.accounts.order_requests.create_market_sell',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\norder_request = client.v2.accounts.order_requests.create_market_sell(\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    asset_quantity=0,\n)\nprint(order_request.id)',
      },
      typescript: {
        method: 'client.v2.accounts.orderRequests.createMarketSell',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst orderRequest = await client.v2.accounts.orderRequests.createMarketSell(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { asset_quantity: 0 },\n);\n\nconsole.log(orderRequest.id);",
      },
    },
  },
  {
    name: 'create_limit_buy',
    endpoint: '/api/v2/accounts/{account_id}/order_requests/limit_buy',
    httpMethod: 'post',
    summary: 'Create Limit Buy Managed Order Request',
    description:
      '\nCreate a managed `OrderRequest` to place a limit buy `Order`.\n\nFees for the `Order` are included in the transaction. Refer to our [Fee Quote API](https://docs.dinari.com/reference/createproxiedorderfeequote#/) for fee estimation.\n\nIf an `OrderRequest` with the same `client_order_id` already exists for the given account, the creation call will fail.\n',
    stainlessPath: '(resource) v2.accounts.order_requests > (method) create_limit_buy',
    qualified: 'client.v2.accounts.orderRequests.createLimitBuy',
    params: [
      'account_id: string;',
      'asset_quantity: number;',
      'limit_price: number;',
      'alloy_id?: string;',
      'client_order_id?: string;',
      'recipient_account_id?: string;',
      'stock_id?: string;',
    ],
    response:
      "{ id: string; account_id: string; created_dt: string; order_side: 'BUY' | 'SELL'; order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK'; order_type: 'MARKET' | 'LIMIT'; status: string; cancel_message?: string; client_order_id?: string; order_id?: string; recipient_account_id?: string; reject_message?: string; }",
    markdown:
      "## create_limit_buy\n\n`client.v2.accounts.orderRequests.createLimitBuy(account_id: string, asset_quantity: number, limit_price: number, alloy_id?: string, client_order_id?: string, recipient_account_id?: string, stock_id?: string): { id: string; account_id: string; created_dt: string; order_side: order_side; order_tif: order_tif; order_type: order_type; status: order_request_status; cancel_message?: string; client_order_id?: string; order_id?: string; recipient_account_id?: string; reject_message?: string; }`\n\n**post** `/api/v2/accounts/{account_id}/order_requests/limit_buy`\n\n\nCreate a managed `OrderRequest` to place a limit buy `Order`.\n\nFees for the `Order` are included in the transaction. Refer to our [Fee Quote API](https://docs.dinari.com/reference/createproxiedorderfeequote#/) for fee estimation.\n\nIf an `OrderRequest` with the same `client_order_id` already exists for the given account, the creation call will fail.\n\n\n### Parameters\n\n- `account_id: string`\n\n- `asset_quantity: number`\n  Amount of dShare asset involved. Required for limit `Order Requests` and market sell `Order Requests`. Must be a positive number with a precision of up to 4 decimal places.\n\n- `limit_price: number`\n  Price at which to execute the order. Must be a positive number with a precision of up to 2 decimal places.\n\n- `alloy_id?: string`\n  ID of `Alloy`.\n\n- `client_order_id?: string`\n  Customer-supplied ID to map this order to an order in their own systems. Must be unique within the entity.\n\n- `recipient_account_id?: string`\n  ID of `Account` to receive the `Order`.\n\n- `stock_id?: string`\n  ID of `Stock`.\n\n### Returns\n\n- `{ id: string; account_id: string; created_dt: string; order_side: 'BUY' | 'SELL'; order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK'; order_type: 'MARKET' | 'LIMIT'; status: string; cancel_message?: string; client_order_id?: string; order_id?: string; recipient_account_id?: string; reject_message?: string; }`\n  \nA request to create an `Order`.\n\nAn `OrderRequest` is created when a user places an order through the Dinari API.\nThe `OrderRequest` is then fulfilled by creating an `Order` on-chain.\n\nThe `OrderRequest` is a record of the user's intent to place an order, while the `Order` is the actual transaction that occurs on the blockchain.\n    \n\n  - `id: string`\n  - `account_id: string`\n  - `created_dt: string`\n  - `order_side: 'BUY' | 'SELL'`\n  - `order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK'`\n  - `order_type: 'MARKET' | 'LIMIT'`\n  - `status: string`\n  - `cancel_message?: string`\n  - `client_order_id?: string`\n  - `order_id?: string`\n  - `recipient_account_id?: string`\n  - `reject_message?: string`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst orderRequest = await client.v2.accounts.orderRequests.createLimitBuy('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { asset_quantity: 0, limit_price: 0 });\n\nconsole.log(orderRequest);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.OrderRequests.NewLimitBuy',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\torderRequest, err := client.V2.Accounts.OrderRequests.NewLimitBuy(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2AccountOrderRequestNewLimitBuyParams{\n\t\t\tCreateLimitBuyOrderInput: dinariapisdkgo.CreateLimitBuyOrderInputParam{\n\t\t\t\tAssetQuantity: 0,\n\t\t\t\tLimitPrice:    0,\n\t\t\t},\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", orderRequest.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/order_requests/limit_buy \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY" \\\n    -d \'{\n          "asset_quantity": 0,\n          "limit_price": 0\n        }\'',
      },
      java: {
        method: 'v2().accounts().orderRequests().createLimitBuy',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.orderrequests.CreateLimitBuyOrderInput;\nimport com.dinari.api.models.v2.accounts.orderrequests.OrderRequest;\nimport com.dinari.api.models.v2.accounts.orderrequests.OrderRequestCreateLimitBuyParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        OrderRequestCreateLimitBuyParams params = OrderRequestCreateLimitBuyParams.builder()\n            .accountId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .createLimitBuyOrderInput(CreateLimitBuyOrderInput.builder()\n                .assetQuantity(0.0)\n                .limitPrice(0.0)\n                .build())\n            .build();\n        OrderRequest orderRequest = client.v2().accounts().orderRequests().createLimitBuy(params);\n    }\n}',
      },
      python: {
        method: 'v2.accounts.order_requests.create_limit_buy',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\norder_request = client.v2.accounts.order_requests.create_limit_buy(\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    asset_quantity=0,\n    limit_price=0,\n)\nprint(order_request.id)',
      },
      typescript: {
        method: 'client.v2.accounts.orderRequests.createLimitBuy',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst orderRequest = await client.v2.accounts.orderRequests.createLimitBuy(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { asset_quantity: 0, limit_price: 0 },\n);\n\nconsole.log(orderRequest.id);",
      },
    },
  },
  {
    name: 'create_limit_sell',
    endpoint: '/api/v2/accounts/{account_id}/order_requests/limit_sell',
    httpMethod: 'post',
    summary: 'Create Limit Sell Managed Order Request',
    description:
      '\nCreate a managed `OrderRequest` to place a limit sell `Order`.\n\nFees for the `Order` are included in the transaction. Refer to our [Fee Quote API](https://docs.dinari.com/reference/createproxiedorderfeequote#/) for fee estimation.\n\nIf an `OrderRequest` with the same `client_order_id` already exists for the given account, the creation call will fail.\n',
    stainlessPath: '(resource) v2.accounts.order_requests > (method) create_limit_sell',
    qualified: 'client.v2.accounts.orderRequests.createLimitSell',
    params: [
      'account_id: string;',
      'asset_quantity: number;',
      'limit_price: number;',
      'alloy_id?: string;',
      'client_order_id?: string;',
      'payment_token_address?: string;',
      'recipient_account_id?: string;',
      'stock_id?: string;',
    ],
    response:
      "{ id: string; account_id: string; created_dt: string; order_side: 'BUY' | 'SELL'; order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK'; order_type: 'MARKET' | 'LIMIT'; status: string; cancel_message?: string; client_order_id?: string; order_id?: string; recipient_account_id?: string; reject_message?: string; }",
    markdown:
      "## create_limit_sell\n\n`client.v2.accounts.orderRequests.createLimitSell(account_id: string, asset_quantity: number, limit_price: number, alloy_id?: string, client_order_id?: string, payment_token_address?: string, recipient_account_id?: string, stock_id?: string): { id: string; account_id: string; created_dt: string; order_side: order_side; order_tif: order_tif; order_type: order_type; status: order_request_status; cancel_message?: string; client_order_id?: string; order_id?: string; recipient_account_id?: string; reject_message?: string; }`\n\n**post** `/api/v2/accounts/{account_id}/order_requests/limit_sell`\n\n\nCreate a managed `OrderRequest` to place a limit sell `Order`.\n\nFees for the `Order` are included in the transaction. Refer to our [Fee Quote API](https://docs.dinari.com/reference/createproxiedorderfeequote#/) for fee estimation.\n\nIf an `OrderRequest` with the same `client_order_id` already exists for the given account, the creation call will fail.\n\n\n### Parameters\n\n- `account_id: string`\n\n- `asset_quantity: number`\n  Amount of dShare asset involved. Required for limit `Order Requests` and market sell `Order Requests`. Must be a positive number with a precision of up to 4 decimal places.\n\n- `limit_price: number`\n  Price at which to execute the order. Must be a positive number with a precision of up to 2 decimal places.\n\n- `alloy_id?: string`\n  ID of `Alloy`.\n\n- `client_order_id?: string`\n  Customer-supplied ID to map this order to an order in their own systems. Must be unique within the entity.\n\n- `payment_token_address?: string`\n  Address of the payment token to be used for the sell order. If not provided, the default payment token (USD+) will be used. Should only be specified if `recipient_account_id` for a non-managed wallet account is also provided.\n\n- `recipient_account_id?: string`\n  ID of `Account` to receive the `Order`.\n\n- `stock_id?: string`\n  ID of `Stock`.\n\n### Returns\n\n- `{ id: string; account_id: string; created_dt: string; order_side: 'BUY' | 'SELL'; order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK'; order_type: 'MARKET' | 'LIMIT'; status: string; cancel_message?: string; client_order_id?: string; order_id?: string; recipient_account_id?: string; reject_message?: string; }`\n  \nA request to create an `Order`.\n\nAn `OrderRequest` is created when a user places an order through the Dinari API.\nThe `OrderRequest` is then fulfilled by creating an `Order` on-chain.\n\nThe `OrderRequest` is a record of the user's intent to place an order, while the `Order` is the actual transaction that occurs on the blockchain.\n    \n\n  - `id: string`\n  - `account_id: string`\n  - `created_dt: string`\n  - `order_side: 'BUY' | 'SELL'`\n  - `order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK'`\n  - `order_type: 'MARKET' | 'LIMIT'`\n  - `status: string`\n  - `cancel_message?: string`\n  - `client_order_id?: string`\n  - `order_id?: string`\n  - `recipient_account_id?: string`\n  - `reject_message?: string`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst orderRequest = await client.v2.accounts.orderRequests.createLimitSell('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { asset_quantity: 0, limit_price: 0 });\n\nconsole.log(orderRequest);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.OrderRequests.NewLimitSell',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\torderRequest, err := client.V2.Accounts.OrderRequests.NewLimitSell(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2AccountOrderRequestNewLimitSellParams{\n\t\t\tCreateLimitSellOrderInput: dinariapisdkgo.CreateLimitSellOrderInputParam{\n\t\t\t\tAssetQuantity: 0,\n\t\t\t\tLimitPrice:    0,\n\t\t\t},\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", orderRequest.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/order_requests/limit_sell \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY" \\\n    -d \'{\n          "asset_quantity": 0,\n          "limit_price": 0\n        }\'',
      },
      java: {
        method: 'v2().accounts().orderRequests().createLimitSell',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.orderrequests.CreateLimitSellOrderInput;\nimport com.dinari.api.models.v2.accounts.orderrequests.OrderRequest;\nimport com.dinari.api.models.v2.accounts.orderrequests.OrderRequestCreateLimitSellParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        OrderRequestCreateLimitSellParams params = OrderRequestCreateLimitSellParams.builder()\n            .accountId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .createLimitSellOrderInput(CreateLimitSellOrderInput.builder()\n                .assetQuantity(0.0)\n                .limitPrice(0.0)\n                .build())\n            .build();\n        OrderRequest orderRequest = client.v2().accounts().orderRequests().createLimitSell(params);\n    }\n}',
      },
      python: {
        method: 'v2.accounts.order_requests.create_limit_sell',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\norder_request = client.v2.accounts.order_requests.create_limit_sell(\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    asset_quantity=0,\n    limit_price=0,\n)\nprint(order_request.id)',
      },
      typescript: {
        method: 'client.v2.accounts.orderRequests.createLimitSell',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst orderRequest = await client.v2.accounts.orderRequests.createLimitSell(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { asset_quantity: 0, limit_price: 0 },\n);\n\nconsole.log(orderRequest.id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v2/accounts/{account_id}/order_requests',
    httpMethod: 'get',
    summary: 'List Order Requests',
    description:
      'Lists `OrderRequests`.<br>Optionally `OrderRequests` can be filtered by certain parameters.',
    stainlessPath: '(resource) v2.accounts.order_requests > (method) list',
    qualified: 'client.v2.accounts.orderRequests.list',
    params: [
      'account_id: string;',
      'client_order_id?: string;',
      'order_id?: string;',
      'order_request_id?: string;',
      'page?: number;',
      'page_size?: number;',
    ],
    response:
      "{ id: string; account_id: string; created_dt: string; order_side: 'BUY' | 'SELL'; order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK'; order_type: 'MARKET' | 'LIMIT'; status: string; cancel_message?: string; client_order_id?: string; order_id?: string; recipient_account_id?: string; reject_message?: string; }[]",
    markdown:
      "## list\n\n`client.v2.accounts.orderRequests.list(account_id: string, client_order_id?: string, order_id?: string, order_request_id?: string, page?: number, page_size?: number): object[]`\n\n**get** `/api/v2/accounts/{account_id}/order_requests`\n\nLists `OrderRequests`.<br>Optionally `OrderRequests` can be filtered by certain parameters.\n\n### Parameters\n\n- `account_id: string`\n\n- `client_order_id?: string`\n  Customer-supplied ID to map this `OrderRequest` to an order in their own systems.\n\n- `order_id?: string`\n  Order ID for the `OrderRequest`\n\n- `order_request_id?: string`\n  Order Request ID for the `OrderRequest`\n\n- `page?: number`\n\n- `page_size?: number`\n\n### Returns\n\n- `{ id: string; account_id: string; created_dt: string; order_side: 'BUY' | 'SELL'; order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK'; order_type: 'MARKET' | 'LIMIT'; status: string; cancel_message?: string; client_order_id?: string; order_id?: string; recipient_account_id?: string; reject_message?: string; }[]`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst orderRequests = await client.v2.accounts.orderRequests.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(orderRequests);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.OrderRequests.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\torderRequests, err := client.V2.Accounts.OrderRequests.List(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2AccountOrderRequestListParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", orderRequests)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/order_requests \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().accounts().orderRequests().list',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.orderrequests.OrderRequest;\nimport com.dinari.api.models.v2.accounts.orderrequests.OrderRequestListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        List<OrderRequest> orderRequests = client.v2().accounts().orderRequests().list("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e");\n    }\n}',
      },
      python: {
        method: 'v2.accounts.order_requests.list',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\norder_requests = client.v2.accounts.order_requests.list(\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(order_requests)',
      },
      typescript: {
        method: 'client.v2.accounts.orderRequests.list',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst orderRequests = await client.v2.accounts.orderRequests.list(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(orderRequests);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/v2/accounts/{account_id}/order_requests/{order_request_id}',
    httpMethod: 'get',
    summary: 'Get Order Request by ID',
    description: 'Get a specific `OrderRequest` by its ID.',
    stainlessPath: '(resource) v2.accounts.order_requests > (method) retrieve',
    qualified: 'client.v2.accounts.orderRequests.retrieve',
    params: ['account_id: string;', 'order_request_id: string;'],
    response:
      "{ id: string; account_id: string; created_dt: string; order_side: 'BUY' | 'SELL'; order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK'; order_type: 'MARKET' | 'LIMIT'; status: string; cancel_message?: string; client_order_id?: string; order_id?: string; recipient_account_id?: string; reject_message?: string; }",
    markdown:
      "## retrieve\n\n`client.v2.accounts.orderRequests.retrieve(account_id: string, order_request_id: string): { id: string; account_id: string; created_dt: string; order_side: order_side; order_tif: order_tif; order_type: order_type; status: order_request_status; cancel_message?: string; client_order_id?: string; order_id?: string; recipient_account_id?: string; reject_message?: string; }`\n\n**get** `/api/v2/accounts/{account_id}/order_requests/{order_request_id}`\n\nGet a specific `OrderRequest` by its ID.\n\n### Parameters\n\n- `account_id: string`\n\n- `order_request_id: string`\n\n### Returns\n\n- `{ id: string; account_id: string; created_dt: string; order_side: 'BUY' | 'SELL'; order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK'; order_type: 'MARKET' | 'LIMIT'; status: string; cancel_message?: string; client_order_id?: string; order_id?: string; recipient_account_id?: string; reject_message?: string; }`\n  \nA request to create an `Order`.\n\nAn `OrderRequest` is created when a user places an order through the Dinari API.\nThe `OrderRequest` is then fulfilled by creating an `Order` on-chain.\n\nThe `OrderRequest` is a record of the user's intent to place an order, while the `Order` is the actual transaction that occurs on the blockchain.\n    \n\n  - `id: string`\n  - `account_id: string`\n  - `created_dt: string`\n  - `order_side: 'BUY' | 'SELL'`\n  - `order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK'`\n  - `order_type: 'MARKET' | 'LIMIT'`\n  - `status: string`\n  - `cancel_message?: string`\n  - `client_order_id?: string`\n  - `order_id?: string`\n  - `recipient_account_id?: string`\n  - `reject_message?: string`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst orderRequest = await client.v2.accounts.orderRequests.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(orderRequest);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.OrderRequests.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\torderRequest, err := client.V2.Accounts.OrderRequests.Get(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2AccountOrderRequestGetParams{\n\t\t\tAccountID: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", orderRequest.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/order_requests/$ORDER_REQUEST_ID \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().accounts().orderRequests().retrieve',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.orderrequests.OrderRequest;\nimport com.dinari.api.models.v2.accounts.orderrequests.OrderRequestRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        OrderRequestRetrieveParams params = OrderRequestRetrieveParams.builder()\n            .accountId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .orderRequestId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .build();\n        OrderRequest orderRequest = client.v2().accounts().orderRequests().retrieve(params);\n    }\n}',
      },
      python: {
        method: 'v2.accounts.order_requests.retrieve',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\norder_request = client.v2.accounts.order_requests.retrieve(\n    order_request_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(order_request.id)',
      },
      typescript: {
        method: 'client.v2.accounts.orderRequests.retrieve',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst orderRequest = await client.v2.accounts.orderRequests.retrieve(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },\n);\n\nconsole.log(orderRequest.id);",
      },
    },
  },
  {
    name: 'get_fee_quote',
    endpoint: '/api/v2/accounts/{account_id}/order_requests/fee_quote',
    httpMethod: 'post',
    summary: 'Get Order Request Fee Quote',
    description:
      '\nGet fee quote data for an `Order Request`. This is provided primarily for informational purposes.\n\nFor market buy orders, the notional amount of the order includes the fees.\nFor market and limit sell orders, fees are deducted from the proceeds of the sale.\nFor limit buy orders, the fees are added to the total cost of the order.\n',
    stainlessPath: '(resource) v2.accounts.order_requests > (method) get_fee_quote',
    qualified: 'client.v2.accounts.orderRequests.getFeeQuote',
    params: [
      'account_id: string;',
      "order_side: 'BUY' | 'SELL';",
      "order_type: 'MARKET' | 'LIMIT';",
      'alloy_id?: string;',
      'asset_token_quantity?: number;',
      'chain_id?: string;',
      'limit_price?: number;',
      'payment_token_address?: string;',
      'payment_token_quantity?: number;',
      'stock_id?: string;',
    ],
    response: '{ fee: number; }',
    markdown:
      "## get_fee_quote\n\n`client.v2.accounts.orderRequests.getFeeQuote(account_id: string, order_side: 'BUY' | 'SELL', order_type: 'MARKET' | 'LIMIT', alloy_id?: string, asset_token_quantity?: number, chain_id?: string, limit_price?: number, payment_token_address?: string, payment_token_quantity?: number, stock_id?: string): { fee: number; }`\n\n**post** `/api/v2/accounts/{account_id}/order_requests/fee_quote`\n\n\nGet fee quote data for an `Order Request`. This is provided primarily for informational purposes.\n\nFor market buy orders, the notional amount of the order includes the fees.\nFor market and limit sell orders, fees are deducted from the proceeds of the sale.\nFor limit buy orders, the fees are added to the total cost of the order.\n\n\n### Parameters\n\n- `account_id: string`\n\n- `order_side: 'BUY' | 'SELL'`\n  Indicates whether `Order Request` is a buy or sell.\n\n- `order_type: 'MARKET' | 'LIMIT'`\n  Type of `Order Request`.\n\n- `alloy_id?: string`\n  The `Alloy` ID associated with the Order Request\n\n- `asset_token_quantity?: number`\n  Amount of dShare asset tokens involved. Required for limit `Order Requests` and market sell `Order Requests`. Must be a positive number with a precision of up to 4 decimal places for limit `Order Requests` or up to 6 decimal places for market sell `Order Requests`.\n\n- `chain_id?: string`\n  CAIP-2 chain ID of the blockchain where the `Order Request` will be placed. If not provided, the default chain ID (eip155:42161) will be used.\n\n- `limit_price?: number`\n  Price per asset in the asset's native currency. USD for US equities and ETFs. Required for limit `Order Requests`.\n\n- `payment_token_address?: string`\n  Address of the payment token to be used for an order. If not provided, the default payment token (USD+) will be used.\n\n- `payment_token_quantity?: number`\n  Amount of payment tokens involved. Required for market buy `Order Requests`.\n\n- `stock_id?: string`\n  The `Stock` ID associated with the Order Request\n\n### Returns\n\n- `{ fee: number; }`\n  A preview of the fee that would be collected when placing an Order Request.\n\n  - `fee: number`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst response = await client.v2.accounts.orderRequests.getFeeQuote('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { order_side: 'BUY', order_type: 'MARKET' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.OrderRequests.GetFeeQuote',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\tresponse, err := client.V2.Accounts.OrderRequests.GetFeeQuote(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2AccountOrderRequestGetFeeQuoteParams{\n\t\t\tOrderSide: dinariapisdkgo.OrderSideBuy,\n\t\t\tOrderType: dinariapisdkgo.OrderTypeMarket,\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Fee)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/order_requests/fee_quote \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY" \\\n    -d \'{\n          "order_side": "BUY",\n          "order_type": "MARKET"\n        }\'',
      },
      java: {
        method: 'v2().accounts().orderRequests().getFeeQuote',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.orderrequests.OrderRequestGetFeeQuoteParams;\nimport com.dinari.api.models.v2.accounts.orderrequests.OrderRequestGetFeeQuoteResponse;\nimport com.dinari.api.models.v2.accounts.orders.OrderSide;\nimport com.dinari.api.models.v2.accounts.orders.OrderType;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        OrderRequestGetFeeQuoteParams params = OrderRequestGetFeeQuoteParams.builder()\n            .accountId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .orderSide(OrderSide.BUY)\n            .orderType(OrderType.MARKET)\n            .build();\n        OrderRequestGetFeeQuoteResponse response = client.v2().accounts().orderRequests().getFeeQuote(params);\n    }\n}',
      },
      python: {
        method: 'v2.accounts.order_requests.get_fee_quote',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v2.accounts.order_requests.get_fee_quote(\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    order_side="BUY",\n    order_type="MARKET",\n)\nprint(response.fee)',
      },
      typescript: {
        method: 'client.v2.accounts.orderRequests.getFeeQuote',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v2.accounts.orderRequests.getFeeQuote(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { order_side: 'BUY', order_type: 'MARKET' },\n);\n\nconsole.log(response.fee);",
      },
    },
  },
  {
    name: 'create_permit',
    endpoint: '/api/v2/accounts/{account_id}/order_requests/eip155/permit',
    httpMethod: 'post',
    summary: 'Create EIP155 Order Request Permit',
    description:
      "\nGenerates a permit that can be signed and used to create an `OrderRequest` using Dinari's EVM smart contracts.\n\nThis is a convenience method to prepare the transactions needed to create an `OrderRequest` using Dinari's EVM smart contracts.\nOnce signed, the transactions can be sent to the EVM network to create the order.\nNote that the fee quote is already included in the transactions, so no additional fee quote lookup is needed.\n",
    stainlessPath: '(resource) v2.accounts.order_requests.eip155 > (method) create_permit',
    qualified: 'client.v2.accounts.orderRequests.eip155.createPermit',
    params: [
      'account_id: string;',
      'chain_id: string;',
      "order_side: 'BUY' | 'SELL';",
      "order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK';",
      "order_type: 'MARKET' | 'LIMIT';",
      'payment_token: string;',
      'alloy_id?: string;',
      'asset_token_quantity?: number;',
      'client_order_id?: string;',
      'limit_price?: number;',
      'payment_token_quantity?: number;',
      'stock_id?: string;',
      'token_id?: string;',
    ],
    response: '{ order_request_id: string; permit: object; }',
    markdown:
      "## create_permit\n\n`client.v2.accounts.orderRequests.eip155.createPermit(account_id: string, chain_id: string, order_side: 'BUY' | 'SELL', order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK', order_type: 'MARKET' | 'LIMIT', payment_token: string, alloy_id?: string, asset_token_quantity?: number, client_order_id?: string, limit_price?: number, payment_token_quantity?: number, stock_id?: string, token_id?: string): { order_request_id: string; permit: object; }`\n\n**post** `/api/v2/accounts/{account_id}/order_requests/eip155/permit`\n\n\nGenerates a permit that can be signed and used to create an `OrderRequest` using Dinari's EVM smart contracts.\n\nThis is a convenience method to prepare the transactions needed to create an `OrderRequest` using Dinari's EVM smart contracts.\nOnce signed, the transactions can be sent to the EVM network to create the order.\nNote that the fee quote is already included in the transactions, so no additional fee quote lookup is needed.\n\n\n### Parameters\n\n- `account_id: string`\n\n- `chain_id: string`\n  CAIP-2 chain ID of the blockchain where the `Order` will be placed.\n\n- `order_side: 'BUY' | 'SELL'`\n  Indicates whether `Order` is a buy or sell.\n\n- `order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK'`\n  Time in force. Indicates how long `Order` is valid for.\n\n- `order_type: 'MARKET' | 'LIMIT'`\n  Type of `Order`.\n\n- `payment_token: string`\n  Address of payment token.\n\n- `alloy_id?: string`\n  The ID of the `Alloy` for which the `Order` is being placed.\n\n- `asset_token_quantity?: number`\n  Amount of dShare asset tokens involved. Required for limit `Order Requests` and market sell `Order Requests`. Must be a positive number with a precision of up to 4 decimal places for limit `Order Requests` or up to 6 decimal places for market sell `Order Requests`.\n\n- `client_order_id?: string`\n  Customer-supplied unique identifier to map this `Order` to an order in the customer's systems.\n\n- `limit_price?: number`\n  Price per asset in the asset's native currency. USD for US equities and ETFs. Required for limit `Orders`.\n\n- `payment_token_quantity?: number`\n  Amount of payment tokens involved. Required for market buy `Orders`.\n\n- `stock_id?: string`\n  The ID of the `Stock` for which the `Order` is being placed.\n\n- `token_id?: string`\n  The ID of the `Token` for which the `Order` is being placed.\n\n### Returns\n\n- `{ order_request_id: string; permit: object; }`\n  Token permit to be signed by the smart contract submitter.\n\n  - `order_request_id: string`\n  - `permit: object`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst response = await client.v2.accounts.orderRequests.eip155.createPermit('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  chain_id: 'eip155:1',\n  order_side: 'BUY',\n  order_tif: 'DAY',\n  order_type: 'MARKET',\n  payment_token: 'payment_token',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.OrderRequests.Eip155.NewPermit',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\tresponse, err := client.V2.Accounts.OrderRequests.Eip155.NewPermit(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2AccountOrderRequestEip155NewPermitParams{\n\t\t\tChainID:      dinariapisdkgo.ChainEip155_1,\n\t\t\tOrderSide:    dinariapisdkgo.OrderSideBuy,\n\t\t\tOrderTif:     dinariapisdkgo.OrderTifDay,\n\t\t\tOrderType:    dinariapisdkgo.OrderTypeMarket,\n\t\t\tPaymentToken: "payment_token",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.OrderRequestID)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/order_requests/eip155/permit \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY" \\\n    -d \'{\n          "chain_id": "eip155:1",\n          "order_side": "BUY",\n          "order_tif": "DAY",\n          "order_type": "MARKET",\n          "payment_token": "payment_token"\n        }\'',
      },
      java: {
        method: 'v2().accounts().orderRequests().eip155().createPermit',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.Chain;\nimport com.dinari.api.models.v2.accounts.orderrequests.eip155.Eip155CreatePermitParams;\nimport com.dinari.api.models.v2.accounts.orderrequests.eip155.Eip155CreatePermitResponse;\nimport com.dinari.api.models.v2.accounts.orders.OrderSide;\nimport com.dinari.api.models.v2.accounts.orders.OrderTif;\nimport com.dinari.api.models.v2.accounts.orders.OrderType;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        Eip155CreatePermitParams params = Eip155CreatePermitParams.builder()\n            .accountId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .chainId(Chain.EIP155_1)\n            .orderSide(OrderSide.BUY)\n            .orderTif(OrderTif.DAY)\n            .orderType(OrderType.MARKET)\n            .paymentToken("payment_token")\n            .build();\n        Eip155CreatePermitResponse response = client.v2().accounts().orderRequests().eip155().createPermit(params);\n    }\n}',
      },
      python: {
        method: 'v2.accounts.order_requests.eip155.create_permit',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v2.accounts.order_requests.eip155.create_permit(\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    chain_id="eip155:1",\n    order_side="BUY",\n    order_tif="DAY",\n    order_type="MARKET",\n    payment_token="payment_token",\n)\nprint(response.order_request_id)',
      },
      typescript: {
        method: 'client.v2.accounts.orderRequests.eip155.createPermit',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v2.accounts.orderRequests.eip155.createPermit(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  {\n    chain_id: 'eip155:1',\n    order_side: 'BUY',\n    order_tif: 'DAY',\n    order_type: 'MARKET',\n    payment_token: 'payment_token',\n  },\n);\n\nconsole.log(response.order_request_id);",
      },
    },
  },
  {
    name: 'create_permit_transaction',
    endpoint: '/api/v2/accounts/{account_id}/order_requests/eip155/permit_transaction',
    httpMethod: 'post',
    summary: 'Create EIP155 Order Request Permit Transaction',
    description:
      '\nPrepare a transaction to be placed on EVM. The returned structure contains the necessary\ndata to create an `EIP155Transaction` object.\n',
    stainlessPath: '(resource) v2.accounts.order_requests.eip155 > (method) create_permit_transaction',
    qualified: 'client.v2.accounts.orderRequests.eip155.createPermitTransaction',
    params: ['account_id: string;', 'order_request_id: string;', 'permit_signature: string;'],
    response: '{ abi: object; args: object; contract_address: string; data: string; value: string; }',
    markdown:
      "## create_permit_transaction\n\n`client.v2.accounts.orderRequests.eip155.createPermitTransaction(account_id: string, order_request_id: string, permit_signature: string): { abi: object; args: object; contract_address: string; data: string; value: string; }`\n\n**post** `/api/v2/accounts/{account_id}/order_requests/eip155/permit_transaction`\n\n\nPrepare a transaction to be placed on EVM. The returned structure contains the necessary\ndata to create an `EIP155Transaction` object.\n\n\n### Parameters\n\n- `account_id: string`\n\n- `order_request_id: string`\n  ID of the prepared proxied order to be submitted as a proxied order.\n\n- `permit_signature: string`\n  Signature of the permit typed data, allowing Dinari to spend the payment token or dShare asset token on behalf of the owner.\n\n### Returns\n\n- `{ abi: object; args: object; contract_address: string; data: string; value: string; }`\n\n  - `abi: object`\n  - `args: object`\n  - `contract_address: string`\n  - `data: string`\n  - `value: string`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst response = await client.v2.accounts.orderRequests.eip155.createPermitTransaction('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { order_request_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', permit_signature: '0xeaF12bD1DfFd' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.OrderRequests.Eip155.NewPermitTransaction',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\tresponse, err := client.V2.Accounts.OrderRequests.Eip155.NewPermitTransaction(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2AccountOrderRequestEip155NewPermitTransactionParams{\n\t\t\tEip155OrderRequestPermitTransaction: dinariapisdkgo.Eip155OrderRequestPermitTransactionParam{\n\t\t\t\tOrderRequestID:  "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\t\t\tPermitSignature: "0xeaF12bD1DfFd",\n\t\t\t},\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Abi)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/order_requests/eip155/permit_transaction \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY" \\\n    -d \'{\n          "order_request_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "permit_signature": "0xeaF12bD1DfFd"\n        }\'',
      },
      java: {
        method: 'v2().accounts().orderRequests().eip155().createPermitTransaction',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.orderrequests.eip155.Eip155CreatePermitTransactionParams;\nimport com.dinari.api.models.v2.accounts.orderrequests.eip155.Eip155CreatePermitTransactionResponse;\nimport com.dinari.api.models.v2.accounts.orderrequests.eip155.Eip155OrderRequestPermitTransaction;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        Eip155CreatePermitTransactionParams params = Eip155CreatePermitTransactionParams.builder()\n            .accountId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .eip155OrderRequestPermitTransaction(Eip155OrderRequestPermitTransaction.builder()\n                .orderRequestId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n                .permitSignature("0xeaF12bD1DfFd")\n                .build())\n            .build();\n        Eip155CreatePermitTransactionResponse response = client.v2().accounts().orderRequests().eip155().createPermitTransaction(params);\n    }\n}',
      },
      python: {
        method: 'v2.accounts.order_requests.eip155.create_permit_transaction',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v2.accounts.order_requests.eip155.create_permit_transaction(\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    order_request_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    permit_signature="0xeaF12bD1DfFd",\n)\nprint(response.abi)',
      },
      typescript: {
        method: 'client.v2.accounts.orderRequests.eip155.createPermitTransaction',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v2.accounts.orderRequests.eip155.createPermitTransaction(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { order_request_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', permit_signature: '0xeaF12bD1DfFd' },\n);\n\nconsole.log(response.abi);",
      },
    },
  },
  {
    name: 'submit',
    endpoint: '/api/v2/accounts/{account_id}/order_requests/eip155',
    httpMethod: 'post',
    summary: 'Submit EIP155 Order Request',
    description:
      '\nSubmits a transaction for an EIP155 Order Request given the EIP155OrderRequest ID and Permit Signature.\n\nAn `EIP155OrderRequest` representing the proxied order is returned.\n',
    stainlessPath: '(resource) v2.accounts.order_requests.eip155 > (method) submit',
    qualified: 'client.v2.accounts.orderRequests.eip155.submit',
    params: ['account_id: string;', 'order_request_id: string;', 'permit_signature: string;'],
    response:
      "{ id: string; account_id: string; created_dt: string; order_side: 'BUY' | 'SELL'; order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK'; order_type: 'MARKET' | 'LIMIT'; status: string; cancel_message?: string; order_id?: string; recipient_account_id?: string; reject_message?: string; }",
    markdown:
      "## submit\n\n`client.v2.accounts.orderRequests.eip155.submit(account_id: string, order_request_id: string, permit_signature: string): { id: string; account_id: string; created_dt: string; order_side: order_side; order_tif: order_tif; order_type: order_type; status: order_request_status; cancel_message?: string; order_id?: string; recipient_account_id?: string; reject_message?: string; }`\n\n**post** `/api/v2/accounts/{account_id}/order_requests/eip155`\n\n\nSubmits a transaction for an EIP155 Order Request given the EIP155OrderRequest ID and Permit Signature.\n\nAn `EIP155OrderRequest` representing the proxied order is returned.\n\n\n### Parameters\n\n- `account_id: string`\n\n- `order_request_id: string`\n  ID of the prepared proxied order to be submitted as a proxied order.\n\n- `permit_signature: string`\n  Signature of the permit typed data, allowing Dinari to spend the payment token or dShare asset token on behalf of the owner.\n\n### Returns\n\n- `{ id: string; account_id: string; created_dt: string; order_side: 'BUY' | 'SELL'; order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK'; order_type: 'MARKET' | 'LIMIT'; status: string; cancel_message?: string; order_id?: string; recipient_account_id?: string; reject_message?: string; }`\n  \nA request to create an `Order`.\n\nAn `EIP155OrderRequest` is created when a user places an order through the Dinari API.\nThe `EIP155OrderRequest` is then fulfilled by creating an `Order` on-chain.\n\nThe `EIP155OrderRequest` is a record of the user's intent to place an order, while the `Order` is the actual transaction that occurs on the blockchain.\n    \n\n  - `id: string`\n  - `account_id: string`\n  - `created_dt: string`\n  - `order_side: 'BUY' | 'SELL'`\n  - `order_tif: 'DAY' | 'GTC' | 'IOC' | 'FOK'`\n  - `order_type: 'MARKET' | 'LIMIT'`\n  - `status: string`\n  - `cancel_message?: string`\n  - `order_id?: string`\n  - `recipient_account_id?: string`\n  - `reject_message?: string`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst response = await client.v2.accounts.orderRequests.eip155.submit('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { order_request_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', permit_signature: '0xeaF12bD1DfFd' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.OrderRequests.Eip155.Submit',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\tresponse, err := client.V2.Accounts.OrderRequests.Eip155.Submit(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2AccountOrderRequestEip155SubmitParams{\n\t\t\tEip155OrderRequestPermitTransaction: dinariapisdkgo.Eip155OrderRequestPermitTransactionParam{\n\t\t\t\tOrderRequestID:  "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\t\t\tPermitSignature: "0xeaF12bD1DfFd",\n\t\t\t},\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/order_requests/eip155 \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY" \\\n    -d \'{\n          "order_request_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "permit_signature": "0xeaF12bD1DfFd"\n        }\'',
      },
      java: {
        method: 'v2().accounts().orderRequests().eip155().submit',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.orderrequests.eip155.Eip155OrderRequestPermitTransaction;\nimport com.dinari.api.models.v2.accounts.orderrequests.eip155.Eip155SubmitParams;\nimport com.dinari.api.models.v2.accounts.orderrequests.eip155.Eip155SubmitResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        Eip155SubmitParams params = Eip155SubmitParams.builder()\n            .accountId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .eip155OrderRequestPermitTransaction(Eip155OrderRequestPermitTransaction.builder()\n                .orderRequestId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n                .permitSignature("0xeaF12bD1DfFd")\n                .build())\n            .build();\n        Eip155SubmitResponse response = client.v2().accounts().orderRequests().eip155().submit(params);\n    }\n}',
      },
      python: {
        method: 'v2.accounts.order_requests.eip155.submit',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nresponse = client.v2.accounts.order_requests.eip155.submit(\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    order_request_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    permit_signature="0xeaF12bD1DfFd",\n)\nprint(response.id)',
      },
      typescript: {
        method: 'client.v2.accounts.orderRequests.eip155.submit',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.v2.accounts.orderRequests.eip155.submit(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { order_request_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', permit_signature: '0xeaF12bD1DfFd' },\n);\n\nconsole.log(response.id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v2/accounts/{account_id}/withdrawal_requests',
    httpMethod: 'get',
    summary: 'Get Withdrawal Requests',
    description: 'List `WithdrawalRequests` under the `Account`, sorted by most recent.',
    stainlessPath: '(resource) v2.accounts.withdrawal_requests > (method) list',
    qualified: 'client.v2.accounts.withdrawalRequests.list',
    params: ['account_id: string;', 'page?: number;', 'page_size?: number;'],
    response:
      "{ id: string; account_id: string; created_dt: string; payment_token_amount: number; recipient_account_id: string; status: 'PENDING' | 'SUBMITTED' | 'ERROR' | 'CANCELLED'; updated_dt: string; }[]",
    markdown:
      "## list\n\n`client.v2.accounts.withdrawalRequests.list(account_id: string, page?: number, page_size?: number): object[]`\n\n**get** `/api/v2/accounts/{account_id}/withdrawal_requests`\n\nList `WithdrawalRequests` under the `Account`, sorted by most recent.\n\n### Parameters\n\n- `account_id: string`\n\n- `page?: number`\n\n- `page_size?: number`\n\n### Returns\n\n- `{ id: string; account_id: string; created_dt: string; payment_token_amount: number; recipient_account_id: string; status: 'PENDING' | 'SUBMITTED' | 'ERROR' | 'CANCELLED'; updated_dt: string; }[]`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst withdrawalRequests = await client.v2.accounts.withdrawalRequests.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(withdrawalRequests);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.WithdrawalRequests.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\twithdrawalRequests, err := client.V2.Accounts.WithdrawalRequests.List(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2AccountWithdrawalRequestListParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", withdrawalRequests)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/withdrawal_requests \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().accounts().withdrawalRequests().list',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.withdrawalrequests.WithdrawalRequest;\nimport com.dinari.api.models.v2.accounts.withdrawalrequests.WithdrawalRequestListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        List<WithdrawalRequest> withdrawalRequests = client.v2().accounts().withdrawalRequests().list("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e");\n    }\n}',
      },
      python: {
        method: 'v2.accounts.withdrawal_requests.list',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nwithdrawal_requests = client.v2.accounts.withdrawal_requests.list(\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(withdrawal_requests)',
      },
      typescript: {
        method: 'client.v2.accounts.withdrawalRequests.list',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst withdrawalRequests = await client.v2.accounts.withdrawalRequests.list(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(withdrawalRequests);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/v2/accounts/{account_id}/withdrawal_requests',
    httpMethod: 'post',
    summary: 'Create Withdrawal Request',
    description:
      '\nRequest to withdraw USD+ payment tokens from a managed `Account` and send the equivalent amount of USDC to the specified recipient `Account`.\n\nThe recipient `Account` must belong to the same `Entity` as the managed `Account`.\n',
    stainlessPath: '(resource) v2.accounts.withdrawal_requests > (method) create',
    qualified: 'client.v2.accounts.withdrawalRequests.create',
    params: ['account_id: string;', 'payment_token_quantity: number;', 'recipient_account_id: string;'],
    response:
      "{ id: string; account_id: string; created_dt: string; payment_token_amount: number; recipient_account_id: string; status: 'PENDING' | 'SUBMITTED' | 'ERROR' | 'CANCELLED'; updated_dt: string; }",
    markdown:
      "## create\n\n`client.v2.accounts.withdrawalRequests.create(account_id: string, payment_token_quantity: number, recipient_account_id: string): { id: string; account_id: string; created_dt: string; payment_token_amount: number; recipient_account_id: string; status: 'PENDING' | 'SUBMITTED' | 'ERROR' | 'CANCELLED'; updated_dt: string; }`\n\n**post** `/api/v2/accounts/{account_id}/withdrawal_requests`\n\n\nRequest to withdraw USD+ payment tokens from a managed `Account` and send the equivalent amount of USDC to the specified recipient `Account`.\n\nThe recipient `Account` must belong to the same `Entity` as the managed `Account`.\n\n\n### Parameters\n\n- `account_id: string`\n\n- `payment_token_quantity: number`\n  Amount of USD+ payment tokens to be withdrawn. Must be greater than 0 and have at most 6 decimal places.\n\n- `recipient_account_id: string`\n  ID of the `Account` that will receive payment tokens from the `Withdrawal`.\n\n### Returns\n\n- `{ id: string; account_id: string; created_dt: string; payment_token_amount: number; recipient_account_id: string; status: 'PENDING' | 'SUBMITTED' | 'ERROR' | 'CANCELLED'; updated_dt: string; }`\n  Information for a withdrawal request of payment tokens from an `Account` backed by a Dinari-managed `Wallet`.\n\n  - `id: string`\n  - `account_id: string`\n  - `created_dt: string`\n  - `payment_token_amount: number`\n  - `recipient_account_id: string`\n  - `status: 'PENDING' | 'SUBMITTED' | 'ERROR' | 'CANCELLED'`\n  - `updated_dt: string`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst withdrawalRequest = await client.v2.accounts.withdrawalRequests.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { payment_token_quantity: 0, recipient_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(withdrawalRequest);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.WithdrawalRequests.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\twithdrawalRequest, err := client.V2.Accounts.WithdrawalRequests.New(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2AccountWithdrawalRequestNewParams{\n\t\t\tPaymentTokenQuantity: 0,\n\t\t\tRecipientAccountID:   "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", withdrawalRequest.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/withdrawal_requests \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY" \\\n    -d \'{\n          "payment_token_quantity": 0,\n          "recipient_account_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n        }\'',
      },
      java: {
        method: 'v2().accounts().withdrawalRequests().create',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.withdrawalrequests.WithdrawalRequest;\nimport com.dinari.api.models.v2.accounts.withdrawalrequests.WithdrawalRequestCreateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        WithdrawalRequestCreateParams params = WithdrawalRequestCreateParams.builder()\n            .accountId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .paymentTokenQuantity(0.0)\n            .recipientAccountId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .build();\n        WithdrawalRequest withdrawalRequest = client.v2().accounts().withdrawalRequests().create(params);\n    }\n}',
      },
      python: {
        method: 'v2.accounts.withdrawal_requests.create',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nwithdrawal_request = client.v2.accounts.withdrawal_requests.create(\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    payment_token_quantity=0,\n    recipient_account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(withdrawal_request.id)',
      },
      typescript: {
        method: 'client.v2.accounts.withdrawalRequests.create',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst withdrawalRequest = await client.v2.accounts.withdrawalRequests.create(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { payment_token_quantity: 0, recipient_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },\n);\n\nconsole.log(withdrawalRequest.id);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/v2/accounts/{account_id}/withdrawal_requests/{withdrawal_request_id}',
    httpMethod: 'get',
    summary: 'Get Withdrawal Request by ID',
    description: 'Get a specific `WithdrawalRequest` by its ID.',
    stainlessPath: '(resource) v2.accounts.withdrawal_requests > (method) retrieve',
    qualified: 'client.v2.accounts.withdrawalRequests.retrieve',
    params: ['account_id: string;', 'withdrawal_request_id: string;'],
    response:
      "{ id: string; account_id: string; created_dt: string; payment_token_amount: number; recipient_account_id: string; status: 'PENDING' | 'SUBMITTED' | 'ERROR' | 'CANCELLED'; updated_dt: string; }",
    markdown:
      "## retrieve\n\n`client.v2.accounts.withdrawalRequests.retrieve(account_id: string, withdrawal_request_id: string): { id: string; account_id: string; created_dt: string; payment_token_amount: number; recipient_account_id: string; status: 'PENDING' | 'SUBMITTED' | 'ERROR' | 'CANCELLED'; updated_dt: string; }`\n\n**get** `/api/v2/accounts/{account_id}/withdrawal_requests/{withdrawal_request_id}`\n\nGet a specific `WithdrawalRequest` by its ID.\n\n### Parameters\n\n- `account_id: string`\n\n- `withdrawal_request_id: string`\n\n### Returns\n\n- `{ id: string; account_id: string; created_dt: string; payment_token_amount: number; recipient_account_id: string; status: 'PENDING' | 'SUBMITTED' | 'ERROR' | 'CANCELLED'; updated_dt: string; }`\n  Information for a withdrawal request of payment tokens from an `Account` backed by a Dinari-managed `Wallet`.\n\n  - `id: string`\n  - `account_id: string`\n  - `created_dt: string`\n  - `payment_token_amount: number`\n  - `recipient_account_id: string`\n  - `status: 'PENDING' | 'SUBMITTED' | 'ERROR' | 'CANCELLED'`\n  - `updated_dt: string`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst withdrawalRequest = await client.v2.accounts.withdrawalRequests.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(withdrawalRequest);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.WithdrawalRequests.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\twithdrawalRequest, err := client.V2.Accounts.WithdrawalRequests.Get(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2AccountWithdrawalRequestGetParams{\n\t\t\tAccountID: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", withdrawalRequest.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/withdrawal_requests/$WITHDRAWAL_REQUEST_ID \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().accounts().withdrawalRequests().retrieve',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.withdrawalrequests.WithdrawalRequest;\nimport com.dinari.api.models.v2.accounts.withdrawalrequests.WithdrawalRequestRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        WithdrawalRequestRetrieveParams params = WithdrawalRequestRetrieveParams.builder()\n            .accountId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .withdrawalRequestId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .build();\n        WithdrawalRequest withdrawalRequest = client.v2().accounts().withdrawalRequests().retrieve(params);\n    }\n}',
      },
      python: {
        method: 'v2.accounts.withdrawal_requests.retrieve',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nwithdrawal_request = client.v2.accounts.withdrawal_requests.retrieve(\n    withdrawal_request_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(withdrawal_request.id)',
      },
      typescript: {
        method: 'client.v2.accounts.withdrawalRequests.retrieve',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst withdrawalRequest = await client.v2.accounts.withdrawalRequests.retrieve(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },\n);\n\nconsole.log(withdrawalRequest.id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v2/accounts/{account_id}/withdrawals',
    httpMethod: 'get',
    summary: 'Get Withdrawals',
    description: 'Get a list of all `Withdrawals` under the `Account`, sorted by most recent.',
    stainlessPath: '(resource) v2.accounts.withdrawals > (method) list',
    qualified: 'client.v2.accounts.withdrawals.list',
    params: [
      'account_id: string;',
      'page?: number;',
      'page_size?: number;',
      'withdrawal_request_id?: string;',
    ],
    response:
      '{ id: string; account_id: string; chain_id: string; payment_token_address: string; payment_token_amount: number; recipient_account_id: string; status: string; transaction_dt: string; transaction_hash: string; withdrawal_request_id: string; }[]',
    markdown:
      "## list\n\n`client.v2.accounts.withdrawals.list(account_id: string, page?: number, page_size?: number, withdrawal_request_id?: string): object[]`\n\n**get** `/api/v2/accounts/{account_id}/withdrawals`\n\nGet a list of all `Withdrawals` under the `Account`, sorted by most recent.\n\n### Parameters\n\n- `account_id: string`\n\n- `page?: number`\n\n- `page_size?: number`\n\n- `withdrawal_request_id?: string`\n  ID of the `WithdrawalRequest` to find `Withdrawals` for.\n\n### Returns\n\n- `{ id: string; account_id: string; chain_id: string; payment_token_address: string; payment_token_amount: number; recipient_account_id: string; status: string; transaction_dt: string; transaction_hash: string; withdrawal_request_id: string; }[]`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst withdrawals = await client.v2.accounts.withdrawals.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(withdrawals);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.Withdrawals.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\twithdrawals, err := client.V2.Accounts.Withdrawals.List(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2AccountWithdrawalListParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", withdrawals)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/withdrawals \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().accounts().withdrawals().list',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.withdrawals.Withdrawal;\nimport com.dinari.api.models.v2.accounts.withdrawals.WithdrawalListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        List<Withdrawal> withdrawals = client.v2().accounts().withdrawals().list("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e");\n    }\n}',
      },
      python: {
        method: 'v2.accounts.withdrawals.list',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nwithdrawals = client.v2.accounts.withdrawals.list(\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(withdrawals)',
      },
      typescript: {
        method: 'client.v2.accounts.withdrawals.list',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst withdrawals = await client.v2.accounts.withdrawals.list(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(withdrawals);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/v2/accounts/{account_id}/withdrawals/{withdrawal_id}',
    httpMethod: 'get',
    summary: 'Get Withdrawal by ID',
    description: 'Get a specific `Withdrawal` by its ID.',
    stainlessPath: '(resource) v2.accounts.withdrawals > (method) retrieve',
    qualified: 'client.v2.accounts.withdrawals.retrieve',
    params: ['account_id: string;', 'withdrawal_id: string;'],
    response:
      '{ id: string; account_id: string; chain_id: string; payment_token_address: string; payment_token_amount: number; recipient_account_id: string; status: string; transaction_dt: string; transaction_hash: string; withdrawal_request_id: string; }',
    markdown:
      "## retrieve\n\n`client.v2.accounts.withdrawals.retrieve(account_id: string, withdrawal_id: string): { id: string; account_id: string; chain_id: chain; payment_token_address: string; payment_token_amount: number; recipient_account_id: string; status: brokerage_order_status; transaction_dt: string; transaction_hash: string; withdrawal_request_id: string; }`\n\n**get** `/api/v2/accounts/{account_id}/withdrawals/{withdrawal_id}`\n\nGet a specific `Withdrawal` by its ID.\n\n### Parameters\n\n- `account_id: string`\n\n- `withdrawal_id: string`\n\n### Returns\n\n- `{ id: string; account_id: string; chain_id: string; payment_token_address: string; payment_token_amount: number; recipient_account_id: string; status: string; transaction_dt: string; transaction_hash: string; withdrawal_request_id: string; }`\n  Information for a withdrawal of payment tokens from an `Account` backed by a Dinari-managed `Wallet`.\n\n  - `id: string`\n  - `account_id: string`\n  - `chain_id: string`\n  - `payment_token_address: string`\n  - `payment_token_amount: number`\n  - `recipient_account_id: string`\n  - `status: string`\n  - `transaction_dt: string`\n  - `transaction_hash: string`\n  - `withdrawal_request_id: string`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst withdrawal = await client.v2.accounts.withdrawals.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(withdrawal);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.Withdrawals.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\twithdrawal, err := client.V2.Accounts.Withdrawals.Get(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2AccountWithdrawalGetParams{\n\t\t\tAccountID: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", withdrawal.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/withdrawals/$WITHDRAWAL_ID \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().accounts().withdrawals().retrieve',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.withdrawals.Withdrawal;\nimport com.dinari.api.models.v2.accounts.withdrawals.WithdrawalRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        WithdrawalRetrieveParams params = WithdrawalRetrieveParams.builder()\n            .accountId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .withdrawalId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .build();\n        Withdrawal withdrawal = client.v2().accounts().withdrawals().retrieve(params);\n    }\n}',
      },
      python: {
        method: 'v2.accounts.withdrawals.retrieve',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nwithdrawal = client.v2.accounts.withdrawals.retrieve(\n    withdrawal_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(withdrawal.id)',
      },
      typescript: {
        method: 'client.v2.accounts.withdrawals.retrieve',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst withdrawal = await client.v2.accounts.withdrawals.retrieve(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },\n);\n\nconsole.log(withdrawal.id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v2/accounts/{account_id}/token_transfers',
    httpMethod: 'get',
    summary: 'Get TokenTransfers',
    description:
      '\nGet `TokenTransfer`s made from this `Account`.\n\nA `TokenTransfer` represents a transfer of tokens through the Dinari platform from one `Account` to another.\nAs such, only `Account`s that are connected to Dinari-managed `Wallet`s can initiate `TokenTransfer`s.\n',
    stainlessPath: '(resource) v2.accounts.token_transfers > (method) list',
    qualified: 'client.v2.accounts.tokenTransfers.list',
    params: ['account_id: string;', 'page?: number;', 'page_size?: number;'],
    response:
      "{ id: string; chain_id: string; created_dt: string; quantity: number; recipient_account_id: string; sender_account_id: string; status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETE' | 'FAILED'; token_address: string; updated_dt: string; transaction_hash?: string; }[]",
    markdown:
      "## list\n\n`client.v2.accounts.tokenTransfers.list(account_id: string, page?: number, page_size?: number): object[]`\n\n**get** `/api/v2/accounts/{account_id}/token_transfers`\n\n\nGet `TokenTransfer`s made from this `Account`.\n\nA `TokenTransfer` represents a transfer of tokens through the Dinari platform from one `Account` to another.\nAs such, only `Account`s that are connected to Dinari-managed `Wallet`s can initiate `TokenTransfer`s.\n\n\n### Parameters\n\n- `account_id: string`\n\n- `page?: number`\n\n- `page_size?: number`\n\n### Returns\n\n- `{ id: string; chain_id: string; created_dt: string; quantity: number; recipient_account_id: string; sender_account_id: string; status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETE' | 'FAILED'; token_address: string; updated_dt: string; transaction_hash?: string; }[]`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst tokenTransfers = await client.v2.accounts.tokenTransfers.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(tokenTransfers);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.TokenTransfers.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\ttokenTransfers, err := client.V2.Accounts.TokenTransfers.List(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2AccountTokenTransferListParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", tokenTransfers)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/token_transfers \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().accounts().tokenTransfers().list',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.tokentransfers.TokenTransfer;\nimport com.dinari.api.models.v2.accounts.tokentransfers.TokenTransferListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        List<TokenTransfer> tokenTransfers = client.v2().accounts().tokenTransfers().list("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e");\n    }\n}',
      },
      python: {
        method: 'v2.accounts.token_transfers.list',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\ntoken_transfers = client.v2.accounts.token_transfers.list(\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(token_transfers)',
      },
      typescript: {
        method: 'client.v2.accounts.tokenTransfers.list',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst tokenTransfers = await client.v2.accounts.tokenTransfers.list(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(tokenTransfers);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/v2/accounts/{account_id}/token_transfers',
    httpMethod: 'post',
    summary: 'Create TokenTransfer',
    description:
      '\nCreates a `TokenTransfer` from this `Account`.\n\nA `TokenTransfer` represents a transfer of tokens through the Dinari platform from one `Account` to another.\nAs such, only `Account`s that are connected to Dinari-managed `Wallet`s can initiate `TokenTransfer`s.\n',
    stainlessPath: '(resource) v2.accounts.token_transfers > (method) create',
    qualified: 'client.v2.accounts.tokenTransfers.create',
    params: [
      'account_id: string;',
      'quantity: number;',
      'recipient_account_id: string;',
      'token_address: string;',
    ],
    response:
      "{ id: string; chain_id: string; created_dt: string; quantity: number; recipient_account_id: string; sender_account_id: string; status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETE' | 'FAILED'; token_address: string; updated_dt: string; transaction_hash?: string; }",
    markdown:
      "## create\n\n`client.v2.accounts.tokenTransfers.create(account_id: string, quantity: number, recipient_account_id: string, token_address: string): { id: string; chain_id: string; created_dt: string; quantity: number; recipient_account_id: string; sender_account_id: string; status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETE' | 'FAILED'; token_address: string; updated_dt: string; transaction_hash?: string; }`\n\n**post** `/api/v2/accounts/{account_id}/token_transfers`\n\n\nCreates a `TokenTransfer` from this `Account`.\n\nA `TokenTransfer` represents a transfer of tokens through the Dinari platform from one `Account` to another.\nAs such, only `Account`s that are connected to Dinari-managed `Wallet`s can initiate `TokenTransfer`s.\n\n\n### Parameters\n\n- `account_id: string`\n\n- `quantity: number`\n  Quantity of the token to transfer.\n\n- `recipient_account_id: string`\n  ID of the recipient account to which the tokens will be transferred.\n\n- `token_address: string`\n  Address of the token to transfer.\n\n### Returns\n\n- `{ id: string; chain_id: string; created_dt: string; quantity: number; recipient_account_id: string; sender_account_id: string; status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETE' | 'FAILED'; token_address: string; updated_dt: string; transaction_hash?: string; }`\n  Information about a token transfer between accounts.\n\n  - `id: string`\n  - `chain_id: string`\n  - `created_dt: string`\n  - `quantity: number`\n  - `recipient_account_id: string`\n  - `sender_account_id: string`\n  - `status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETE' | 'FAILED'`\n  - `token_address: string`\n  - `updated_dt: string`\n  - `transaction_hash?: string`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst tokenTransfer = await client.v2.accounts.tokenTransfers.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  quantity: 0,\n  recipient_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  token_address: 'token_address',\n});\n\nconsole.log(tokenTransfer);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.TokenTransfers.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\ttokenTransfer, err := client.V2.Accounts.TokenTransfers.New(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2AccountTokenTransferNewParams{\n\t\t\tQuantity:           0,\n\t\t\tRecipientAccountID: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\t\tTokenAddress:       "token_address",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", tokenTransfer.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/token_transfers \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY" \\\n    -d \'{\n          "quantity": 0,\n          "recipient_account_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "token_address": "token_address"\n        }\'',
      },
      java: {
        method: 'v2().accounts().tokenTransfers().create',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.tokentransfers.TokenTransfer;\nimport com.dinari.api.models.v2.accounts.tokentransfers.TokenTransferCreateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        TokenTransferCreateParams params = TokenTransferCreateParams.builder()\n            .accountId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .quantity(0.0)\n            .recipientAccountId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .tokenAddress("token_address")\n            .build();\n        TokenTransfer tokenTransfer = client.v2().accounts().tokenTransfers().create(params);\n    }\n}',
      },
      python: {
        method: 'v2.accounts.token_transfers.create',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\ntoken_transfer = client.v2.accounts.token_transfers.create(\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    quantity=0,\n    recipient_account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    token_address="token_address",\n)\nprint(token_transfer.id)',
      },
      typescript: {
        method: 'client.v2.accounts.tokenTransfers.create',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst tokenTransfer = await client.v2.accounts.tokenTransfers.create(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  {\n    quantity: 0,\n    recipient_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n    token_address: 'token_address',\n  },\n);\n\nconsole.log(tokenTransfer.id);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/v2/accounts/{account_id}/token_transfers/{transfer_id}',
    httpMethod: 'get',
    summary: 'Get TokenTransfer by ID',
    description:
      '\nGet a specific `TokenTransfer` made from this `Account` by its ID.\n\nA `TokenTransfer` represents a transfer of tokens through the Dinari platform from one `Account` to another.\nAs such, only `Account`s that are connected to Dinari-managed `Wallet`s can initiate `TokenTransfer`s.\n',
    stainlessPath: '(resource) v2.accounts.token_transfers > (method) retrieve',
    qualified: 'client.v2.accounts.tokenTransfers.retrieve',
    params: ['account_id: string;', 'transfer_id: string;'],
    response:
      "{ id: string; chain_id: string; created_dt: string; quantity: number; recipient_account_id: string; sender_account_id: string; status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETE' | 'FAILED'; token_address: string; updated_dt: string; transaction_hash?: string; }",
    markdown:
      "## retrieve\n\n`client.v2.accounts.tokenTransfers.retrieve(account_id: string, transfer_id: string): { id: string; chain_id: string; created_dt: string; quantity: number; recipient_account_id: string; sender_account_id: string; status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETE' | 'FAILED'; token_address: string; updated_dt: string; transaction_hash?: string; }`\n\n**get** `/api/v2/accounts/{account_id}/token_transfers/{transfer_id}`\n\n\nGet a specific `TokenTransfer` made from this `Account` by its ID.\n\nA `TokenTransfer` represents a transfer of tokens through the Dinari platform from one `Account` to another.\nAs such, only `Account`s that are connected to Dinari-managed `Wallet`s can initiate `TokenTransfer`s.\n\n\n### Parameters\n\n- `account_id: string`\n\n- `transfer_id: string`\n\n### Returns\n\n- `{ id: string; chain_id: string; created_dt: string; quantity: number; recipient_account_id: string; sender_account_id: string; status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETE' | 'FAILED'; token_address: string; updated_dt: string; transaction_hash?: string; }`\n  Information about a token transfer between accounts.\n\n  - `id: string`\n  - `chain_id: string`\n  - `created_dt: string`\n  - `quantity: number`\n  - `recipient_account_id: string`\n  - `sender_account_id: string`\n  - `status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETE' | 'FAILED'`\n  - `token_address: string`\n  - `updated_dt: string`\n  - `transaction_hash?: string`\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nconst tokenTransfer = await client.v2.accounts.tokenTransfers.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(tokenTransfer);\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.TokenTransfers.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\ttokenTransfer, err := client.V2.Accounts.TokenTransfers.Get(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2AccountTokenTransferGetParams{\n\t\t\tAccountID: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", tokenTransfer.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/token_transfers/$TRANSFER_ID \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().accounts().tokenTransfers().retrieve',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.tokentransfers.TokenTransfer;\nimport com.dinari.api.models.v2.accounts.tokentransfers.TokenTransferRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        TokenTransferRetrieveParams params = TokenTransferRetrieveParams.builder()\n            .accountId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .transferId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .build();\n        TokenTransfer tokenTransfer = client.v2().accounts().tokenTransfers().retrieve(params);\n    }\n}',
      },
      python: {
        method: 'v2.accounts.token_transfers.retrieve',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\ntoken_transfer = client.v2.accounts.token_transfers.retrieve(\n    transfer_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(token_transfer.id)',
      },
      typescript: {
        method: 'client.v2.accounts.tokenTransfers.retrieve',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nconst tokenTransfer = await client.v2.accounts.tokenTransfers.retrieve(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },\n);\n\nconsole.log(tokenTransfer.id);",
      },
    },
  },
  {
    name: 'retrieve_brokerage',
    endpoint: '/api/v2/accounts/{account_id}/activities/brokerage',
    httpMethod: 'get',
    summary: 'Get Brokerage Account Activities',
    description:
      '\nGet a list of brokerage activities tied to the specified `Account`.\n\n**⚠️ ALPHA: This endpoint is in early development and subject to breaking changes.**\n',
    stainlessPath: '(resource) v2.accounts.activities > (method) retrieve_brokerage',
    qualified: 'client.v2.accounts.activities.retrieveBrokerage',
    params: ['account_id: string;', 'page_size?: number;', 'page_token?: string;'],
    markdown:
      "## retrieve_brokerage\n\n`client.v2.accounts.activities.retrieveBrokerage(account_id: string, page_size?: number, page_token?: string): void`\n\n**get** `/api/v2/accounts/{account_id}/activities/brokerage`\n\n\nGet a list of brokerage activities tied to the specified `Account`.\n\n**⚠️ ALPHA: This endpoint is in early development and subject to breaking changes.**\n\n\n### Parameters\n\n- `account_id: string`\n\n- `page_size?: number`\n  The maximum number of entries to return in the response. Defaults to 100.\n\n- `page_token?: string`\n  Pagination token. Set to the `id` field of the last Activity returned in the previous page to get the next page of results.\n\n### Example\n\n```typescript\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\nawait client.v2.accounts.activities.retrieveBrokerage('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e')\n```",
    perLanguage: {
      go: {
        method: 'client.V2.Accounts.Activities.GetBrokerage',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),\n\t\toption.WithAPISecretKey("My API Secret Key"),\n\t)\n\terr := client.V2.Accounts.Activities.GetBrokerage(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tdinariapisdkgo.V2AccountActivityGetBrokerageParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://api-enterprise.sbt.dinari.com/api/v2/accounts/$ACCOUNT_ID/activities/brokerage \\\n    -H "X-API-Key-Id: $DINARI_API_KEY_ID" \\\n    -H "X-API-Secret-Key: $DINARI_API_SECRET_KEY"',
      },
      java: {
        method: 'v2().accounts().activities().retrieveBrokerage',
        example:
          'package com.dinari.api.example;\n\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.accounts.activities.ActivityRetrieveBrokerageParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        DinariClient client = DinariOkHttpClient.fromEnv();\n\n        client.v2().accounts().activities().retrieveBrokerage("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e");\n    }\n}',
      },
      python: {
        method: 'v2.accounts.activities.retrieve_brokerage',
        example:
          'import os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n)\nclient.v2.accounts.activities.retrieve_brokerage(\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)',
      },
      typescript: {
        method: 'client.v2.accounts.activities.retrieveBrokerage',
        example:
          "import Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n});\n\nawait client.v2.accounts.activities.retrieveBrokerage('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');",
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'python',
    content:
      '# Dinari Python API library\n\n<!-- prettier-ignore -->\n[![PyPI version](https://img.shields.io/pypi/v/dinari-api-sdk.svg?label=pypi%20(stable))](https://pypi.org/project/dinari-api-sdk/)\n\nThe Dinari Python library provides convenient access to the Dinari REST API from any Python 3.9+\napplication. The library includes type definitions for all request params and response fields,\nand offers both synchronous and asynchronous clients powered by [httpx](https://github.com/encode/httpx).\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Dinari MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40dinari%2Fapi-sdk-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBkaW5hcmkvYXBpLXNkay1tY3AiXSwiZW52Ijp7IkRJTkFSSV9BUElfS0VZX0lEIjoiTXkgQVBJIEtleSBJRCIsIkRJTkFSSV9BUElfU0VDUkVUX0tFWSI6Ik15IEFQSSBTZWNyZXQgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40dinari%2Fapi-sdk-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40dinari%2Fapi-sdk-mcp%22%5D%2C%22env%22%3A%7B%22DINARI_API_KEY_ID%22%3A%22My%20API%20Key%20ID%22%2C%22DINARI_API_SECRET_KEY%22%3A%22My%20API%20Secret%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nThe REST API documentation can be found on [docs.dinari.com](https://docs.dinari.com/). The full API of this library can be found in [api.md](api.md).\n\n## Installation\n\n```sh\n# install from PyPI\npip install dinari-api-sdk\n```\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```python\nimport os\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n    # defaults to "production".\n    environment="sandbox",\n)\n\nstocks = client.v2.market_data.stocks.list()\n```\n\nWhile you can provide a `api_key_id` keyword argument,\nwe recommend using [python-dotenv](https://pypi.org/project/python-dotenv/)\nto add `DINARI_API_KEY_ID="My API Key ID"` to your `.env` file\nso that your API Key ID is not stored in source control.\n\n## Async usage\n\nSimply import `AsyncDinari` instead of `Dinari` and use `await` with each API call:\n\n```python\nimport os\nimport asyncio\nfrom dinari_api_sdk import AsyncDinari\n\nclient = AsyncDinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n    # defaults to "production".\n    environment="sandbox",\n)\n\nasync def main() -> None:\n  stocks = await client.v2.market_data.stocks.list()\n\nasyncio.run(main())\n```\n\nFunctionality between the synchronous and asynchronous clients is otherwise identical.\n\n### With aiohttp\n\nBy default, the async client uses `httpx` for HTTP requests. However, for improved concurrency performance you may also use `aiohttp` as the HTTP backend.\n\nYou can enable this by installing `aiohttp`:\n\n```sh\n# install from PyPI\npip install dinari-api-sdk[aiohttp]\n```\n\nThen you can enable it by instantiating the client with `http_client=DefaultAioHttpClient()`:\n\n```python\nimport os\nimport asyncio\nfrom dinari_api_sdk import DefaultAioHttpClient\nfrom dinari_api_sdk import AsyncDinari\n\nasync def main() -> None:\n  async with AsyncDinari(\n    api_key_id=os.environ.get("DINARI_API_KEY_ID"),  # This is the default and can be omitted\n    api_secret_key=os.environ.get("DINARI_API_SECRET_KEY"),  # This is the default and can be omitted\n    http_client=DefaultAioHttpClient(),\n) as client:\n    stocks = await client.v2.market_data.stocks.list()\n\nasyncio.run(main())\n```\n\n\n\n## Using types\n\nNested request parameters are [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict). Responses are [Pydantic models](https://docs.pydantic.dev) which also provide helper methods for things like:\n\n- Serializing back into JSON, `model.to_json()`\n- Converting to a dictionary, `model.to_dict()`\n\nTyped requests and responses provide autocomplete and documentation within your editor. If you would like to see type errors in VS Code to help catch bugs earlier, set `python.analysis.typeCheckingMode` to `basic`.\n\n\n\n## Nested params\n\nNested parameters are dictionaries, typed using `TypedDict`, for example:\n\n```python\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari()\n\nkyc_info = client.v2.entities.kyc.submit(\n    entity_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    data={\n        "address_country_code": "SG",\n        "country_code": "SG",\n        "last_name": "Doe",\n    },\n    provider_name="x",\n)\nprint(kyc_info.data)\n```\n\n## File uploads\n\nRequest parameters that correspond to file uploads can be passed as `bytes`, or a [`PathLike`](https://docs.python.org/3/library/os.html#os.PathLike) instance or a tuple of `(filename, contents, media type)`.\n\n```python\nfrom pathlib import Path\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari()\n\nclient.v2.entities.kyc.document.upload(\n    kyc_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    entity_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    document_type="GOVERNMENT_ID",\n    file=Path("/path/to/file"),\n)\n```\n\nThe async client uses the exact same interface. If you pass a [`PathLike`](https://docs.python.org/3/library/os.html#os.PathLike) instance, the file contents will be read asynchronously automatically.\n\n## Handling errors\n\nWhen the library is unable to connect to the API (for example, due to network connection problems or a timeout), a subclass of `dinari_api_sdk.APIConnectionError` is raised.\n\nWhen the API returns a non-success status code (that is, 4xx or 5xx\nresponse), a subclass of `dinari_api_sdk.APIStatusError` is raised, containing `status_code` and `response` properties.\n\nAll errors inherit from `dinari_api_sdk.APIError`.\n\n```python\nimport dinari_api_sdk\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari()\n\ntry:\n    client.v2.market_data.stocks.list()\nexcept dinari_api_sdk.APIConnectionError as e:\n    print("The server could not be reached")\n    print(e.__cause__) # an underlying Exception, likely raised within httpx.\nexcept dinari_api_sdk.RateLimitError as e:\n    print("A 429 status code was received; we should back off a bit.")\nexcept dinari_api_sdk.APIStatusError as e:\n    print("Another non-200-range status code was received")\n    print(e.status_code)\n    print(e.response)\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors are automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors are all retried by default.\n\nYou can use the `max_retries` option to configure or disable retry settings:\n\n```python\nfrom dinari_api_sdk import Dinari\n\n# Configure the default for all requests:\nclient = Dinari(\n    # default is 2\n    max_retries=0,\n)\n\n# Or, configure per-request:\nclient.with_options(max_retries = 5).v2.market_data.stocks.list()\n```\n\n### Timeouts\n\nBy default requests time out after 1 minute. You can configure this with a `timeout` option,\nwhich accepts a float or an [`httpx.Timeout`](https://www.python-httpx.org/advanced/timeouts/#fine-tuning-the-configuration) object:\n\n```python\nfrom dinari_api_sdk import Dinari\n\n# Configure the default for all requests:\nclient = Dinari(\n    # 20 seconds (default is 1 minute)\n    timeout=20.0,\n)\n\n# More granular control:\nclient = Dinari(\n    timeout=httpx.Timeout(60.0, read=5.0, write=10.0, connect=2.0),\n)\n\n# Override per-request:\nclient.with_options(timeout = 5.0).v2.market_data.stocks.list()\n```\n\nOn timeout, an `APITimeoutError` is thrown.\n\nNote that requests that time out are [retried twice by default](#retries).\n\n\n\n## Advanced\n\n### Logging\n\nWe use the standard library [`logging`](https://docs.python.org/3/library/logging.html) module.\n\nYou can enable logging by setting the environment variable `DINARI_LOG` to `info`.\n\n```shell\n$ export DINARI_LOG=info\n```\n\nOr to `debug` for more verbose logging.\n\n### How to tell whether `None` means `null` or missing\n\nIn an API response, a field may be explicitly `null`, or missing entirely; in either case, its value is `None` in this library. You can differentiate the two cases with `.model_fields_set`:\n\n```py\nif response.my_field is None:\n  if \'my_field\' not in response.model_fields_set:\n    print(\'Got json like {}, without a "my_field" key present at all.\')\n  else:\n    print(\'Got json like {"my_field": null}.\')\n```\n\n### Accessing raw response data (e.g. headers)\n\nThe "raw" Response object can be accessed by prefixing `.with_raw_response.` to any HTTP method call, e.g.,\n\n```py\nfrom dinari_api_sdk import Dinari\n\nclient = Dinari()\nresponse = client.v2.market_data.stocks.with_raw_response.list()\nprint(response.headers.get(\'X-My-Header\'))\n\nstock = response.parse()  # get the object that `v2.market_data.stocks.list()` would have returned\nprint(stock)\n```\n\nThese methods return an [`APIResponse`](https://github.com/dinaricrypto/dinari-api-sdk-python/tree/main/src/dinari_api_sdk/_response.py) object.\n\nThe async client returns an [`AsyncAPIResponse`](https://github.com/dinaricrypto/dinari-api-sdk-python/tree/main/src/dinari_api_sdk/_response.py) with the same structure, the only difference being `await`able methods for reading the response content.\n\n#### `.with_streaming_response`\n\nThe above interface eagerly reads the full response body when you make the request, which may not always be what you want.\n\nTo stream the response body, use `.with_streaming_response` instead, which requires a context manager and only reads the response body once you call `.read()`, `.text()`, `.json()`, `.iter_bytes()`, `.iter_text()`, `.iter_lines()` or `.parse()`. In the async client, these are async methods.\n\n```python\nwith client.v2.market_data.stocks.with_streaming_response.list() as response :\n    print(response.headers.get(\'X-My-Header\'))\n\n    for line in response.iter_lines():\n      print(line)\n```\n\nThe context manager is required so that the response will reliably be closed.\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API.\n\nIf you need to access undocumented endpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can make requests using `client.get`, `client.post`, and other\nhttp verbs. Options on the client will be respected (such as retries) when making this request.\n\n```py\nimport httpx\n\nresponse = client.post(\n    "/foo",\n    cast_to=httpx.Response,\n    body={"my_param": True},\n)\n\nprint(response.headers.get("x-foo"))\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you can access the extra fields like `response.unknown_prop`. You\ncan also get all the extra fields on the Pydantic model as a dict with\n[`response.model_extra`](https://docs.pydantic.dev/latest/api/base_model/#pydantic.BaseModel.model_extra).\n\n### Configuring the HTTP client\n\nYou can directly override the [httpx client](https://www.python-httpx.org/api/#client) to customize it for your use case, including:\n\n- Support for [proxies](https://www.python-httpx.org/advanced/proxies/)\n- Custom [transports](https://www.python-httpx.org/advanced/transports/)\n- Additional [advanced](https://www.python-httpx.org/advanced/clients/) functionality\n\n```python\nimport httpx\nfrom dinari_api_sdk import Dinari, DefaultHttpxClient\n\nclient = Dinari(\n    # Or use the `DINARI_BASE_URL` env var\n    base_url="http://my.test.server.example.com:8083",\n    http_client=DefaultHttpxClient(proxy="http://my.test.proxy.example.com", transport=httpx.HTTPTransport(local_address="0.0.0.0")),\n)\n```\n\nYou can also customize the client on a per-request basis by using `with_options()`:\n\n```python\nclient.with_options(http_client=DefaultHttpxClient(...))\n```\n\n### Managing HTTP resources\n\nBy default the library closes underlying HTTP connections whenever the client is [garbage collected](https://docs.python.org/3/reference/datamodel.html#object.__del__). You can manually close the client using the `.close()` method if desired, or with a context manager that closes when exiting.\n\n```py\nfrom dinari_api_sdk import Dinari\n\nwith Dinari() as client:\n  # make requests here\n  ...\n\n# HTTP client is now closed\n```\n\n## Versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/dinaricrypto/dinari-api-sdk-python/issues) with questions, bugs, or suggestions.\n\n### Determining the installed version\n\nIf you\'ve upgraded to the latest version but aren\'t seeing any new features you were expecting then your python environment is likely still using an older version.\n\nYou can determine the version that is being used at runtime with:\n\n```py\nimport dinari_api_sdk\nprint(dinari_api_sdk.__version__)\n```\n\n## Requirements\n\nPython 3.9 or higher.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'go',
    content:
      '# Dinari Go API Library\n\n<a href="https://pkg.go.dev/github.com/dinaricrypto/dinari-api-sdk-go"><img src="https://pkg.go.dev/badge/github.com/dinaricrypto/dinari-api-sdk-go.svg" alt="Go Reference"></a>\n\nThe Dinari Go library provides convenient access to the [Dinari REST API](https://docs.dinari.com/)\nfrom applications written in Go.\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Dinari MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40dinari%2Fapi-sdk-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBkaW5hcmkvYXBpLXNkay1tY3AiXSwiZW52Ijp7IkRJTkFSSV9BUElfS0VZX0lEIjoiTXkgQVBJIEtleSBJRCIsIkRJTkFSSV9BUElfU0VDUkVUX0tFWSI6Ik15IEFQSSBTZWNyZXQgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40dinari%2Fapi-sdk-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40dinari%2Fapi-sdk-mcp%22%5D%2C%22env%22%3A%7B%22DINARI_API_KEY_ID%22%3A%22My%20API%20Key%20ID%22%2C%22DINARI_API_SECRET_KEY%22%3A%22My%20API%20Secret%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n```go\nimport (\n\t"github.com/dinaricrypto/dinari-api-sdk-go" // imported as SDK_PackageName\n)\n```\n\n<!-- x-release-please-end -->\n\nOr to pin the version:\n\n<!-- x-release-please-start-version -->\n\n```sh\ngo get -u \'github.com/dinaricrypto/dinari-api-sdk-go@v0.0.1\'\n```\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Go 1.22+.\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```go\npackage main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/dinaricrypto/dinari-api-sdk-go"\n\t"github.com/dinaricrypto/dinari-api-sdk-go/option"\n)\n\nfunc main() {\n\tclient := dinariapisdkgo.NewClient(\n\t\toption.WithAPIKeyID("My API Key ID"),         // defaults to os.LookupEnv("DINARI_API_KEY_ID")\n\t\toption.WithAPISecretKey("My API Secret Key"), // defaults to os.LookupEnv("DINARI_API_SECRET_KEY")\n\t\toption.WithEnvironmentSandbox(),              // defaults to option.WithEnvironmentProduction()\n\t)\n\tstocks, err := client.V2.MarketData.Stocks.List(context.TODO(), dinariapisdkgo.V2MarketDataStockListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", stocks)\n}\n\n```\n\n### Request fields\n\nAll request parameters are wrapped in a generic `Field` type,\nwhich we use to distinguish zero values from null or omitted fields.\n\nThis prevents accidentally sending a zero value if you forget a required parameter,\nand enables explicitly sending `null`, `false`, `\'\'`, or `0` on optional parameters.\nAny field not specified is not sent.\n\nTo construct fields with values, use the helpers `String()`, `Int()`, `Float()`, or most commonly, the generic `F[T]()`.\nTo send a null, use `Null[T]()`, and to send a nonconforming value, use `Raw[T](any)`. For example:\n\n```go\nparams := FooParams{\n\tName: SDK_PackageName.F("hello"),\n\n\t// Explicitly send `"description": null`\n\tDescription: SDK_PackageName.Null[string](),\n\n\tPoint: SDK_PackageName.F(SDK_PackageName.Point{\n\t\tX: SDK_PackageName.Int(0),\n\t\tY: SDK_PackageName.Int(1),\n\n\t\t// In cases where the API specifies a given type,\n\t\t// but you want to send something else, use `Raw`:\n\t\tZ: SDK_PackageName.Raw[int64](0.01), // sends a float\n\t}),\n}\n```\n\n### Response objects\n\nAll fields in response structs are value types (not pointers or wrappers).\n\nIf a given field is `null`, not present, or invalid, the corresponding field\nwill simply be its zero value.\n\nAll response structs also include a special `JSON` field, containing more detailed\ninformation about each property, which you can use like so:\n\n```go\nif res.Name == "" {\n\t// true if `"name"` is either not present or explicitly null\n\tres.JSON.Name.IsNull()\n\n\t// true if the `"name"` key was not present in the response JSON at all\n\tres.JSON.Name.IsMissing()\n\n\t// When the API returns data that cannot be coerced to the expected type:\n\tif res.JSON.Name.IsInvalid() {\n\t\traw := res.JSON.Name.Raw()\n\n\t\tlegacyName := struct{\n\t\t\tFirst string `json:"first"`\n\t\t\tLast  string `json:"last"`\n\t\t}{}\n\t\tjson.Unmarshal([]byte(raw), &legacyName)\n\t\tname = legacyName.First + " " + legacyName.Last\n\t}\n}\n```\n\nThese `.JSON` structs also include an `Extras` map containing\nany properties in the json response that were not specified\nin the struct. This can be useful for API features not yet\npresent in the SDK.\n\n```go\nbody := res.JSON.ExtraFields["my_unexpected_field"].Raw()\n```\n\n### RequestOptions\n\nThis library uses the functional options pattern. Functions defined in the\n`SDK_PackageOptionName` package return a `RequestOption`, which is a closure that mutates a\n`RequestConfig`. These options can be supplied to the client or at individual\nrequests. For example:\n\n```go\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\t// Adds a header to every request made by the client\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "custom_header_info"),\n)\n\nclient.V2.MarketData.Stocks.List(context.TODO(), ...,\n\t// Override the header\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "some_other_custom_header_info"),\n\t// Add an undocumented field to the request body, using sjson syntax\n\tSDK_PackageOptionName.WithJSONSet("some.json.path", map[string]string{"my": "object"}),\n)\n```\n\nSee the [full list of request options](https://pkg.go.dev/github.com/dinaricrypto/dinari-api-sdk-go/SDK_PackageOptionName).\n\n### Pagination\n\nThis library provides some conveniences for working with paginated list endpoints.\n\nYou can use `.ListAutoPaging()` methods to iterate through items across all pages:\n\n\n\nOr you can use simple `.List()` methods to fetch a single page and receive a standard response object\nwith additional helper methods like `.GetNextPage()`, e.g.:\n\n\n\n### Errors\n\nWhen the API returns a non-success status code, we return an error with type\n`*SDK_PackageName.Error`. This contains the `StatusCode`, `*http.Request`, and\n`*http.Response` values of the request, as well as the JSON of the error body\n(much like other response objects in the SDK).\n\nTo handle errors, we recommend that you use the `errors.As` pattern:\n\n```go\n_, err := client.V2.MarketData.Stocks.List(context.TODO(), dinariapisdkgo.V2MarketDataStockListParams{})\nif err != nil {\n\tvar apierr *dinariapisdkgo.Error\n\tif errors.As(err, &apierr) {\n\t\tprintln(string(apierr.DumpRequest(true)))  // Prints the serialized HTTP request\n\t\tprintln(string(apierr.DumpResponse(true))) // Prints the serialized HTTP response\n\t}\n\tpanic(err.Error()) // GET "/api/v2/market_data/stocks/": 400 Bad Request { ... }\n}\n```\n\nWhen other errors occur, they are returned unwrapped; for example,\nif HTTP transport fails, you might receive `*url.Error` wrapping `*net.OpError`.\n\n### Timeouts\n\nRequests do not time out by default; use context to configure a timeout for a request lifecycle.\n\nNote that if a request is [retried](#retries), the context timeout does not start over.\nTo set a per-retry timeout, use `SDK_PackageOptionName.WithRequestTimeout()`.\n\n```go\n// This sets the timeout for the request, including all the retries.\nctx, cancel := context.WithTimeout(context.Background(), 5*time.Minute)\ndefer cancel()\nclient.V2.MarketData.Stocks.List(\n\tctx,\n\tdinariapisdkgo.V2MarketDataStockListParams{},\n\t// This sets the per-retry timeout\n\toption.WithRequestTimeout(20*time.Second),\n)\n```\n\n### File uploads\n\nRequest parameters that correspond to file uploads in multipart requests are typed as\n`param.Field[io.Reader]`. The contents of the `io.Reader` will by default be sent as a multipart form\npart with the file name of "anonymous_file" and content-type of "application/octet-stream".\n\nThe file name and content-type can be customized by implementing `Name() string` or `ContentType()\nstring` on the run-time type of `io.Reader`. Note that `os.File` implements `Name() string`, so a\nfile returned by `os.Open` will be sent with the file name on disk.\n\nWe also provide a helper `SDK_PackageName.FileParam(reader io.Reader, filename string, contentType string)`\nwhich can be used to wrap any `io.Reader` with the appropriate file name and content type.\n\n```go\n// A file from the file system\nfile, err := os.Open("/path/to/file")\ndinariapisdkgo.V2EntityKYCDocumentUploadParams{\n\tEntityID:     "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\tDocumentType: dinariapisdkgo.KYCDocumentTypeGovernmentID,\n\tFile:         file,\n}\n\n// A file from a string\ndinariapisdkgo.V2EntityKYCDocumentUploadParams{\n\tEntityID:     "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\tDocumentType: dinariapisdkgo.KYCDocumentTypeGovernmentID,\n\tFile:         strings.NewReader("my file contents"),\n}\n\n// With a custom filename and contentType\ndinariapisdkgo.V2EntityKYCDocumentUploadParams{\n\tEntityID:     "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\tDocumentType: dinariapisdkgo.KYCDocumentTypeGovernmentID,\n\tFile:         dinariapisdkgo.File(strings.NewReader(`{"hello": "foo"}`), "file.go", "application/json"),\n}\n```\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nWe retry by default all connection errors, 408 Request Timeout, 409 Conflict, 429 Rate Limit,\nand >=500 Internal errors.\n\nYou can use the `WithMaxRetries` option to configure or disable this:\n\n```go\n// Configure the default for all requests:\nclient := dinariapisdkgo.NewClient(\n\toption.WithMaxRetries(0), // default is 2\n)\n\n// Override per-request:\nclient.V2.MarketData.Stocks.List(\n\tcontext.TODO(),\n\tdinariapisdkgo.V2MarketDataStockListParams{},\n\toption.WithMaxRetries(5),\n)\n```\n\n\n### Accessing raw response data (e.g. response headers)\n\nYou can access the raw HTTP response data by using the `option.WithResponseInto()` request option. This is useful when\nyou need to examine response headers, status codes, or other details.\n\n```go\n// Create a variable to store the HTTP response\nvar response *http.Response\nstocks, err := client.V2.MarketData.Stocks.List(\n\tcontext.TODO(),\n\tdinariapisdkgo.V2MarketDataStockListParams{},\n\toption.WithResponseInto(&response),\n)\nif err != nil {\n\t// handle error\n}\nfmt.Printf("%+v\\n", stocks)\n\nfmt.Printf("Status Code: %d\\n", response.StatusCode)\nfmt.Printf("Headers: %+#v\\n", response.Header)\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.Get`, `client.Post`, and other HTTP verbs.\n`RequestOptions` on the client, such as retries, will be respected when making these requests.\n\n```go\nvar (\n    // params can be an io.Reader, a []byte, an encoding/json serializable object,\n    // or a "…Params" struct defined in this library.\n    params map[string]interface{}\n\n    // result can be an []byte, *http.Response, a encoding/json deserializable object,\n    // or a model defined in this library.\n    result *http.Response\n)\nerr := client.Post(context.Background(), "/unspecified", params, &result)\nif err != nil {\n    …\n}\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use either the `SDK_PackageOptionName.WithQuerySet()`\nor the `SDK_PackageOptionName.WithJSONSet()` methods.\n\n```go\nparams := FooNewParams{\n    ID:   SDK_PackageName.F("id_xxxx"),\n    Data: SDK_PackageName.F(FooNewParamsData{\n        FirstName: SDK_PackageName.F("John"),\n    }),\n}\nclient.Foo.New(context.Background(), params, SDK_PackageOptionName.WithJSONSet("data.last_name", "Doe"))\n```\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may either access the raw JSON of the response as a string\nwith `result.JSON.RawJSON()`, or get the raw JSON of a particular field on the result with\n`result.JSON.Foo.Raw()`.\n\nAny fields that are not present on the response struct will be saved and can be accessed by `result.JSON.ExtraFields()` which returns the extra fields as a `map[string]Field`.\n\n### Middleware\n\nWe provide `SDK_PackageOptionName.WithMiddleware` which applies the given\nmiddleware to requests.\n\n```go\nfunc Logger(req *http.Request, next SDK_PackageOptionName.MiddlewareNext) (res *http.Response, err error) {\n\t// Before the request\n\tstart := time.Now()\n\tLogReq(req)\n\n\t// Forward the request to the next handler\n\tres, err = next(req)\n\n\t// Handle stuff after the request\n\tend := time.Now()\n\tLogRes(res, err, start - end)\n\n    return res, err\n}\n\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\tSDK_PackageOptionName.WithMiddleware(Logger),\n)\n```\n\nWhen multiple middlewares are provided as variadic arguments, the middlewares\nare applied left to right. If `SDK_PackageOptionName.WithMiddleware` is given\nmultiple times, for example first in the client then the method, the\nmiddleware in the client will run first and the middleware given in the method\nwill run next.\n\nYou may also replace the default `http.Client` with\n`SDK_PackageOptionName.WithHTTPClient(client)`. Only one http client is\naccepted (this overwrites any previous client) and receives requests after any\nmiddleware has been applied.\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/dinaricrypto/dinari-api-sdk-go/issues) with questions, bugs, or suggestions.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Dinari TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/@dinari/api-sdk.svg?label=npm%20(stable))](https://npmjs.org/package/@dinari/api-sdk) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@dinari/api-sdk)\n\nThis library provides convenient access to the Dinari REST API from server-side TypeScript or JavaScript.\n\n\n\nThe REST API documentation can be found on [docs.dinari.com](https://docs.dinari.com/). The full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Dinari MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40dinari%2Fapi-sdk-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBkaW5hcmkvYXBpLXNkay1tY3AiXSwiZW52Ijp7IkRJTkFSSV9BUElfS0VZX0lEIjoiTXkgQVBJIEtleSBJRCIsIkRJTkFSSV9BUElfU0VDUkVUX0tFWSI6Ik15IEFQSSBTZWNyZXQgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40dinari%2Fapi-sdk-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40dinari%2Fapi-sdk-mcp%22%5D%2C%22env%22%3A%7B%22DINARI_API_KEY_ID%22%3A%22My%20API%20Key%20ID%22%2C%22DINARI_API_SECRET_KEY%22%3A%22My%20API%20Secret%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install @dinari/api-sdk\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n  environment: 'sandbox', // defaults to 'production'\n});\n\nconst stocks = await client.v2.marketData.stocks.list();\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  apiKeyID: process.env['DINARI_API_KEY_ID'], // This is the default and can be omitted\n  apiSecretKey: process.env['DINARI_API_SECRET_KEY'], // This is the default and can be omitted\n  environment: 'sandbox', // defaults to 'production'\n});\n\nconst stocks: Dinari.V2.MarketData.StockListResponse = await client.v2.marketData.stocks.list();\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n## File uploads\n\nRequest parameters that correspond to file uploads can be passed in many different forms:\n- `File` (or an object with the same structure)\n- a `fetch` `Response` (or an object with the same structure)\n- an `fs.ReadStream`\n- the return value of our `toFile` helper\n\n```ts\nimport fs from 'fs';\nimport Dinari, { toFile } from '@dinari/api-sdk';\n\nconst client = new Dinari();\n\n// If you have access to Node `fs` we recommend using `fs.createReadStream()`:\nawait client.v2.entities.kyc.document.upload('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  document_type: 'GOVERNMENT_ID',\n  file: fs.createReadStream('/path/to/file'),\n});\n\n// Or if you have the web `File` API you can pass a `File` instance:\nawait client.v2.entities.kyc.document.upload('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  document_type: 'GOVERNMENT_ID',\n  file: new File(['my bytes'], 'file'),\n});\n\n// You can also pass a `fetch` `Response`:\nawait client.v2.entities.kyc.document.upload('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  document_type: 'GOVERNMENT_ID',\n  file: await fetch('https://somesite/file'),\n});\n\n// Finally, if none of the above are convenient, you can use our `toFile` helper:\nawait client.v2.entities.kyc.document.upload('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  document_type: 'GOVERNMENT_ID',\n  file: await toFile(Buffer.from('my bytes'), 'file'),\n});\nawait client.v2.entities.kyc.document.upload('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  document_type: 'GOVERNMENT_ID',\n  file: await toFile(new Uint8Array([0, 1, 2]), 'file'),\n});\n```\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst stocks = await client.v2.marketData.stocks.list().catch(async (err) => {\n  if (err instanceof Dinari.APIError) {\n    console.log(err.status); // 400\n    console.log(err.name); // BadRequestError\n    console.log(err.headers); // {server: 'nginx', ...}\n  } else {\n    throw err;\n  }\n});\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new Dinari({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.v2.marketData.stocks.list({\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new Dinari({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.v2.marketData.stocks.list({\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new Dinari();\n\nconst response = await client.v2.marketData.stocks.list().asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: stocks, response: raw } = await client.v2.marketData.stocks.list().withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(stocks);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `DINARI_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport Dinari from '@dinari/api-sdk';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new Dinari({\n  logger: logger.child({ name: 'Dinari' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.v2.marketData.stocks.list({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport Dinari from '@dinari/api-sdk';\nimport fetch from 'my-fetch';\n\nconst client = new Dinari({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport Dinari from '@dinari/api-sdk';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new Dinari({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport Dinari from '@dinari/api-sdk';\n\nconst client = new Dinari({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport Dinari from 'npm:@dinari/api-sdk';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new Dinari({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/dinaricrypto/dinari-api-sdk-typescript/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
  {
    language: 'java',
    content:
      '# Dinari Java API Library\n\n<!-- x-release-please-start-version -->\n[![Maven Central](https://img.shields.io/maven-central/v/com.dinari.api/dinari-java)](https://central.sonatype.com/artifact/com.dinari.api/dinari-java/0.0.1)\n[![javadoc](https://javadoc.io/badge2/com.dinari.api/dinari-java/0.0.1/javadoc.svg)](https://javadoc.io/doc/com.dinari.api/dinari-java/0.0.1)\n<!-- x-release-please-end -->\n\nThe Dinari Java SDK provides convenient access to the [Dinari REST API](https://docs.dinari.com/)   from applications written in Java.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Dinari MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40dinari%2Fapi-sdk-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBkaW5hcmkvYXBpLXNkay1tY3AiXSwiZW52Ijp7IkRJTkFSSV9BUElfS0VZX0lEIjoiTXkgQVBJIEtleSBJRCIsIkRJTkFSSV9BUElfU0VDUkVUX0tFWSI6Ik15IEFQSSBTZWNyZXQgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40dinari%2Fapi-sdk-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40dinari%2Fapi-sdk-mcp%22%5D%2C%22env%22%3A%7B%22DINARI_API_KEY_ID%22%3A%22My%20API%20Key%20ID%22%2C%22DINARI_API_SECRET_KEY%22%3A%22My%20API%20Secret%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n<!-- x-release-please-start-version -->\n\nThe REST API documentation can be found on [docs.dinari.com](https://docs.dinari.com/). Javadocs are available on [javadoc.io](https://javadoc.io/doc/com.dinari.api/dinari-java/0.0.1).\n\n<!-- x-release-please-end -->\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n### Gradle\n\n~~~kotlin\nimplementation("com.dinari.api:dinari-java:0.0.1")\n~~~\n\n### Maven\n\n~~~xml\n<dependency>\n  <groupId>com.dinari.api</groupId>\n  <artifactId>dinari-java</artifactId>\n  <version>0.0.1</version>\n</dependency>\n~~~\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Java 8 or later.\n\n## Usage\n\n```java\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.marketdata.stocks.StockListParams;\nimport com.dinari.api.models.v2.marketdata.stocks.StockListResponse;\n\n// Configures using the `dinari.apiKeyId`, `dinari.apiSecretKey` and `dinari.baseUrl` system properties\n// Or configures using the `DINARI_API_KEY_ID`, `DINARI_API_SECRET_KEY` and `DINARI_BASE_URL` environment variables\nDinariClient client = DinariOkHttpClient.fromEnv();\n\nList<StockListResponse> stocks = client.v2().marketData().stocks().list();\n```\n\n## Client configuration\n\nConfigure the client using system properties or environment variables:\n\n```java\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\n\n// Configures using the `dinari.apiKeyId`, `dinari.apiSecretKey` and `dinari.baseUrl` system properties\n// Or configures using the `DINARI_API_KEY_ID`, `DINARI_API_SECRET_KEY` and `DINARI_BASE_URL` environment variables\nDinariClient client = DinariOkHttpClient.fromEnv();\n```\n\nOr manually:\n\n```java\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\n\nDinariClient client = DinariOkHttpClient.builder()\n    .apiKeyId("My API Key ID")\n    .apiSecretKey("My API Secret Key")\n    .build();\n```\n\nOr using a combination of the two approaches:\n\n```java\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\n\nDinariClient client = DinariOkHttpClient.builder()\n    // Configures using the `dinari.apiKeyId`, `dinari.apiSecretKey` and `dinari.baseUrl` system properties\n    // Or configures using the `DINARI_API_KEY_ID`, `DINARI_API_SECRET_KEY` and `DINARI_BASE_URL` environment variables\n    .fromEnv()\n    .apiKeyId("My API Key ID")\n    .build();\n```\n\nSee this table for the available options:\n\n| Setter         | System property       | Environment variable    | Required | Default value                             |\n| -------------- | --------------------- | ----------------------- | -------- | ----------------------------------------- |\n| `apiKeyId`     | `dinari.apiKeyId`     | `DINARI_API_KEY_ID`     | true     | -                                         |\n| `apiSecretKey` | `dinari.apiSecretKey` | `DINARI_API_SECRET_KEY` | true     | -                                         |\n| `baseUrl`      | `dinari.baseUrl`      | `DINARI_BASE_URL`       | true     | `"https://api-enterprise.sbt.dinari.com"` |\n\nSystem properties take precedence over environment variables.\n\n> [!TIP]\n> Don\'t create more than one client in the same application. Each client has a connection pool and\n> thread pools, which are more efficient to share between requests.\n\n### Modifying configuration\n\nTo temporarily use a modified client configuration, while reusing the same connection and thread       pools, call `withOptions()` on any client or service:\n\n```java\nimport com.dinari.api.client.DinariClient;\n\nDinariClient clientWithOptions = client.withOptions(optionsBuilder -> {\n    optionsBuilder.baseUrl("https://example.com");\n    optionsBuilder.maxRetries(42);\n});\n```\n\nThe `withOptions()` method does not affect the original client or service.\n\n## Requests and responses\n\nTo send a request to the Dinari API, build an instance of some `Params` class and pass it to the     corresponding client method. When the response is received, it will be deserialized into an instance of     a Java class.\n\nFor example, `client.v2().marketData().stocks().list(...)` should be called with an instance of `StockListParams`, and it     will return an instance of `List<StockListResponse>`.\n\n## Immutability\n\nEach class in the SDK has an associated   [builder](https://blogs.oracle.com/javamagazine/post/exploring-joshua-blochs-builder-design-pattern-in-java)   or factory method for constructing it.\n\nEach class is [immutable](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html)   once constructed. If the class has an associated builder, then it has a `toBuilder()` method, which can   be used to convert it back to a builder for making a modified copy.\n\nBecause each class is immutable, builder modification will _never_ affect already built class instances.\n\n## Asynchronous execution\n\nThe default client is synchronous. To switch to asynchronous execution, call the `async()` method:\n\n```java\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport com.dinari.api.models.v2.marketdata.stocks.StockListParams;\nimport com.dinari.api.models.v2.marketdata.stocks.StockListResponse;\nimport java.util.concurrent.CompletableFuture;\n\n// Configures using the `dinari.apiKeyId`, `dinari.apiSecretKey` and `dinari.baseUrl` system properties\n// Or configures using the `DINARI_API_KEY_ID`, `DINARI_API_SECRET_KEY` and `DINARI_BASE_URL` environment variables\nDinariClient client = DinariOkHttpClient.fromEnv();\n\nCompletableFuture<List<StockListResponse>> stocks = client.async().v2().marketData().stocks().list();\n```\n\nOr create an asynchronous client from the beginning:\n\n```java\nimport com.dinari.api.client.DinariClientAsync;\nimport com.dinari.api.client.okhttp.DinariOkHttpClientAsync;\nimport com.dinari.api.models.v2.marketdata.stocks.StockListParams;\nimport com.dinari.api.models.v2.marketdata.stocks.StockListResponse;\nimport java.util.concurrent.CompletableFuture;\n\n// Configures using the `dinari.apiKeyId`, `dinari.apiSecretKey` and `dinari.baseUrl` system properties\n// Or configures using the `DINARI_API_KEY_ID`, `DINARI_API_SECRET_KEY` and `DINARI_BASE_URL` environment variables\nDinariClientAsync client = DinariOkHttpClientAsync.fromEnv();\n\nCompletableFuture<List<StockListResponse>> stocks = client.v2().marketData().stocks().list();\n```\n\nThe asynchronous client supports the same options as the synchronous one, except most methods return `CompletableFuture`s.\n\n\n\n## File uploads\n\nThe SDK defines methods that accept files.\n\nTo upload a file, pass a [`Path`](https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html):\n\n```java\nimport com.dinari.api.models.v2.entities.kyc.document.DocumentUploadParams;\nimport com.dinari.api.models.v2.entities.kyc.document.KycDocument;\nimport com.dinari.api.models.v2.entities.kyc.document.KycDocumentType;\nimport java.nio.file.Paths;\n\nDocumentUploadParams params = DocumentUploadParams.builder()\n    .entityId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n    .kycId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n    .documentType(KycDocumentType.GOVERNMENT_ID)\n    .file(Paths.get("/path/to/file"))\n    .build();\nKycDocument kycDocument = client.v2().entities().kyc().document().upload(params);\n```\n\nOr an arbitrary [`InputStream`](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html):\n\n```java\nimport com.dinari.api.models.v2.entities.kyc.document.DocumentUploadParams;\nimport com.dinari.api.models.v2.entities.kyc.document.KycDocument;\nimport com.dinari.api.models.v2.entities.kyc.document.KycDocumentType;\nimport java.net.URL;\n\nDocumentUploadParams params = DocumentUploadParams.builder()\n    .entityId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n    .kycId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n    .documentType(KycDocumentType.GOVERNMENT_ID)\n    .file(new URL("https://example.com//path/to/file").openStream())\n    .build();\nKycDocument kycDocument = client.v2().entities().kyc().document().upload(params);\n```\n\nOr a `byte[]` array:\n\n```java\nimport com.dinari.api.models.v2.entities.kyc.document.DocumentUploadParams;\nimport com.dinari.api.models.v2.entities.kyc.document.KycDocument;\nimport com.dinari.api.models.v2.entities.kyc.document.KycDocumentType;\n\nDocumentUploadParams params = DocumentUploadParams.builder()\n    .entityId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n    .kycId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n    .documentType(KycDocumentType.GOVERNMENT_ID)\n    .file("content".getBytes())\n    .build();\nKycDocument kycDocument = client.v2().entities().kyc().document().upload(params);\n```\n\nNote that when passing a non-`Path` its filename is unknown so it will not be included in the request.     To manually set a filename, pass a [`MultipartField`](dinari-java-core/src/main/kotlin/com/dinari/api/core/Values.kt):\n\n```java\nimport com.dinari.api.core.MultipartField;\nimport com.dinari.api.models.v2.entities.kyc.document.DocumentUploadParams;\nimport com.dinari.api.models.v2.entities.kyc.document.KycDocument;\nimport com.dinari.api.models.v2.entities.kyc.document.KycDocumentType;\nimport java.io.InputStream;\nimport java.net.URL;\n\nDocumentUploadParams params = DocumentUploadParams.builder()\n    .entityId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n    .kycId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n    .documentType(KycDocumentType.GOVERNMENT_ID)\n    .file(MultipartField.<InputStream>builder()\n        .value(new URL("https://example.com//path/to/file").openStream())\n        .filename("/path/to/file")\n        .build())\n    .build();\nKycDocument kycDocument = client.v2().entities().kyc().document().upload(params);\n```\n\n\n\n## Raw responses\n\nThe SDK defines methods that deserialize responses into instances of Java classes.       However, these methods don\'t provide access to the response headers, status code, or the raw response       body.\n\nTo access this data, prefix any HTTP method call on a client or service with `withRawResponse()`:\n\n```java\nimport com.dinari.api.core.http.Headers;\nimport com.dinari.api.core.http.HttpResponseFor;\nimport com.dinari.api.models.v2.marketdata.stocks.StockListParams;\nimport com.dinari.api.models.v2.marketdata.stocks.StockListResponse;\n\nHttpResponseFor<List<StockListResponse>> stocks = client.v2().marketData().stocks().withRawResponse().list();\n\nint statusCode = stocks.statusCode();\nHeaders headers = stocks.headers();\n```\n\nYou can still deserialize the response into an instance of a Java class if needed:\n\n```java\nimport com.dinari.api.models.v2.marketdata.stocks.StockListResponse;\n\nList<StockListResponse> parsedStocks = stocks.parse();\n```\n\n## Error handling\n\nThe SDK throws custom unchecked exception types:\n\n- [`DinariServiceException`](dinari-java-core/src/main/kotlin/com/dinari/api/errors/DinariServiceException.kt): Base class for HTTP errors. See this table for which exception       subclass is thrown for each HTTP status code:\n\n  | Status | Exception                                          |\n  | ------ | -------------------------------------------------- |\n  | 400    | [`BadRequestException`](dinari-java-core/src/main/kotlin/com/dinari/api/errors/BadRequestException.kt)           |\n  | 401    | [`UnauthorizedException`](dinari-java-core/src/main/kotlin/com/dinari/api/errors/UnauthorizedException.kt)         |\n  | 403    | [`PermissionDeniedException`](dinari-java-core/src/main/kotlin/com/dinari/api/errors/PermissionDeniedException.kt)     |\n  | 404    | [`NotFoundException`](dinari-java-core/src/main/kotlin/com/dinari/api/errors/NotFoundException.kt)             |\n  | 422    | [`UnprocessableEntityException`](dinari-java-core/src/main/kotlin/com/dinari/api/errors/UnprocessableEntityException.kt)  |\n  | 429    | [`RateLimitException`](dinari-java-core/src/main/kotlin/com/dinari/api/errors/RateLimitException.kt)            |\n  | 5xx    | [`InternalServerException`](dinari-java-core/src/main/kotlin/com/dinari/api/errors/InternalServerException.kt)       |\n  | others | [`UnexpectedStatusCodeException`](dinari-java-core/src/main/kotlin/com/dinari/api/errors/UnexpectedStatusCodeException.kt) |\n\n- [`DinariIoException`](dinari-java-core/src/main/kotlin/com/dinari/api/errors/DinariIoException.kt): I/O networking errors.\n\n- [`DinariRetryableException`](dinari-java-core/src/main/kotlin/com/dinari/api/errors/DinariRetryableException.kt): Generic error indicating a failure that could be retried by the client.\n\n- [`DinariInvalidDataException`](dinari-java-core/src/main/kotlin/com/dinari/api/errors/DinariInvalidDataException.kt): Failure to interpret successfully parsed data. For example,       when accessing a property that\'s supposed to be required, but the API unexpectedly omitted it from the       response.\n\n- [`DinariException`](dinari-java-core/src/main/kotlin/com/dinari/api/errors/DinariException.kt): Base class for all exceptions. Most errors will result in one of the       previously mentioned ones, but completely generic errors may be thrown using the base class.\n\n\n\n## Logging\n\nThe SDK uses the standard   [OkHttp logging interceptor](https://github.com/square/okhttp/tree/master/okhttp-logging-interceptor).\n\nEnable logging by setting the `DINARI_LOG` environment variable to   `info`:\n\n```sh\nexport DINARI_LOG=info\n```\n\nOr to `debug` for more verbose logging:\n\n```sh\nexport DINARI_LOG=debug\n```\n\n## ProGuard and R8\n\nAlthough the SDK uses reflection, it is still usable with     [ProGuard](https://github.com/Guardsquare/proguard) and     [R8](https://developer.android.com/topic/performance/app-optimization/enable-app-optimization) because     `dinari-java-core` is published with a     [configuration file](dinari-java-core/src/main/resources/META-INF/proguard/dinari-java-core.pro) containing     [keep rules](https://www.guardsquare.com/manual/configuration/usage).\n\nProGuard and R8 should automatically detect and use the published rules, but you can also manually copy     the keep rules if necessary.\n\n\n\n\n\n## Jackson\n\nThe SDK depends on [Jackson](https://github.com/FasterXML/jackson) for JSON     serialization/deserialization. It is compatible with version 2.13.4 or higher,     but depends on version 2.18.2 by default.\n\nThe SDK throws an exception if it detects an incompatible Jackson version at runtime (e.g. if the     default version was overridden in your Maven or Gradle config).\n\nIf the SDK threw an exception, but you\'re _certain_ the version is compatible, then disable the version     check using the `checkJacksonVersionCompatibility` on [`DinariOkHttpClient`](dinari-java-client-okhttp/src/main/kotlin/com/dinari/api/client/okhttp/DinariOkHttpClient.kt) or     [`DinariOkHttpClientAsync`](dinari-java-client-okhttp/src/main/kotlin/com/dinari/api/client/okhttp/DinariOkHttpClientAsync.kt).\n\n> [!CAUTION]\n> We make no guarantee that the SDK works correctly when the Jackson version check is disabled.\n\nAlso note that there are bugs in older Jackson versions that can affect the SDK. We don\'t work around all     Jackson bugs ([example](https://github.com/FasterXML/jackson-databind/issues/3240)) and expect users to     upgrade Jackson for those instead.\n\n## Network options\n\n### Retries\n\nThe SDK automatically retries 2 times by default, with a short exponential backoff between requests.\n\nOnly the following error types are retried:\n- Connection errors (for example, due to a network connectivity problem)\n- 408 Request Timeout\n- 409 Conflict\n- 429 Rate Limit\n- 5xx Internal\n\nThe API may also explicitly instruct the SDK to retry or not retry a request.\n\nTo set a custom number of retries, configure the client using the `maxRetries` method:\n\n```java\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\n\nDinariClient client = DinariOkHttpClient.builder()\n    .fromEnv()\n    .maxRetries(4)\n    .build();\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default.\n\nTo set a custom timeout, configure the method call using the `timeout` method:\n\n```java\nimport com.dinari.api.models.v2.marketdata.stocks.StockListResponse;\n\nList<StockListResponse> stocks = client.v2().marketData().stocks().list(RequestOptions.builder().timeout(Duration.ofSeconds(30)).build());\n```\n\nOr configure the default for all method calls at the client level:\n\n```java\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport java.time.Duration;\n\nDinariClient client = DinariOkHttpClient.builder()\n    .fromEnv()\n    .timeout(Duration.ofSeconds(30))\n    .build();\n```\n\n### Proxies\n\nTo route requests through a proxy, configure the client using the `proxy` method:\n\n```java\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport java.net.InetSocketAddress;\nimport java.net.Proxy;\n\nDinariClient client = DinariOkHttpClient.builder()\n    .fromEnv()\n    .proxy(new Proxy(\n      Proxy.Type.HTTP, new InetSocketAddress(\n        "https://example.com", 8080\n      )\n    ))\n    .build();\n```\n\n### Connection pooling\n\nTo customize the underlying OkHttp connection pool, configure the client using the   `maxIdleConnections` and `keepAliveDuration` methods:\n\n```java\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\nimport java.time.Duration;\n\nDinariClient client = DinariOkHttpClient.builder()\n    .fromEnv()\n    // If `maxIdleConnections` is set, then `keepAliveDuration` must be set, and vice versa.\n    .maxIdleConnections(10)\n    .keepAliveDuration(Duration.ofMinutes(2))\n    .build();\n```\n\nIf both options are unset, OkHttp\'s default connection pool settings are used.\n\n### HTTPS\n\n> [!NOTE]\n> Most applications should not call these methods, and instead use the system defaults. The defaults include\n> special optimizations that can be lost if the implementations are modified.\n\nTo configure how HTTPS connections are secured, configure the client using the `sslSocketFactory`,   `trustManager`, and `hostnameVerifier` methods:\n\n```java\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\n\nDinariClient client = DinariOkHttpClient.builder()\n    .fromEnv()\n    // If `sslSocketFactory` is set, then `trustManager` must be set, and vice versa.\n    .sslSocketFactory(yourSSLSocketFactory)\n    .trustManager(yourTrustManager)\n    .hostnameVerifier(yourHostnameVerifier)\n    .build();\n```\n\n### Environments\n\nThe SDK sends requests to the production by default. To send requests to a different     environment, configure the client like so:\n\n```java\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\n\nDinariClient client = DinariOkHttpClient.builder()\n    .fromEnv()\n    .sandbox()\n    .build();\n```\n\n### Custom HTTP client\n\nThe SDK consists of three artifacts:\n- `dinari-java-core`\n  - Contains core SDK logic\n  - Does not depend on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`DinariClient`](dinari-java-core/src/main/kotlin/com/dinari/api/client/DinariClient.kt), [`DinariClientAsync`](dinari-java-core/src/main/kotlin/com/dinari/api/client/DinariClientAsync.kt),             [`DinariClientImpl`](dinari-java-core/src/main/kotlin/com/dinari/api/client/DinariClientImpl.kt), and [`DinariClientAsyncImpl`](dinari-java-core/src/main/kotlin/com/dinari/api/client/DinariClientAsyncImpl.kt), all of which can             work with any HTTP client\n- `dinari-java-client-okhttp`\n  - Depends on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`DinariOkHttpClient`](dinari-java-client-okhttp/src/main/kotlin/com/dinari/api/client/okhttp/DinariOkHttpClient.kt) and [`DinariOkHttpClientAsync`](dinari-java-client-okhttp/src/main/kotlin/com/dinari/api/client/okhttp/DinariOkHttpClientAsync.kt), which             provide a way to construct [`DinariClientImpl`](dinari-java-core/src/main/kotlin/com/dinari/api/client/DinariClientImpl.kt) and             [`DinariClientAsyncImpl`](dinari-java-core/src/main/kotlin/com/dinari/api/client/DinariClientAsyncImpl.kt), respectively, using OkHttp\n- `dinari-java`\n  - Depends on and exposes the APIs of both `dinari-java-core` and `dinari-java-client-okhttp`\n  - Does not have its own logic\n\nThis structure allows replacing the SDK\'s default HTTP client without pulling in unnecessary dependencies.\n\n#### Customized [`OkHttpClient`](https://square.github.io/okhttp/3.x/okhttp/okhttp3/OkHttpClient.html)\n\n> [!TIP]\n> Try the available [network options](#network-options) before replacing the default client.\n\nTo use a customized `OkHttpClient`:\n\n1. Replace your [`dinari-java` dependency](#installation) with `dinari-java-core`\n2. Copy `dinari-java-client-okhttp`\'s [`OkHttpClient`](dinari-java-client-okhttp/src/main/kotlin/com/dinari/api/client/okhttp/OkHttpClient.kt) class into your code and        customize it\n3. Construct [`DinariClientImpl`](dinari-java-core/src/main/kotlin/com/dinari/api/client/DinariClientImpl.kt) or [`DinariClientAsyncImpl`](dinari-java-core/src/main/kotlin/com/dinari/api/client/DinariClientAsyncImpl.kt), similarly to        [`DinariOkHttpClient`](dinari-java-client-okhttp/src/main/kotlin/com/dinari/api/client/okhttp/DinariOkHttpClient.kt) or [`DinariOkHttpClientAsync`](dinari-java-client-okhttp/src/main/kotlin/com/dinari/api/client/okhttp/DinariOkHttpClientAsync.kt), using your        customized client\n\n### Completely custom HTTP client\n\nTo use a completely custom HTTP client:\n\n1. Replace your [`dinari-java` dependency](#installation) with `dinari-java-core`\n2. Write a class that implements the [`HttpClient`](dinari-java-core/src/main/kotlin/com/dinari/api/core/http/HttpClient.kt) interface\n3. Construct [`DinariClientImpl`](dinari-java-core/src/main/kotlin/com/dinari/api/client/DinariClientImpl.kt) or [`DinariClientAsyncImpl`](dinari-java-core/src/main/kotlin/com/dinari/api/client/DinariClientAsyncImpl.kt), similarly to        [`DinariOkHttpClient`](dinari-java-client-okhttp/src/main/kotlin/com/dinari/api/client/okhttp/DinariOkHttpClient.kt) or [`DinariOkHttpClientAsync`](dinari-java-client-okhttp/src/main/kotlin/com/dinari/api/client/okhttp/DinariOkHttpClientAsync.kt), using your new        client class\n\n## Undocumented API functionality\n\nThe SDK is typed for convenient usage of the documented API. However, it also supports working with undocumented or not yet supported parts of the API.\n\n### Parameters\n\nTo set undocumented parameters, call the `putAdditionalHeader`, `putAdditionalQueryParam`, or       `putAdditionalBodyProperty` methods on any `Params` class:\n\n```java\nimport com.dinari.api.core.JsonValue;\nimport com.dinari.api.models.v2.marketdata.stocks.StockListParams;\n\nStockListParams params = StockListParams.builder()\n    .putAdditionalHeader("Secret-Header", "42")\n    .putAdditionalQueryParam("secret_query_param", "42")\n    .putAdditionalBodyProperty("secretProperty", JsonValue.from("42"))\n    .build();\n```\n\nThese can be accessed on the built object later using the `_additionalHeaders()`,       `_additionalQueryParams()`, and `_additionalBodyProperties()` methods.\n\nTo set a documented parameter or property to an undocumented or not yet supported _value_, pass a       [`JsonValue`](dinari-java-core/src/main/kotlin/com/dinari/api/core/Values.kt) object to its setter:\n\n```java\nimport com.dinari.api.models.v2.marketdata.stocks.StockListParams;\n\nStockListParams params = StockListParams.builder().build();\n```\n\nThe most straightforward way to create a [`JsonValue`](dinari-java-core/src/main/kotlin/com/dinari/api/core/Values.kt) is using its       `from(...)` method:\n\n```java\nimport com.dinari.api.core.JsonValue;\nimport java.util.List;\nimport java.util.Map;\n\n// Create primitive JSON values\nJsonValue nullValue = JsonValue.from(null);\nJsonValue booleanValue = JsonValue.from(true);\nJsonValue numberValue = JsonValue.from(42);\nJsonValue stringValue = JsonValue.from("Hello World!");\n\n// Create a JSON array value equivalent to `["Hello", "World"]`\nJsonValue arrayValue = JsonValue.from(List.of(\n  "Hello", "World"\n));\n\n// Create a JSON object value equivalent to `{ "a": 1, "b": 2 }`\nJsonValue objectValue = JsonValue.from(Map.of(\n  "a", 1,\n  "b", 2\n));\n\n// Create an arbitrarily nested JSON equivalent to:\n// {\n//   "a": [1, 2],\n//   "b": [3, 4]\n// }\nJsonValue complexValue = JsonValue.from(Map.of(\n  "a", List.of(\n    1, 2\n  ),\n  "b", List.of(\n    3, 4\n  )\n));\n```\n\nNormally a `Builder` class\'s `build` method will throw         [`IllegalStateException`](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html)         if any required parameter or property is unset.\n\nTo forcibly omit a required parameter or property, pass [`JsonMissing`](dinari-java-core/src/main/kotlin/com/dinari/api/core/Values.kt):\n\n```java\nimport com.dinari.api.core.JsonMissing;\nimport com.dinari.api.models.v2.marketdata.stocks.StockListParams;\nimport com.dinari.api.models.v2.marketdata.stocks.StockRetrieveCurrentPriceParams;\n\nStockListParams params = StockRetrieveCurrentPriceParams.builder()\n    .stockId(JsonMissing.of())\n    .build();\n```\n\n### Response properties\n\nTo access undocumented response properties, call the `_additionalProperties()` method:\n\n```java\nimport com.dinari.api.core.JsonValue;\nimport java.util.Map;\n\nMap<String, JsonValue> additionalProperties = client.v2().marketData().retrieveMarketHours(params)._additionalProperties();\nJsonValue secretPropertyValue = additionalProperties.get("secretProperty");\n\nString result = secretPropertyValue.accept(new JsonValue.Visitor<>() {\n    @Override\n    public String visitNull() {\n        return "It\'s null!";\n    }\n\n    @Override\n    public String visitBoolean(boolean value) {\n        return "It\'s a boolean!";\n    }\n\n    @Override\n    public String visitNumber(Number value) {\n        return "It\'s a number!";\n    }\n\n    // Other methods include `visitMissing`, `visitString`, `visitArray`, and `visitObject`\n    // The default implementation of each unimplemented method delegates to `visitDefault`, which throws by default, but can also be overridden\n});\n```\n\nTo access a property\'s raw JSON value, which may be undocumented, call its `_` prefixed method:\n\n```java\nimport com.dinari.api.core.JsonField;\nimport java.util.Optional;\n\nJsonField<Object> field = client.v2().marketData().retrieveMarketHours(params)._field();\n\nif (field.isMissing()) {\n  // The property is absent from the JSON response\n} else if (field.isNull()) {\n  // The property was set to literal null\n} else {\n  // Check if value was provided as a string\n  // Other methods include `asNumber()`, `asBoolean()`, etc.\n  Optional<String> jsonString = field.asString();\n\n  // Try to deserialize into a custom type\n  MyClass myObject = field.asUnknown().orElseThrow().convert(MyClass.class);\n}\n```\n\n### Response validation\n\nIn rare cases, the API may return a response that doesn\'t match the expected type. For example, the SDK     may expect a property to contain a `String`, but the API could return something else.\n\nBy default, the SDK will not throw an exception in this case. It will throw     [`DinariInvalidDataException`](dinari-java-core/src/main/kotlin/com/dinari/api/errors/DinariInvalidDataException.kt) only if you directly access the property.\n\nIf you would prefer to check that the response is completely well-typed upfront, then either call     `validate()`:\n\n```java\nimport com.dinari.api.models.v2.marketdata.MarketDataRetrieveMarketHoursResponse;\n\nMarketDataRetrieveMarketHoursResponse response = client.v2().marketData().retrieveMarketHours(params).validate();\n```\n\nOr configure the method call to validate the response using the `responseValidation` method:\n\n```java\nimport com.dinari.api.models.v2.marketdata.stocks.StockListResponse;\n\nList<StockListResponse> stocks = client.v2().marketData().stocks().list(RequestOptions.builder().responseValidation(true).build());\n```\n\nOr configure the default for all method calls at the client level:\n\n```java\nimport com.dinari.api.client.DinariClient;\nimport com.dinari.api.client.okhttp.DinariOkHttpClient;\n\nDinariClient client = DinariOkHttpClient.builder()\n    .fromEnv()\n    .responseValidation(true)\n    .build();\n```\n\n## FAQ\n\n### Why don\'t you use plain `enum` classes?\n\nJava `enum` classes are not trivially   [forwards compatible](https://www.stainless.com/blog/making-java-enums-forwards-compatible). Using them in   the SDK could cause runtime exceptions if the API is updated to respond with a new enum value.\n\n### Why do you represent fields using `JsonField<T>` instead of just plain `T`?\n\nUsing `JsonField<T>` enables a few features:\n\n- Allowing usage of [undocumented API functionality](#undocumented-api-functionality)\n- Lazily [validating the API response against the expected shape](#response-validation)\n- Representing absent vs explicitly null values\n\n### Why don\'t you use [`data` classes](https://kotlinlang.org/docs/data-classes.html)?\n\nIt is not [backwards compatible to add new fields to a data class](https://kotlinlang.org/docs/api-guidelines-backward-compatibility.html#avoid-using-data-classes-in-your-api)   and we don\'t want to introduce a breaking change every time we add a field to a class.\n\n### Why don\'t you use checked exceptions?\n\nChecked exceptions are widely considered a mistake in the Java programming language. In fact, they were   omitted from Kotlin for this reason.\n\nChecked exceptions:\n\n- Are verbose to handle\n- Encourage error handling at the wrong level of abstraction, where nothing can be done about the error\n- Are tedious to propagate due to the [function coloring problem](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function)\n- Don\'t play well with lambdas (also due to the function coloring problem)\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/dinaricrypto/dinari-api-sdk-java/issues) with questions, bugs, or suggestions.\n',
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
