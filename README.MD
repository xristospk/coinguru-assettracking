# CoinGuru Asset Tracking and Crypto Monitor
<img width="1094" alt="image" src="https://user-images.githubusercontent.com/26623619/140985127-334cafb8-1bd6-4d4d-a498-312245071526.png">
<img width="524" alt="image" src="https://user-images.githubusercontent.com/26623619/140987373-1237051f-9df0-4ab4-90c9-630741b79c11.png">

## About
4 years ago I was tired of calculating my crypto assets into the corresponding estimated value in fiat-money (EUR) or BTC and made this tool during a lecture about HR management. Deployed it to an Azure App Service to check my assets from everywhere and everytime.  

## (2017) State of the art Server Side SPA
* ASP.NET Core (.NET Core 2.0)
* Angular 2 + Karma Test Runner
* Server Side Rendering (aspnet-prerendering & @angular/platform-server)
* Webpack (aspnet-webpack & @ngtools/webpack)
* TypeScript & awesome-typescript-browser

## How to use
1. Create a CoinMarketCap Account @ https://pro.coinmarketcap.com/signup/ and get your API-Key 
2. Paste your key into [coinmarketcap.service.ts](https://github.com/xristospk/coinguru-assettracking/blob/057ffbd10cfdbecf58bf07e495a6cfc77de24acf/ClientApp/app/common/services/coinmarketcap.service.ts#L13)
3. Add your assets into [home.component.ts - currencyAssets](https://github.com/xristospk/coinguru-assettracking/blob/057ffbd10cfdbecf58bf07e495a6cfc77de24acf/ClientApp/app/components/home/home.component.ts#L24)

<br>
<br>
