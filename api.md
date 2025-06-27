# V2

Types:

- <code><a href="./src/resources/v2/v2.ts">V2ListOrdersResponse</a></code>

Methods:

- <code title="get /api/v2/orders/">client.v2.<a href="./src/resources/v2/v2.ts">listOrders</a>({ ...params }) -> V2ListOrdersResponse</code>

## MarketData

Types:

- <code><a href="./src/resources/v2/market-data/market-data.ts">MarketDataRetrieveMarketHoursResponse</a></code>

Methods:

- <code title="get /api/v2/market_data/market_hours/">client.v2.marketData.<a href="./src/resources/v2/market-data/market-data.ts">retrieveMarketHours</a>() -> MarketDataRetrieveMarketHoursResponse</code>

### Stocks

Types:

- <code><a href="./src/resources/v2/market-data/stocks/stocks.ts">StockListResponse</a></code>
- <code><a href="./src/resources/v2/market-data/stocks/stocks.ts">StockRetrieveCurrentPriceResponse</a></code>
- <code><a href="./src/resources/v2/market-data/stocks/stocks.ts">StockRetrieveCurrentQuoteResponse</a></code>
- <code><a href="./src/resources/v2/market-data/stocks/stocks.ts">StockRetrieveDividendsResponse</a></code>
- <code><a href="./src/resources/v2/market-data/stocks/stocks.ts">StockRetrieveHistoricalPricesResponse</a></code>
- <code><a href="./src/resources/v2/market-data/stocks/stocks.ts">StockRetrieveNewsResponse</a></code>

Methods:

- <code title="get /api/v2/market_data/stocks/">client.v2.marketData.stocks.<a href="./src/resources/v2/market-data/stocks/stocks.ts">list</a>({ ...params }) -> StockListResponse</code>
- <code title="get /api/v2/market_data/stocks/{stock_id}/current_price">client.v2.marketData.stocks.<a href="./src/resources/v2/market-data/stocks/stocks.ts">retrieveCurrentPrice</a>(stockID) -> StockRetrieveCurrentPriceResponse</code>
- <code title="get /api/v2/market_data/stocks/{stock_id}/current_quote">client.v2.marketData.stocks.<a href="./src/resources/v2/market-data/stocks/stocks.ts">retrieveCurrentQuote</a>(stockID) -> StockRetrieveCurrentQuoteResponse</code>
- <code title="get /api/v2/market_data/stocks/{stock_id}/dividends">client.v2.marketData.stocks.<a href="./src/resources/v2/market-data/stocks/stocks.ts">retrieveDividends</a>(stockID) -> StockRetrieveDividendsResponse</code>
- <code title="get /api/v2/market_data/stocks/{stock_id}/historical_prices/">client.v2.marketData.stocks.<a href="./src/resources/v2/market-data/stocks/stocks.ts">retrieveHistoricalPrices</a>(stockID, { ...params }) -> StockRetrieveHistoricalPricesResponse</code>
- <code title="get /api/v2/market_data/stocks/{stock_id}/news">client.v2.marketData.stocks.<a href="./src/resources/v2/market-data/stocks/stocks.ts">retrieveNews</a>(stockID, { ...params }) -> StockRetrieveNewsResponse</code>

#### Splits

Types:

- <code><a href="./src/resources/v2/market-data/stocks/splits.ts">StockSplit</a></code>
- <code><a href="./src/resources/v2/market-data/stocks/splits.ts">SplitListResponse</a></code>
- <code><a href="./src/resources/v2/market-data/stocks/splits.ts">SplitListForStockResponse</a></code>

Methods:

- <code title="get /api/v2/market_data/stocks/splits">client.v2.marketData.stocks.splits.<a href="./src/resources/v2/market-data/stocks/splits.ts">list</a>({ ...params }) -> SplitListResponse</code>
- <code title="get /api/v2/market_data/stocks/{stock_id}/splits">client.v2.marketData.stocks.splits.<a href="./src/resources/v2/market-data/stocks/splits.ts">listForStock</a>(stockID, { ...params }) -> SplitListForStockResponse</code>

## Entities

Types:

