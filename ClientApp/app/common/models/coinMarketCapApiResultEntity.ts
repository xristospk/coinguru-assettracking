// KINDLY TRANSFORMED THE CoinMarketCap JSON API RESPONSE INTO TypeScript INTERFACES WITH
// THE HELP OF http://json2ts.com
// THANK YOU !! <3  

export interface CoinMarketCapApiResultEntity {
    status: ApiStatusResponse;
    data: CryptoCurrency[];
}

export interface ApiStatusResponse {
    timestamp: Date;
    error_code: number;
    error_message?: any;
    elapsed: number;
    credit_count: number;
    notice?: any;
    total_count: number;
}

export interface CryptoCurrency {
    id: number;
    amount: number;
    name: string;
    symbol: string;
    slug: string;
    num_market_pairs: number;
    date_added: Date;
    tags: string[];
    max_supply?: number;
    circulating_supply: number;
    total_supply: number;
    platform?: any;
    cmc_rank: number;
    last_updated: Date;
    quote: Quote;
}

export interface Quote {
    EUR: CurrencyPerformance;
}

export interface CurrencyPerformance {
    price: number;
    volume_24h: number;
    volume_change_24h: number;
    percent_change_1h: number;
    percent_change_24h: number;
    percent_change_7d: number;
    percent_change_30d: number;
    percent_change_60d: number;
    percent_change_90d: number;
    market_cap: number;
    market_cap_dominance: number;
    fully_diluted_market_cap: number;
    last_updated: Date;
}
