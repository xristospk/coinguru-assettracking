export class CoinMarketCapMockResponse {
    public static apiResponse: string = `
    {
        "status": {
            "timestamp": "2021-11-09T17:27:05.379Z",
            "error_code": 0,
            "error_message": null,
            "elapsed": 24,
            "credit_count": 1,
            "notice": null,
            "total_count": 7208
        },
        "data": [
            {
                "id": 1,
                "name": "Bitcoin",
                "symbol": "BTC",
                "slug": "bitcoin",
                "num_market_pairs": 8298,
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
                "circulating_supply": 18868406,
                "total_supply": 18868406,
                "platform": null,
                "cmc_rank": 1,
                "last_updated": "2021-11-09T17:26:02.000Z",
                "quote": {
                    "EUR": {
                        "price": 57459.315898692024,
                        "volume_24h": 37693219984.29997,
                        "volume_change_24h": 17.788,
                        "percent_change_1h": -0.42033618,
                        "percent_change_24h": 0.17587585,
                        "percent_change_7d": 3.09445569,
                        "percent_change_30d": 20.75105255,
                        "percent_change_60d": 46.02672,
                        "percent_change_90d": 43.55755424,
                        "market_cap": 1084165700858.776,
                        "market_cap_dominance": 43.4365,
                        "fully_diluted_market_cap": 1206645633872.5344,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "num_market_pairs": 4542,
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
                "circulating_supply": 118273505.0615,
                "total_supply": 118273505.0615,
                "platform": null,
                "cmc_rank": 2,
                "last_updated": "2021-11-09T17:26:02.000Z",
                "quote": {
                    "EUR": {
                        "price": 4105.657879385224,
                        "volume_24h": 18019308273.062862,
                        "volume_change_24h": 16.3984,
                        "percent_change_1h": -0.77928462,
                        "percent_change_24h": -1.45925961,
                        "percent_change_7d": 4.3981585,
                        "percent_change_30d": 35.29083548,
                        "percent_change_60d": 43.31686499,
                        "percent_change_90d": 47.05662672,
                        "market_cap": 485590547978.2556,
                        "market_cap_dominance": 19.4482,
                        "fully_diluted_market_cap": 485590547978.25836,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 1839,
                "name": "Binance Coin",
                "symbol": "BNB",
                "slug": "binance-coin",
                "num_market_pairs": 551,
                "date_added": "2017-07-25T00:00:00.000Z",
                "tags": [
                    "marketplace",
                    "centralized-exchange",
                    "payments",
                    "smart-contracts",
                    "binance-smart-chain",
                    "alameda-research-portfolio",
                    "multicoin-capital-portfolio"
                ],
                "max_supply": 166801148,
                "circulating_supply": 166801148,
                "total_supply": 166801148,
                "platform": null,
                "cmc_rank": 3,
                "last_updated": "2021-11-09T17:25:09.000Z",
                "quote": {
                    "EUR": {
                        "price": 546.5181317741897,
                        "volume_24h": 1965044113.4021885,
                        "volume_change_24h": -19.4231,
                        "percent_change_1h": -1.6606545,
                        "percent_change_24h": -3.10602115,
                        "percent_change_7d": 11.31077837,
                        "percent_change_30d": 52.73498547,
                        "percent_change_60d": 56.18937972,
                        "percent_change_90d": 59.50588852,
                        "market_cap": 91159851782.7501,
                        "market_cap_dominance": 3.651,
                        "fully_diluted_market_cap": 91159851782.75082,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 2010,
                "name": "Cardano",
                "symbol": "ADA",
                "slug": "cardano",
                "num_market_pairs": 305,
                "date_added": "2017-10-01T00:00:00.000Z",
                "tags": [
                    "mineable",
                    "dpos",
                    "pos",
                    "platform",
                    "research",
                    "smart-contracts",
                    "staking",
                    "binance-smart-chain",
                    "cardano-ecosystem"
                ],
                "max_supply": 45000000000,
                "circulating_supply": 33284600964.599,
                "total_supply": 33697893006.831,
                "platform": null,
                "cmc_rank": 4,
                "last_updated": "2021-11-09T17:25:10.000Z",
                "quote": {
                    "EUR": {
                        "price": 1.9484933976624792,
                        "volume_24h": 6080847289.329919,
                        "volume_change_24h": 196.3054,
                        "percent_change_1h": -0.50369793,
                        "percent_change_24h": 7.13265925,
                        "percent_change_7d": 11.6573334,
                        "percent_change_30d": 1.57041375,
                        "percent_change_60d": -6.4247152,
                        "percent_change_90d": 21.6383376,
                        "market_cap": 64854825223.35133,
                        "market_cap_dominance": 2.6,
                        "fully_diluted_market_cap": 87682202894.81528,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 825,
                "name": "Tether",
                "symbol": "USDT",
                "slug": "tether",
                "num_market_pairs": 18784,
                "date_added": "2015-02-25T00:00:00.000Z",
                "tags": [
                    "payments",
                    "stablecoin",
                    "stablecoin-asset-backed",
                    "binance-smart-chain",
                    "avalanche-ecosystem",
                    "solana-ecosystem"
                ],
                "max_supply": null,
                "circulating_supply": 73266304634.5213,
                "total_supply": 76357845272.35158,
                "platform": {
                    "id": 1027,
                    "name": "Ethereum",
                    "symbol": "ETH",
                    "slug": "ethereum",
                    "token_address": "0xdac17f958d2ee523a2206206994597c13d831ec7"
                },
                "cmc_rank": 5,
                "last_updated": "2021-11-09T17:25:10.000Z",
                "quote": {
                    "EUR": {
                        "price": 0.8629307927425935,
                        "volume_24h": 79516324851.51231,
                        "volume_change_24h": 22.3597,
                        "percent_change_1h": -0.17437421,
                        "percent_change_24h": -0.73981979,
                        "percent_change_7d": -1.59796635,
                        "percent_change_30d": 0.05783488,
                        "percent_change_60d": 0.00728705,
                        "percent_change_90d": -0.02039773,
                        "market_cap": 63223750339.58782,
                        "market_cap_dominance": 2.5322,
                        "fully_diluted_market_cap": 65891535952.98478,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 5426,
                "name": "Solana",
                "symbol": "SOL",
                "slug": "solana",
                "num_market_pairs": 179,
                "date_added": "2020-04-10T00:00:00.000Z",
                "tags": [
                    "pos",
                    "platform",
                    "solana-ecosystem",
                    "cms-holdings-portfolio",
                    "kinetic-capital",
                    "alameda-research-portfolio",
                    "multicoin-capital-portfolio"
                ],
                "max_supply": null,
                "circulating_supply": 302649020.7428145,
                "total_supply": 508586993.82599694,
                "platform": null,
                "cmc_rank": 6,
                "last_updated": "2021-11-09T17:26:04.000Z",
                "quote": {
                    "EUR": {
                        "price": 207.12868119928996,
                        "volume_24h": 2549444795.3131576,
                        "volume_change_24h": -10.3555,
                        "percent_change_1h": -0.2499128,
                        "percent_change_24h": -3.76079619,
                        "percent_change_7d": 11.37484471,
                        "percent_change_30d": 57.50691581,
                        "percent_change_60d": 36.56077898,
                        "percent_change_90d": 460.84709844,
                        "market_cap": 62687292532.715706,
                        "market_cap_dominance": 2.5115,
                        "fully_diluted_market_cap": 105342953306.2922,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 52,
                "name": "XRP",
                "symbol": "XRP",
                "slug": "xrp",
                "num_market_pairs": 641,
                "date_added": "2013-08-04T00:00:00.000Z",
                "tags": [
                    "medium-of-exchange",
                    "enterprise-solutions",
                    "binance-chain",
                    "arrington-xrp-capital",
                    "galaxy-digital-portfolio",
                    "a16z-portfolio",
                    "pantera-capital-portfolio"
                ],
                "max_supply": 100000000000,
                "circulating_supply": 47081679946,
                "total_supply": 99990161790,
                "platform": null,
                "cmc_rank": 7,
                "last_updated": "2021-11-09T17:26:03.000Z",
                "quote": {
                    "EUR": {
                        "price": 1.0809397622979897,
                        "volume_24h": 4555314404.926807,
                        "volume_change_24h": -0.5494,
                        "percent_change_1h": -0.1530159,
                        "percent_change_24h": -0.5498156,
                        "percent_change_7d": 8.76489716,
                        "percent_change_30d": 7.22144228,
                        "percent_change_60d": 16.89677749,
                        "percent_change_90d": 28.68208547,
                        "market_cap": 50892459929.419266,
                        "market_cap_dominance": 2.0403,
                        "fully_diluted_market_cap": 108093976229.79811,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 6636,
                "name": "Polkadot",
                "symbol": "DOT",
                "slug": "polkadot-new",
                "num_market_pairs": 244,
                "date_added": "2020-08-19T00:00:00.000Z",
                "tags": [
                    "substrate",
                    "polkadot",
                    "binance-chain",
                    "binance-smart-chain",
                    "polkadot-ecosystem",
                    "three-arrows-capital-portfolio",
                    "polychain-capital-portfolio",
                    "blockchain-capital-portfolio",
                    "boostvc-portfolio",
                    "cms-holdings-portfolio",
                    "coinfund-portfolio",
                    "fabric-ventures-portfolio",
                    "fenbushi-capital-portfolio",
                    "hashkey-capital-portfolio",
                    "kinetic-capital",
                    "1confirmation-portfolio",
                    "placeholder-ventures-portfolio",
                    "pantera-capital-portfolio",
                    "exnetwork-capital-portfolio"
                ],
                "max_supply": null,
                "circulating_supply": 987579314.957085,
                "total_supply": 1103303471.382273,
                "platform": null,
                "cmc_rank": 8,
                "last_updated": "2021-11-09T17:26:06.000Z",
                "quote": {
                    "EUR": {
                        "price": 43.95861232834425,
                        "volume_24h": 1667541018.0506964,
                        "volume_change_24h": 16.8768,
                        "percent_change_1h": -0.6021101,
                        "percent_change_24h": -5.41696275,
                        "percent_change_7d": -2.42161048,
                        "percent_change_30d": 43.37314381,
                        "percent_change_60d": 73.97734815,
                        "percent_change_90d": 130.812095,
                        "market_cap": 43412616249.69029,
                        "market_cap_dominance": 1.7383,
                        "fully_diluted_market_cap": 48499689579.01216,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 74,
                "name": "Dogecoin",
                "symbol": "DOGE",
                "slug": "dogecoin",
                "num_market_pairs": 403,
                "date_added": "2013-12-15T00:00:00.000Z",
                "tags": [
                    "mineable",
                    "pow",
                    "scrypt",
                    "medium-of-exchange",
                    "memes",
                    "payments",
                    "binance-smart-chain",
                    "doggone-doggerel"
                ],
                "max_supply": null,
                "circulating_supply": 132038500953.17914,
                "total_supply": 132038500953.17914,
                "platform": null,
                "cmc_rank": 9,
                "last_updated": "2021-11-09T17:26:03.000Z",
                "quote": {
                    "EUR": {
                        "price": 0.23639734769432164,
                        "volume_24h": 2320732290.5821576,
                        "volume_change_24h": -26.2955,
                        "percent_change_1h": -1.08738539,
                        "percent_change_24h": -2.0025924,
                        "percent_change_7d": -1.14608041,
                        "percent_change_30d": 14.09509824,
                        "percent_change_60d": 12.74610009,
                        "percent_change_90d": -1.32040521,
                        "market_cap": 31213551418.865707,
                        "market_cap_dominance": 1.2514,
                        "fully_diluted_market_cap": 31213551418.86117,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 3408,
                "name": "USD Coin",
                "symbol": "USDC",
                "slug": "usd-coin",
                "num_market_pairs": 1498,
                "date_added": "2018-10-08T00:00:00.000Z",
                "tags": [
                    "medium-of-exchange",
                    "stablecoin",
                    "stablecoin-asset-backed",
                    "binance-smart-chain",
                    "fantom-ecosystem"
                ],
                "max_supply": null,
                "circulating_supply": 34313002005.5947,
                "total_supply": 34313002005.5947,
                "platform": {
                    "id": 1027,
                    "name": "Ethereum",
                    "symbol": "ETH",
                    "slug": "ethereum",
                    "token_address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
                },
                "cmc_rank": 10,
                "last_updated": "2021-11-09T17:26:04.000Z",
                "quote": {
                    "EUR": {
                        "price": 0.8627957213817751,
                        "volume_24h": 4732347153.649801,
                        "volume_change_24h": 12.8656,
                        "percent_change_1h": -0.16077266,
                        "percent_change_24h": -0.70900491,
                        "percent_change_7d": -1.5320517,
                        "percent_change_30d": 0.08781271,
                        "percent_change_60d": -0.0236393,
                        "percent_change_90d": 0.01193976,
                        "market_cap": 29605111318.191372,
                        "market_cap_dominance": 1.1861,
                        "fully_diluted_market_cap": 29605111318.192017,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 5994,
                "name": "SHIBA INU",
                "symbol": "SHIB",
                "slug": "shiba-inu",
                "num_market_pairs": 154,
                "date_added": "2020-08-01T00:00:00.000Z",
                "tags": [
                    "memes",
                    "doggone-doggerel"
                ],
                "max_supply": null,
                "circulating_supply": 549095509738353,
                "total_supply": 589738956207003.8,
                "platform": {
                    "id": 1027,
                    "name": "Ethereum",
                    "symbol": "ETH",
                    "slug": "ethereum",
                    "token_address": "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce"
                },
                "cmc_rank": 11,
                "last_updated": "2021-11-09T17:25:10.000Z",
                "quote": {
                    "EUR": {
                        "price": 0.000047392469411205466,
                        "volume_24h": 2756273881.818877,
                        "volume_change_24h": -26.1281,
                        "percent_change_1h": -0.97461604,
                        "percent_change_24h": -1.67455313,
                        "percent_change_7d": -20.46103805,
                        "percent_change_30d": 108.23424076,
                        "percent_change_60d": 666.05897131,
                        "percent_change_90d": 576.29872467,
                        "market_cap": 26022992149.105167,
                        "market_cap_dominance": 1.0426,
                        "fully_diluted_market_cap": 27949185441.46036,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 4172,
                "name": "Terra",
                "symbol": "LUNA",
                "slug": "terra-luna",
                "num_market_pairs": 99,
                "date_added": "2019-07-26T00:00:00.000Z",
                "tags": [
                    "cosmos-ecosystem",
                    "store-of-value",
                    "defi",
                    "payments",
                    "coinbase-ventures-portfolio",
                    "binance-labs-portfolio",
                    "solana-ecosystem",
                    "arrington-xrp-capital",
                    "hashkey-capital-portfolio",
                    "kinetic-capital",
                    "huobi-capital",
                    "pantera-capital-portfolio",
                    "terra-ecosystem"
                ],
                "max_supply": null,
                "circulating_supply": 399045575.2109639,
                "total_supply": 967864611.762862,
                "platform": null,
                "cmc_rank": 12,
                "last_updated": "2021-11-09T17:26:03.000Z",
                "quote": {
                    "EUR": {
                        "price": 43.64289914733077,
                        "volume_24h": 785450537.2133718,
                        "volume_change_24h": 14.5102,
                        "percent_change_1h": -1.15822864,
                        "percent_change_24h": -4.60116162,
                        "percent_change_7d": 10.06229257,
                        "percent_change_30d": 22.89401251,
                        "percent_change_60d": 21.97256926,
                        "percent_change_90d": 195.16592646,
                        "market_cap": 17415505794.120697,
                        "market_cap_dominance": 0.6982,
                        "fully_diluted_market_cap": 42240417639.435616,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 5805,
                "name": "Avalanche",
                "symbol": "AVAX",
                "slug": "avalanche",
                "num_market_pairs": 106,
                "date_added": "2020-07-13T00:00:00.000Z",
                "tags": [
                    "defi",
                    "smart-contracts",
                    "binance-smart-chain",
                    "polychain-capital-portfolio",
                    "avalanche-ecosystem",
                    "cms-holdings-portfolio",
                    "dragonfly-capital-portfolio"
                ],
                "max_supply": 720000000,
                "circulating_supply": 220286577.20755112,
                "total_supply": 391128418.8675511,
                "platform": null,
                "cmc_rank": 13,
                "last_updated": "2021-11-09T17:26:07.000Z",
                "quote": {
                    "EUR": {
                        "price": 75.2992808391235,
                        "volume_24h": 822739627.9302536,
                        "volume_change_24h": -52.2609,
                        "percent_change_1h": -0.89960294,
                        "percent_change_24h": -5.94659462,
                        "percent_change_7d": 31.35038856,
                        "percent_change_30d": 48.29233426,
                        "percent_change_60d": 80.06829852,
                        "percent_change_90d": 408.54944164,
                        "market_cap": 16587420842.240652,
                        "market_cap_dominance": 0.6646,
                        "fully_diluted_market_cap": 54215482204.17287,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 2,
                "name": "Litecoin",
                "symbol": "LTC",
                "slug": "litecoin",
                "num_market_pairs": 694,
                "date_added": "2013-04-28T00:00:00.000Z",
                "tags": [
                    "mineable",
                    "pow",
                    "scrypt",
                    "medium-of-exchange",
                    "binance-chain",
                    "binance-smart-chain"
                ],
                "max_supply": 84000000,
                "circulating_supply": 68935307.593416,
                "total_supply": 84000000,
                "platform": null,
                "cmc_rank": 14,
                "last_updated": "2021-11-09T17:26:02.000Z",
                "quote": {
                    "EUR": {
                        "price": 229.29986701864814,
                        "volume_24h": 5680149171.090429,
                        "volume_change_24h": 163.1769,
                        "percent_change_1h": -0.76893364,
                        "percent_change_24h": 17.21535414,
                        "percent_change_7d": 28.59031648,
                        "percent_change_30d": 48.99941456,
                        "percent_change_60d": 50.71994269,
                        "percent_change_90d": 53.35044398,
                        "market_cap": 15806856864.059895,
                        "market_cap_dominance": 0.6334,
                        "fully_diluted_market_cap": 19261188829.564915,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 7083,
                "name": "Uniswap",
                "symbol": "UNI",
                "slug": "uniswap",
                "num_market_pairs": 285,
                "date_added": "2020-09-17T00:00:00.000Z",
                "tags": [
                    "decentralized-exchange",
                    "defi",
                    "dao",
                    "yield-farming",
                    "amm",
                    "binance-smart-chain",
                    "coinbase-ventures-portfolio",
                    "three-arrows-capital-portfolio",
                    "governance",
                    "blockchain-capital-portfolio",
                    "defiance-capital",
                    "alameda-research-portfolio",
                    "a16z-portfolio",
                    "pantera-capital-portfolio",
                    "parafi-capital",
                    "paradigm-xzy-screener",
                    "arbitrum-ecosytem"
                ],
                "max_supply": 1000000000,
                "circulating_supply": 627596088.553873,
                "total_supply": 1000000000,
                "platform": {
                    "id": 1027,
                    "name": "Ethereum",
                    "symbol": "ETH",
                    "slug": "ethereum",
                    "token_address": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"
                },
                "cmc_rank": 15,
                "last_updated": "2021-11-09T17:25:10.000Z",
                "quote": {
                    "EUR": {
                        "price": 23.489620894540373,
                        "volume_24h": 469589309.9767116,
                        "volume_change_24h": 103.3487,
                        "percent_change_1h": -1.87825077,
                        "percent_change_24h": 5.24583509,
                        "percent_change_7d": 2.62531754,
                        "percent_change_30d": 9.38802864,
                        "percent_change_60d": 21.7559606,
                        "percent_change_90d": -8.59232126,
                        "market_cap": 14741994195.026865,
                        "market_cap_dominance": 0.591,
                        "fully_diluted_market_cap": 23489620894.53689,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 1975,
                "name": "Chainlink",
                "symbol": "LINK",
                "slug": "chainlink",
                "num_market_pairs": 478,
                "date_added": "2017-09-20T00:00:00.000Z",
                "tags": [
                    "platform",
                    "defi",
                    "oracles",
                    "smart-contracts",
                    "substrate",
                    "polkadot",
                    "binance-smart-chain",
                    "polkadot-ecosystem",
                    "avalanche-ecosystem",
                    "solana-ecosystem",
                    "framework-ventures",
                    "polygon-ecosystem",
                    "fantom-ecosystem",
                    "near-protocol-ecosystem"
                ],
                "max_supply": 1000000000,
                "circulating_supply": 464009553.9174637,
                "total_supply": 1000000000,
                "platform": {
                    "id": 1027,
                    "name": "Ethereum",
                    "symbol": "ETH",
                    "slug": "ethereum",
                    "token_address": "0x514910771af9ca656af840dff83e8264ecf986ca"
                },
                "cmc_rank": 16,
                "last_updated": "2021-11-09T17:25:10.000Z",
                "quote": {
                    "EUR": {
                        "price": 29.18393645184229,
                        "volume_24h": 1183539599.6592338,
                        "volume_change_24h": 10.8048,
                        "percent_change_1h": -0.48657416,
                        "percent_change_24h": -1.79425832,
                        "percent_change_7d": 2.84871622,
                        "percent_change_30d": 28.10004084,
                        "percent_change_60d": 25.42482712,
                        "percent_change_90d": 26.05478471,
                        "market_cap": 13541625334.57495,
                        "market_cap_dominance": 0.5429,
                        "fully_diluted_market_cap": 29183936451.846306,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 3717,
                "name": "Wrapped Bitcoin",
                "symbol": "WBTC",
                "slug": "wrapped-bitcoin",
                "num_market_pairs": 167,
                "date_added": "2019-01-30T00:00:00.000Z",
                "tags": [
                    "medium-of-exchange",
                    "defi",
                    "wrapped-tokens",
                    "fantom-ecosystem"
                ],
                "max_supply": null,
                "circulating_supply": 235133.78155071,
                "total_supply": 235133.78155071,
                "platform": {
                    "id": 1027,
                    "name": "Ethereum",
                    "symbol": "ETH",
                    "slug": "ethereum",
                    "token_address": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"
                },
                "cmc_rank": 17,
                "last_updated": "2021-11-09T17:26:07.000Z",
                "quote": {
                    "EUR": {
                        "price": 57514.190427958005,
                        "volume_24h": 376270611.37396014,
                        "volume_change_24h": -43.1516,
                        "percent_change_1h": -0.40231654,
                        "percent_change_24h": 0.26359753,
                        "percent_change_7d": 3.11144239,
                        "percent_change_30d": 21.01832889,
                        "percent_change_60d": 46.24823394,
                        "percent_change_90d": 43.73256561,
                        "market_cap": 13523529088.153414,
                        "market_cap_dominance": 0.5415,
                        "fully_diluted_market_cap": 13523529088.152094,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 4687,
                "name": "Binance USD",
                "symbol": "BUSD",
                "slug": "binance-usd",
                "num_market_pairs": 1513,
                "date_added": "2019-09-20T00:00:00.000Z",
                "tags": [
                    "stablecoin",
                    "stablecoin-asset-backed",
                    "binance-chain",
                    "binance-smart-chain"
                ],
                "max_supply": null,
                "circulating_supply": 13541249919.7,
                "total_supply": 13541249919.7,
                "platform": {
                    "id": 1839,
                    "name": "Binance Chain (BEP2)",
                    "symbol": "BNB",
                    "slug": "binance-coin",
                    "token_address": "BUSD-BD1"
                },
                "cmc_rank": 18,
                "last_updated": "2021-11-09T17:26:07.000Z",
                "quote": {
                    "EUR": {
                        "price": 0.8626819093884454,
                        "volume_24h": 6247353358.559903,
                        "volume_change_24h": 10.4317,
                        "percent_change_1h": -0.18155987,
                        "percent_change_24h": -0.71883197,
                        "percent_change_7d": -1.5470491,
                        "percent_change_30d": 0.06798404,
                        "percent_change_60d": -0.02067833,
                        "percent_change_90d": 0.00176854,
                        "market_cap": 11681791336.23293,
                        "market_cap_dominance": 0.4681,
                        "fully_diluted_market_cap": 11681791336.235622,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 1831,
                "name": "Bitcoin Cash",
                "symbol": "BCH",
                "slug": "bitcoin-cash",
                "num_market_pairs": 527,
                "date_added": "2017-07-23T00:00:00.000Z",
                "tags": [
                    "mineable",
                    "pow",
                    "sha-256",
                    "marketplace",
                    "medium-of-exchange",
                    "store-of-value",
                    "enterprise-solutions",
                    "payments",
                    "binance-chain",
                    "binance-smart-chain"
                ],
                "max_supply": 21000000,
                "circulating_supply": 18895787.5,
                "total_supply": 18895787.5,
                "platform": null,
                "cmc_rank": 19,
                "last_updated": "2021-11-09T17:26:08.000Z",
                "quote": {
                    "EUR": {
                        "price": 602.8211079747973,
                        "volume_24h": 1939679012.6432586,
                        "volume_change_24h": 58.3534,
                        "percent_change_1h": -1.78976564,
                        "percent_change_24h": 10.13411957,
                        "percent_change_7d": 13.65566136,
                        "percent_change_30d": 16.38309025,
                        "percent_change_60d": 9.87777333,
                        "percent_change_90d": 12.3393403,
                        "market_cap": 11390779556.806326,
                        "market_cap_dominance": 0.4564,
                        "fully_diluted_market_cap": 12659243267.46699,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 3890,
                "name": "Polygon",
                "symbol": "MATIC",
                "slug": "polygon",
                "num_market_pairs": 251,
                "date_added": "2019-04-28T00:00:00.000Z",
                "tags": [
                    "platform",
                    "enterprise-solutions",
                    "state-channels",
                    "binance-smart-chain",
                    "coinbase-ventures-portfolio",
                    "binance-launchpad",
                    "binance-labs-portfolio",
                    "polygon-ecosystem"
                ],
                "max_supply": 10000000000,
                "circulating_supply": 6862890164.27,
                "total_supply": 10000000000,
                "platform": null,
                "cmc_rank": 20,
                "last_updated": "2021-11-09T17:25:09.000Z",
                "quote": {
                    "EUR": {
                        "price": 1.5741822683917812,
                        "volume_24h": 970232195.2789443,
                        "volume_change_24h": 21.8165,
                        "percent_change_1h": -0.27411059,
                        "percent_change_24h": -4.10637424,
                        "percent_change_7d": -6.50133199,
                        "percent_change_30d": 41.15868545,
                        "percent_change_60d": 36.04868201,
                        "percent_change_90d": 33.10297603,
                        "market_cap": 10803440006.514194,
                        "market_cap_dominance": 0.4331,
                        "fully_diluted_market_cap": 15741822683.915308,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 4030,
                "name": "Algorand",
                "symbol": "ALGO",
                "slug": "algorand",
                "num_market_pairs": 156,
                "date_added": "2019-06-20T00:00:00.000Z",
                "tags": [
                    "pos",
                    "platform",
                    "research",
                    "smart-contracts",
                    "arrington-xrp-capital",
                    "kinetic-capital",
                    "usv-portfolio",
                    "multicoin-capital-portfolio",
                    "exnetwork-capital-portfolio"
                ],
                "max_supply": 10000000000,
                "circulating_supply": 6241588352.267606,
                "total_supply": 6702891083.402659,
                "platform": null,
                "cmc_rank": 21,
                "last_updated": "2021-11-09T17:26:08.000Z",
                "quote": {
                    "EUR": {
                        "price": 1.7093538931223438,
                        "volume_24h": 471544435.5350555,
                        "volume_change_24h": 33.9957,
                        "percent_change_1h": 0.97089371,
                        "percent_change_24h": -0.69259151,
                        "percent_change_7d": 3.94535549,
                        "percent_change_30d": 9.26953683,
                        "percent_change_60d": 2.41633259,
                        "percent_change_90d": 114.3641513,
                        "market_cap": 10669083349.215708,
                        "market_cap_dominance": 0.4275,
                        "fully_diluted_market_cap": 17093538931.222746,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 3077,
                "name": "VeChain",
                "symbol": "VET",
                "slug": "vechain",
                "num_market_pairs": 149,
                "date_added": "2017-08-22T00:00:00.000Z",
                "tags": [
                    "logistics",
                    "data-provenance",
                    "iot",
                    "smart-contracts",
                    "fenbushi-capital-portfolio"
                ],
                "max_supply": 86712634466,
                "circulating_supply": 64315576989,
                "total_supply": 86712634466,
                "platform": null,
                "cmc_rank": 22,
                "last_updated": "2021-11-09T17:26:02.000Z",
                "quote": {
                    "EUR": {
                        "price": 0.15123066010482644,
                        "volume_24h": 1402835009.6276956,
                        "volume_change_24h": 76.9933,
                        "percent_change_1h": -0.14819225,
                        "percent_change_24h": 3.14146826,
                        "percent_change_7d": 21.01481165,
                        "percent_change_30d": 52.26706502,
                        "percent_change_60d": 51.74077835,
                        "percent_change_90d": 51.57373886,
                        "market_cap": 9726487163.069254,
                        "market_cap_dominance": 0.3899,
                        "fully_diluted_market_cap": 13113608949.721611,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 512,
                "name": "Stellar",
                "symbol": "XLM",
                "slug": "stellar",
                "num_market_pairs": 371,
                "date_added": "2014-08-05T00:00:00.000Z",
                "tags": [
                    "medium-of-exchange",
                    "enterprise-solutions",
                    "decentralized-exchange",
                    "smart-contracts",
                    "hashkey-capital-portfolio"
                ],
                "max_supply": 50001806812,
                "circulating_supply": 24206629376.936497,
                "total_supply": 50001802633.97575,
                "platform": null,
                "cmc_rank": 23,
                "last_updated": "2021-11-09T17:26:06.000Z",
                "quote": {
                    "EUR": {
                        "price": 0.3370282696351196,
                        "volume_24h": 794798159.9621099,
                        "volume_change_24h": 52.859,
                        "percent_change_1h": -0.25225356,
                        "percent_change_24h": 4.33592871,
                        "percent_change_7d": 1.38832687,
                        "percent_change_30d": 13.47140429,
                        "percent_change_60d": 21.06847801,
                        "percent_change_90d": 13.63817152,
                        "market_cap": 8158318412.60756,
                        "market_cap_dominance": 0.3267,
                        "fully_diluted_market_cap": 16852022428.48143,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 8916,
                "name": "Internet Computer",
                "symbol": "ICP",
                "slug": "internet-computer",
                "num_market_pairs": 77,
                "date_added": "2021-03-23T00:00:00.000Z",
                "tags": [
                    "platform",
                    "distributed-computing",
                    "polychain-capital-portfolio",
                    "exnetwork-capital-portfolio"
                ],
                "max_supply": null,
                "circulating_supply": 175527705.19,
                "total_supply": 474495381.30151224,
                "platform": null,
                "cmc_rank": 24,
                "last_updated": "2021-11-09T17:26:08.000Z",
                "quote": {
                    "EUR": {
                        "price": 45.443762158572305,
                        "volume_24h": 423688111.5420508,
                        "volume_change_24h": -41.0099,
                        "percent_change_1h": -1.87041138,
                        "percent_change_24h": -5.58699182,
                        "percent_change_7d": 8.27311515,
                        "percent_change_30d": 12.62382013,
                        "percent_change_60d": -7.52618553,
                        "percent_change_90d": -24.73191926,
                        "market_cap": 7976639286.894358,
                        "market_cap_dominance": 0.3198,
                        "fully_diluted_market_cap": 21562855253.209805,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 6783,
                "name": "Axie Infinity",
                "symbol": "AXS",
                "slug": "axie-infinity",
                "num_market_pairs": 129,
                "date_added": "2020-08-31T00:00:00.000Z",
                "tags": [
                    "collectibles-nfts",
                    "gaming",
                    "binance-launchpad",
                    "metaverse",
                    "defiance-capital",
                    "play-to-earn",
                    "animoca-brands-portfolio"
                ],
                "max_supply": 270000000,
                "circulating_supply": 60907500,
                "total_supply": 270000000,
                "platform": {
                    "id": 1027,
                    "name": "Ethereum",
                    "symbol": "ETH",
                    "slug": "ethereum",
                    "token_address": "0xbb0e17ef65f82ab018d8edd776e8dd940327b28b"
                },
                "cmc_rank": 25,
                "last_updated": "2021-11-09T17:26:07.000Z",
                "quote": {
                    "EUR": {
                        "price": 127.95904373873347,
                        "volume_24h": 553383249.9666152,
                        "volume_change_24h": -19.4412,
                        "percent_change_1h": -0.56148184,
                        "percent_change_24h": -4.36382595,
                        "percent_change_7d": 4.67419904,
                        "percent_change_30d": 21.82631283,
                        "percent_change_60d": 125.6359311,
                        "percent_change_90d": 126.8119981,
                        "market_cap": 7793665456.51691,
                        "market_cap_dominance": 0.3122,
                        "fully_diluted_market_cap": 34548941809.4578,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 3635,
                "name": "Crypto.com Coin",
                "symbol": "CRO",
                "slug": "crypto-com-coin",
                "num_market_pairs": 105,
                "date_added": "2018-12-14T00:00:00.000Z",
                "tags": [
                    "medium-of-exchange",
                    "cosmos-ecosystem",
                    "centralized-exchange",
                    "mobile",
                    "payments"
                ],
                "max_supply": 30263013692,
                "circulating_supply": 25263013692,
                "total_supply": 30263013692,
                "platform": {
                    "id": 1027,
                    "name": "Ethereum",
                    "symbol": "ETH",
                    "slug": "ethereum",
                    "token_address": "0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b"
                },
                "cmc_rank": 26,
                "last_updated": "2021-11-09T17:26:07.000Z",
                "quote": {
                    "EUR": {
                        "price": 0.3059705375038481,
                        "volume_24h": 318942774.2408001,
                        "volume_change_24h": -60.5933,
                        "percent_change_1h": -0.60257107,
                        "percent_change_24h": -12.42012786,
                        "percent_change_7d": 45.21252412,
                        "percent_change_30d": 85.92941914,
                        "percent_change_60d": 104.24480216,
                        "percent_change_90d": 136.9709296,
                        "market_cap": 7729737878.308315,
                        "market_cap_dominance": 0.3099,
                        "fully_diluted_market_cap": 9259590565.823288,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 2280,
                "name": "Filecoin",
                "symbol": "FIL",
                "slug": "filecoin",
                "num_market_pairs": 149,
                "date_added": "2017-12-13T00:00:00.000Z",
                "tags": [
                    "mineable",
                    "distributed-computing",
                    "filesharing",
                    "storage",
                    "binance-smart-chain",
                    "polychain-capital-portfolio",
                    "blockchain-capital-portfolio",
                    "boostvc-portfolio",
                    "dcg-portfolio",
                    "hashkey-capital-portfolio",
                    "a16z-portfolio",
                    "winklevoss-capital",
                    "pantera-capital-portfolio"
                ],
                "max_supply": null,
                "circulating_supply": 121659913,
                "total_supply": 121659913,
                "platform": null,
                "cmc_rank": 27,
                "last_updated": "2021-11-09T17:26:04.000Z",
                "quote": {
                    "EUR": {
                        "price": 58.25790851888607,
                        "volume_24h": 978040835.924991,
                        "volume_change_24h": 82.645,
                        "percent_change_1h": 0.7384681,
                        "percent_change_24h": 4.81787318,
                        "percent_change_7d": 2.7090646,
                        "percent_change_30d": -6.91015833,
                        "percent_change_60d": -17.2945748,
                        "percent_change_90d": -8.00123625,
                        "market_cap": 7087652081.969638,
                        "market_cap_dominance": 0.2839,
                        "fully_diluted_market_cap": 7087652081.969385,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 1321,
                "name": "Ethereum Classic",
                "symbol": "ETC",
                "slug": "ethereum-classic",
                "num_market_pairs": 256,
                "date_added": "2016-07-24T00:00:00.000Z",
                "tags": [
                    "mineable",
                    "pow",
                    "ethash",
                    "platform",
                    "smart-contracts",
                    "binance-smart-chain",
                    "dcg-portfolio"
                ],
                "max_supply": 210700000,
                "circulating_supply": 130880480.04399294,
                "total_supply": 210700000,
                "platform": null,
                "cmc_rank": 28,
                "last_updated": "2021-11-09T17:26:05.000Z",
                "quote": {
                    "EUR": {
                        "price": 53.80683889840639,
                        "volume_24h": 2855389426.9894686,
                        "volume_change_24h": 257.1415,
                        "percent_change_1h": -0.38409456,
                        "percent_change_24h": 11.50139034,
                        "percent_change_7d": 11.74097315,
                        "percent_change_30d": 14.75055526,
                        "percent_change_60d": 9.16605516,
                        "percent_change_90d": -2.19955263,
                        "market_cap": 7042264904.67322,
                        "market_cap_dominance": 0.282,
                        "fully_diluted_market_cap": 11337100955.894924,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 1958,
                "name": "TRON",
                "symbol": "TRX",
                "slug": "tron",
                "num_market_pairs": 488,
                "date_added": "2017-09-13T00:00:00.000Z",
                "tags": [
                    "media",
                    "payments",
                    "binance-smart-chain"
                ],
                "max_supply": null,
                "circulating_supply": 71659657369.49,
                "total_supply": 100850743811.662,
                "platform": null,
                "cmc_rank": 29,
                "last_updated": "2021-11-09T17:25:10.000Z",
                "quote": {
                    "EUR": {
                        "price": 0.0978222245647695,
                        "volume_24h": 2552574159.197424,
                        "volume_change_24h": 22.4451,
                        "percent_change_1h": 0.14363814,
                        "percent_change_24h": 3.7617234,
                        "percent_change_7d": 3.01364306,
                        "percent_change_30d": 12.86534102,
                        "percent_change_60d": 27.06779167,
                        "percent_change_90d": 34.89439395,
                        "market_cap": 7009907095.432691,
                        "market_cap_dominance": 0.2808,
                        "fully_diluted_market_cap": 9865444108.667353,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 3794,
                "name": "Cosmos",
                "symbol": "ATOM",
                "slug": "cosmos",
                "num_market_pairs": 188,
                "date_added": "2019-03-14T00:00:00.000Z",
                "tags": [
                    "platform",
                    "cosmos-ecosystem",
                    "content-creation",
                    "interoperability",
                    "binance-chain",
                    "binance-smart-chain",
                    "polychain-capital-portfolio",
                    "dragonfly-capital-portfolio",
                    "hashkey-capital-portfolio",
                    "1confirmation-portfolio",
                    "paradigm-xzy-screener",
                    "exnetwork-capital-portfolio"
                ],
                "max_supply": null,
                "circulating_supply": 224281863.644123,
                "total_supply": 282066466.644123,
                "platform": null,
                "cmc_rank": 30,
                "last_updated": "2021-11-09T17:26:07.000Z",
                "quote": {
                    "EUR": {
                        "price": 30.947685835246112,
                        "volume_24h": 514251578.9108298,
                        "volume_change_24h": 22.0381,
                        "percent_change_1h": -0.39125022,
                        "percent_change_24h": -1.42811902,
                        "percent_change_7d": -6.25369886,
                        "percent_change_30d": 5.88028573,
                        "percent_change_60d": 37.06539076,
                        "percent_change_90d": 139.78640442,
                        "market_cap": 6941004654.601825,
                        "market_cap_dominance": 0.2781,
                        "fully_diluted_market_cap": 8729304394.35616,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 2416,
                "name": "THETA",
                "symbol": "THETA",
                "slug": "theta",
                "num_market_pairs": 78,
                "date_added": "2018-01-17T00:00:00.000Z",
                "tags": [
                    "media",
                    "collectibles-nfts",
                    "content-creation",
                    "video",
                    "huobi-capital"
                ],
                "max_supply": 1000000000,
                "circulating_supply": 1000000000,
                "total_supply": 1000000000,
                "platform": null,
                "cmc_rank": 31,
                "last_updated": "2021-11-09T17:26:05.000Z",
                "quote": {
                    "EUR": {
                        "price": 6.938444527999615,
                        "volume_24h": 448297908.5173706,
                        "volume_change_24h": 116.855,
                        "percent_change_1h": -1.2502073,
                        "percent_change_24h": 3.28529649,
                        "percent_change_7d": 2.03705577,
                        "percent_change_30d": 22.54242282,
                        "percent_change_60d": 23.67210005,
                        "percent_change_90d": 8.25834862,
                        "market_cap": 6938444527.999615,
                        "market_cap_dominance": 0.278,
                        "fully_diluted_market_cap": 6938444528.000582,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 4195,
                "name": "FTX Token",
                "symbol": "FTT",
                "slug": "ftx-token",
                "num_market_pairs": 82,
                "date_added": "2019-07-31T00:00:00.000Z",
                "tags": [
                    "marketplace",
                    "centralized-exchange",
                    "derivatives",
                    "cms-holdings-portfolio",
                    "kinetic-capital",
                    "alameda-research-portfolio",
                    "pantera-capital-portfolio",
                    "exnetwork-capital-portfolio"
                ],
                "max_supply": 352170015,
                "circulating_supply": 120014732.21874374,
                "total_supply": 335885068.2859715,
                "platform": {
                    "id": 1839,
                    "name": "Binance Chain (BEP2)",
                    "symbol": "BNB",
                    "slug": "binance-coin",
                    "token_address": "FTT-F11"
                },
                "cmc_rank": 32,
                "last_updated": "2021-11-09T17:26:03.000Z",
                "quote": {
                    "EUR": {
                        "price": 53.70702006442052,
                        "volume_24h": 239642179.85981494,
                        "volume_change_24h": -25.7531,
                        "percent_change_1h": -0.8081147,
                        "percent_change_24h": -3.51509376,
                        "percent_change_7d": 2.73635957,
                        "percent_change_30d": 14.17979955,
                        "percent_change_60d": -15.3252813,
                        "percent_change_90d": 19.77693379,
                        "market_cap": 6445633631.298125,
                        "market_cap_dominance": 0.2584,
                        "fully_diluted_market_cap": 18914002061.693943,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 3513,
                "name": "Fantom",
                "symbol": "FTM",
                "slug": "fantom",
                "num_market_pairs": 115,
                "date_added": "2018-10-29T00:00:00.000Z",
                "tags": [
                    "platform",
                    "enterprise-solutions",
                    "defi",
                    "research",
                    "scaling",
                    "smart-contracts",
                    "binance-smart-chain",
                    "fantom-ecosystem"
                ],
                "max_supply": 3175000000,
                "circulating_supply": 2545006273,
                "total_supply": 2545006273,
                "platform": null,
                "cmc_rank": 33,
                "last_updated": "2021-11-09T17:26:06.000Z",
                "quote": {
                    "EUR": {
                        "price": 2.513102795406426,
                        "volume_24h": 641418590.9424825,
                        "volume_change_24h": -20.0931,
                        "percent_change_1h": -0.78190565,
                        "percent_change_24h": -5.90429778,
                        "percent_change_7d": 5.83167455,
                        "percent_change_30d": 34.8818274,
                        "percent_change_60d": 92.13297791,
                        "percent_change_90d": 794.18985689,
                        "market_cap": 6395862379.00319,
                        "market_cap_dominance": 0.2562,
                        "fully_diluted_market_cap": 7979101375.419603,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 4023,
                "name": "Bitcoin BEP2",
                "symbol": "BTCB",
                "slug": "bitcoin-bep2",
                "num_market_pairs": 56,
                "date_added": "2019-06-18T00:00:00.000Z",
                "tags": [
                    "binance-chain",
                    "binance-smart-chain"
                ],
                "max_supply": null,
                "circulating_supply": 105109.46386988,
                "total_supply": 112501,
                "platform": {
                    "id": 1839,
                    "name": "Binance Chain (BEP2)",
                    "symbol": "BNB",
                    "slug": "binance-coin",
                    "token_address": "BTCB-1DE"
                },
                "cmc_rank": 34,
                "last_updated": "2021-11-09T17:25:10.000Z",
                "quote": {
                    "EUR": {
                        "price": 57389.93827984495,
                        "volume_24h": 83334577.96384358,
                        "volume_change_24h": -2.4556,
                        "percent_change_1h": -0.47294895,
                        "percent_change_24h": -0.30159685,
                        "percent_change_7d": 3.2762286,
                        "percent_change_30d": 20.85646951,
                        "percent_change_60d": 46.13205693,
                        "percent_change_90d": 43.76510888,
                        "market_cap": 6032225644.120007,
                        "market_cap_dominance": 0.2418,
                        "fully_diluted_market_cap": 6456425446.422225,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 4943,
                "name": "Dai",
                "symbol": "DAI",
                "slug": "multi-collateral-dai",
                "num_market_pairs": 418,
                "date_added": "2019-11-22T00:00:00.000Z",
                "tags": [
                    "defi",
                    "stablecoin",
                    "ethereum",
                    "binance-smart-chain",
                    "avalanche-ecosystem",
                    "polygon-ecosystem",
                    "fantom-ecosystem"
                ],
                "max_supply": null,
                "circulating_supply": 6474951713.635377,
                "total_supply": 6474952202.474523,
                "platform": {
                    "id": 1027,
                    "name": "Ethereum",
                    "symbol": "ETH",
                    "slug": "ethereum",
                    "token_address": "0x6b175474e89094c44da98b954eedeac495271d0f"
                },
                "cmc_rank": 35,
                "last_updated": "2021-11-09T17:25:10.000Z",
                "quote": {
                    "EUR": {
                        "price": 0.8624350906987811,
                        "volume_24h": 578752474.3377552,
                        "volume_change_24h": -18.3201,
                        "percent_change_1h": -0.17228719,
                        "percent_change_24h": -0.81095853,
                        "percent_change_7d": -1.64090646,
                        "percent_change_30d": 0.01177981,
                        "percent_change_60d": 0.01644362,
                        "percent_change_90d": -0.13307284,
                        "market_cap": 5584225568.419354,
                        "market_cap_dominance": 0.2239,
                        "fully_diluted_market_cap": 5584225990.012307,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 4642,
                "name": "Hedera",
                "symbol": "HBAR",
                "slug": "hedera",
                "num_market_pairs": 73,
                "date_added": "2019-09-17T00:00:00.000Z",
                "tags": [
                    "dag",
                    "marketplace",
                    "enterprise-solutions",
                    "payments",
                    "dcg-portfolio"
                ],
                "max_supply": 50000000000,
                "circulating_supply": 15018941582.14876,
                "total_supply": 50000000000,
                "platform": null,
                "cmc_rank": 36,
                "last_updated": "2021-11-09T17:26:06.000Z",
                "quote": {
                    "EUR": {
                        "price": 0.3662074893968377,
                        "volume_24h": 170528609.7088701,
                        "volume_change_24h": -49.3854,
                        "percent_change_1h": 1.49850567,
                        "percent_change_24h": 1.78068781,
                        "percent_change_7d": 4.5312247,
                        "percent_change_30d": 19.28463154,
                        "percent_change_60d": 37.74022129,
                        "percent_change_90d": 80.2117309,
                        "market_cap": 5500048890.196467,
                        "market_cap_dominance": 0.2204,
                        "fully_diluted_market_cap": 18310374469.84232,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 6892,
                "name": "Elrond",
                "symbol": "EGLD",
                "slug": "elrond-egld",
                "num_market_pairs": 57,
                "date_added": "2020-09-04T00:00:00.000Z",
                "tags": [
                    "binance-smart-chain",
                    "binance-launchpad",
                    "binance-labs-portfolio",
                    "electric-capital-portfolio",
                    "exnetwork-capital-portfolio"
                ],
                "max_supply": 31415926,
                "circulating_supply": 19712061.53028659,
                "total_supply": 22701058,
                "platform": null,
                "cmc_rank": 37,
                "last_updated": "2021-11-09T17:26:08.000Z",
                "quote": {
                    "EUR": {
                        "price": 271.83238977340557,
                        "volume_24h": 107539665.45232962,
                        "volume_change_24h": -8.1963,
                        "percent_change_1h": -0.03764905,
                        "percent_change_24h": -0.35989556,
                        "percent_change_7d": 14.37558161,
                        "percent_change_30d": 27.63609441,
                        "percent_change_60d": 48.69317329,
                        "percent_change_90d": 122.56213342,
                        "market_cap": 5358376793.138218,
                        "market_cap_dominance": 0.2146,
                        "fully_diluted_market_cap": 8539866241.521238,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 6535,
                "name": "NEAR Protocol",
                "symbol": "NEAR",
                "slug": "near-protocol",
                "num_market_pairs": 69,
                "date_added": "2020-08-11T00:00:00.000Z",
                "tags": [
                    "platform",
                    "staking",
                    "binance-smart-chain",
                    "coinbase-ventures-portfolio",
                    "coinfund-portfolio",
                    "electric-capital-portfolio",
                    "fabric-ventures-portfolio",
                    "kinetic-capital",
                    "near-protocol-ecosystem"
                ],
                "max_supply": 1000000000,
                "circulating_supply": 534949737,
                "total_supply": 1000000000,
                "platform": null,
                "cmc_rank": 38,
                "last_updated": "2021-11-09T17:26:05.000Z",
                "quote": {
                    "EUR": {
                        "price": 9.84521963605981,
                        "volume_24h": 292485111.16858566,
                        "volume_change_24h": 62.2858,
                        "percent_change_1h": 3.64095529,
                        "percent_change_24h": 7.65168467,
                        "percent_change_7d": 4.99933234,
                        "percent_change_30d": 50.40556086,
                        "percent_change_60d": 29.19523367,
                        "percent_change_90d": 285.31430034,
                        "market_cap": 5266697655.017431,
                        "market_cap_dominance": 0.211,
                        "fully_diluted_market_cap": 9845219636.059637,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 6719,
                "name": "The Graph",
                "symbol": "GRT",
                "slug": "the-graph",
                "num_market_pairs": 136,
                "date_added": "2020-12-17T00:00:00.000Z",
                "tags": [
                    "ai-big-data",
                    "enterprise-solutions",
                    "defi",
                    "binance-smart-chain",
                    "coinbase-ventures-portfolio",
                    "solana-ecosystem",
                    "analytics",
                    "coinfund-portfolio",
                    "dcg-portfolio",
                    "fabric-ventures-portfolio",
                    "framework-ventures",
                    "ledgerprime-portfolio",
                    "multicoin-capital-portfolio",
                    "parafi-capital",
                    "polygon-ecosystem",
                    "fantom-ecosystem",
                    "near-protocol-ecosystem"
                ],
                "max_supply": 10057044431,
                "circulating_supply": 4715735200,
                "total_supply": 10000000000,
                "platform": {
                    "id": 1027,
                    "name": "Ethereum",
                    "symbol": "ETH",
                    "slug": "ethereum",
                    "token_address": "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
                },
                "cmc_rank": 39,
                "last_updated": "2021-11-09T17:26:06.000Z",
                "quote": {
                    "EUR": {
                        "price": 1.0372610493896117,
                        "volume_24h": 620934795.8233997,
                        "volume_change_24h": 113.7362,
                        "percent_change_1h": -2.13803142,
                        "percent_change_24h": 6.88261776,
                        "percent_change_7d": 17.85487891,
                        "percent_change_30d": 69.19040202,
                        "percent_change_60d": 46.75915879,
                        "percent_change_90d": 43.71853054,
                        "market_cap": 4891448442.195531,
                        "market_cap_dominance": 0.1959,
                        "fully_diluted_market_cap": 10431780460.260574,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 2011,
                "name": "Tezos",
                "symbol": "XTZ",
                "slug": "tezos",
                "num_market_pairs": 173,
                "date_added": "2017-10-06T00:00:00.000Z",
                "tags": [
                    "pos",
                    "platform",
                    "enterprise-solutions",
                    "collectibles-nfts",
                    "defi",
                    "smart-contracts",
                    "binance-smart-chain",
                    "polychain-capital-portfolio",
                    "boostvc-portfolio",
                    "winklevoss-capital"
                ],
                "max_supply": null,
                "circulating_supply": 866255040.923302,
                "total_supply": 895255041.594273,
                "platform": null,
                "cmc_rank": 40,
                "last_updated": "2021-11-09T17:25:10.000Z",
                "quote": {
                    "EUR": {
                        "price": 5.454275697112453,
                        "volume_24h": 260553402.6274813,
                        "volume_change_24h": 43.2671,
                        "percent_change_1h": -0.07939718,
                        "percent_change_24h": -3.81861587,
                        "percent_change_7d": -1.27519185,
                        "percent_change_30d": -12.95351189,
                        "percent_change_60d": 10.54381578,
                        "percent_change_90d": 80.32331296,
                        "market_cap": 4724793817.20912,
                        "market_cap_dominance": 0.1893,
                        "fully_diluted_market_cap": 4882967816.081812,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 1765,
                "name": "EOS",
                "symbol": "EOS",
                "slug": "eos",
                "num_market_pairs": 389,
                "date_added": "2017-07-01T00:00:00.000Z",
                "tags": [
                    "medium-of-exchange",
                    "enterprise-solutions",
                    "smart-contracts",
                    "binance-chain",
                    "binance-smart-chain",
                    "fenbushi-capital-portfolio",
                    "galaxy-digital-portfolio"
                ],
                "max_supply": null,
                "circulating_supply": 962858761.9242,
                "total_supply": 1038859173.7985,
                "platform": null,
                "cmc_rank": 41,
                "last_updated": "2021-11-09T17:26:08.000Z",
                "quote": {
                    "EUR": {
                        "price": 4.522040545767307,
                        "volume_24h": 2037189887.2904882,
                        "volume_change_24h": 132.3396,
                        "percent_change_1h": -0.05776978,
                        "percent_change_24h": 9.94932078,
                        "percent_change_7d": 8.30050833,
                        "percent_change_30d": 10.4102879,
                        "percent_change_60d": 13.30296885,
                        "percent_change_90d": 8.11395442,
                        "market_cap": 4354086361.268544,
                        "market_cap_dominance": 0.1743,
                        "fully_diluted_market_cap": 4697763305.261909,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 5665,
                "name": "Helium",
                "symbol": "HNT",
                "slug": "helium",
                "num_market_pairs": 30,
                "date_added": "2020-06-05T00:00:00.000Z",
                "tags": [
                    "mineable",
                    "enterprise-solutions",
                    "distributed-computing",
                    "iot",
                    "usv-portfolio",
                    "multicoin-capital-portfolio"
                ],
                "max_supply": 223000000,
                "circulating_supply": 101748105.97914831,
                "total_supply": 223000000,
                "platform": null,
                "cmc_rank": 42,
                "last_updated": "2021-11-09T17:26:06.000Z",
                "quote": {
                    "EUR": {
                        "price": 42.87048860239474,
                        "volume_24h": 170312967.21327907,
                        "volume_change_24h": 33.2705,
                        "percent_change_1h": 2.73754055,
                        "percent_change_24h": 15.75660357,
                        "percent_change_7d": 68.7561308,
                        "percent_change_30d": 155.44618163,
                        "percent_change_60d": 147.42301648,
                        "percent_change_90d": 193.03203367,
                        "market_cap": 4361991017.694329,
                        "market_cap_dominance": 0.1748,
                        "fully_diluted_market_cap": 9560118958.33102,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 328,
                "name": "Monero",
                "symbol": "XMR",
                "slug": "monero",
                "num_market_pairs": 150,
                "date_added": "2014-05-21T00:00:00.000Z",
                "tags": [
                    "mineable",
                    "pow",
                    "medium-of-exchange",
                    "privacy",
                    "ringct",
                    "boostvc-portfolio",
                    "electric-capital-portfolio",
                    "galaxy-digital-portfolio"
                ],
                "max_supply": null,
                "circulating_supply": 18014103.58442386,
                "total_supply": 18014103.58442386,
                "platform": null,
                "cmc_rank": 43,
                "last_updated": "2021-11-09T17:26:05.000Z",
                "quote": {
                    "EUR": {
                        "price": 236.87181401872706,
                        "volume_24h": 257794603.8075003,
                        "volume_change_24h": 17.9265,
                        "percent_change_1h": 0.10060721,
                        "percent_change_24h": 1.88762676,
                        "percent_change_7d": -2.27286268,
                        "percent_change_30d": -0.77372032,
                        "percent_change_60d": 7.25401658,
                        "percent_change_90d": -0.17519991,
                        "market_cap": 4267033393.9637327,
                        "market_cap_dominance": 0.171,
                        "fully_diluted_market_cap": 4267033393.963022,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 7186,
                "name": "PancakeSwap",
                "symbol": "CAKE",
                "slug": "pancakeswap",
                "num_market_pairs": 138,
                "date_added": "2020-09-25T00:00:00.000Z",
                "tags": [
                    "decentralized-exchange",
                    "defi",
                    "yield-farming",
                    "binance-chain",
                    "amm",
                    "binance-smart-chain"
                ],
                "max_supply": null,
                "circulating_supply": 240328747.74110287,
                "total_supply": 240328747.74110287,
                "platform": {
                    "id": 1839,
                    "name": "Binance Smart Chain (BEP20)",
                    "symbol": "BNB",
                    "slug": "binance-coin",
                    "token_address": "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
                },
                "cmc_rank": 44,
                "last_updated": "2021-11-09T17:26:02.000Z",
                "quote": {
                    "EUR": {
                        "price": 17.02595085629205,
                        "volume_24h": 255371861.32277775,
                        "volume_change_24h": -21.0562,
                        "percent_change_1h": -1.1046834,
                        "percent_change_24h": -2.5506669,
                        "percent_change_7d": 3.67401762,
                        "percent_change_30d": 3.48355444,
                        "percent_change_60d": 0.75478877,
                        "percent_change_90d": -1.41669801,
                        "market_cap": 4091825448.394226,
                        "market_cap_dominance": 0.1638,
                        "fully_diluted_market_cap": 4091825448.3906765,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 1966,
                "name": "Decentraland",
                "symbol": "MANA",
                "slug": "decentraland",
                "num_market_pairs": 183,
                "date_added": "2017-09-17T00:00:00.000Z",
                "tags": [
                    "platform",
                    "collectibles-nfts",
                    "gaming",
                    "payments",
                    "metaverse",
                    "boostvc-portfolio",
                    "dcg-portfolio",
                    "fabric-ventures-portfolio",
                    "kinetic-capital",
                    "polygon-ecosystem",
                    "play-to-earn"
                ],
                "max_supply": null,
                "circulating_supply": 1816928691.4950888,
                "total_supply": 2194008927.320146,
                "platform": {
                    "id": 1027,
                    "name": "Ethereum",
                    "symbol": "ETH",
                    "slug": "ethereum",
                    "token_address": "0x0f5d2fb29fb7d3cfee444a200298f468908cc942"
                },
                "cmc_rank": 45,
                "last_updated": "2021-11-09T17:25:10.000Z",
                "quote": {
                    "EUR": {
                        "price": 2.1956964418590728,
                        "volume_24h": 824172409.5401975,
                        "volume_change_24h": -9.658,
                        "percent_change_1h": 0.03480551,
                        "percent_change_24h": -6.64199694,
                        "percent_change_7d": -19.67699671,
                        "percent_change_30d": 220.69637658,
                        "percent_change_60d": 207.90762901,
                        "percent_change_90d": 199.76665502,
                        "market_cap": 3989423863.0274277,
                        "market_cap_dominance": 0.1599,
                        "fully_diluted_market_cap": 4817377595.125616,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 7278,
                "name": "Aave",
                "symbol": "AAVE",
                "slug": "aave",
                "num_market_pairs": 247,
                "date_added": "2020-10-02T00:00:00.000Z",
                "tags": [
                    "defi",
                    "dao",
                    "yield-farming",
                    "binance-smart-chain",
                    "three-arrows-capital-portfolio",
                    "governance",
                    "lending-borowing",
                    "blockchain-capital-portfolio",
                    "defiance-capital",
                    "framework-ventures",
                    "alameda-research-portfolio",
                    "pantera-capital-portfolio",
                    "parafi-capital",
                    "polygon-ecosystem",
                    "fantom-ecosystem"
                ],
                "max_supply": 16000000,
                "circulating_supply": 13243463.31760031,
                "total_supply": 16000000,
                "platform": {
                    "id": 1027,
                    "name": "Ethereum",
                    "symbol": "ETH",
                    "slug": "ethereum",
                    "token_address": "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9"
                },
                "cmc_rank": 46,
                "last_updated": "2021-11-09T17:26:03.000Z",
                "quote": {
                    "EUR": {
                        "price": 296.78367458412305,
                        "volume_24h": 446963256.7713396,
                        "volume_change_24h": 116.185,
                        "percent_change_1h": -0.25511331,
                        "percent_change_24h": 4.13913339,
                        "percent_change_7d": 4.06468399,
                        "percent_change_30d": 15.39871657,
                        "percent_change_60d": 8.87420291,
                        "percent_change_90d": -16.54795925,
                        "market_cap": 3930443707.6174607,
                        "market_cap_dominance": 0.1574,
                        "fully_diluted_market_cap": 4748538793.349317,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 4558,
                "name": "Flow",
                "symbol": "FLOW",
                "slug": "flow",
                "num_market_pairs": 46,
                "date_added": "2021-01-27T00:00:00.000Z",
                "tags": [
                    "collectibles-nfts",
                    "coinbase-ventures-portfolio",
                    "coinfund-portfolio",
                    "dcg-portfolio",
                    "ledgerprime-portfolio",
                    "a16z-portfolio",
                    "animoca-brands-portfolio"
                ],
                "max_supply": null,
                "circulating_supply": 310613212,
                "total_supply": 1378211739,
                "platform": null,
                "cmc_rank": 47,
                "last_updated": "2021-11-09T17:26:06.000Z",
                "quote": {
                    "EUR": {
                        "price": 11.811235402535154,
                        "volume_24h": 133177750.85449739,
                        "volume_change_24h": 12.1625,
                        "percent_change_1h": -0.43048701,
                        "percent_change_24h": -1.99201206,
                        "percent_change_7d": -6.12279894,
                        "percent_change_30d": -27.83534702,
                        "percent_change_60d": -32.85501563,
                        "percent_change_90d": -43.2505645,
                        "market_cap": 3668725766.0695567,
                        "market_cap_dominance": 0.1471,
                        "fully_diluted_market_cap": 16278383283.868975,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 1720,
                "name": "IOTA",
                "symbol": "MIOTA",
                "slug": "iota",
                "num_market_pairs": 61,
                "date_added": "2017-06-13T00:00:00.000Z",
                "tags": [
                    "dag",
                    "medium-of-exchange",
                    "iot",
                    "sharing-economy",
                    "binance-smart-chain"
                ],
                "max_supply": 2779530283,
                "circulating_supply": 2779530283,
                "total_supply": 2779530283,
                "platform": null,
                "cmc_rank": 48,
                "last_updated": "2021-11-09T17:26:08.000Z",
                "quote": {
                    "EUR": {
                        "price": 1.2422037116464613,
                        "volume_24h": 106073397.22986478,
                        "volume_change_24h": 55.331,
                        "percent_change_1h": 0.01978904,
                        "percent_change_24h": 3.91743362,
                        "percent_change_7d": 1.18659884,
                        "percent_change_30d": 1.32759942,
                        "percent_change_60d": -9.43108129,
                        "percent_change_90d": 36.0877691,
                        "market_cap": 3452742834.1763387,
                        "market_cap_dominance": 0.1384,
                        "fully_diluted_market_cap": 3452742834.179218,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 4256,
                "name": "Klaytn",
                "symbol": "KLAY",
                "slug": "klaytn",
                "num_market_pairs": 61,
                "date_added": "2020-03-30T00:00:00.000Z",
                "tags": [
                    "platform",
                    "enterprise-solutions"
                ],
                "max_supply": null,
                "circulating_supply": 2520688291.4,
                "total_supply": 10717592118.4,
                "platform": null,
                "cmc_rank": 49,
                "last_updated": "2021-11-09T17:26:03.000Z",
                "quote": {
                    "EUR": {
                        "price": 1.3659848280002074,
                        "volume_24h": 95624602.43152088,
                        "volume_change_24h": -4.7284,
                        "percent_change_1h": -0.8477464,
                        "percent_change_24h": -1.32032473,
                        "percent_change_7d": -12.48352804,
                        "percent_change_30d": -11.47825965,
                        "percent_change_60d": 14.2020572,
                        "percent_change_90d": 10.39200204,
                        "market_cap": 3443221962.1701655,
                        "market_cap_dominance": 0.138,
                        "fully_diluted_market_cap": 14640068226.425468,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 5034,
                "name": "Kusama",
                "symbol": "KSM",
                "slug": "kusama",
                "num_market_pairs": 105,
                "date_added": "2019-12-12T00:00:00.000Z",
                "tags": [
                    "substrate",
                    "polkadot-ecosystem",
                    "cms-holdings-portfolio",
                    "kinetic-capital",
                    "1confirmation-portfolio"
                ],
                "max_supply": null,
                "circulating_supply": 8470098.05726206,
                "total_supply": 9651217.45126206,
                "platform": null,
                "cmc_rank": 50,
                "last_updated": "2021-11-09T17:25:09.000Z",
                "quote": {
                    "EUR": {
                        "price": 394.0081265104501,
                        "volume_24h": 126472723.45772667,
                        "volume_change_24h": -40.5599,
                        "percent_change_1h": -0.79350724,
                        "percent_change_24h": -5.87312387,
                        "percent_change_7d": 1.72168785,
                        "percent_change_30d": 31.96004062,
                        "percent_change_60d": 10.05715089,
                        "percent_change_90d": 60.76778882,
                        "market_cap": 3337287466.901627,
                        "market_cap_dominance": 0.1337,
                        "fully_diluted_market_cap": 3802658106.520073,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 10791,
                "name": "eCash",
                "symbol": "XEC",
                "slug": "ecash",
                "num_market_pairs": 36,
                "date_added": "2021-07-08T00:00:00.000Z",
                "tags": [],
                "max_supply": 21000000000000,
                "circulating_supply": 18892229673313,
                "total_supply": 18892229673313,
                "platform": null,
                "cmc_rank": 51,
                "last_updated": "2021-11-09T17:26:07.000Z",
                "quote": {
                    "EUR": {
                        "price": 0.0001703602818240999,
                        "volume_24h": 123594525.8652198,
                        "volume_change_24h": 1.8717,
                        "percent_change_1h": 0.01609041,
                        "percent_change_24h": 0.83035267,
                        "percent_change_7d": 6.99699612,
                        "percent_change_30d": -9.94446127,
                        "percent_change_60d": -15.75204005,
                        "percent_change_90d": 277.80824743,
                        "market_cap": 3218485571.431226,
                        "market_cap_dominance": 0.1289,
                        "fully_diluted_market_cap": 3577565918.3319783,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 1376,
                "name": "Neo",
                "symbol": "NEO",
                "slug": "neo",
                "num_market_pairs": 226,
                "date_added": "2016-09-08T00:00:00.000Z",
                "tags": [
                    "platform",
                    "enterprise-solutions",
                    "smart-contracts"
                ],
                "max_supply": 100000000,
                "circulating_supply": 70538831,
                "total_supply": 100000000,
                "platform": null,
                "cmc_rank": 52,
                "last_updated": "2021-11-09T17:26:05.000Z",
                "quote": {
                    "EUR": {
                        "price": 45.17530090833015,
                        "volume_24h": 587840217.486847,
                        "volume_change_24h": 57.0638,
                        "percent_change_1h": 0.35567461,
                        "percent_change_24h": 5.89410912,
                        "percent_change_7d": 10.87564799,
                        "percent_change_30d": 12.34233859,
                        "percent_change_60d": 7.30034472,
                        "percent_change_90d": 5.56520966,
                        "market_cap": 3186612916.146847,
                        "market_cap_dominance": 0.1276,
                        "fully_diluted_market_cap": 4517530090.834105,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 3602,
                "name": "Bitcoin SV",
                "symbol": "BSV",
                "slug": "bitcoin-sv",
                "num_market_pairs": 159,
                "date_added": "2018-11-09T00:00:00.000Z",
                "tags": [
                    "mineable",
                    "pow",
                    "sha-256",
                    "medium-of-exchange",
                    "store-of-value",
                    "state-channels"
                ],
                "max_supply": 21000000,
                "circulating_supply": 18892276.64423905,
                "total_supply": 18892276.64423905,
                "platform": null,
                "cmc_rank": 53,
                "last_updated": "2021-11-09T17:26:06.000Z",
                "quote": {
                    "EUR": {
                        "price": 161.7051674628515,
                        "volume_24h": 384627379.45081383,
                        "volume_change_24h": 56.569,
                        "percent_change_1h": -0.81107895,
                        "percent_change_24h": 6.41530823,
                        "percent_change_7d": 10.67551024,
                        "percent_change_30d": 4.19511002,
                        "percent_change_60d": 18.98943358,
                        "percent_change_90d": 16.65379476,
                        "market_cap": 3054978758.5111938,
                        "market_cap_dominance": 0.1224,
                        "fully_diluted_market_cap": 3395808516.7189593,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 1934,
                "name": "Loopring",
                "symbol": "LRC",
                "slug": "loopring",
                "num_market_pairs": 132,
                "date_added": "2017-08-30T00:00:00.000Z",
                "tags": [
                    "marketplace",
                    "decentralized-exchange",
                    "defi"
                ],
                "max_supply": 1374513896,
                "circulating_supply": 1325642070.080831,
                "total_supply": 1373873440.4424574,
                "platform": {
                    "id": 1027,
                    "name": "Ethereum",
                    "symbol": "ETH",
                    "slug": "ethereum",
                    "token_address": "0xbbbbca6a901c926f240b89eacb641d8aec7aeafd"
                },
                "cmc_rank": 54,
                "last_updated": "2021-11-09T17:26:08.000Z",
                "quote": {
                    "EUR": {
                        "price": 2.2685447663424805,
                        "volume_24h": 4964598068.917213,
                        "volume_change_24h": 206.719,
                        "percent_change_1h": 9.38516701,
                        "percent_change_24h": 42.86316609,
                        "percent_change_7d": 66.99008931,
                        "percent_change_30d": 562.33662563,
                        "percent_change_60d": 513.00139374,
                        "percent_change_90d": 756.6114215,
                        "market_cap": 3007278380.125281,
                        "market_cap_dominance": 0.1205,
                        "fully_diluted_market_cap": 3118146305.032249,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 4157,
                "name": "THORChain",
                "symbol": "RUNE",
                "slug": "thorchain",
                "num_market_pairs": 60,
                "date_added": "2019-07-23T00:00:00.000Z",
                "tags": [
                    "cosmos-ecosystem",
                    "decentralized-exchange",
                    "defi",
                    "multicoin-capital-portfolio",
                    "exnetwork-capital-portfolio"
                ],
                "max_supply": 500000000,
                "circulating_supply": 258210215.1421133,
                "total_supply": 461668422.2248116,
                "platform": {
                    "id": 1839,
                    "name": "Binance Chain (BEP2)",
                    "symbol": "BNB",
                    "slug": "binance-coin",
                    "token_address": "RUNE-B1A"
                },
                "cmc_rank": 55,
                "last_updated": "2021-11-09T17:26:03.000Z",
                "quote": {
                    "EUR": {
                        "price": 11.129256275030475,
                        "volume_24h": 115960212.7496256,
                        "volume_change_24h": 38.2629,
                        "percent_change_1h": 0.48185908,
                        "percent_change_24h": -6.94626561,
                        "percent_change_7d": -24.44197863,
                        "percent_change_30d": 65.33596779,
                        "percent_change_60d": 52.14431568,
                        "percent_change_90d": 76.13585704,
                        "market_cap": 2873687657.147333,
                        "market_cap_dominance": 0.1151,
                        "fully_diluted_market_cap": 5564628137.519417,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 3945,
                "name": "Harmony",
                "symbol": "ONE",
                "slug": "harmony",
                "num_market_pairs": 57,
                "date_added": "2019-06-01T00:00:00.000Z",
                "tags": [
                    "platform",
                    "enterprise-solutions",
                    "scaling",
                    "smart-contracts",
                    "binance-smart-chain",
                    "binance-launchpad",
                    "binance-labs-portfolio",
                    "hashkey-capital-portfolio"
                ],
                "max_supply": null,
                "circulating_supply": 10788211870.100662,
                "total_supply": 13238858870.10068,
                "platform": null,
                "cmc_rank": 56,
                "last_updated": "2021-11-09T17:26:08.000Z",
                "quote": {
                    "EUR": {
                        "price": 0.26239993836237596,
                        "volume_24h": 180549067.7541206,
                        "volume_change_24h": -11.7454,
                        "percent_change_1h": -0.78934069,
                        "percent_change_24h": -4.69075082,
                        "percent_change_7d": 1.12934823,
                        "percent_change_30d": 21.85548613,
                        "percent_change_60d": 80.07166988,
                        "percent_change_90d": 211.58614692,
                        "market_cap": 2830826129.7546663,
                        "market_cap_dominance": 0.1134,
                        "fully_diluted_market_cap": 3473875751.4995947,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 3155,
                "name": "Quant",
                "symbol": "QNT",
                "slug": "quant",
                "num_market_pairs": 46,
                "date_added": "2018-08-10T00:00:00.000Z",
                "tags": [
                    "platform",
                    "interoperability"
                ],
                "max_supply": 14612493,
                "circulating_supply": 12072738,
                "total_supply": 14612493.080826,
                "platform": {
                    "id": 1027,
                    "name": "Ethereum",
                    "symbol": "ETH",
                    "slug": "ethereum",
                    "token_address": "0x4a220e6096b25eadb88358cb44068a3248254675"
                },
                "cmc_rank": 57,
                "last_updated": "2021-11-09T17:26:03.000Z",
                "quote": {
                    "EUR": {
                        "price": 232.98541261979892,
                        "volume_24h": 81444466.61753945,
                        "volume_change_24h": 42.3679,
                        "percent_change_1h": 0.38860222,
                        "percent_change_24h": 2.12641691,
                        "percent_change_7d": -3.47439508,
                        "percent_change_30d": -9.96592845,
                        "percent_change_60d": -25.42347672,
                        "percent_change_90d": 70.19890889,
                        "market_cap": 2812771844.380726,
                        "market_cap_dominance": 0.1127,
                        "fully_diluted_market_cap": 3404497711.0075154,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 3957,
                "name": "UNUS SED LEO",
                "symbol": "LEO",
                "slug": "unus-sed-leo",
                "num_market_pairs": 16,
                "date_added": "2019-05-21T00:00:00.000Z",
                "tags": [
                    "marketplace",
                    "centralized-exchange",
                    "discount-token",
                    "payments",
                    "arrington-xrp-capital",
                    "kinetic-capital",
                    "alameda-research-portfolio"
                ],
                "max_supply": null,
                "circulating_supply": 953954130,
                "total_supply": 985239504,
                "platform": {
                    "id": 1027,
                    "name": "Ethereum",
                    "symbol": "ETH",
                    "slug": "ethereum",
                    "token_address": "0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3"
                },
                "cmc_rank": 58,
                "last_updated": "2021-11-09T17:25:10.000Z",
                "quote": {
                    "EUR": {
                        "price": 2.8990646304717917,
                        "volume_24h": 2560297.894540696,
                        "volume_change_24h": 0.8217,
                        "percent_change_1h": 0.15876511,
                        "percent_change_24h": 2.3869726,
                        "percent_change_7d": -1.60634048,
                        "percent_change_30d": 19.75651362,
                        "percent_change_60d": 9.63341725,
                        "percent_change_90d": 13.64803178,
                        "market_cap": 2765574677.375489,
                        "market_cap_dominance": 0.1109,
                        "fully_diluted_market_cap": 2856272998.58673,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 1518,
                "name": "Maker",
                "symbol": "MKR",
                "slug": "maker",
                "num_market_pairs": 201,
                "date_added": "2017-01-29T00:00:00.000Z",
                "tags": [
                    "store-of-value",
                    "defi",
                    "dao",
                    "binance-smart-chain",
                    "polychain-capital-portfolio",
                    "governance",
                    "lending-borowing",
                    "dragonfly-capital-portfolio",
                    "electric-capital-portfolio",
                    "a16z-portfolio",
                    "1confirmation-portfolio",
                    "placeholder-ventures-portfolio",
                    "pantera-capital-portfolio",
                    "paradigm-xzy-screener",
                    "near-protocol-ecosystem"
                ],
                "max_supply": 1005577,
                "circulating_supply": 991328.38195493,
                "total_supply": 991328.38195493,
                "platform": {
                    "id": 1027,
                    "name": "Ethereum",
                    "symbol": "ETH",
                    "slug": "ethereum",
                    "token_address": "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2"
                },
                "cmc_rank": 59,
                "last_updated": "2021-11-09T17:26:06.000Z",
                "quote": {
                    "EUR": {
                        "price": 2714.382110973352,
                        "volume_24h": 150381598.70182618,
                        "volume_change_24h": -29.0005,
                        "percent_change_1h": -0.41351466,
                        "percent_change_24h": -3.19071482,
                        "percent_change_7d": 17.18149043,
                        "percent_change_30d": 22.35501489,
                        "percent_change_60d": 11.97073576,
                        "percent_change_90d": -9.30104648,
                        "market_cap": 2690844026.0786204,
                        "market_cap_dominance": 0.1079,
                        "fully_diluted_market_cap": 2729520220.0065413,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 7129,
                "name": "TerraUSD",
                "symbol": "UST",
                "slug": "terrausd",
                "num_market_pairs": 105,
                "date_added": "2020-09-21T00:00:00.000Z",
                "tags": [
                    "stablecoin",
                    "binance-smart-chain",
                    "terra-ecosystem"
                ],
                "max_supply": null,
                "circulating_supply": 2873494489.6195,
                "total_supply": 2873494489.6195,
                "platform": null,
                "cmc_rank": 60,
                "last_updated": "2021-11-09T17:25:10.000Z",
                "quote": {
                    "EUR": {
                        "price": 0.8659111959057096,
                        "volume_24h": 97988251.91428179,
                        "volume_change_24h": 4.7843,
                        "percent_change_1h": -0.10409694,
                        "percent_change_24h": -0.51168005,
                        "percent_change_7d": -1.40757323,
                        "percent_change_30d": 0.42482344,
                        "percent_change_60d": -0.01701156,
                        "percent_change_90d": 0.2276216,
                        "market_cap": 2488191049.9348884,
                        "market_cap_dominance": 0.0997,
                        "fully_diluted_market_cap": 2488191049.933571,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 4847,
                "name": "Stacks",
                "symbol": "STX",
                "slug": "stacks",
                "num_market_pairs": 36,
                "date_added": "2019-10-28T00:00:00.000Z",
                "tags": [
                    "arrington-xrp-capital",
                    "blockchain-capital-portfolio",
                    "dcg-portfolio",
                    "fabric-ventures-portfolio",
                    "hashkey-capital-portfolio",
                    "huobi-capital",
                    "usv-portfolio"
                ],
                "max_supply": 1818000000,
                "circulating_supply": 1282732549.100945,
                "total_supply": 1352464600,
                "platform": null,
                "cmc_rank": 61,
                "last_updated": "2021-11-09T17:26:07.000Z",
                "quote": {
                    "EUR": {
                        "price": 1.9114422048260358,
                        "volume_24h": 126498052.96731842,
                        "volume_change_24h": -65.8717,
                        "percent_change_1h": 0.15093131,
                        "percent_change_24h": -5.83024443,
                        "percent_change_7d": 10.99584482,
                        "percent_change_30d": 2.97121035,
                        "percent_change_60d": 61.36080643,
                        "percent_change_90d": 52.96900471,
                        "market_cap": 2451869131.8556314,
                        "market_cap_dominance": 0.0982,
                        "fully_diluted_market_cap": 3475001928.372901,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 4066,
                "name": "Chiliz",
                "symbol": "CHZ",
                "slug": "chiliz",
                "num_market_pairs": 189,
                "date_added": "2019-07-01T00:00:00.000Z",
                "tags": [
                    "sports",
                    "collectibles-nfts",
                    "content-creation",
                    "payments"
                ],
                "max_supply": 8888888888,
                "circulating_supply": 5941088088.530758,
                "total_supply": 8888888888,
                "platform": {
                    "id": 1027,
                    "name": "Ethereum",
                    "symbol": "ETH",
                    "slug": "ethereum",
                    "token_address": "0x3506424f91fd33084466f402d5d97f05f8e3b4af"
                },
                "cmc_rank": 62,
                "last_updated": "2021-11-09T17:25:10.000Z",
                "quote": {
                    "EUR": {
                        "price": 0.40527161036664516,
                        "volume_24h": 368929700.68539244,
                        "volume_change_24h": -20.0349,
                        "percent_change_1h": -0.2696098,
                        "percent_change_24h": -1.27679058,
                        "percent_change_7d": -3.78792848,
                        "percent_change_30d": 47.14877942,
                        "percent_change_60d": 40.96126626,
                        "percent_change_90d": 40.15351162,
                        "market_cap": 2407754336.9689536,
                        "market_cap_dominance": 0.0965,
                        "fully_diluted_market_cap": 3602414314.0098505,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 1274,
                "name": "Waves",
                "symbol": "WAVES",
                "slug": "waves",
                "num_market_pairs": 148,
                "date_added": "2016-06-02T00:00:00.000Z",
                "tags": [
                    "lpos",
                    "platform",
                    "smart-contracts"
                ],
                "max_supply": null,
                "circulating_supply": 106652380,
                "total_supply": 106652380,
                "platform": null,
                "cmc_rank": 63,
                "last_updated": "2021-11-09T17:26:04.000Z",
                "quote": {
                    "EUR": {
                        "price": 22.33268452322274,
                        "volume_24h": 111633948.07327943,
                        "volume_change_24h": 47.9356,
                        "percent_change_1h": -0.72980996,
                        "percent_change_24h": 1.48330861,
                        "percent_change_7d": -3.85459101,
                        "percent_change_30d": -5.10574198,
                        "percent_change_60d": -11.45592473,
                        "percent_change_90d": 34.49347694,
                        "market_cap": 2381833956.1908703,
                        "market_cap_dominance": 0.0955,
                        "fully_diluted_market_cap": 2381833956.1869097,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 3718,
                "name": "BitTorrent",
                "symbol": "BTT",
                "slug": "bittorrent",
                "num_market_pairs": 150,
                "date_added": "2019-01-31T00:00:00.000Z",
                "tags": [
                    "platform",
                    "distributed-computing",
                    "filesharing",
                    "storage",
                    "binance-smart-chain",
                    "binance-launchpad",
                    "binance-labs-portfolio"
                ],
                "max_supply": null,
                "circulating_supply": 659952625000,
                "total_supply": 990000000000,
                "platform": {
                    "id": 1958,
                    "name": "Tron10",
                    "symbol": "TRX",
                    "slug": "tron",
                    "token_address": "1002000"
                },
                "cmc_rank": 64,
                "last_updated": "2021-11-09T17:26:07.000Z",
                "quote": {
                    "EUR": {
                        "price": 0.0034927400433783663,
                        "volume_24h": 597343067.353446,
                        "volume_change_24h": 33.6947,
                        "percent_change_1h": -0.56405821,
                        "percent_change_24h": 0.23808378,
                        "percent_change_7d": -3.21092065,
                        "percent_change_30d": 3.14185413,
                        "percent_change_60d": 3.17049889,
                        "percent_change_90d": -11.09656181,
                        "market_cap": 2305042960.0701666,
                        "market_cap_dominance": 0.0924,
                        "fully_diluted_market_cap": 3457812642.9451866,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 5647,
                "name": "Kadena",
                "symbol": "KDA",
                "slug": "kadena",
                "num_market_pairs": 11,
                "date_added": "2020-05-31T00:00:00.000Z",
                "tags": [
                    "mineable",
                    "pow",
                    "blake2s",
                    "platform",
                    "cosmos-ecosystem",
                    "smart-contracts",
                    "coinfund-portfolio",
                    "multicoin-capital-portfolio"
                ],
                "max_supply": 1000000000,
                "circulating_supply": 157025743.5837,
                "total_supply": 1000000000,
                "platform": null,
                "cmc_rank": 65,
                "last_updated": "2021-11-09T17:26:06.000Z",
                "quote": {
                    "EUR": {
                        "price": 14.299495471324056,
                        "volume_24h": 118038161.28292988,
                        "volume_change_24h": -60.4108,
                        "percent_change_1h": 1.00347658,
                        "percent_change_24h": -6.55259901,
                        "percent_change_7d": 130.45475389,
                        "percent_change_30d": 726.87682511,
                        "percent_change_60d": 1275.32600838,
                        "percent_change_90d": 3699.73125434,
                        "market_cap": 2245388909.25641,
                        "market_cap_dominance": 0.09,
                        "fully_diluted_market_cap": 14299495471.322968,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 6945,
                "name": "Amp",
                "symbol": "AMP",
                "slug": "amp",
                "num_market_pairs": 32,
                "date_added": "2020-09-08T00:00:00.000Z",
                "tags": [],
                "max_supply": 92547638199,
                "circulating_supply": 42227702186,
                "total_supply": 99213408535,
                "platform": {
                    "id": 1027,
                    "name": "Ethereum",
                    "symbol": "ETH",
                    "slug": "ethereum",
                    "token_address": "0xff20817765cb7f73d4bde2e66e067e58d11095c2"
                },
                "cmc_rank": 66,
                "last_updated": "2021-11-09T17:25:09.000Z",
                "quote": {
                    "EUR": {
                        "price": 0.05184168841920613,
                        "volume_24h": 52185182.17842073,
                        "volume_change_24h": -47.1509,
                        "percent_change_1h": -0.76944367,
                        "percent_change_24h": -2.53481911,
                        "percent_change_7d": 18.00476741,
                        "percent_change_30d": 25.71827497,
                        "percent_change_60d": 16.88603207,
                        "percent_change_90d": -6.13751643,
                        "market_cap": 2189155379.3856416,
                        "market_cap_dominance": 0.0877,
                        "fully_diluted_market_cap": 4797825823.449748,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 2130,
                "name": "Enjin Coin",
                "symbol": "ENJ",
                "slug": "enjin-coin",
                "num_market_pairs": 181,
                "date_added": "2017-11-01T00:00:00.000Z",
                "tags": [
                    "media",
                    "collectibles-nfts",
                    "gaming",
                    "ethereum",
                    "metaverse"
                ],
                "max_supply": 1000000000,
                "circulating_supply": 834340659.567558,
                "total_supply": 1000000000,
                "platform": {
                    "id": 1027,
                    "name": "Ethereum",
                    "symbol": "ETH",
                    "slug": "ethereum",
                    "token_address": "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c"
                },
                "cmc_rank": 67,
                "last_updated": "2021-11-09T17:26:03.000Z",
                "quote": {
                    "EUR": {
                        "price": 2.601471835500871,
                        "volume_24h": 370504638.98323107,
                        "volume_change_24h": -10.3221,
                        "percent_change_1h": -0.14118631,
                        "percent_change_24h": -6.7449558,
                        "percent_change_7d": 0.97846426,
                        "percent_change_30d": 84.20795371,
                        "percent_change_60d": 80.8379145,
                        "percent_change_90d": 81.41202684,
                        "market_cap": 2170513727.0782228,
                        "market_cap_dominance": 0.087,
                        "fully_diluted_market_cap": 2601471835.498205,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 2682,
                "name": "Holo",
                "symbol": "HOT",
                "slug": "holo",
                "num_market_pairs": 85,
                "date_added": "2018-04-29T00:00:00.000Z",
                "tags": [
                    "platform",
                    "distributed-computing",
                    "filesharing",
                    "storage"
                ],
                "max_supply": null,
                "circulating_supply": 172895870443.36282,
                "total_supply": 177619433541.14133,
                "platform": {
                    "id": 1027,
                    "name": "Ethereum",
                    "symbol": "ETH",
                    "slug": "ethereum",
                    "token_address": "0x6c6ee5e31d828de241282b9606c8e98ea48526e2"
                },
                "cmc_rank": 68,
                "last_updated": "2021-11-09T17:26:07.000Z",
                "quote": {
                    "EUR": {
                        "price": 0.012565751266005948,
                        "volume_24h": 168977140.31210586,
                        "volume_change_24h": -16.8113,
                        "percent_change_1h": -1.1280738,
                        "percent_change_24h": -3.50890984,
                        "percent_change_7d": 3.30380314,
                        "percent_change_30d": 53.29340024,
                        "percent_change_60d": 47.99489147,
                        "percent_change_90d": 22.39143888,
                        "market_cap": 2172566502.910887,
                        "market_cap_dominance": 0.0871,
                        "fully_diluted_market_cap": 2231921621.8849454,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 5632,
                "name": "Arweave",
                "symbol": "AR",
                "slug": "arweave",
                "num_market_pairs": 36,
                "date_added": "2020-05-27T00:00:00.000Z",
                "tags": [
                    "distributed-computing",
                    "filesharing",
                    "storage",
                    "coinbase-ventures-portfolio",
                    "solana-ecosystem",
                    "blockchain-capital-portfolio",
                    "a16z-portfolio",
                    "multicoin-capital-portfolio"
                ],
                "max_supply": 66000000,
                "circulating_supply": 33394701,
                "total_supply": 63190435,
                "platform": null,
                "cmc_rank": 69,
                "last_updated": "2021-11-09T17:26:06.000Z",
                "quote": {
                    "EUR": {
                        "price": 62.63981356266116,
                        "volume_24h": 71912070.4150257,
                        "volume_change_24h": 0.6233,
                        "percent_change_1h": -0.47466721,
                        "percent_change_24h": -7.2078891,
                        "percent_change_7d": 1.32771162,
                        "percent_change_30d": 19.56493298,
                        "percent_change_60d": 16.60183515,
                        "percent_change_90d": 373.44959848,
                        "market_cap": 2091837844.6208143,
                        "market_cap_dominance": 0.0838,
                        "fully_diluted_market_cap": 4134227695.1319423,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 131,
                "name": "Dash",
                "symbol": "DASH",
                "slug": "dash",
                "num_market_pairs": 309,
                "date_added": "2014-02-14T00:00:00.000Z",
                "tags": [
                    "mineable",
                    "hybrid-pow-pos",
                    "x11",
                    "medium-of-exchange",
                    "masternodes",
                    "dao",
                    "governance"
                ],
                "max_supply": 18900000,
                "circulating_supply": 10422298.18629191,
                "total_supply": 10422298.18629191,
                "platform": null,
                "cmc_rank": 70,
                "last_updated": "2021-11-09T17:26:03.000Z",
                "quote": {
                    "EUR": {
                        "price": 198.95551888447423,
                        "volume_24h": 597153178.9894806,
                        "volume_change_24h": 121.2353,
                        "percent_change_1h": -1.00313125,
                        "percent_change_24h": 10.92582016,
                        "percent_change_7d": 14.86452234,
                        "percent_change_30d": 21.55615949,
                        "percent_change_60d": 18.52806167,
                        "percent_change_90d": 25.36009753,
                        "market_cap": 2073573743.622422,
                        "market_cap_dominance": 0.0831,
                        "fully_diluted_market_cap": 3760259306.9165936,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 1437,
                "name": "Zcash",
                "symbol": "ZEC",
                "slug": "zcash",
                "num_market_pairs": 223,
                "date_added": "2016-10-29T00:00:00.000Z",
                "tags": [
                    "mineable",
                    "pow",
                    "equihash",
                    "medium-of-exchange",
                    "privacy",
                    "zero-knowledge-proofs",
                    "binance-chain",
                    "binance-smart-chain",
                    "boostvc-portfolio",
                    "dcg-portfolio",
                    "electric-capital-portfolio",
                    "fenbushi-capital-portfolio",
                    "hashkey-capital-portfolio",
                    "winklevoss-capital",
                    "placeholder-ventures-portfolio",
                    "pantera-capital-portfolio"
                ],
                "max_supply": 21000000,
                "circulating_supply": 13049893.75,
                "total_supply": 13049893.75,
                "platform": null,
                "cmc_rank": 71,
                "last_updated": "2021-11-09T17:26:06.000Z",
                "quote": {
                    "EUR": {
                        "price": 156.44883888881233,
                        "volume_24h": 382727395.33366966,
                        "volume_change_24h": 96.4325,
                        "percent_change_1h": 0.328184,
                        "percent_change_24h": 7.24154363,
                        "percent_change_7d": 3.24373266,
                        "percent_change_30d": 46.8018396,
                        "percent_change_60d": 40.0635669,
                        "percent_change_90d": 31.41146212,
                        "market_cap": 2041640724.8098688,
                        "market_cap_dominance": 0.0818,
                        "fully_diluted_market_cap": 3285425616.66267,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 1808,
                "name": "OMG Network",
                "symbol": "OMG",
                "slug": "omg",
                "num_market_pairs": 244,
                "date_added": "2017-07-14T00:00:00.000Z",
                "tags": [
                    "medium-of-exchange",
                    "payments",
                    "state-channels",
                    "pantera-capital-portfolio"
                ],
                "max_supply": 140245399,
                "circulating_supply": 140245398.24513277,
                "total_supply": 140245398.24513277,
                "platform": null,
                "cmc_rank": 72,
                "last_updated": "2021-11-09T17:26:08.000Z",
                "quote": {
                    "EUR": {
                        "price": 14.133339393338044,
                        "volume_24h": 2268273300.9402304,
                        "volume_change_24h": 27.5389,
                        "percent_change_1h": -0.19751326,
                        "percent_change_24h": -7.93468669,
                        "percent_change_7d": 6.73489553,
                        "percent_change_30d": 23.29871225,
                        "percent_change_60d": 100.26924532,
                        "percent_change_90d": 204.45196644,
                        "market_cap": 1982135811.7523172,
                        "market_cap_dominance": 0.0794,
                        "fully_diluted_market_cap": 1982135822.423239,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 5567,
                "name": "Celo",
                "symbol": "CELO",
                "slug": "celo",
                "num_market_pairs": 47,
                "date_added": "2020-05-22T00:00:00.000Z",
                "tags": [
                    "pos",
                    "zero-knowledge-proofs",
                    "mobile",
                    "payments",
                    "smart-contracts",
                    "coinbase-ventures-portfolio",
                    "polychain-capital-portfolio",
                    "dragonfly-capital-portfolio",
                    "electric-capital-portfolio",
                    "a16z-portfolio",
                    "celo-ecosystem"
                ],
                "max_supply": 1000000000,
                "circulating_supply": 347297758,
                "total_supply": 1000000000,
                "platform": null,
                "cmc_rank": 73,
                "last_updated": "2021-11-09T17:26:06.000Z",
                "quote": {
                    "EUR": {
                        "price": 5.5349971657582495,
                        "volume_24h": 58105607.78262366,
                        "volume_change_24h": 40.6575,
                        "percent_change_1h": -0.86465673,
                        "percent_change_24h": -1.05494512,
                        "percent_change_7d": -1.13425996,
                        "percent_change_30d": 10.78743525,
                        "percent_change_60d": 29.10177579,
                        "percent_change_90d": 106.9372368,
                        "market_cap": 1922292106.2041943,
                        "market_cap_dominance": 0.077,
                        "fully_diluted_market_cap": 5534997165.761822,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 5692,
                "name": "Compound",
                "symbol": "COMP",
                "slug": "compound",
                "num_market_pairs": 218,
                "date_added": "2020-06-16T00:00:00.000Z",
                "tags": [
                    "defi",
                    "dao",
                    "yield-farming",
                    "binance-smart-chain",
                    "polkadot-ecosystem",
                    "coinbase-ventures-portfolio",
                    "three-arrows-capital-portfolio",
                    "polychain-capital-portfolio",
                    "lending-borowing",
                    "dragonfly-capital-portfolio",
                    "alameda-research-portfolio",
                    "a16z-portfolio",
                    "pantera-capital-portfolio",
                    "paradigm-xzy-screener"
                ],
                "max_supply": 10000000,
                "circulating_supply": 6018895.25927744,
                "total_supply": 10000000,
                "platform": {
                    "id": 1027,
                    "name": "Ethereum",
                    "symbol": "ETH",
                    "slug": "ethereum",
                    "token_address": "0xc00e94cb662c3520282e6f5717214004a7f26888"
                },
                "cmc_rank": 74,
                "last_updated": "2021-11-09T17:26:06.000Z",
                "quote": {
                    "EUR": {
                        "price": 309.16628410802707,
                        "volume_24h": 129567836.37181404,
                        "volume_change_24h": 8.6636,
                        "percent_change_1h": -0.82116968,
                        "percent_change_24h": -0.2359981,
                        "percent_change_7d": -4.4697781,
                        "percent_change_30d": 13.23086357,
                        "percent_change_60d": -9.56389597,
                        "percent_change_90d": -25.84802317,
                        "market_cap": 1860839481.746226,
                        "market_cap_dominance": 0.0745,
                        "fully_diluted_market_cap": 3091662841.0831265,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 6210,
                "name": "The Sandbox",
                "symbol": "SAND",
                "slug": "the-sandbox",
                "num_market_pairs": 120,
                "date_added": "2020-08-05T00:00:00.000Z",
                "tags": [
                    "collectibles-nfts",
                    "content-creation",
                    "gaming",
                    "ethereum",
                    "binance-launchpad",
                    "metaverse",
                    "play-to-earn",
                    "animoca-brands-portfolio"
                ],
                "max_supply": 3000000000,
                "circulating_supply": 892246119.2233225,
                "total_supply": 3000000000,
                "platform": {
                    "id": 1027,
                    "name": "Ethereum",
                    "symbol": "ETH",
                    "slug": "ethereum",
                    "token_address": "0x3845badAde8e6dFF049820680d1F14bD3903a5d0"
                },
                "cmc_rank": 75,
                "last_updated": "2021-11-09T17:26:03.000Z",
                "quote": {
                    "EUR": {
                        "price": 2.067483923462964,
                        "volume_24h": 628564343.9959658,
                        "volume_change_24h": -5.3228,
                        "percent_change_1h": -0.33957839,
                        "percent_change_24h": -5.85951959,
                        "percent_change_7d": -18.15781193,
                        "percent_change_30d": 212.12548248,
                        "percent_change_60d": 204.44280909,
                        "percent_change_90d": 249.28538832,
                        "market_cap": 1844704507.2664385,
                        "market_cap_dominance": 0.074,
                        "fully_diluted_market_cap": 6202451770.386529,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 3822,
                "name": "Theta Fuel",
                "symbol": "TFUEL",
                "slug": "theta-fuel",
                "num_market_pairs": 20,
                "date_added": "2019-03-28T00:00:00.000Z",
                "tags": [
                    "media",
                    "content-creation",
                    "payments"
                ],
                "max_supply": null,
                "circulating_supply": 5301214400,
                "total_supply": 5301214400,
                "platform": null,
                "cmc_rank": 76,
                "last_updated": "2021-11-09T17:25:09.000Z",
                "quote": {
                    "EUR": {
                        "price": 0.32502780634721584,
                        "volume_24h": 46172791.0295065,
                        "volume_change_24h": -23.8811,
                        "percent_change_1h": -0.25104436,
                        "percent_change_24h": -3.09193171,
                        "percent_change_7d": 1.29800757,
                        "percent_change_30d": 23.67880547,
                        "percent_change_60d": 20.74590856,
                        "percent_change_90d": 8.53811495,
                        "market_cap": 1723042087.408272,
                        "market_cap_dominance": 0.069,
                        "fully_diluted_market_cap": 1723042087.4110465,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 6538,
                "name": "Curve DAO Token",
                "symbol": "CRV",
                "slug": "curve-dao-token",
                "num_market_pairs": 168,
                "date_added": "2020-08-14T00:00:00.000Z",
                "tags": [
                    "decentralized-exchange",
                    "defi",
                    "dao",
                    "yield-farming",
                    "amm",
                    "governance",
                    "framework-ventures",
                    "alameda-research-portfolio",
                    "polygon-ecosystem",
                    "fantom-ecosystem"
                ],
                "max_supply": 3303030299,
                "circulating_supply": 413487283.14591277,
                "total_supply": 1618756965.7925403,
                "platform": {
                    "id": 1027,
                    "name": "Ethereum",
                    "symbol": "ETH",
                    "slug": "ethereum",
                    "token_address": "0xD533a949740bb3306d119CC777fa900bA034cd52"
                },
                "cmc_rank": 77,
                "last_updated": "2021-11-09T17:26:06.000Z",
                "quote": {
                    "EUR": {
                        "price": 4.068250007920666,
                        "volume_24h": 439375763.7010562,
                        "volume_change_24h": -5.5304,
                        "percent_change_1h": -2.0758634,
                        "percent_change_24h": 3.64713796,
                        "percent_change_7d": 5.53329947,
                        "percent_change_30d": 69.8193856,
                        "percent_change_60d": 116.8991103,
                        "percent_change_90d": 121.0133381,
                        "market_cap": 1682169642.9334545,
                        "market_cap_dominance": 0.0674,
                        "fully_diluted_market_cap": 13437553040.066353,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 2694,
                "name": "Nexo",
                "symbol": "NEXO",
                "slug": "nexo",
                "num_market_pairs": 45,
                "date_added": "2018-05-01T00:00:00.000Z",
                "tags": [
                    "services",
                    "payments",
                    "arrington-xrp-capital"
                ],
                "max_supply": 1000000000,
                "circulating_supply": 560000011,
                "total_supply": 1000000000,
                "platform": {
                    "id": 1839,
                    "name": "Binance Chain (BEP2)",
                    "symbol": "BNB",
                    "slug": "binance-coin",
                    "token_address": "NEXO-A84"
                },
                "cmc_rank": 78,
                "last_updated": "2021-11-09T17:26:06.000Z",
                "quote": {
                    "EUR": {
                        "price": 2.8756052257697866,
                        "volume_24h": 14354431.723811511,
                        "volume_change_24h": 23.8109,
                        "percent_change_1h": -0.20153868,
                        "percent_change_24h": 2.62124541,
                        "percent_change_7d": 5.92805584,
                        "percent_change_30d": 91.45621768,
                        "percent_change_60d": 116.65216843,
                        "percent_change_90d": 64.10101654,
                        "market_cap": 1610338958.062738,
                        "market_cap_dominance": 0.0645,
                        "fully_diluted_market_cap": 2875605225.772633,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 3640,
                "name": "Livepeer",
                "symbol": "LPT",
                "slug": "livepeer",
                "num_market_pairs": 43,
                "date_added": "2018-12-19T00:00:00.000Z",
                "tags": [
                    "coinfund-portfolio",
                    "dcg-portfolio",
                    "pantera-capital-portfolio",
                    "multicoin-capital-portfolio"
                ],
                "max_supply": 22906951,
                "circulating_supply": 21164655.33252989,
                "total_supply": 22859012.33252989,
                "platform": null,
                "cmc_rank": 79,
                "last_updated": "2021-11-09T17:26:07.000Z",
                "quote": {
                    "EUR": {
                        "price": 75.88958241258435,
                        "volume_24h": 1503628953.5032513,
                        "volume_change_24h": 1281.6313,
                        "percent_change_1h": -0.5618181,
                        "percent_change_24h": 117.84934261,
                        "percent_change_7d": 185.61700956,
                        "percent_change_30d": 397.67644427,
                        "percent_change_60d": 406.88653585,
                        "percent_change_90d": 345.30368867,
                        "market_cap": 1606176855.09197,
                        "market_cap_dominance": 0.0644,
                        "fully_diluted_market_cap": 1738398945.7323956,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 873,
                "name": "NEM",
                "symbol": "XEM",
                "slug": "nem",
                "num_market_pairs": 112,
                "date_added": "2015-04-01T00:00:00.000Z",
                "tags": [
                    "poi",
                    "medium-of-exchange",
                    "payments",
                    "smart-contracts",
                    "fantom-ecosystem"
                ],
                "max_supply": 8999999999,
                "circulating_supply": 8999999999,
                "total_supply": 8999999999,
                "platform": null,
                "cmc_rank": 80,
                "last_updated": "2021-11-09T17:25:09.000Z",
                "quote": {
                    "EUR": {
                        "price": 0.1758425876039209,
                        "volume_24h": 126824744.9811382,
                        "volume_change_24h": -25.6159,
                        "percent_change_1h": 0.17125537,
                        "percent_change_24h": 0.57816782,
                        "percent_change_7d": -2.25142356,
                        "percent_change_30d": 14.77017742,
                        "percent_change_60d": 13.73941237,
                        "percent_change_90d": 1.94019673,
                        "market_cap": 1582583288.2594457,
                        "market_cap_dominance": 0.0634,
                        "fully_diluted_market_cap": 1582583288.2620375,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 2087,
                "name": "KuCoin Token",
                "symbol": "KCS",
                "slug": "kucoin-token",
                "num_market_pairs": 33,
                "date_added": "2017-10-24T00:00:00.000Z",
                "tags": [
                    "marketplace",
                    "centralized-exchange",
                    "discount-token",
                    "algorand-ecosystem"
                ],
                "max_supply": 170118638,
                "circulating_supply": 80118638,
                "total_supply": 170118638,
                "platform": {
                    "id": 1027,
                    "name": "Ethereum",
                    "symbol": "ETH",
                    "slug": "ethereum",
                    "token_address": "0xf34960d9d60be18cc1d5afc1a6f012a723a28811"
                },
                "cmc_rank": 81,
                "last_updated": "2021-11-09T17:26:03.000Z",
                "quote": {
                    "EUR": {
                        "price": 19.543528306140917,
                        "volume_24h": 97175503.5973534,
                        "volume_change_24h": 17.9901,
                        "percent_change_1h": -0.99559766,
                        "percent_change_24h": 1.44915219,
                        "percent_change_7d": 15.48208144,
                        "percent_change_30d": 95.29191495,
                        "percent_change_60d": 101.68468823,
                        "percent_change_90d": 90.88392173,
                        "market_cap": 1565800869.6024573,
                        "market_cap_dominance": 0.0627,
                        "fully_diluted_market_cap": 3324718417.150933,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 3897,
                "name": "OKB",
                "symbol": "OKB",
                "slug": "okb",
                "num_market_pairs": 52,
                "date_added": "2019-04-30T00:00:00.000Z",
                "tags": [
                    "marketplace",
                    "centralized-exchange",
                    "discount-token",
                    "alameda-research-portfolio"
                ],
                "max_supply": null,
                "circulating_supply": 60000000,
                "total_supply": 300000000,
                "platform": {
                    "id": 1027,
                    "name": "Ethereum",
                    "symbol": "ETH",
                    "slug": "ethereum",
                    "token_address": "0x75231f58b43240c9718dd58b4967c5114342a86c"
                },
                "cmc_rank": 82,
                "last_updated": "2021-11-09T17:25:09.000Z",
                "quote": {
                    "EUR": {
                        "price": 25.85223829443066,
                        "volume_24h": 792455190.1749331,
                        "volume_change_24h": 19.5386,
                        "percent_change_1h": 0.90196455,
                        "percent_change_24h": -2.15463286,
                        "percent_change_7d": 30.89551115,
                        "percent_change_30d": 74.71323145,
                        "percent_change_60d": 64.88364773,
                        "percent_change_90d": 23.9995095,
                        "market_cap": 1551134297.6658394,
                        "market_cap_dominance": 0.0622,
                        "fully_diluted_market_cap": 7755671488.329518,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 1697,
                "name": "Basic Attention Token",
                "symbol": "BAT",
                "slug": "basic-attention-token",
                "num_market_pairs": 252,
                "date_added": "2017-06-01T00:00:00.000Z",
                "tags": [
                    "marketing",
                    "content-creation",
                    "defi",
                    "payments",
                    "binance-smart-chain",
                    "dcg-portfolio",
                    "1confirmation-portfolio",
                    "pantera-capital-portfolio"
                ],
                "max_supply": 1500000000,
                "circulating_supply": 1491852436.4473505,
                "total_supply": 1500000000,
                "platform": {
                    "id": 1027,
                    "name": "Ethereum",
                    "symbol": "ETH",
                    "slug": "ethereum",
                    "token_address": "0x0d8775f648430679a709e98d2b0cb6250d2887ef"
                },
                "cmc_rank": 83,
                "last_updated": "2021-11-09T17:26:07.000Z",
                "quote": {
                    "EUR": {
                        "price": 1.036707602152866,
                        "volume_24h": 1653654648.6324894,
                        "volume_change_24h": 299.5999,
                        "percent_change_1h": -1.95242866,
                        "percent_change_24h": 2.59970042,
                        "percent_change_7d": 14.61380436,
                        "percent_change_30d": 63.60990583,
                        "percent_change_60d": 55.05555535,
                        "percent_change_90d": 58.12094014,
                        "market_cap": 1546614762.1552436,
                        "market_cap_dominance": 0.0619,
                        "fully_diluted_market_cap": 1555061403.23011,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 1684,
                "name": "Qtum",
                "symbol": "QTUM",
                "slug": "qtum",
                "num_market_pairs": 178,
                "date_added": "2017-05-24T00:00:00.000Z",
                "tags": [
                    "platform",
                    "smart-contracts",
                    "kinetic-capital"
                ],
                "max_supply": 107822406,
                "circulating_supply": 98848402.7260568,
                "total_supply": 103882206,
                "platform": null,
                "cmc_rank": 84,
                "last_updated": "2021-11-09T17:26:07.000Z",
                "quote": {
                    "EUR": {
                        "price": 15.379627220384076,
                        "volume_24h": 490352014.0027914,
                        "volume_change_24h": 55.9343,
                        "percent_change_1h": -0.1824546,
                        "percent_change_24h": 3.08730759,
                        "percent_change_7d": 2.6387027,
                        "percent_change_30d": 31.84892999,
                        "percent_change_60d": 39.14138252,
                        "percent_change_90d": 59.45792198,
                        "market_cap": 1520251585.2571507,
                        "market_cap_dominance": 0.0609,
                        "fully_diluted_market_cap": 1658268410.285005,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 2502,
                "name": "Huobi Token",
                "symbol": "HT",
                "slug": "huobi-token",
                "num_market_pairs": 95,
                "date_added": "2018-02-03T00:00:00.000Z",
                "tags": [
                    "marketplace",
                    "centralized-exchange",
                    "discount-token",
                    "payments",
                    "algorand-ecosystem",
                    "kinetic-capital",
                    "alameda-research-portfolio",
                    "multicoin-capital-portfolio"
                ],
                "max_supply": 500000000,
                "circulating_supply": 161829295.25441208,
                "total_supply": 500000000,
                "platform": {
                    "id": 1027,
                    "name": "Ethereum",
                    "symbol": "ETH",
                    "slug": "ethereum",
                    "token_address": "0x6f259637dcd74c767781e37bc6133cd6a68aa161"
                },
                "cmc_rank": 85,
                "last_updated": "2021-11-09T17:26:06.000Z",
                "quote": {
                    "EUR": {
                        "price": 9.246453264657493,
                        "volume_24h": 86639222.19975677,
                        "volume_change_24h": -10.779,
                        "percent_change_1h": 0.01716508,
                        "percent_change_24h": -0.13965452,
                        "percent_change_7d": -5.37785766,
                        "percent_change_30d": 39.1930632,
                        "percent_change_60d": -24.06362182,
                        "percent_change_90d": -21.81489725,
                        "market_cap": 1496347015.4223797,
                        "market_cap_dominance": 0.0599,
                        "fully_diluted_market_cap": 4623226632.327706,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 6758,
                "name": "SushiSwap",
                "symbol": "SUSHI",
                "slug": "sushiswap",
                "num_market_pairs": 234,
                "date_added": "2020-08-28T00:00:00.000Z",
                "tags": [
                    "decentralized-exchange",
                    "defi",
                    "dao",
                    "yield-farming",
                    "amm",
                    "binance-smart-chain",
                    "yearn-partnerships",
                    "governance",
                    "avalanche-ecosystem",
                    "blockchain-capital-portfolio",
                    "defiance-capital",
                    "alameda-research-portfolio",
                    "pantera-capital-portfolio",
                    "polygon-ecosystem",
                    "fantom-ecosystem"
                ],
                "max_supply": 250000000,
                "circulating_supply": 127244443,
                "total_supply": 237182130.00319406,
                "platform": {
                    "id": 1027,
                    "name": "Ethereum",
                    "symbol": "ETH",
                    "slug": "ethereum",
                    "token_address": "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2"
                },
                "cmc_rank": 86,
                "last_updated": "2021-11-09T17:26:07.000Z",
                "quote": {
                    "EUR": {
                        "price": 10.501509026369826,
                        "volume_24h": 199445953.79674035,
                        "volume_change_24h": 13.6351,
                        "percent_change_1h": -0.28700755,
                        "percent_change_24h": -0.42731587,
                        "percent_change_7d": -2.96309576,
                        "percent_change_30d": 13.52988829,
                        "percent_change_60d": 15.77862536,
                        "percent_change_90d": 2.84633242,
                        "market_cap": 1336258666.7199006,
                        "market_cap_dominance": 0.0536,
                        "fully_diluted_market_cap": 2625377256.5963144,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 2099,
                "name": "ICON",
                "symbol": "ICX",
                "slug": "icon",
                "num_market_pairs": 70,
                "date_added": "2017-10-27T00:00:00.000Z",
                "tags": [
                    "platform",
                    "enterprise-solutions",
                    "interoperability",
                    "smart-contracts",
                    "kinetic-capital",
                    "pantera-capital-portfolio"
                ],
                "max_supply": null,
                "circulating_supply": 673858482.9526685,
                "total_supply": 800460000,
                "platform": null,
                "cmc_rank": 87,
                "last_updated": "2021-11-09T17:26:03.000Z",
                "quote": {
                    "EUR": {
                        "price": 1.8483316774193355,
                        "volume_24h": 87916150.08589832,
                        "volume_change_24h": 64.964,
                        "percent_change_1h": -0.23907245,
                        "percent_change_24h": 2.97944447,
                        "percent_change_7d": -14.59004905,
                        "percent_change_30d": -0.43063945,
                        "percent_change_60d": 18.64035612,
                        "percent_change_90d": 78.75266479,
                        "market_cap": 1245513980.1391547,
                        "market_cap_dominance": 0.0499,
                        "fully_diluted_market_cap": 1479515574.506074,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 1168,
                "name": "Decred",
                "symbol": "DCR",
                "slug": "decred",
                "num_market_pairs": 53,
                "date_added": "2016-02-10T00:00:00.000Z",
                "tags": [
                    "mineable",
                    "hybrid-pow-pos",
                    "blake256",
                    "medium-of-exchange",
                    "store-of-value",
                    "privacy",
                    "dao",
                    "placeholder-ventures-portfolio"
                ],
                "max_supply": 21000000,
                "circulating_supply": 13480957.46343411,
                "total_supply": 13480957.46343411,
                "platform": null,
                "cmc_rank": 88,
                "last_updated": "2021-11-09T17:26:04.000Z",
                "quote": {
                    "EUR": {
                        "price": 91.47465556708529,
                        "volume_24h": 10329211.681978574,
                        "volume_change_24h": 25.7433,
                        "percent_change_1h": -0.65642635,
                        "percent_change_24h": -3.04109386,
                        "percent_change_7d": -7.94850488,
                        "percent_change_30d": -21.44785656,
                        "percent_change_60d": -27.73830684,
                        "percent_change_90d": -33.14460598,
                        "market_cap": 1233165940.682163,
                        "market_cap_dominance": 0.0494,
                        "fully_diluted_market_cap": 1920967766.9065766,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 2577,
                "name": "Ravencoin",
                "symbol": "RVN",
                "slug": "ravencoin",
                "num_market_pairs": 86,
                "date_added": "2018-03-10T00:00:00.000Z",
                "tags": [
                    "mineable",
                    "pow",
                    "platform",
                    "crowdfunding"
                ],
                "max_supply": 21000000000,
                "circulating_supply": 10049775000,
                "total_supply": 10049775000,
                "platform": null,
                "cmc_rank": 89,
                "last_updated": "2021-11-09T17:26:06.000Z",
                "quote": {
                    "EUR": {
                        "price": 0.11697713866847638,
                        "volume_24h": 73976414.8505517,
                        "volume_change_24h": 2.9561,
                        "percent_change_1h": -0.96044623,
                        "percent_change_24h": -0.30347314,
                        "percent_change_7d": 6.00607178,
                        "percent_change_30d": 20.33715575,
                        "percent_change_60d": 17.95028492,
                        "percent_change_90d": -16.45784231,
                        "market_cap": 1175593923.7619872,
                        "market_cap_dominance": 0.0471,
                        "fully_diluted_market_cap": 2456519912.035356,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 7455,
                "name": "Audius",
                "symbol": "AUDIO",
                "slug": "audius",
                "num_market_pairs": 52,
                "date_added": "2020-10-20T00:00:00.000Z",
                "tags": [
                    "music",
                    "coinbase-ventures-portfolio",
                    "binance-labs-portfolio",
                    "solana-ecosystem",
                    "pantera-capital-portfolio",
                    "multicoin-capital-portfolio"
                ],
                "max_supply": null,
                "circulating_supply": 504078968,
                "total_supply": 1061025641,
                "platform": {
                    "id": 1027,
                    "name": "Ethereum",
                    "symbol": "ETH",
                    "slug": "ethereum",
                    "token_address": "0x18aaa7115705e8be94bffebde57af9bfc265b998"
                },
                "cmc_rank": 90,
                "last_updated": "2021-11-09T17:26:04.000Z",
                "quote": {
                    "EUR": {
                        "price": 2.3221182644762526,
                        "volume_24h": 43239582.15611087,
                        "volume_change_24h": 55.3676,
                        "percent_change_1h": -0.21165573,
                        "percent_change_24h": 2.14248999,
                        "percent_change_7d": 1.10340327,
                        "percent_change_30d": 31.66546474,
                        "percent_change_60d": 19.18570599,
                        "percent_change_90d": 77.16795396,
                        "market_cap": 1170530978.3311405,
                        "market_cap_dominance": 0.0469,
                        "fully_diluted_market_cap": 2463827020.0414147,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 5604,
                "name": "Secret",
                "symbol": "SCRT",
                "slug": "secret",
                "num_market_pairs": 14,
                "date_added": "2020-05-19T00:00:00.000Z",
                "tags": [
                    "cosmos-ecosystem",
                    "defi",
                    "privacy"
                ],
                "max_supply": null,
                "circulating_supply": 149815729,
                "total_supply": 190165060,
                "platform": null,
                "cmc_rank": 91,
                "last_updated": "2021-11-09T17:26:06.000Z",
                "quote": {
                    "EUR": {
                        "price": 7.823545062090642,
                        "volume_24h": 11451601.202495513,
                        "volume_change_24h": -58.0825,
                        "percent_change_1h": -0.14229281,
                        "percent_change_24h": -5.51117344,
                        "percent_change_7d": -6.22381572,
                        "percent_change_30d": 77.30815812,
                        "percent_change_60d": 333.99702651,
                        "percent_change_90d": 477.44578942,
                        "market_cap": 1172090106.8414598,
                        "market_cap_dominance": 0.047,
                        "fully_diluted_market_cap": 1487764916.1420553,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 2469,
                "name": "Zilliqa",
                "symbol": "ZIL",
                "slug": "zilliqa",
                "num_market_pairs": 139,
                "date_added": "2018-01-25T00:00:00.000Z",
                "tags": [
                    "mineable",
                    "platform",
                    "payments",
                    "smart-contracts",
                    "binance-smart-chain",
                    "polychain-capital-portfolio",
                    "kinetic-capital"
                ],
                "max_supply": 21000000000,
                "circulating_supply": 11977700887.127373,
                "total_supply": 15269168040.127373,
                "platform": null,
                "cmc_rank": 92,
                "last_updated": "2021-11-09T17:26:06.000Z",
                "quote": {
                    "EUR": {
                        "price": 0.09567162354532836,
                        "volume_24h": 126148635.36489418,
                        "volume_change_24h": 72.7302,
                        "percent_change_1h": -0.68354619,
                        "percent_change_24h": 0.21509953,
                        "percent_change_7d": -4.61651006,
                        "percent_change_30d": 12.19717571,
                        "percent_change_60d": 2.55829733,
                        "percent_change_90d": 7.33413241,
                        "market_cap": 1145926090.2117956,
                        "market_cap_dominance": 0.0459,
                        "fully_diluted_market_cap": 2009104094.4505243,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 2135,
                "name": "Revain",
                "symbol": "REV",
                "slug": "revain",
                "num_market_pairs": 15,
                "date_added": "2017-11-01T00:00:00.000Z",
                "tags": [
                    "platform",
                    "reputation",
                    "smart-contracts"
                ],
                "max_supply": null,
                "circulating_supply": 85061485689.83401,
                "total_supply": 85061485689.83401,
                "platform": {
                    "id": 1027,
                    "name": "Ethereum",
                    "symbol": "ETH",
                    "slug": "ethereum",
                    "token_address": "0x2ef52Ed7De8c5ce03a4eF0efbe9B7450F2D7Edc9"
                },
                "cmc_rank": 93,
                "last_updated": "2021-11-09T17:26:03.000Z",
                "quote": {
                    "EUR": {
                        "price": 0.013268687061330525,
                        "volume_24h": 2219778.572113576,
                        "volume_change_24h": -22.1032,
                        "percent_change_1h": -0.76264224,
                        "percent_change_24h": -3.77212707,
                        "percent_change_7d": -3.60527073,
                        "percent_change_30d": -9.58861238,
                        "percent_change_60d": -35.84541887,
                        "percent_change_90d": 108.1667135,
                        "market_cap": 1128654234.5902522,
                        "market_cap_dominance": 0.0452,
                        "fully_diluted_market_cap": 1128654234.5921893,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 5864,
                "name": "yearn.finance",
                "symbol": "YFI",
                "slug": "yearn-finance",
                "num_market_pairs": 210,
                "date_added": "2020-07-18T00:00:00.000Z",
                "tags": [
                    "defi",
                    "yield-farming",
                    "binance-smart-chain",
                    "yield-aggregator",
                    "yearn-partnerships",
                    "three-arrows-capital-portfolio",
                    "polychain-capital-portfolio",
                    "governance",
                    "blockchain-capital-portfolio",
                    "framework-ventures",
                    "alameda-research-portfolio",
                    "parafi-capital",
                    "fantom-ecosystem"
                ],
                "max_supply": 36666,
                "circulating_supply": 36637.72122588,
                "total_supply": 36666,
                "platform": {
                    "id": 1027,
                    "name": "Ethereum",
                    "symbol": "ETH",
                    "slug": "ethereum",
                    "token_address": "0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e"
                },
                "cmc_rank": 94,
                "last_updated": "2021-11-09T17:26:08.000Z",
                "quote": {
                    "EUR": {
                        "price": 29969.379586230614,
                        "volume_24h": 138646139.96550047,
                        "volume_change_24h": -17.6501,
                        "percent_change_1h": -0.75393938,
                        "percent_change_24h": -3.7683533,
                        "percent_change_7d": -1.62775149,
                        "percent_change_30d": 2.05512747,
                        "percent_change_60d": 3.9384727,
                        "percent_change_90d": -5.68895435,
                        "market_cap": 1098009774.5928962,
                        "market_cap_dominance": 0.044,
                        "fully_diluted_market_cap": 1098857271.9112341,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 2563,
                "name": "TrueUSD",
                "symbol": "TUSD",
                "slug": "trueusd",
                "num_market_pairs": 182,
                "date_added": "2018-03-06T00:00:00.000Z",
                "tags": [
                    "store-of-value",
                    "stablecoin",
                    "stablecoin-asset-backed",
                    "binance-smart-chain",
                    "avalanche-ecosystem"
                ],
                "max_supply": null,
                "circulating_supply": 1251998291.0353186,
                "total_supply": 1251998291.0353186,
                "platform": {
                    "id": 1839,
                    "name": "Binance Chain (BEP2)",
                    "symbol": "BNB",
                    "slug": "binance-coin",
                    "token_address": "TUSDB-888"
                },
                "cmc_rank": 95,
                "last_updated": "2021-11-09T17:26:06.000Z",
                "quote": {
                    "EUR": {
                        "price": 0.8626855053222887,
                        "volume_24h": 110144151.55946611,
                        "volume_change_24h": 6.4907,
                        "percent_change_1h": -0.15267042,
                        "percent_change_24h": -0.70301169,
                        "percent_change_7d": -1.54435742,
                        "percent_change_30d": 0.04794225,
                        "percent_change_60d": -0.03032367,
                        "percent_change_90d": -0.02464118,
                        "market_cap": 1080080778.3644457,
                        "market_cap_dominance": 0.0432,
                        "fully_diluted_market_cap": 1080080778.361369,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 8646,
                "name": "Mina",
                "symbol": "MINA",
                "slug": "mina",
                "num_market_pairs": 42,
                "date_added": "2021-03-02T00:00:00.000Z",
                "tags": [
                    "pos",
                    "zero-knowledge-proofs",
                    "staking",
                    "coinbase-ventures-portfolio",
                    "polychain-capital-portfolio"
                ],
                "max_supply": null,
                "circulating_supply": 288432838.84003925,
                "total_supply": 824104972,
                "platform": null,
                "cmc_rank": 96,
                "last_updated": "2021-11-09T17:26:06.000Z",
                "quote": {
                    "EUR": {
                        "price": 3.705680467478437,
                        "volume_24h": 57693741.35201981,
                        "volume_change_24h": -14.8753,
                        "percent_change_1h": -0.57993576,
                        "percent_change_24h": -0.96448329,
                        "percent_change_7d": -4.87527773,
                        "percent_change_30d": -1.14353265,
                        "percent_change_60d": -21.78264301,
                        "percent_change_90d": 41.08951343,
                        "market_cap": 1068839937.0688893,
                        "market_cap_dominance": 0.0428,
                        "fully_diluted_market_cap": 3053869697.8889914,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 2083,
                "name": "Bitcoin Gold",
                "symbol": "BTG",
                "slug": "bitcoin-gold",
                "num_market_pairs": 62,
                "date_added": "2017-10-23T00:00:00.000Z",
                "tags": [
                    "mineable",
                    "medium-of-exchange",
                    "payments"
                ],
                "max_supply": 21000000,
                "circulating_supply": 17513923.589,
                "total_supply": 17513923.589,
                "platform": null,
                "cmc_rank": 97,
                "last_updated": "2021-11-09T17:26:02.000Z",
                "quote": {
                    "EUR": {
                        "price": 60.99206595400383,
                        "volume_24h": 86951824.41985388,
                        "volume_change_24h": -42.2807,
                        "percent_change_1h": -1.14491467,
                        "percent_change_24h": 2.41524005,
                        "percent_change_7d": 5.85619272,
                        "percent_change_30d": 4.26243986,
                        "percent_change_60d": 5.94901663,
                        "percent_change_90d": 15.48350679,
                        "market_cap": 1068210382.6536715,
                        "market_cap_dominance": 0.0428,
                        "fully_diluted_market_cap": 1280833385.0344222,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 2586,
                "name": "Synthetix",
                "symbol": "SNX",
                "slug": "synthetix-network-token",
                "num_market_pairs": 182,
                "date_added": "2018-03-14T00:00:00.000Z",
                "tags": [
                    "services",
                    "decentralized-exchange",
                    "defi",
                    "derivatives",
                    "dao",
                    "yield-farming",
                    "binance-smart-chain",
                    "coinbase-ventures-portfolio",
                    "three-arrows-capital-portfolio",
                    "governance",
                    "synthetics",
                    "defiance-capital",
                    "framework-ventures",
                    "alameda-research-portfolio",
                    "parafi-capital",
                    "fantom-ecosystem"
                ],
                "max_supply": 212424133,
                "circulating_supply": 114841533.01197928,
                "total_supply": 215258834.2449152,
                "platform": {
                    "id": 1027,
                    "name": "Ethereum",
                    "symbol": "ETH",
                    "slug": "ethereum",
                    "token_address": "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f"
                },
                "cmc_rank": 98,
                "last_updated": "2021-11-09T17:26:07.000Z",
                "quote": {
                    "EUR": {
                        "price": 9.272448441822164,
                        "volume_24h": 101421335.29274328,
                        "volume_change_24h": 23.0799,
                        "percent_change_1h": 0.9432734,
                        "percent_change_24h": 2.32859564,
                        "percent_change_7d": 1.17630354,
                        "percent_change_30d": 7.09747441,
                        "percent_change_60d": 1.23933429,
                        "percent_change_90d": -4.0777279,
                        "market_cap": 1064862193.8333958,
                        "market_cap_dominance": 0.0426,
                        "fully_diluted_market_cap": 1969691821.041348,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 6950,
                "name": "Perpetual Protocol",
                "symbol": "PERP",
                "slug": "perpetual-protocol",
                "num_market_pairs": 55,
                "date_added": "2020-09-08T00:00:00.000Z",
                "tags": [
                    "decentralized-exchange",
                    "defi",
                    "derivatives",
                    "amm",
                    "three-arrows-capital-portfolio",
                    "cms-holdings-portfolio",
                    "alameda-research-portfolio",
                    "multicoin-capital-portfolio"
                ],
                "max_supply": null,
                "circulating_supply": 68700000,
                "total_supply": 150000000,
                "platform": {
                    "id": 1027,
                    "name": "Ethereum",
                    "symbol": "ETH",
                    "slug": "ethereum",
                    "token_address": "0xbc396689893d065f41bc2c6ecbee5e0085233447"
                },
                "cmc_rank": 99,
                "last_updated": "2021-11-09T17:26:08.000Z",
                "quote": {
                    "EUR": {
                        "price": 15.446613737706873,
                        "volume_24h": 40920167.51368389,
                        "volume_change_24h": 0.4608,
                        "percent_change_1h": -0.94748425,
                        "percent_change_24h": -0.72655272,
                        "percent_change_7d": 5.3444571,
                        "percent_change_30d": 27.22894745,
                        "percent_change_60d": 10.92515609,
                        "percent_change_90d": 6.18654419,
                        "market_cap": 1061182363.7804621,
                        "market_cap_dominance": 0.0425,
                        "fully_diluted_market_cap": 2316992060.6571345,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            },
            {
                "id": 1698,
                "name": "Horizen",
                "symbol": "ZEN",
                "slug": "horizen",
                "num_market_pairs": 73,
                "date_added": "2017-06-01T00:00:00.000Z",
                "tags": [
                    "mineable",
                    "pow",
                    "medium-of-exchange",
                    "enterprise-solutions",
                    "content-creation",
                    "privacy",
                    "masternodes",
                    "sidechain",
                    "dcg-portfolio"
                ],
                "max_supply": 21000000,
                "circulating_supply": 11719450,
                "total_supply": 11719450,
                "platform": null,
                "cmc_rank": 100,
                "last_updated": "2021-11-09T17:26:08.000Z",
                "quote": {
                    "EUR": {
                        "price": 90.1165958072187,
                        "volume_24h": 160921933.47193208,
                        "volume_change_24h": 103.9659,
                        "percent_change_1h": 1.4949726,
                        "percent_change_24h": 13.43621789,
                        "percent_change_7d": 18.06609366,
                        "percent_change_30d": 35.99891742,
                        "percent_change_60d": 30.44274277,
                        "percent_change_90d": 43.0545926,
                        "market_cap": 1056116938.7329092,
                        "market_cap_dominance": 0.0423,
                        "fully_diluted_market_cap": 1892448511.9492214,
                        "last_updated": "2021-11-09T17:26:40.000Z"
                    }
                }
            }
        ]
    }`
}