- <code><a href="./src/resources/v2/entities/entities.ts">Entity</a></code>
- <code><a href="./src/resources/v2/entities/entities.ts">EntityListResponse</a></code>

Methods:

- <code title="post /api/v2/entities/">client.v2.entities.<a href="./src/resources/v2/entities/entities.ts">create</a>({ ...params }) -> Entity</code>
- <code title="patch /api/v2/entities/{entity_id}">client.v2.entities.<a href="./src/resources/v2/entities/entities.ts">update</a>(entityID, { ...params }) -> Entity</code>
- <code title="get /api/v2/entities/">client.v2.entities.<a href="./src/resources/v2/entities/entities.ts">list</a>({ ...params }) -> EntityListResponse</code>
- <code title="get /api/v2/entities/{entity_id}">client.v2.entities.<a href="./src/resources/v2/entities/entities.ts">retrieveByID</a>(entityID) -> Entity</code>
- <code title="get /api/v2/entities/me">client.v2.entities.<a href="./src/resources/v2/entities/entities.ts">retrieveCurrent</a>() -> Entity</code>

### Accounts

Types:

- <code><a href="./src/resources/v2/entities/accounts.ts">Account</a></code>
- <code><a href="./src/resources/v2/entities/accounts.ts">AccountListResponse</a></code>

Methods:

- <code title="post /api/v2/entities/{entity_id}/accounts">client.v2.entities.accounts.<a href="./src/resources/v2/entities/accounts.ts">create</a>(entityID) -> Account</code>
- <code title="get /api/v2/entities/{entity_id}/accounts">client.v2.entities.accounts.<a href="./src/resources/v2/entities/accounts.ts">list</a>(entityID, { ...params }) -> AccountListResponse</code>

### KYC

Types:

- <code><a href="./src/resources/v2/entities/kyc/kyc.ts">KYCData</a></code>
- <code><a href="./src/resources/v2/entities/kyc/kyc.ts">KYCInfo</a></code>
- <code><a href="./src/resources/v2/entities/kyc/kyc.ts">KYCCreateManagedCheckResponse</a></code>

Methods:

- <code title="get /api/v2/entities/{entity_id}/kyc">client.v2.entities.kyc.<a href="./src/resources/v2/entities/kyc/kyc.ts">retrieve</a>(entityID) -> KYCInfo</code>
- <code title="post /api/v2/entities/{entity_id}/kyc/url">client.v2.entities.kyc.<a href="./src/resources/v2/entities/kyc/kyc.ts">createManagedCheck</a>(entityID) -> KYCCreateManagedCheckResponse</code>
- <code title="post /api/v2/entities/{entity_id}/kyc">client.v2.entities.kyc.<a href="./src/resources/v2/entities/kyc/kyc.ts">submit</a>(entityID, { ...params }) -> KYCInfo</code>

#### Document

Types:

- <code><a href="./src/resources/v2/entities/kyc/document.ts">KYCDocument</a></code>
- <code><a href="./src/resources/v2/entities/kyc/document.ts">KYCDocumentType</a></code>
- <code><a href="./src/resources/v2/entities/kyc/document.ts">DocumentRetrieveResponse</a></code>

Methods:

- <code title="get /api/v2/entities/{entity_id}/kyc/{kyc_id}/document">client.v2.entities.kyc.document.<a href="./src/resources/v2/entities/kyc/document.ts">retrieve</a>(kycID, { ...params }) -> DocumentRetrieveResponse</code>
- <code title="post /api/v2/entities/{entity_id}/kyc/{kyc_id}/document">client.v2.entities.kyc.document.<a href="./src/resources/v2/entities/kyc/document.ts">upload</a>(kycID, { ...params }) -> KYCDocument</code>

## Accounts

Types:

- <code><a href="./src/resources/v2/accounts/accounts.ts">Chain</a></code>
- <code><a href="./src/resources/v2/accounts/accounts.ts">AccountGetCashBalancesResponse</a></code>
- <code><a href="./src/resources/v2/accounts/accounts.ts">AccountGetDividendPaymentsResponse</a></code>
- <code><a href="./src/resources/v2/accounts/accounts.ts">AccountGetInterestPaymentsResponse</a></code>
- <code><a href="./src/resources/v2/accounts/accounts.ts">AccountGetPortfolioResponse</a></code>

