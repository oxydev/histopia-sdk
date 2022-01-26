/*
 *   Copyright (c) 2022 
 *   All rights reserved.
 */
import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  MATIC = 137,
  MATIC_TESTNET = 80001,
  FANTOM = 250,
  FANTOM_TESTNET = 4002,
  XDAI = 100,
  BSC = 56,
  BSC_TESTNET = 97,
  ARBITRUM = 79377087078960,
  MOONBASE = 1287,
  AVALANCHE = 43114,
  FUJI = 43113,
  OKCHAIN_TEST = 65,
  OKCHAIN = 66,
  HECO = 128,
  HECO_TESTNET = 256,
  OASISETH_MAIN = 42262,
  OASISETH_TEST = 42261,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const INIT_CODE_HASH: string = '0x0bb8a7327a411245127096fe3de27e8b77c9f202a1451409e78b04984d70601a'

export const ZOO_KEEPER_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '0x090D4613473dEE047c3f2706764f49E0821D256e',
  [ChainId.ROPSTEN]: '0x6a1Bac66B6579d7b8aC8099661719CD0cbc94A87',
  [ChainId.OASISETH_MAIN]: '0xA5cf1F669cf85cA8114Af5681F6ece444697d844',
  [ChainId.OKCHAIN_TEST]: '0xe0514890bAE2Ec261379dfCC19C95afcCDBc00F9',
  [ChainId.OASISETH_TEST]: '0x3EAB2CAEcD19e037F36EEdaC8b570d039734fEB8',
}


export const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac',
  [ChainId.ROPSTEN]: '0x580763d106d6382bc5B31Bd0a00F6a68633639d7',
  [ChainId.RINKEBY]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.GÖRLI]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.KOVAN]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.FANTOM]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.MATIC_TESTNET]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.XDAI]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.BSC]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.BSC_TESTNET]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '0x2Ce3F07dD4c62b56a502E223A7cBE38b1d77A1b5',
  [ChainId.AVALANCHE]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.OKCHAIN_TEST]: '0x5d7a9e3FA7F5f7A525b3de91c2Bb0deF9eBC7A14',
  [ChainId.OKCHAIN]: '0x65728c1d0e545db117940d5745089c256516ad43',
  [ChainId.FUJI]: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
  [ChainId.HECO]: '0xb0b670fc1f7724119963018db0bfa86adb22d941 ',
  [ChainId.HECO_TESTNET]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.OASISETH_MAIN] :'0x5F50fDC22697591c1D7BfBE8021163Fc73513653',
  [ChainId.OASISETH_TEST] :'0x72A2937B8eedBF6F0b6d110F0E0Ff2f613ED2f08',
}

export const ROUTER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F',
  [ChainId.RINKEBY]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.ROPSTEN]: '0x29Ca94Ec11DBf747fDf6fF8E6008Ea6cc284F9Ca',
  [ChainId.GÖRLI]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.KOVAN]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.FANTOM]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.MATIC_TESTNET]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.XDAI]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.BSC]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.BSC_TESTNET]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '0xeB5c2BB5E83B51d83F3534Ae21E84336B8B376ef',
  [ChainId.AVALANCHE]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.FUJI]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.OKCHAIN_TEST]: '0x2345e3C7E809e90b20d9E94D2507374c6D11d853',
  [ChainId.OKCHAIN]: '0x9F843d9BA2A386BDA2845507450Fd47934fb3D03',
  [ChainId.HECO]: '0xed7d5f38c79115ca12fe6c0041abb22f0a06c300',
  [ChainId.HECO_TESTNET]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.OASISETH_MAIN] :'0x250d48C5E78f1E85F7AB07FEC61E93ba703aE668',
  [ChainId.OASISETH_TEST] :'0x36F169362228C73629Ed22512792eA5FB2cD8c2a',
}





export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

export const ZOO_PARK_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '0x090D4613473dEE047c3f2706764f49E0821D256e',
  [ChainId.ROPSTEN]: '0x480b021bdCFf73BBe8541E4D389Ca6b25d1e0907',
  [ChainId.OASISETH_MAIN]: '0xB759803Ee7087559EB601a4939c2d5da7668385a',
  [ChainId.OKCHAIN_TEST]: '0x5CEDe17DCb104BaC72C86818ad56D683646a5b7a',
  [ChainId.OASISETH_TEST]: '0xF14F2Ad9Dc0fa94AafEc4c5b6B669fe0F3492F10',
}

