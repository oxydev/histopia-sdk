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
  BOBA_MAIN = 288,
  BOBA_TEST = 28,
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

export const INIT_CODE_HASH: string = '0xe2467c20c6243763382fb86ef0a72d8f4924d05ba449ff1b905596ab28b60003'


export const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac',
  [ChainId.ROPSTEN]: '0x580763d106d6382bc5B31Bd0a00F6a68633639d7',
  [ChainId.RINKEBY]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.KOVAN]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.FANTOM]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.MATIC_TESTNET]: '0x68af29e8bcba294248a7ba7a451faf1e8740c33c',
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
  [ChainId.OASISETH_MAIN] :'0xa7200334f652425A12BF2f7e4F0F5409CCA4d963',
  [ChainId.OASISETH_TEST] :'0x72A2937B8eedBF6F0b6d110F0E0Ff2f613ED2f08',
  [ChainId.BOBA_MAIN] :'',
  [ChainId.BOBA_TEST] :'',
}

export const ROUTER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F',
  [ChainId.RINKEBY]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.ROPSTEN]: '0x29Ca94Ec11DBf747fDf6fF8E6008Ea6cc284F9Ca',
  [ChainId.KOVAN]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.FANTOM]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.MATIC_TESTNET]: '0xa05BE3A2207efc5A56df08562F6170AE2710e9B9',
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
  [ChainId.OASISETH_MAIN] :'0x543d97779ca53d7b4355cA013C853D86B7F558d9',
  [ChainId.OASISETH_TEST] :'0x36F169362228C73629Ed22512792eA5FB2cD8c2a',
  [ChainId.BOBA_MAIN] :'',
  [ChainId.BOBA_TEST] :'',
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
  [ChainId.OASISETH_TEST]: '0xAEc94E047e426D4997875E98BbF81109b222f443',
}

export const ZOO_ZAP_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '0x090D4613473dEE047c3f2706764f49E0821D256e',
  [ChainId.ROPSTEN]: '0x480b021bdCFf73BBe8541E4D389Ca6b25d1e0907',
  [ChainId.OASISETH_MAIN]: '0xe011720ae77469Ab74074D3f783Bf10f369F8761',
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
  [ChainId.KOVAN]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '0x88a22a53d94e276e4dce0320cecf48c1c559e522',
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
  [ChainId.OASISETH_MAIN] :'0x05243Bd7778a9D5556AFC98Ae9D222Cdf5E7C704',
  [ChainId.OASISETH_TEST] :'',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.BOBA_MAIN] :'',
  [ChainId.BOBA_TEST] :'',
}

export const BAR_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272',
  [ChainId.ROPSTEN]: '0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c',
  [ChainId.RINKEBY]: '0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c',
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
  [ChainId.OASISETH_MAIN] :'0x25070fA2244b41EA39B964DBFA9E0ab70A886e72',
  [ChainId.OASISETH_TEST] :'',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.BOBA_MAIN] :'',
  [ChainId.BOBA_TEST] :'',
}

export const MAKER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xE11fc0B43ab98Eb91e9836129d1ee7c3Bc95df50',
  [ChainId.ROPSTEN]: '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa',
  [ChainId.RINKEBY]: '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa',
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
  [ChainId.HECO_TESTNET]: '',
  [ChainId.BOBA_MAIN] :'',
  [ChainId.BOBA_TEST] :'',
}

export const TIMELOCK_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x9a8541Ddf3a932a9A922B607e9CF7301f1d47bD1',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '',
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
  [ChainId.HECO_TESTNET]: '',
  [ChainId.BOBA_MAIN] :'',
  [ChainId.BOBA_TEST] :'',
}