Methods:

- <code title="get /api/v2/accounts/{account_id}">client.v2.accounts.<a href="./src/resources/v2/accounts/accounts.ts">retrieve</a>(accountID) -> Account</code>
- <code title="post /api/v2/accounts/{account_id}/deactivate">client.v2.accounts.<a href="./src/resources/v2/accounts/accounts.ts">deactivate</a>(accountID) -> Account</code>
- <code title="get /api/v2/accounts/{account_id}/cash">client.v2.accounts.<a href="./src/resources/v2/accounts/accounts.ts">getCashBalances</a>(accountID) -> AccountGetCashBalancesResponse</code>
- <code title="get /api/v2/accounts/{account_id}/dividend_payments">client.v2.accounts.<a href="./src/resources/v2/accounts/accounts.ts">getDividendPayments</a>(accountID, { ...params }) -> AccountGetDividendPaymentsResponse</code>
- <code title="get /api/v2/accounts/{account_id}/interest_payments">client.v2.accounts.<a href="./src/resources/v2/accounts/accounts.ts">getInterestPayments</a>(accountID, { ...params }) -> AccountGetInterestPaymentsResponse</code>
- <code title="get /api/v2/accounts/{account_id}/portfolio">client.v2.accounts.<a href="./src/resources/v2/accounts/accounts.ts">getPortfolio</a>(accountID) -> AccountGetPortfolioResponse</code>
- <code title="post /api/v2/accounts/{account_id}/faucet">client.v2.accounts.<a href="./src/resources/v2/accounts/accounts.ts">mintSandboxTokens</a>(accountID, { ...params }) -> void</code>

### Wallet

Types:

- <code><a href="./src/resources/v2/accounts/wallet/wallet.ts">Wallet</a></code>

Methods:

- <code title="post /api/v2/accounts/{account_id}/wallet/internal">client.v2.accounts.wallet.<a href="./src/resources/v2/accounts/wallet/wallet.ts">connectInternal</a>(accountID, { ...params }) -> Wallet</code>
- <code title="get /api/v2/accounts/{account_id}/wallet">client.v2.accounts.wallet.<a href="./src/resources/v2/accounts/wallet/wallet.ts">get</a>(accountID) -> Wallet</code>

#### External

Types:

- <code><a href="./src/resources/v2/accounts/wallet/external.ts">WalletChainID</a></code>
- <code><a href="./src/resources/v2/accounts/wallet/external.ts">ExternalGetNonceResponse</a></code>

Methods:

- <code title="post /api/v2/accounts/{account_id}/wallet/external">client.v2.accounts.wallet.external.<a href="./src/resources/v2/accounts/wallet/external.ts">connect</a>(accountID, { ...params }) -> Wallet</code>
- <code title="get /api/v2/accounts/{account_id}/wallet/external/nonce">client.v2.accounts.wallet.external.<a href="./src/resources/v2/accounts/wallet/external.ts">getNonce</a>(accountID, { ...params }) -> ExternalGetNonceResponse</code>

### Orders

Types:

- <code><a href="./src/resources/v2/accounts/orders/orders.ts">BrokerageOrderStatus</a></code>
- <code><a href="./src/resources/v2/accounts/orders/orders.ts">Order</a></code>
- <code><a href="./src/resources/v2/accounts/orders/orders.ts">OrderSide</a></code>
- <code><a href="./src/resources/v2/accounts/orders/orders.ts">OrderTif</a></code>
- <code><a href="./src/resources/v2/accounts/orders/orders.ts">OrderType</a></code>
- <code><a href="./src/resources/v2/accounts/orders/orders.ts">OrderListResponse</a></code>
- <code><a href="./src/resources/v2/accounts/orders/orders.ts">OrderGetFulfillmentsResponse</a></code>

Methods:

