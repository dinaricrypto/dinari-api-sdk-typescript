# API

## V2

Types:

- <code><a href="./src/resources/api/v2/v2.ts">V2GetHealthResponse</a></code>

Methods:

- <code title="get /api/v2/_health/">client.api.v2.<a href="./src/resources/api/v2/v2.ts">getHealth</a>() -> V2GetHealthResponse</code>

### MarketData

Types:

- <code><a href="./src/resources/api/v2/market-data/market-data.ts">MarketDataGetMarketHoursResponse</a></code>

Methods:

- <code title="get /api/v2/market_data/market_hours/">client.api.v2.marketData.<a href="./src/resources/api/v2/market-data/market-data.ts">getMarketHours</a>() -> MarketDataGetMarketHoursResponse</code>

#### Stocks

Types:

- <code><a href="./src/resources/api/v2/market-data/stocks/stocks.ts">StockListResponse</a></code>
- <code><a href="./src/resources/api/v2/market-data/stocks/stocks.ts">StockRetrieveDividendsResponse</a></code>
- <code><a href="./src/resources/api/v2/market-data/stocks/stocks.ts">StockRetrieveHistoricalPricesResponse</a></code>
- <code><a href="./src/resources/api/v2/market-data/stocks/stocks.ts">StockRetrieveNewsResponse</a></code>
- <code><a href="./src/resources/api/v2/market-data/stocks/stocks.ts">StockRetrieveQuoteResponse</a></code>

Methods:

- <code title="get /api/v2/market_data/stocks/">client.api.v2.marketData.stocks.<a href="./src/resources/api/v2/market-data/stocks/stocks.ts">list</a>({ ...params }) -> StockListResponse</code>
- <code title="get /api/v2/market_data/stocks/{stock_id}/dividends">client.api.v2.marketData.stocks.<a href="./src/resources/api/v2/market-data/stocks/stocks.ts">retrieveDividends</a>(stockID) -> StockRetrieveDividendsResponse</code>
- <code title="get /api/v2/market_data/stocks/{stock_id}/historical_prices/">client.api.v2.marketData.stocks.<a href="./src/resources/api/v2/market-data/stocks/stocks.ts">retrieveHistoricalPrices</a>(stockID, { ...params }) -> StockRetrieveHistoricalPricesResponse</code>
- <code title="get /api/v2/market_data/stocks/{stock_id}/news">client.api.v2.marketData.stocks.<a href="./src/resources/api/v2/market-data/stocks/stocks.ts">retrieveNews</a>(stockID, { ...params }) -> StockRetrieveNewsResponse</code>
- <code title="get /api/v2/market_data/stocks/{stock_id}/quote">client.api.v2.marketData.stocks.<a href="./src/resources/api/v2/market-data/stocks/stocks.ts">retrieveQuote</a>(stockID) -> StockRetrieveQuoteResponse</code>

##### Splits

Types:

- <code><a href="./src/resources/api/v2/market-data/stocks/splits.ts">StockSplit</a></code>
- <code><a href="./src/resources/api/v2/market-data/stocks/splits.ts">SplitRetrieveResponse</a></code>
- <code><a href="./src/resources/api/v2/market-data/stocks/splits.ts">SplitListResponse</a></code>

Methods:

- <code title="get /api/v2/market_data/stocks/{stock_id}/splits">client.api.v2.marketData.stocks.splits.<a href="./src/resources/api/v2/market-data/stocks/splits.ts">retrieve</a>(stockID, { ...params }) -> SplitRetrieveResponse</code>
- <code title="get /api/v2/market_data/stocks/splits">client.api.v2.marketData.stocks.splits.<a href="./src/resources/api/v2/market-data/stocks/splits.ts">list</a>({ ...params }) -> SplitListResponse</code>

### Entities

Types:

- <code><a href="./src/resources/api/v2/entities/entities.ts">Entity</a></code>
- <code><a href="./src/resources/api/v2/entities/entities.ts">EntityListResponse</a></code>

Methods:

- <code title="post /api/v2/entities/">client.api.v2.entities.<a href="./src/resources/api/v2/entities/entities.ts">create</a>({ ...params }) -> Entity</code>
- <code title="get /api/v2/entities/{entity_id}">client.api.v2.entities.<a href="./src/resources/api/v2/entities/entities.ts">retrieve</a>(entityID) -> Entity</code>
- <code title="get /api/v2/entities/">client.api.v2.entities.<a href="./src/resources/api/v2/entities/entities.ts">list</a>() -> EntityListResponse</code>
- <code title="get /api/v2/entities/me">client.api.v2.entities.<a href="./src/resources/api/v2/entities/entities.ts">retrieveCurrent</a>() -> Entity</code>

#### Accounts

Types:

- <code><a href="./src/resources/api/v2/entities/accounts.ts">Account</a></code>
- <code><a href="./src/resources/api/v2/entities/accounts.ts">AccountListResponse</a></code>

