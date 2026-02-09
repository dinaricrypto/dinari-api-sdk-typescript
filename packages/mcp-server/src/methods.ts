import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.v2.listOrders',
    fullyQualifiedName: 'v2.listOrders',
    httpMethod: 'get',
    httpPath: '/api/v2/orders/',
  },
  {
    clientCallName: 'client.v2.marketData.retrieveMarketHours',
    fullyQualifiedName: 'v2.marketData.retrieveMarketHours',
    httpMethod: 'get',
    httpPath: '/api/v2/market_data/market_hours/',
  },
  {
    clientCallName: 'client.v2.marketData.stocks.list',
    fullyQualifiedName: 'v2.marketData.stocks.list',
    httpMethod: 'get',
    httpPath: '/api/v2/market_data/stocks/',
  },
  {
    clientCallName: 'client.v2.marketData.stocks.retrieveCurrentPrice',
    fullyQualifiedName: 'v2.marketData.stocks.retrieveCurrentPrice',
    httpMethod: 'get',
    httpPath: '/api/v2/market_data/stocks/{stock_id}/current_price',
  },
  {
    clientCallName: 'client.v2.marketData.stocks.retrieveCurrentQuote',
    fullyQualifiedName: 'v2.marketData.stocks.retrieveCurrentQuote',
    httpMethod: 'get',
    httpPath: '/api/v2/market_data/stocks/{stock_id}/current_quote',
  },
  {
    clientCallName: 'client.v2.marketData.stocks.retrieveDividends',
    fullyQualifiedName: 'v2.marketData.stocks.retrieveDividends',
    httpMethod: 'get',
    httpPath: '/api/v2/market_data/stocks/{stock_id}/dividends',
  },
  {
    clientCallName: 'client.v2.marketData.stocks.retrieveHistoricalPrices',
    fullyQualifiedName: 'v2.marketData.stocks.retrieveHistoricalPrices',
    httpMethod: 'get',
    httpPath: '/api/v2/market_data/stocks/{stock_id}/historical_prices/',
  },
  {
    clientCallName: 'client.v2.marketData.stocks.retrieveNews',
    fullyQualifiedName: 'v2.marketData.stocks.retrieveNews',
    httpMethod: 'get',
    httpPath: '/api/v2/market_data/stocks/{stock_id}/news',
  },
  {
    clientCallName: 'client.v2.marketData.stocks.splits.list',
    fullyQualifiedName: 'v2.marketData.stocks.splits.list',
    httpMethod: 'get',
    httpPath: '/api/v2/market_data/stocks/splits',
  },
  {
    clientCallName: 'client.v2.marketData.stocks.splits.listForStock',
    fullyQualifiedName: 'v2.marketData.stocks.splits.listForStock',
    httpMethod: 'get',
    httpPath: '/api/v2/market_data/stocks/{stock_id}/splits',
  },
  {
    clientCallName: 'client.v2.entities.create',
    fullyQualifiedName: 'v2.entities.create',
    httpMethod: 'post',
    httpPath: '/api/v2/entities/',
  },
  {
    clientCallName: 'client.v2.entities.update',
    fullyQualifiedName: 'v2.entities.update',
    httpMethod: 'patch',
    httpPath: '/api/v2/entities/{entity_id}',
  },
  {
    clientCallName: 'client.v2.entities.list',
    fullyQualifiedName: 'v2.entities.list',
    httpMethod: 'get',
    httpPath: '/api/v2/entities/',
  },
  {
    clientCallName: 'client.v2.entities.retrieveByID',
    fullyQualifiedName: 'v2.entities.retrieveByID',
    httpMethod: 'get',
    httpPath: '/api/v2/entities/{entity_id}',
  },
  {
    clientCallName: 'client.v2.entities.retrieveCurrent',
    fullyQualifiedName: 'v2.entities.retrieveCurrent',
    httpMethod: 'get',
    httpPath: '/api/v2/entities/me',
  },
  {
    clientCallName: 'client.v2.entities.accounts.create',
    fullyQualifiedName: 'v2.entities.accounts.create',
    httpMethod: 'post',
    httpPath: '/api/v2/entities/{entity_id}/accounts',
  },
  {
    clientCallName: 'client.v2.entities.accounts.list',
    fullyQualifiedName: 'v2.entities.accounts.list',
    httpMethod: 'get',
    httpPath: '/api/v2/entities/{entity_id}/accounts',
  },
  {
    clientCallName: 'client.v2.entities.kyc.retrieve',
    fullyQualifiedName: 'v2.entities.kyc.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v2/entities/{entity_id}/kyc',
  },
  {
    clientCallName: 'client.v2.entities.kyc.createManagedCheck',
    fullyQualifiedName: 'v2.entities.kyc.createManagedCheck',
    httpMethod: 'post',
    httpPath: '/api/v2/entities/{entity_id}/kyc/url',
  },
  {
    clientCallName: 'client.v2.entities.kyc.submit',
    fullyQualifiedName: 'v2.entities.kyc.submit',
    httpMethod: 'post',
    httpPath: '/api/v2/entities/{entity_id}/kyc',
  },
  {
    clientCallName: 'client.v2.entities.kyc.document.retrieve',
    fullyQualifiedName: 'v2.entities.kyc.document.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v2/entities/{entity_id}/kyc/{kyc_id}/document',
  },
  {
    clientCallName: 'client.v2.entities.kyc.document.upload',
    fullyQualifiedName: 'v2.entities.kyc.document.upload',
    httpMethod: 'post',
    httpPath: '/api/v2/entities/{entity_id}/kyc/{kyc_id}/document',
  },
  {
    clientCallName: 'client.v2.accounts.retrieve',
    fullyQualifiedName: 'v2.accounts.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v2/accounts/{account_id}',
  },
  {
    clientCallName: 'client.v2.accounts.deactivate',
    fullyQualifiedName: 'v2.accounts.deactivate',
    httpMethod: 'post',
    httpPath: '/api/v2/accounts/{account_id}/deactivate',
  },
  {
    clientCallName: 'client.v2.accounts.getCashBalances',
    fullyQualifiedName: 'v2.accounts.getCashBalances',
    httpMethod: 'get',
    httpPath: '/api/v2/accounts/{account_id}/cash',
  },
  {
    clientCallName: 'client.v2.accounts.getDividendPayments',
    fullyQualifiedName: 'v2.accounts.getDividendPayments',
    httpMethod: 'get',
    httpPath: '/api/v2/accounts/{account_id}/dividend_payments',
  },
  {
    clientCallName: 'client.v2.accounts.getInterestPayments',
    fullyQualifiedName: 'v2.accounts.getInterestPayments',
    httpMethod: 'get',
    httpPath: '/api/v2/accounts/{account_id}/interest_payments',
  },
  {
    clientCallName: 'client.v2.accounts.getPortfolio',
    fullyQualifiedName: 'v2.accounts.getPortfolio',
    httpMethod: 'get',
    httpPath: '/api/v2/accounts/{account_id}/portfolio',
  },
  {
    clientCallName: 'client.v2.accounts.mintSandboxTokens',
    fullyQualifiedName: 'v2.accounts.mintSandboxTokens',
    httpMethod: 'post',
    httpPath: '/api/v2/accounts/{account_id}/faucet',
  },
  {
    clientCallName: 'client.v2.accounts.wallet.connectInternal',
    fullyQualifiedName: 'v2.accounts.wallet.connectInternal',
    httpMethod: 'post',
    httpPath: '/api/v2/accounts/{account_id}/wallet/internal',
  },
  {
    clientCallName: 'client.v2.accounts.wallet.get',
    fullyQualifiedName: 'v2.accounts.wallet.get',
    httpMethod: 'get',
    httpPath: '/api/v2/accounts/{account_id}/wallet',
  },
  {
    clientCallName: 'client.v2.accounts.wallet.external.connect',
    fullyQualifiedName: 'v2.accounts.wallet.external.connect',
    httpMethod: 'post',
    httpPath: '/api/v2/accounts/{account_id}/wallet/external',
  },
  {
    clientCallName: 'client.v2.accounts.wallet.external.getNonce',
    fullyQualifiedName: 'v2.accounts.wallet.external.getNonce',
    httpMethod: 'get',
    httpPath: '/api/v2/accounts/{account_id}/wallet/external/nonce',
  },
  {
    clientCallName: 'client.v2.accounts.orders.retrieve',
    fullyQualifiedName: 'v2.accounts.orders.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v2/accounts/{account_id}/orders/{order_id}',
  },
  {
    clientCallName: 'client.v2.accounts.orders.list',
    fullyQualifiedName: 'v2.accounts.orders.list',
    httpMethod: 'get',
    httpPath: '/api/v2/accounts/{account_id}/orders',
  },
  {
    clientCallName: 'client.v2.accounts.orders.batchCancel',
    fullyQualifiedName: 'v2.accounts.orders.batchCancel',
    httpMethod: 'post',
    httpPath: '/api/v2/accounts/{account_id}/orders/cancel',
  },
  {
    clientCallName: 'client.v2.accounts.orders.cancel',
    fullyQualifiedName: 'v2.accounts.orders.cancel',
    httpMethod: 'post',
    httpPath: '/api/v2/accounts/{account_id}/orders/{order_id}/cancel',
  },
  {
    clientCallName: 'client.v2.accounts.orders.getFulfillments',
    fullyQualifiedName: 'v2.accounts.orders.getFulfillments',
    httpMethod: 'get',
    httpPath: '/api/v2/accounts/{account_id}/orders/{order_id}/fulfillments',
  },
  {
    clientCallName: 'client.v2.accounts.orderFulfillments.retrieve',
    fullyQualifiedName: 'v2.accounts.orderFulfillments.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v2/accounts/{account_id}/order_fulfillments/{order_fulfillment_id}',
  },
  {
    clientCallName: 'client.v2.accounts.orderFulfillments.query',
    fullyQualifiedName: 'v2.accounts.orderFulfillments.query',
    httpMethod: 'get',
    httpPath: '/api/v2/accounts/{account_id}/order_fulfillments',
  },
  {
    clientCallName: 'client.v2.accounts.orderRequests.retrieve',
    fullyQualifiedName: 'v2.accounts.orderRequests.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v2/accounts/{account_id}/order_requests/{order_request_id}',
  },
  {
    clientCallName: 'client.v2.accounts.orderRequests.list',
    fullyQualifiedName: 'v2.accounts.orderRequests.list',
    httpMethod: 'get',
    httpPath: '/api/v2/accounts/{account_id}/order_requests',
  },
  {
    clientCallName: 'client.v2.accounts.orderRequests.createLimitBuy',
    fullyQualifiedName: 'v2.accounts.orderRequests.createLimitBuy',
    httpMethod: 'post',
    httpPath: '/api/v2/accounts/{account_id}/order_requests/limit_buy',
  },
  {
    clientCallName: 'client.v2.accounts.orderRequests.createLimitSell',
    fullyQualifiedName: 'v2.accounts.orderRequests.createLimitSell',
    httpMethod: 'post',
    httpPath: '/api/v2/accounts/{account_id}/order_requests/limit_sell',
  },
  {
    clientCallName: 'client.v2.accounts.orderRequests.createMarketBuy',
    fullyQualifiedName: 'v2.accounts.orderRequests.createMarketBuy',
    httpMethod: 'post',
    httpPath: '/api/v2/accounts/{account_id}/order_requests/market_buy',
  },
  {
    clientCallName: 'client.v2.accounts.orderRequests.createMarketSell',
    fullyQualifiedName: 'v2.accounts.orderRequests.createMarketSell',
    httpMethod: 'post',
    httpPath: '/api/v2/accounts/{account_id}/order_requests/market_sell',
  },
  {
    clientCallName: 'client.v2.accounts.orderRequests.getFeeQuote',
    fullyQualifiedName: 'v2.accounts.orderRequests.getFeeQuote',
    httpMethod: 'post',
    httpPath: '/api/v2/accounts/{account_id}/order_requests/fee_quote',
  },
  {
    clientCallName: 'client.v2.accounts.orderRequests.eip155.createPermit',
    fullyQualifiedName: 'v2.accounts.orderRequests.eip155.createPermit',
    httpMethod: 'post',
    httpPath: '/api/v2/accounts/{account_id}/order_requests/eip155/permit',
  },
  {
    clientCallName: 'client.v2.accounts.orderRequests.eip155.createPermitTransaction',
    fullyQualifiedName: 'v2.accounts.orderRequests.eip155.createPermitTransaction',
    httpMethod: 'post',
    httpPath: '/api/v2/accounts/{account_id}/order_requests/eip155/permit_transaction',
  },
  {
    clientCallName: 'client.v2.accounts.orderRequests.eip155.submit',
    fullyQualifiedName: 'v2.accounts.orderRequests.eip155.submit',
    httpMethod: 'post',
    httpPath: '/api/v2/accounts/{account_id}/order_requests/eip155',
  },
  {
    clientCallName: 'client.v2.accounts.withdrawalRequests.create',
    fullyQualifiedName: 'v2.accounts.withdrawalRequests.create',
    httpMethod: 'post',
    httpPath: '/api/v2/accounts/{account_id}/withdrawal_requests',
  },
  {
    clientCallName: 'client.v2.accounts.withdrawalRequests.retrieve',
    fullyQualifiedName: 'v2.accounts.withdrawalRequests.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v2/accounts/{account_id}/withdrawal_requests/{withdrawal_request_id}',
  },
  {
    clientCallName: 'client.v2.accounts.withdrawalRequests.list',
    fullyQualifiedName: 'v2.accounts.withdrawalRequests.list',
    httpMethod: 'get',
    httpPath: '/api/v2/accounts/{account_id}/withdrawal_requests',
  },
  {
    clientCallName: 'client.v2.accounts.withdrawals.retrieve',
    fullyQualifiedName: 'v2.accounts.withdrawals.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v2/accounts/{account_id}/withdrawals/{withdrawal_id}',
  },
  {
    clientCallName: 'client.v2.accounts.withdrawals.list',
    fullyQualifiedName: 'v2.accounts.withdrawals.list',
    httpMethod: 'get',
    httpPath: '/api/v2/accounts/{account_id}/withdrawals',
  },
  {
    clientCallName: 'client.v2.accounts.tokenTransfers.create',
    fullyQualifiedName: 'v2.accounts.tokenTransfers.create',
    httpMethod: 'post',
    httpPath: '/api/v2/accounts/{account_id}/token_transfers',
  },
  {
    clientCallName: 'client.v2.accounts.tokenTransfers.retrieve',
    fullyQualifiedName: 'v2.accounts.tokenTransfers.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v2/accounts/{account_id}/token_transfers/{transfer_id}',
  },
  {
    clientCallName: 'client.v2.accounts.tokenTransfers.list',
    fullyQualifiedName: 'v2.accounts.tokenTransfers.list',
    httpMethod: 'get',
    httpPath: '/api/v2/accounts/{account_id}/token_transfers',
  },
  {
    clientCallName: 'client.v2.accounts.activities.retrieveBrokerage',
    fullyQualifiedName: 'v2.accounts.activities.retrieveBrokerage',
    httpMethod: 'get',
    httpPath: '/api/v2/accounts/{account_id}/activities/brokerage',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