export const ZOO_USDT_SWAP_PAIR_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '0x090D4613473dEE047c3f2706764f49E0821D256e',
  [ChainId.ROPSTEN]: '0x1801565A07E1C43b7952CE705b982e0625d35acf',
  [ChainId.OASISETH_MAIN]: '0xD2076c230FE52572344Dd7394fb50d8280c390D1',
  [ChainId.OKCHAIN_TEST]: '0xa520b078439d749220aEC35C568eF489c25b7b6D',
  [ChainId.OASISETH_TEST]: '0xD4c6aD02e417FA306AF08F25896e45a76332A8B7',
}
export const ZOO_SWAP_MINING_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '0x090D4613473dEE047c3f2706764f49E0821D256e',
  [ChainId.ROPSTEN]: '0x919056B376eef61594B168Dcd4435134c24Cdf07',
  [ChainId.OASISETH_MAIN]: '0xe63BBe4ef29BFFc40Fa6aE337ca2E532C9A30224',
  [ChainId.OKCHAIN_TEST]: '0x034Ce8C07ED998008BD5C9053485B791C79f79d0' ,
  [ChainId.OASISETH_TEST]: '0x00b3111dD70582544D7594C31459532Ce6dd3d11',
}


export const ZOO_PARK_EXT_PID: { [chainId in ChainId]?: number } = {
  [ChainId.MAINNET]: 0,
  [ChainId.ROPSTEN]: 0,
  [ChainId.OASISETH_MAIN]: -1,
  [ChainId.OKCHAIN_TEST]:0,
  [ChainId.OASISETH_TEST]: 4
}
export const ZOO_PARK_EXT_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '0x090D4613473dEE047c3f2706764f49E0821D256e',
  [ChainId.ROPSTEN]: '0x480b021bdCFf73BBe8541E4D389Ca6b25d1e0907',
  [ChainId.OASISETH_MAIN]: '0x86B8BD817048946958BdAEFa880E9AD297912fcc',
  [ChainId.OKCHAIN_TEST]: '0x5CEDe17DCb104BaC72C86818ad56D683646a5b7a',
  [ChainId.OASISETH_TEST]: '0xE9619775A4a3F92e2b0b634cfC80c187C5123807',
}

export const ZOO_ZAP_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '0x090D4613473dEE047c3f2706764f49E0821D256e',
  [ChainId.ROPSTEN]: '0x480b021bdCFf73BBe8541E4D389Ca6b25d1e0907',
  [ChainId.OASISETH_MAIN]: '0x85C9065C6b522E71dC8520C35547E158D3013d74',
  [ChainId.OKCHAIN_TEST]: '0x5CEDe17DCb104BaC72C86818ad56D683646a5b7a',
  [ChainId.OASISETH_TEST]: '0xbF35fEec746C7F3AE0D9cee14Cc300C55EB250A1',
}






export const ZOO_MINI_PARK_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '0x090D4613473dEE047c3f2706764f49E0821D256e',
  [ChainId.ROPSTEN]: '0x090D4613473dEE047c3f2706764f49E0821D256e',
  [ChainId.OASISETH_MAIN]: '0x0B668864676DF56Bb1db54f61bF1FB1131Bc0f86',
  [ChainId.OKCHAIN_TEST]: '0xd3e9C63A986A817df4626283e5e0a6B37805386C',
  [ChainId.OASISETH_TEST]: '0xEBc2d9e7C783f85284CD445BA52E7e80da47F5fa',
}



//No use 
export const MASTERCHEF_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd',
  [ChainId.ROPSTEN]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
  [ChainId.RINKEBY]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
  [ChainId.GÖRLI]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
  [ChainId.KOVAN]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.OKCHAIN_TEST]: '',
  [ChainId.OKCHAIN]: '',
  [ChainId.OASISETH_MAIN] :'0x7cE9D5cD6D9ddBd0CCa73837a1cd31c76F6c1857',
  [ChainId.OASISETH_TEST] :'',
  [ChainId.HECO_TESTNET]: ''
}

export const BAR_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272',
  [ChainId.ROPSTEN]: '0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c',
  [ChainId.RINKEBY]: '0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c',
  [ChainId.GÖRLI]: '0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c',
  [ChainId.KOVAN]: '0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.OKCHAIN_TEST]: '',
  [ChainId.OKCHAIN]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.OASISETH_MAIN] :'',
  [ChainId.OASISETH_TEST] :'',
  [ChainId.HECO_TESTNET]: ''
}

export const MAKER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xE11fc0B43ab98Eb91e9836129d1ee7c3Bc95df50',
  [ChainId.ROPSTEN]: '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa',
  [ChainId.RINKEBY]: '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa',
  [ChainId.GÖRLI]: '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa',
  [ChainId.KOVAN]: '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.OKCHAIN_TEST]: '',
  [ChainId.OKCHAIN]: '',
  [ChainId.HECO]: '',
  [ChainId.OASISETH_MAIN] :'',
  [ChainId.OASISETH_TEST] :'',
  [ChainId.HECO_TESTNET]: ''
}

export const TIMELOCK_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x9a8541Ddf3a932a9A922B607e9CF7301f1d47bD1',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.OKCHAIN_TEST]: '',
  [ChainId.OKCHAIN]: '',
  [ChainId.HECO]: '',
  [ChainId.OASISETH_MAIN] :'',
  [ChainId.OASISETH_TEST] :'',
  [ChainId.HECO_TESTNET]: ''
}