Methods:

- <code title="post /api/v2/entities/{entity_id}/accounts">client.api.v2.entities.accounts.<a href="./src/resources/api/v2/entities/accounts.ts">create</a>(entityID) -> Account</code>
- <code title="get /api/v2/entities/{entity_id}/accounts">client.api.v2.entities.accounts.<a href="./src/resources/api/v2/entities/accounts.ts">list</a>(entityID, { ...params }) -> AccountListResponse</code>

#### KYC

Types:

- <code><a href="./src/resources/api/v2/entities/kyc.ts">KYCData</a></code>
- <code><a href="./src/resources/api/v2/entities/kyc.ts">KYCDocumentType</a></code>
- <code><a href="./src/resources/api/v2/entities/kyc.ts">KYCInfo</a></code>
- <code><a href="./src/resources/api/v2/entities/kyc.ts">KYCGetURLResponse</a></code>
- <code><a href="./src/resources/api/v2/entities/kyc.ts">KYCUploadDocumentResponse</a></code>

Methods:

- <code title="get /api/v2/entities/{entity_id}/kyc">client.api.v2.entities.kyc.<a href="./src/resources/api/v2/entities/kyc.ts">retrieve</a>(entityID) -> KYCInfo</code>
- <code title="get /api/v2/entities/{entity_id}/kyc/url">client.api.v2.entities.kyc.<a href="./src/resources/api/v2/entities/kyc.ts">getURL</a>(entityID) -> KYCGetURLResponse</code>
- <code title="post /api/v2/entities/{entity_id}/kyc">client.api.v2.entities.kyc.<a href="./src/resources/api/v2/entities/kyc.ts">submit</a>(entityID, { ...params }) -> KYCInfo</code>
- <code title="post /api/v2/entities/{entity_id}/kyc/{kyc_id}/document">client.api.v2.entities.kyc.<a href="./src/resources/api/v2/entities/kyc.ts">uploadDocument</a>(kycID, { ...params }) -> KYCUploadDocumentResponse</code>

### Accounts

Types:

- <code><a href="./src/resources/api/v2/accounts/accounts.ts">AccountRetrieveCashResponse</a></code>
- <code><a href="./src/resources/api/v2/accounts/accounts.ts">AccountRetrieveDividendPaymentsResponse</a></code>
- <code><a href="./src/resources/api/v2/accounts/accounts.ts">AccountRetrieveInterestPaymentsResponse</a></code>
- <code><a href="./src/resources/api/v2/accounts/accounts.ts">AccountRetrievePortfolioResponse</a></code>

Methods:

- <code title="get /api/v2/accounts/{account_id}">client.api.v2.accounts.<a href="./src/resources/api/v2/accounts/accounts.ts">retrieve</a>(accountID) -> Account</code>
- <code title="post /api/v2/accounts/{account_id}/deactivate">client.api.v2.accounts.<a href="./src/resources/api/v2/accounts/accounts.ts">deactivate</a>(accountID) -> Account</code>
- <code title="get /api/v2/accounts/{account_id}/cash">client.api.v2.accounts.<a href="./src/resources/api/v2/accounts/accounts.ts">retrieveCash</a>(accountID) -> AccountRetrieveCashResponse</code>
- <code title="get /api/v2/accounts/{account_id}/dividend_payments">client.api.v2.accounts.<a href="./src/resources/api/v2/accounts/accounts.ts">retrieveDividendPayments</a>(accountID) -> AccountRetrieveDividendPaymentsResponse</code>
- <code title="get /api/v2/accounts/{account_id}/interest_payments">client.api.v2.accounts.<a href="./src/resources/api/v2/accounts/accounts.ts">retrieveInterestPayments</a>(accountID) -> AccountRetrieveInterestPaymentsResponse</code>
- <code title="get /api/v2/accounts/{account_id}/portfolio">client.api.v2.accounts.<a href="./src/resources/api/v2/accounts/accounts.ts">retrievePortfolio</a>(accountID) -> AccountRetrievePortfolioResponse</code>

#### Wallet

Types:

- <code><a href="./src/resources/api/v2/accounts/wallet/wallet.ts">Wallet</a></code>

Methods:

- <code title="get /api/v2/accounts/{account_id}/wallet">client.api.v2.accounts.wallet.<a href="./src/resources/api/v2/accounts/wallet/wallet.ts">retrieve</a>(accountID) -> Wallet</code>

##### External

Types:

- <code><a href="./src/resources/api/v2/accounts/wallet/external.ts">ExternalGetNonceResponse</a></code>

Methods:

- <code title="post /api/v2/accounts/{account_id}/wallet/external">client.api.v2.accounts.wallet.external.<a href="./src/resources/api/v2/accounts/wallet/external.ts">connect</a>(accountID, { ...params }) -> Wallet</code>
- <code title="get /api/v2/accounts/{account_id}/wallet/external/nonce">client.api.v2.accounts.wallet.external.<a href="./src/resources/api/v2/accounts/wallet/external.ts">getNonce</a>(accountID, { ...params }) -> ExternalGetNonceResponse</code>