- <code title="get /api/v2/accounts/{account_id}/orders/{order_id}">client.v2.accounts.orders.<a href="./src/resources/v2/accounts/orders/orders.ts">retrieve</a>(orderID, { ...params }) -> Order</code>
- <code title="get /api/v2/accounts/{account_id}/orders">client.v2.accounts.orders.<a href="./src/resources/v2/accounts/orders/orders.ts">list</a>(accountID, { ...params }) -> OrderListResponse</code>
- <code title="post /api/v2/accounts/{account_id}/orders/{order_id}/cancel">client.v2.accounts.orders.<a href="./src/resources/v2/accounts/orders/orders.ts">cancel</a>(orderID, { ...params }) -> Order</code>
- <code title="get /api/v2/accounts/{account_id}/orders/{order_id}/fulfillments">client.v2.accounts.orders.<a href="./src/resources/v2/accounts/orders/orders.ts">getFulfillments</a>(orderID, { ...params }) -> OrderGetFulfillmentsResponse</code>

#### Stocks

##### Eip155

Types:

- <code><a href="./src/resources/v2/accounts/orders/stocks/eip155.ts">OrderFeeAmount</a></code>
- <code><a href="./src/resources/v2/accounts/orders/stocks/eip155.ts">Eip155GetFeeQuoteResponse</a></code>
- <code><a href="./src/resources/v2/accounts/orders/stocks/eip155.ts">Eip155PrepareOrderResponse</a></code>

Methods:

- <code title="post /api/v2/accounts/{account_id}/orders/stocks/eip155/fee_quote">client.v2.accounts.orders.stocks.eip155.<a href="./src/resources/v2/accounts/orders/stocks/eip155.ts">getFeeQuote</a>(accountID, { ...params }) -> Eip155GetFeeQuoteResponse</code>
- <code title="post /api/v2/accounts/{account_id}/orders/stocks/eip155/prepare">client.v2.accounts.orders.stocks.eip155.<a href="./src/resources/v2/accounts/orders/stocks/eip155.ts">prepareOrder</a>(accountID, { ...params }) -> Eip155PrepareOrderResponse</code>

### OrderFulfillments

Types:

- <code><a href="./src/resources/v2/accounts/order-fulfillments.ts">Fulfillment</a></code>
- <code><a href="./src/resources/v2/accounts/order-fulfillments.ts">OrderFulfillmentQueryResponse</a></code>

Methods:

- <code title="get /api/v2/accounts/{account_id}/order_fulfillments/{order_fulfillment_id}">client.v2.accounts.orderFulfillments.<a href="./src/resources/v2/accounts/order-fulfillments.ts">retrieve</a>(orderFulfillmentID, { ...params }) -> Fulfillment</code>
- <code title="get /api/v2/accounts/{account_id}/order_fulfillments">client.v2.accounts.orderFulfillments.<a href="./src/resources/v2/accounts/order-fulfillments.ts">query</a>(accountID, { ...params }) -> OrderFulfillmentQueryResponse</code>

### OrderRequests

Types:

- <code><a href="./src/resources/v2/accounts/order-requests/order-requests.ts">CreateLimitOrderInput</a></code>
- <code><a href="./src/resources/v2/accounts/order-requests/order-requests.ts">OrderRequest</a></code>
- <code><a href="./src/resources/v2/accounts/order-requests/order-requests.ts">OrderRequestListResponse</a></code>
- <code><a href="./src/resources/v2/accounts/order-requests/order-requests.ts">OrderRequestGetFeeQuoteResponse</a></code>

Methods:

- <code title="get /api/v2/accounts/{account_id}/order_requests/{order_request_id}">client.v2.accounts.orderRequests.<a href="./src/resources/v2/accounts/order-requests/order-requests.ts">retrieve</a>(orderRequestID, { ...params }) -> OrderRequest</code>
- <code title="get /api/v2/accounts/{account_id}/order_requests">client.v2.accounts.orderRequests.<a href="./src/resources/v2/accounts/order-requests/order-requests.ts">list</a>(accountID, { ...params }) -> OrderRequestListResponse</code>
- <code title="post /api/v2/accounts/{account_id}/order_requests/limit_buy">client.v2.accounts.orderRequests.<a href="./src/resources/v2/accounts/order-requests/order-requests.ts">createLimitBuy</a>(accountID, { ...params }) -> OrderRequest</code>
- <code title="post /api/v2/accounts/{account_id}/order_requests/limit_sell">client.v2.accounts.orderRequests.<a href="./src/resources/v2/accounts/order-requests/order-requests.ts">createLimitSell</a>(accountID, { ...params }) -> OrderRequest</code>
- <code title="post /api/v2/accounts/{account_id}/order_requests/market_buy">client.v2.accounts.orderRequests.<a href="./src/resources/v2/accounts/order-requests/order-requests.ts">createMarketBuy</a>(accountID, { ...params }) -> OrderRequest</code>
- <code title="post /api/v2/accounts/{account_id}/order_requests/market_sell">client.v2.accounts.orderRequests.<a href="./src/resources/v2/accounts/order-requests/order-requests.ts">createMarketSell</a>(accountID, { ...params }) -> OrderRequest</code>
- <code title="post /api/v2/accounts/{account_id}/order_requests/fee_quote">client.v2.accounts.orderRequests.<a href="./src/resources/v2/accounts/order-requests/order-requests.ts">getFeeQuote</a>(accountID, { ...params }) -> OrderRequestGetFeeQuoteResponse</code>

#### Stocks

##### Eip155

Types:

- <code><a href="./src/resources/v2/accounts/order-requests/stocks/eip155.ts">EvmTypedData</a></code>
- <code><a href="./src/resources/v2/accounts/order-requests/stocks/eip155.ts">Eip155PrepareProxiedOrderResponse</a></code>

Methods:

- <code title="post /api/v2/accounts/{account_id}/order_requests/stocks/eip155">client.v2.accounts.orderRequests.stocks.eip155.<a href="./src/resources/v2/accounts/order-requests/stocks/eip155.ts">createProxiedOrder</a>(accountID, { ...params }) -> OrderRequest</code>
- <code title="post /api/v2/accounts/{account_id}/order_requests/stocks/eip155/prepare">client.v2.accounts.orderRequests.stocks.eip155.<a href="./src/resources/v2/accounts/order-requests/stocks/eip155.ts">prepareProxiedOrder</a>(accountID, { ...params }) -> Eip155PrepareProxiedOrderResponse</code>

### WithdrawalRequests

Types:

- <code><a href="./src/resources/v2/accounts/withdrawal-requests.ts">WithdrawalRequest</a></code>
- <code><a href="./src/resources/v2/accounts/withdrawal-requests.ts">WithdrawalRequestListResponse</a></code>

Methods:

- <code title="post /api/v2/accounts/{account_id}/withdrawal_requests">client.v2.accounts.withdrawalRequests.<a href="./src/resources/v2/accounts/withdrawal-requests.ts">create</a>(accountID, { ...params }) -> WithdrawalRequest</code>
- <code title="get /api/v2/accounts/{account_id}/withdrawal_requests/{withdrawal_request_id}">client.v2.accounts.withdrawalRequests.<a href="./src/resources/v2/accounts/withdrawal-requests.ts">retrieve</a>(withdrawalRequestID, { ...params }) -> WithdrawalRequest</code>
- <code title="get /api/v2/accounts/{account_id}/withdrawal_requests">client.v2.accounts.withdrawalRequests.<a href="./src/resources/v2/accounts/withdrawal-requests.ts">list</a>(accountID, { ...params }) -> WithdrawalRequestListResponse</code>

### Withdrawals

Types:

- <code><a href="./src/resources/v2/accounts/withdrawals.ts">Withdrawal</a></code>
- <code><a href="./src/resources/v2/accounts/withdrawals.ts">WithdrawalListResponse</a></code>

Methods:

- <code title="get /api/v2/accounts/{account_id}/withdrawals/{withdrawal_id}">client.v2.accounts.withdrawals.<a href="./src/resources/v2/accounts/withdrawals.ts">retrieve</a>(withdrawalID, { ...params }) -> Withdrawal</code>
- <code title="get /api/v2/accounts/{account_id}/withdrawals">client.v2.accounts.withdrawals.<a href="./src/resources/v2/accounts/withdrawals.ts">list</a>(accountID, { ...params }) -> WithdrawalListResponse</code>
