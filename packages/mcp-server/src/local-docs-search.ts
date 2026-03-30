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
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [];

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