#### Orders

Types:

- <code><a href="./src/resources/api/v2/accounts/orders.ts">Order</a></code>
- <code><a href="./src/resources/api/v2/accounts/orders.ts">OrderListResponse</a></code>
- <code><a href="./src/resources/api/v2/accounts/orders.ts">OrderGetEstimatedFeeResponse</a></code>
- <code><a href="./src/resources/api/v2/accounts/orders.ts">OrderRetrieveFulfillmentsResponse</a></code>

Methods:

- <code title="get /api/v2/accounts/{account_id}/orders/{order_id}">client.api.v2.accounts.orders.<a href="./src/resources/api/v2/accounts/orders.ts">retrieve</a>(orderID, { ...params }) -> Order</code>
- <code title="get /api/v2/accounts/{account_id}/orders">client.api.v2.accounts.orders.<a href="./src/resources/api/v2/accounts/orders.ts">list</a>(accountID) -> OrderListResponse</code>
- <code title="post /api/v2/accounts/{account_id}/orders/{order_id}/cancel">client.api.v2.accounts.orders.<a href="./src/resources/api/v2/accounts/orders.ts">cancel</a>(orderID, { ...params }) -> Order</code>
- <code title="post /api/v2/accounts/{account_id}/orders/estimated_fee">client.api.v2.accounts.orders.<a href="./src/resources/api/v2/accounts/orders.ts">getEstimatedFee</a>(accountID, { ...params }) -> OrderGetEstimatedFeeResponse</code>
- <code title="get /api/v2/accounts/{account_id}/orders/{order_id}/fulfillments">client.api.v2.accounts.orders.<a href="./src/resources/api/v2/accounts/orders.ts">retrieveFulfillments</a>(orderID, { ...params }) -> OrderRetrieveFulfillmentsResponse</code>

#### OrderFulfillments

Types:

- <code><a href="./src/resources/api/v2/accounts/order-fulfillments.ts">OrderFulfillment</a></code>
- <code><a href="./src/resources/api/v2/accounts/order-fulfillments.ts">OrderFulfillmentQueryResponse</a></code>

Methods:

- <code title="get /api/v2/accounts/{account_id}/order_fulfillments/{fulfillment_id}">client.api.v2.accounts.orderFulfillments.<a href="./src/resources/api/v2/accounts/order-fulfillments.ts">retrieve</a>(fulfillmentID, { ...params }) -> OrderFulfillment</code>
- <code title="get /api/v2/accounts/{account_id}/order_fulfillments">client.api.v2.accounts.orderFulfillments.<a href="./src/resources/api/v2/accounts/order-fulfillments.ts">query</a>(accountID) -> OrderFulfillmentQueryResponse</code>

#### OrderRequests

Types:

- <code><a href="./src/resources/api/v2/accounts/order-requests.ts">LimitOrderRequestInput</a></code>
- <code><a href="./src/resources/api/v2/accounts/order-requests.ts">OrderRequest</a></code>
- <code><a href="./src/resources/api/v2/accounts/order-requests.ts">OrderRequestListResponse</a></code>

Methods:

- <code title="get /api/v2/accounts/{account_id}/order_requests/{request_id}">client.api.v2.accounts.orderRequests.<a href="./src/resources/api/v2/accounts/order-requests.ts">retrieve</a>(requestID, { ...params }) -> OrderRequest</code>
- <code title="get /api/v2/accounts/{account_id}/order_requests">client.api.v2.accounts.orderRequests.<a href="./src/resources/api/v2/accounts/order-requests.ts">list</a>(accountID) -> OrderRequestListResponse</code>
- <code title="post /api/v2/accounts/{account_id}/order_requests/limit_buy">client.api.v2.accounts.orderRequests.<a href="./src/resources/api/v2/accounts/order-requests.ts">createLimitBuy</a>(accountID, { ...params }) -> OrderRequest</code>
- <code title="post /api/v2/accounts/{account_id}/order_requests/limit_sell">client.api.v2.accounts.orderRequests.<a href="./src/resources/api/v2/accounts/order-requests.ts">createLimitSell</a>(accountID, { ...params }) -> OrderRequest</code>
- <code title="post /api/v2/accounts/{account_id}/order_requests/market_buy">client.api.v2.accounts.orderRequests.<a href="./src/resources/api/v2/accounts/order-requests.ts">createMarketBuy</a>(accountID, { ...params }) -> OrderRequest</code>
- <code title="post /api/v2/accounts/{account_id}/order_requests/market_sell">client.api.v2.accounts.orderRequests.<a href="./src/resources/api/v2/accounts/order-requests.ts">createMarketSell</a>(accountID, { ...params }) -> OrderRequest</code>
