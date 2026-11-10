# Reference
## Market Data
<details><summary><code>client.marketData.<a href="/src/api/resources/marketData/client/Client.ts">getAlloys</a>({ ...params }) -> Dinari.PaginatedAlloyResponseV1</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns available `Alloys` with cursor-based pagination.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.marketData.getAlloys();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetAlloysRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MarketDataClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.marketData.<a href="/src/api/resources/marketData/client/Client.ts">getAlloyCurrentPrice</a>({ ...params }) -> Dinari.AlloyPriceV1</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the current price for a specified `Alloy`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.marketData.getAlloyCurrentPrice({
    alloyId: "alloy_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetAlloyCurrentPriceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MarketDataClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.marketData.<a href="/src/api/resources/marketData/client/Client.ts">getAlloyPriceChart</a>({ ...params }) -> Dinari.AlloyHistoricalPriceDataPointV1[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get historical price data for a specified `Alloy`. Each index in the array represents a single tick in a price chart.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.marketData.getAlloyPriceChart({
    alloyId: "alloy_id",
    timespan: "DAY"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetAlloyPriceChartRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MarketDataClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.marketData.<a href="/src/api/resources/marketData/client/Client.ts">getStocks</a>({ ...params }) -> Dinari.GetStocksResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of `Stocks`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.marketData.getStocks();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetStocksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MarketDataClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.marketData.<a href="/src/api/resources/marketData/client/Client.ts">getStockCurrentPrice</a>({ ...params }) -> Dinari.StockPrice</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get current price for a specified `Stock`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.marketData.getStockCurrentPrice({
    stockId: "stock_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetStockCurrentPriceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MarketDataClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.marketData.<a href="/src/api/resources/marketData/client/Client.ts">getStockCurrentQuotesRouteV2</a>({ ...params }) -> Dinari.StockQuoteResponseOneOfSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get quote for a specified `Stock`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.marketData.getStockCurrentQuotesRouteV2({
    stockId: "stock_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetStockCurrentQuotesRouteV2Request` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MarketDataClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.marketData.<a href="/src/api/resources/marketData/client/Client.ts">getStockPriceChart</a>({ ...params }) -> Dinari.StocksHistoricalPriceDataPoint[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get historical price data for a specified `Stock`. Each index in the array represents a single tick in a price chart.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.marketData.getStockPriceChart({
    stockId: "stock_id",
    timespan: "DAY"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetStockPriceChartRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MarketDataClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.marketData.<a href="/src/api/resources/marketData/client/Client.ts">getStockNewsByStockId</a>({ ...params }) -> Dinari.StockNewsArticleInfo[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the most recent news articles relating to a `Stock`, including a summary of the article 
        and a link to the original source.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.marketData.getStockNewsByStockId({
    stockId: "stock_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetStockNewsByStockIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MarketDataClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.marketData.<a href="/src/api/resources/marketData/client/Client.ts">getMarketHours</a>() -> Dinari.ExtendedMarketHours</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the market hours for the current trading session and next open trading session.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.marketData.getMarketHours();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `MarketDataClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Corporate Actions
<details><summary><code>client.corporateActions.<a href="/src/api/resources/corporateActions/client/Client.ts">getStockSplits</a>({ ...params }) -> Dinari.GetStockSplitsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


Get a list of stock splits for `Stocks` available for trade via Dinari.
The splits are ordered by the date they were created, with the most recent split first.

In an example 10-for-1 stock split, trading will be halted for the stock at the end of the `payable_date`, as
the split transitions from `PENDING` to `IN_PROGRESS`. This usually occurs over a weekend to minimize trading
disruptions. Each share of stock owned by a shareholder will then be converted into 10 shares, and the split
becomes `COMPLETE` as trading resumes on the `ex_date` with new split-adjusted prices.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.corporateActions.getStockSplits();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetStockSplitsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CorporateActionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.corporateActions.<a href="/src/api/resources/corporateActions/client/Client.ts">getStockSplitsById</a>({ ...params }) -> Dinari.GetStockSplitsByIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


Get a list of stock splits for a specific `Stock`.
The splits are ordered by the date they were created, with the most recent split first.

In an example 10-for-1 stock split, trading will be halted for the stock at the end of the `payable_date`, as
the split transitions from `PENDING` to `IN_PROGRESS`. This usually occurs over a weekend to minimize trading
disruptions. Each share of stock owned by a shareholder will then be converted into 10 shares, and the split
becomes `COMPLETE` as trading resumes on the `ex_date` with new split-adjusted prices.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.corporateActions.getStockSplitsById({
    stockId: "stock_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetStockSplitsByIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CorporateActionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.corporateActions.<a href="/src/api/resources/corporateActions/client/Client.ts">getStockDividendsByStockId</a>({ ...params }) -> Dinari.StockDividendAnnouncementDetail[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


Get a list of announced stock dividend details for a specified `Stock`.

Note that this data applies only to actual stocks. Yield received for holding tokenized shares may differ from this.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.corporateActions.getStockDividendsByStockId({
    stockId: "stock_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetStockDividendsByStockIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CorporateActionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Entities
<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">getEntities</a>({ ...params }) -> Dinari.GetEntitiesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of direct `Entities` your organization manages. These `Entities` represent individual customers of your organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.getEntities();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetEntitiesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntitiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">createEntities</a>({ ...params }) -> Dinari.Entity1</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new `Entity` to be managed by your organization. This `Entity` represents an individual customer of your organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.createEntities({
    name: "name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.CreateEntityInput` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntitiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">getCurrentEntity</a>() -> Dinari.Entity1</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the current authenticated `Entity`, which represents your organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.getCurrentEntity();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `EntitiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">getEntityById</a>({ ...params }) -> Dinari.Entity1</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a specific customer `Entity` of your organization by their ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.getEntityById({
    entityId: "entity_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetEntityByIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntitiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">updateEntityById</a>({ ...params }) -> Dinari.Entity1</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a specific customer `Entity` of your organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entities.updateEntityById({
    entityId: "entity_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.PatchEntityInput` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntitiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounts
<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">getEntityAccounts</a>({ ...params }) -> Dinari.GetEntityAccountsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of all `Accounts` that belong to a specific `Entity`. This `Entity` represents your organization itself, or an individual customer of your organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.getEntityAccounts({
    entityId: "entity_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetEntityAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">createEntityAccounts</a>({ ...params }) -> Dinari.Account1</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new `Account` for a specific `Entity`. This `Entity` represents your organization itself, or an individual customer of your organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.createEntityAccounts({
    entityId: "entity_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.CreateAccountInput` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">getAccount</a>({ ...params }) -> Dinari.Account1</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a specific `Account` by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.getAccount({
    accountId: "account_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetAccountRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">createAccountDeactivation</a>({ ...params }) -> Dinari.Account1</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Set the `Account` to be inactive. Inactive accounts cannot be used for trading.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.createAccountDeactivation({
    accountId: "account_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.CreateAccountDeactivationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">getAccountPortfolio</a>({ ...params }) -> Dinari.Portfolio</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the portfolio of the `Account`, excluding cash equivalents such as stablecoins.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.getAccountPortfolio({
    accountId: "account_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetAccountPortfolioRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">getAccountCash</a>({ ...params }) -> Dinari.PaymentTokenBalance[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the cash balances of the `Account`, including stablecoins and other cash equivalents.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.getAccountCash({
    accountId: "account_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetAccountCashRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">getAccountInterestPayments</a>({ ...params }) -> Dinari.GetAccountInterestPaymentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


Get interest payments made to the `Account` from yield-bearing cash holdings.

Currently, the only yield-bearing stablecoin accepted by Dinari is [USD+](https://usd.dinari.com/).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.getAccountInterestPayments({
    accountId: "account_id",
    startDate: "2023-01-15",
    endDate: "2023-01-15"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetAccountInterestPaymentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">getAccountDividendPayments</a>({ ...params }) -> Dinari.GetAccountDividendPaymentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get dividend payments made to the `Account` from dividend-bearing stock holdings.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.getAccountDividendPayments({
    accountId: "account_id",
    startDate: "2023-01-15",
    endDate: "2023-01-15"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetAccountDividendPaymentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">createAccountFaucet</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


Mints 1,000 mockUSD sandbox payment tokens to the `Wallet` connected to the `Account`.

This feature is only supported in sandbox mode.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.createAccountFaucet({
    accountId: "account_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.FaucetInput` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">getBrokerageAccountActivities</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


Get a list of brokerage activities tied to the specified `Account`.

**⚠️ ALPHA: This endpoint is in early development and subject to breaking changes.**
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.getBrokerageAccountActivities({
    accountId: "account_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetBrokerageAccountActivitiesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">getTokenTransfers</a>({ ...params }) -> Dinari.GetTokenTransfersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


Get `TokenTransfer`s made from this `Account`.

A `TokenTransfer` represents a transfer of tokens through the Dinari platform from one `Account` to another.
As such, only `Account`s that are connected to Dinari-managed `Wallet`s can initiate `TokenTransfer`s.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.getTokenTransfers({
    accountId: "account_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetTokenTransfersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">createTokenTransfers</a>({ ...params }) -> Dinari.TokenTransfer</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


Creates a `TokenTransfer` from this `Account`.

A `TokenTransfer` represents a transfer of tokens through the Dinari platform from one `Account` to another.
As such, only `Account`s that are connected to Dinari-managed `Wallet`s can initiate `TokenTransfer`s.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.createTokenTransfers({
    accountId: "account_id",
    recipientAccountId: "recipient_account_id",
    tokenAddress: "token_address",
    quantity: 1.1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.CreateManagedTokenTransferInput` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">getTokenTransfer</a>({ ...params }) -> Dinari.TokenTransfer</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


Get a specific `TokenTransfer` made from this `Account` by its ID.

A `TokenTransfer` represents a transfer of tokens through the Dinari platform from one `Account` to another.
As such, only `Account`s that are connected to Dinari-managed `Wallet`s can initiate `TokenTransfer`s.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.getTokenTransfer({
    accountId: "account_id",
    transferId: "transfer_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetTokenTransferRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## KYC
<details><summary><code>client.kyc.<a href="/src/api/resources/kyc/client/Client.ts">getEntityKyc</a>({ ...params }) -> Dinari.Kyc</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


Get most recent KYC data of the `Entity`.

If there are any completed KYC checks, data from the most recent one will be returned.
If there are no completed KYC checks, the most recent KYC check information, regardless of status, will be returned.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.kyc.getEntityKyc({
    entityId: "entity_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetEntityKycRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KycClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.kyc.<a href="/src/api/resources/kyc/client/Client.ts">createEntityKyc</a>({ ...params }) -> Dinari.Kyc</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


Submit KYC data directly, for partners that are provisioned to provide their own KYC data.

This feature is available for everyone in sandbox mode, and for specifically provisioned partners in production.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.kyc.createEntityKyc({
    entityId: "entity_id",
    body: {
        jurisdiction: "BASELINE",
        data: {
            countryCode: "SG",
            lastName: "Doe",
            addressCountryCode: "SG"
        },
        providerName: "provider_name"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.CreateEntityKycRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KycClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.kyc.<a href="/src/api/resources/kyc/client/Client.ts">getEntityKycDocument</a>({ ...params }) -> Dinari.KycDocument[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get uploaded documents for a KYC check
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.kyc.getEntityKycDocument({
    entityId: "entity_id",
    kycId: "kyc_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetEntityKycDocumentRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KycClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.kyc.<a href="/src/api/resources/kyc/client/Client.ts">createEntityKycDocument</a>({ ...params }) -> Dinari.KycDocument</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


Upload KYC-related documentation for partners that are provisioned to provide their own KYC data.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.kyc.createEntityKycDocument({
    file: fs.createReadStream("/path/to/your/file"),
    entityId: "entity_id",
    kycId: "kyc_id",
    documentType: "GOVERNMENT_ID"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.CreateKycDocumentFileInput` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KycClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.kyc.<a href="/src/api/resources/kyc/client/Client.ts">createManagedEntityKycEmbed</a>({ ...params }) -> Dinari.ManagedKycEmbed</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


Create a Dinari-managed KYC Check and get a URL for your end customer to interact with.

The URL points to a web-based KYC interface that can be presented to the end customer for KYC verification.
Once the customer completes this KYC flow, the KYC check will be created and available in the KYC API.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.kyc.createManagedEntityKycEmbed({
    entityId: "entity_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.CreateManagedKycInput` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KycClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Orders
<details><summary><code>client.orders.<a href="/src/api/resources/orders/client/Client.ts">getEntityOrders</a>({ ...params }) -> Dinari.GetEntityOrdersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of all `Orders` under the `Entity`.<br>Optionally `Orders` can be transaction hash or fulfillment transaction hash.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.getEntityOrders();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetEntityOrdersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.orders.<a href="/src/api/resources/orders/client/Client.ts">getOrders</a>({ ...params }) -> Dinari.GetOrdersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of all `Orders` under the `Account`.<br>Optionally `Orders` can be filtered by chain ID, transaction hash, or client order ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.getOrders({
    accountId: "account_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetOrdersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.orders.<a href="/src/api/resources/orders/client/Client.ts">getOrderById</a>({ ...params }) -> Dinari.Order</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a specific `Order` by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.getOrderById({
    accountId: "account_id",
    orderId: "order_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetOrderByIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.orders.<a href="/src/api/resources/orders/client/Client.ts">createOrderCancellation</a>({ ...params }) -> Dinari.Order</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


Cancel an `Order` by its ID. Note that this requires the `Order` ID, not the `OrderRequest` ID.
Once you submit a cancellation request, it cannot be undone. Be advised that orders with a
status of PENDING_FILL, PENDING_ESCROW, FILLED, REJECTED, or CANCELLED cannot be cancelled.

`Order` cancellation is not guaranteed nor is it immediate. The `Order` may still be executed
if the cancellation request is not received in time.

Check the status using the "Get Order by ID" endpoint to confirm whether the `Order` has been cancelled.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.createOrderCancellation({
    accountId: "account_id",
    orderId: "order_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.CreateOrderCancellationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.orders.<a href="/src/api/resources/orders/client/Client.ts">createBatchOrderCancellation</a>({ ...params }) -> Dinari.BatchCancelOrderResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


Cancel multiple `Orders` by their IDs in a single request. Note that this requires the `Order` IDs, not the `OrderRequest` IDs.
Once you submit a cancellation request, it cannot be undone. Be advised that orders with a
status of PENDING_FILL, PENDING_ESCROW, FILLED, REJECTED, or CANCELLED cannot be cancelled.

`Order` cancellation is not guaranteed nor is it immediate. The `Orders` may still be executed
if the cancellation request is not received in time.

The response will indicate which orders were successfully queued to cancel and which failed to queue.
Check the status using the "Get Order by ID" endpoint to confirm whether individual `Orders` have been cancelled.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.createBatchOrderCancellation({
    accountId: "account_id",
    orderIds: ["order_ids"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.BatchCancelOrderInput` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.orders.<a href="/src/api/resources/orders/client/Client.ts">getAccountAllOrderFulfillments</a>({ ...params }) -> Dinari.GetAccountAllOrderFulfillmentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query `OrderFulfillments` under the `Account`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.getAccountAllOrderFulfillments({
    accountId: "account_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetAccountAllOrderFulfillmentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.orders.<a href="/src/api/resources/orders/client/Client.ts">getAccountOrderFulfillments</a>({ ...params }) -> Dinari.GetAccountOrderFulfillmentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get `OrderFulfillments` for a specific `Order`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.getAccountOrderFulfillments({
    accountId: "account_id",
    orderId: "order_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetAccountOrderFulfillmentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.orders.<a href="/src/api/resources/orders/client/Client.ts">getAccountOrderFulfillmentById</a>({ ...params }) -> Dinari.OrderFulfillment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a specific `OrderFulfillment` by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orders.getAccountOrderFulfillmentById({
    accountId: "account_id",
    orderFulfillmentId: "order_fulfillment_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetAccountOrderFulfillmentByIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Wallets
<details><summary><code>client.wallets.<a href="/src/api/resources/wallets/client/Client.ts">getWallet</a>({ ...params }) -> Dinari.Wallet</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the wallet connected to the `Account`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.wallets.getWallet({
    accountId: "account_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetWalletRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WalletsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.wallets.<a href="/src/api/resources/wallets/client/Client.ts">getAccountWalletConnectionNonce</a>({ ...params }) -> Dinari.AccountWalletConnectionMessage</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a nonce and message to be signed in order to verify `Wallet` ownership.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.wallets.getAccountWalletConnectionNonce({
    accountId: "account_id",
    walletAddress: "wallet_address",
    chainId: "eip155:0"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetAccountWalletConnectionNonceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WalletsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.wallets.<a href="/src/api/resources/wallets/client/Client.ts">createAccountWalletConnection</a>({ ...params }) -> Dinari.Wallet</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Connect a `Wallet` to the `Account` after verifying the signature.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.wallets.createAccountWalletConnection({
    accountId: "account_id",
    signature: "signature",
    nonce: "nonce",
    walletAddress: "wallet_address",
    chainId: "eip155:0"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.CreateAccountWalletConnectionInput` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WalletsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.wallets.<a href="/src/api/resources/wallets/client/Client.ts">createAccountWalletInternalConnection</a>({ ...params }) -> Dinari.Wallet</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Connect an internal `Wallet` to the `Account`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.wallets.createAccountWalletInternalConnection({
    accountId: "account_id",
    walletAddress: "wallet_address",
    chainId: "eip155:0"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.CreateAccountWalletInternalConnectionInput` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WalletsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Order Requests
<details><summary><code>client.orderRequests.<a href="/src/api/resources/orderRequests/client/Client.ts">getListOrderRequests</a>({ ...params }) -> Dinari.GetListOrderRequestsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists `OrderRequests`.<br>Optionally `OrderRequests` can be filtered by certain parameters.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orderRequests.getListOrderRequests({
    accountId: "account_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetListOrderRequestsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrderRequestsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.orderRequests.<a href="/src/api/resources/orderRequests/client/Client.ts">getOrderRequestById</a>({ ...params }) -> Dinari.OrderRequest</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a specific `OrderRequest` by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orderRequests.getOrderRequestById({
    accountId: "account_id",
    orderRequestId: "order_request_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetOrderRequestByIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrderRequestsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.orderRequests.<a href="/src/api/resources/orderRequests/client/Client.ts">createEip155OrderRequestPermit</a>({ ...params }) -> Dinari.Eip155OrderRequestPermit</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


Generates a permit that can be signed and used to create an `OrderRequest` using Dinari's EVM smart contracts.

This is a convenience method to prepare the transactions needed to create an `OrderRequest` using Dinari's EVM smart contracts.
Once signed, the transactions can be sent to the EVM network to create the order.
Note that the fee quote is already included in the transactions, so no additional fee quote lookup is needed.

Fees for the `Order` can optionally be specified in the `OrderRequest` for DFN orders in USD, supporting up to 6 decimal places.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orderRequests.createEip155OrderRequestPermit({
    accountId: "account_id",
    chainId: "eip155:1",
    orderTif: "DAY",
    orderSide: "BUY",
    orderType: "MARKET",
    paymentToken: "payment_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.Eip155OrderRequestPermitInput` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrderRequestsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.orderRequests.<a href="/src/api/resources/orderRequests/client/Client.ts">createEip155OrderRequestPermitTransaction</a>({ ...params }) -> Dinari.Eip155OrderRequest</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


Submits a transaction for an EIP155 Order Request given the EIP155OrderRequest ID and Permit Signature.

An `EIP155OrderRequest` representing the proxied order is returned.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orderRequests.createEip155OrderRequestPermitTransaction({
    accountId: "account_id",
    body: {
        orderRequestId: "order_request_id",
        permitSignature: "permit_signature"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.CreateEip155OrderRequestPermitTransactionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrderRequestsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.orderRequests.<a href="/src/api/resources/orderRequests/client/Client.ts">createEip155PermitTransaction</a>({ ...params }) -> Dinari.Eip155Transaction</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


Prepare a transaction to be placed on EVM. The returned structure contains the necessary
data to create an `EIP155Transaction` object.

Safe wallets can send `0x` as `permit_signature`. Those orders aren't simulated before they're returned.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.orderRequests.createEip155PermitTransaction({
    accountId: "account_id",
    body: {
        orderRequestId: "order_request_id",
        permitSignature: "permit_signature"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.CreateEip155PermitTransactionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrderRequestsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Managed Orders
<details><summary><code>client.managedOrders.<a href="/src/api/resources/managedOrders/client/Client.ts">createMarketBuyManagedOrderRequest</a>({ ...params }) -> Dinari.OrderRequest</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


Create a managed `OrderRequest` to place a market buy `Order`.

Fees for the `Order` can optionally be specified in the `OrderRequest` for DFN orders in USD, supporting up to 6 decimal places

If an `OrderRequest` with the same `client_order_id` already exists for the given account, the creation call will fail.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.managedOrders.createMarketBuyManagedOrderRequest({
    accountId: "account_id",
    paymentAmount: 1.1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.CreateMarketBuyOrderRequestInput` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ManagedOrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.managedOrders.<a href="/src/api/resources/managedOrders/client/Client.ts">createMarketSellManagedOrderRequest</a>({ ...params }) -> Dinari.OrderRequest</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


Create a managed `OrderRequest` to place a market sell `Order`.

Fees for the `Order` can optionally be specified in the `OrderRequest` for DFN orders in USD, supporting up to 6 decimal places

If an `OrderRequest` with the same `client_order_id` already exists for the given account, the creation call will fail.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.managedOrders.createMarketSellManagedOrderRequest({
    accountId: "account_id",
    assetQuantity: 1.1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.CreateMarketSellOrderRequestInput` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ManagedOrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.managedOrders.<a href="/src/api/resources/managedOrders/client/Client.ts">createLimitBuyManagedOrderRequest</a>({ ...params }) -> Dinari.OrderRequest</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


Create a managed `OrderRequest` to place a limit buy `Order`.

Fees for the `Order` can optionally be specified in the `OrderRequest` for DFN orders in USD, supporting up to 6 decimal places

If an `OrderRequest` with the same `client_order_id` already exists for the given account, the creation call will fail.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.managedOrders.createLimitBuyManagedOrderRequest({
    accountId: "account_id",
    assetQuantity: 1.1,
    limitPrice: 1.1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.CreateLimitOrderBuyRequestInput` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ManagedOrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.managedOrders.<a href="/src/api/resources/managedOrders/client/Client.ts">createLimitSellManagedOrderRequest</a>({ ...params }) -> Dinari.OrderRequest</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


Create a managed `OrderRequest` to place a limit sell `Order`.

Fees for the `Order` can optionally be specified in the `OrderRequest` for DFN orders in USD, supporting up to 6 decimal places

If an `OrderRequest` with the same `client_order_id` already exists for the given account, the creation call will fail.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.managedOrders.createLimitSellManagedOrderRequest({
    accountId: "account_id",
    assetQuantity: 1.1,
    limitPrice: 1.1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.CreateLimitOrderSellRequestInput` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ManagedOrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Withdrawals
<details><summary><code>client.withdrawals.<a href="/src/api/resources/withdrawals/client/Client.ts">getAccountWithdrawalRequests</a>({ ...params }) -> Dinari.GetAccountWithdrawalRequestsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List `WithdrawalRequests` under the `Account`, sorted by most recent.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.withdrawals.getAccountWithdrawalRequests({
    accountId: "account_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetAccountWithdrawalRequestsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WithdrawalsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.withdrawals.<a href="/src/api/resources/withdrawals/client/Client.ts">createAccountWithdrawalRequests</a>({ ...params }) -> Dinari.WithdrawalRequest1</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


Request to withdraw USD+ payment tokens from a managed `Account` and send the equivalent amount of USDC to the specified recipient `Account`.

The recipient `Account` must belong to the same `Entity` as the managed `Account`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.withdrawals.createAccountWithdrawalRequests({
    accountId: "account_id",
    recipientAccountId: "recipient_account_id",
    paymentTokenQuantity: 1.1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.CreateWithdrawalRequestInput` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WithdrawalsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.withdrawals.<a href="/src/api/resources/withdrawals/client/Client.ts">getAccountWithdrawalRequest</a>({ ...params }) -> Dinari.WithdrawalRequest1</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a specific `WithdrawalRequest` by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.withdrawals.getAccountWithdrawalRequest({
    accountId: "account_id",
    withdrawalRequestId: "withdrawal_request_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetAccountWithdrawalRequestRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WithdrawalsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.withdrawals.<a href="/src/api/resources/withdrawals/client/Client.ts">getAccountWithdrawals</a>({ ...params }) -> Dinari.GetAccountWithdrawalsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of all `Withdrawals` under the `Account`, sorted by most recent.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.withdrawals.getAccountWithdrawals({
    accountId: "account_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetAccountWithdrawalsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WithdrawalsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.withdrawals.<a href="/src/api/resources/withdrawals/client/Client.ts">getAccountWithdrawal</a>({ ...params }) -> Dinari.Withdrawal1</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a specific `Withdrawal` by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.withdrawals.getAccountWithdrawal({
    accountId: "account_id",
    withdrawalId: "withdrawal_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Dinari.GetAccountWithdrawalRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WithdrawalsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

