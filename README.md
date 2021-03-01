# [Ditto.money](https://ditto.money) | [Buy Ditto](https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x233d91a0713155003fc4dce0afa871b508b3b715)

## How to run and compile Ditto subgraph

```coonsole
yarn codegen
```

Build Subgraph

```console
yarn build
```

Deploy Ditto Subgraph

```console

graph deploy \              
    --debug \
    --node https://api.thegraph.com/deploy/ \
    --ipfs https://api.thegraph.com/ipfs/ \
    ditto/ditto-subgraph --access-token <access-token>
```

## Contracts - Binance Smart Chain [#BSC] [need subgraph support]

- [Ditto Core Contracts](https://github.com/Ditto-money/ditto-contracts)
- [Ditto Staking](https://bscscan.com/token/0x27Da7Bc5CcB7c31baaeEA8a04CC8Bf0085017208)
- [Ditto Token](https://bscscan.com/token/0x233d91A0713155003fc4DcE0AFa871b508B3B715)
- [Ditto PancakeSwap Pool](https://bscscan.com/token/0x470BC451810B312BBb1256f96B0895D95eA659B1)

## Contracts - Ethereum Mainnet [#ETH]

- [Ditto Token Swap](https://etherscan.io/address/0x6edc3Dfd23856A932601494abCa753Eb144450BC)

## Governance

- [snapshot/dittomoney](https://github.com/developerfred/snapshot.js/tree/add-ditto.money/src/strategies/dittomoney)

## Dashboard

- [Dashboard](https://ditto.money/dashboard)

## Staking

- [Staking](https://ditto.money/staking)
