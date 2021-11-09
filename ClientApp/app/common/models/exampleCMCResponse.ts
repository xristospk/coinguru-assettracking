export class CoinMarketCapMockResponse {
    public static apiResponse: string = `
    {
        "status": {
            "timestamp": "2021-11-09T06:58:49.106Z",
            "error_code": 0,
            "error_message": null,
            "elapsed": 17,
            "credit_count": 1,
            "notice": null,
            "total_count": 7162
        },
        "data": [
            {
                "id": 1,
                "name": "Bitcoin",
                "symbol": "BTC",
                "slug": "bitcoin",
                "num_market_pairs": 8293,
                "date_added": "2013-04-28T00:00:00.000Z",
                "tags": [
                    "mineable",
                    "pow",
                    "sha-256",
                    "store-of-value",
                    "state-channels",
                    "coinbase-ventures-portfolio",
                    "three-arrows-capital-portfolio",
                    "polychain-capital-portfolio",
                    "binance-labs-portfolio",
                    "arrington-xrp-capital",
                    "blockchain-capital-portfolio",
                    "boostvc-portfolio",
                    "cms-holdings-portfolio",
                    "dcg-portfolio",
                    "dragonfly-capital-portfolio",
                    "electric-capital-portfolio",
                    "fabric-ventures-portfolio",
                    "framework-ventures",
                    "galaxy-digital-portfolio",
                    "huobi-capital",
                    "alameda-research-portfolio",
                    "a16z-portfolio",
                    "1confirmation-portfolio",
                    "winklevoss-capital",
                    "usv-portfolio",
                    "placeholder-ventures-portfolio",
                    "pantera-capital-portfolio",
                    "multicoin-capital-portfolio",
                    "paradigm-xzy-screener"
                ],
                "max_supply": 21000000,
                "circulating_supply": 18867950,
                "total_supply": 18867950,
                "platform": null,
                "cmc_rank": 1,
                "last_updated": "2021-11-09T06:58:02.000Z",
                "quote": {
                    "EUR": {
                        "price": 58668.58316127178,
                        "volume_24h": 34988215235.06525,
                        "volume_change_24h": 24.039,
                        "percent_change_1h": -0.31890983,
                        "percent_change_24h": 2.42525145,
                        "percent_change_7d": 8.46849407,
                        "percent_change_30d": 22.36202961,
                        "percent_change_60d": 46.58660714,
                        "percent_change_90d": 47.53400658,
                        "market_cap": 1106955893657.718,
                        "market_cap_dominance": 43.7799,
                        "fully_diluted_market_cap": 1232040246386.7043,
                        "last_updated": "2021-11-09T06:58:46.000Z"
                    }
                }
            },
            {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "num_market_pairs": 4540,
                "date_added": "2015-08-07T00:00:00.000Z",
                "tags": [
                    "mineable",
                    "pow",
                    "smart-contracts",
                    "ethereum",
                    "binance-smart-chain",
                    "coinbase-ventures-portfolio",
                    "three-arrows-capital-portfolio",
                    "polychain-capital-portfolio",
                    "binance-labs-portfolio",
                    "arrington-xrp-capital",
                    "blockchain-capital-portfolio",
                    "boostvc-portfolio",
                    "cms-holdings-portfolio",
                    "dcg-portfolio",
                    "dragonfly-capital-portfolio",
                    "electric-capital-portfolio",
                    "fabric-ventures-portfolio",
                    "framework-ventures",
                    "hashkey-capital-portfolio",
                    "kinetic-capital",
                    "huobi-capital",
                    "alameda-research-portfolio",
                    "a16z-portfolio",
                    "1confirmation-portfolio",
                    "winklevoss-capital",
                    "usv-portfolio",
                    "placeholder-ventures-portfolio",
                    "pantera-capital-portfolio",
                    "multicoin-capital-portfolio",
                    "paradigm-xzy-screener"
                ],
                "max_supply": null,
                "circulating_supply": 118268088.6865,
                "total_supply": 118268088.6865,
                "platform": null,
                "cmc_rank": 2,
                "last_updated": "2021-11-09T06:58:02.000Z",
                "quote": {
                    "EUR": {
                        "price": 4150.645691415999,
                        "volume_24h": 16704736832.679247,
                        "volume_change_24h": 15.0122,
                        "percent_change_1h": -0.40732943,
                        "percent_change_24h": 0.71078389,
                        "percent_change_7d": 8.27879462,
                        "percent_change_30d": 33.76511608,
                        "percent_change_60d": 40.66238955,
                        "percent_change_90d": 50.38784326,
                        "market_cap": 490888932738.6265,
                        "market_cap_dominance": 19.4049,
                        "fully_diluted_market_cap": 490888932738.62726,
                        "last_updated": "2021-11-09T06:58:46.000Z"
                    }
                }
            }
        ]
    }`
}