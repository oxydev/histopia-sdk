/*
 *   Copyright (c) 2022 
 *   All rights reserved.
 */
import invariant from 'tiny-invariant'
import { ChainId } from '../constants'
import { validateAndParseAddress } from '../utils'
import { Currency } from './currency'

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export class Token extends Currency {
  public readonly chainId: ChainId
  public readonly address: string

  public constructor(chainId: ChainId, address: string, decimals: number, symbol?: string, name?: string) {
    super(decimals, symbol, name)
    this.chainId = chainId
    this.address = validateAndParseAddress(address)
  }

  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */
  public equals(other: Token): boolean {
    // short circuit on reference equality
    if (this === other) {
      return true
    }
    return this.chainId === other.chainId && this.address === other.address
  }

  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  public sortsBefore(other: Token): boolean {
    invariant(this.chainId === other.chainId, 'CHAIN_IDS')
    invariant(this.address !== other.address, 'ADDRESSES')
    return this.address.toLowerCase() < other.address.toLowerCase()
  }
}

/**
 * Compares two currencies for equality
 */
export function currencyEquals(currencyA: Currency, currencyB: Currency): boolean {
  if (currencyA instanceof Token && currencyB instanceof Token) {
    return currencyA.equals(currencyB)
  } else if (currencyA instanceof Token) {
    return false
  } else if (currencyB instanceof Token) {
    return false
  } else {
    return currencyA === currencyB
  }
}
export const SUSHI = {
  [ChainId.MAINNET]:{
    BLING: new Token(ChainId.OASISETH_MAIN, '0x72Ad551af3c884d02e864B182aD9A34EE414C36C', 18, 'BLING', 'BLING')
  }
}
export const DefaultChainToken = {
  [ChainId.MAINNET]: {},
  [ChainId.ROPSTEN]: {
    DAI: new Token(ChainId.ROPSTEN, '0xaD6D458402F60fD3Bd25163575031ACDce07538D', 18, 'DAI', 'DAI'),
    ZOO: new Token(ChainId.ROPSTEN, '0x5750A66848aC18b9b61c5870C5f4d37EDB60c8AF', 18, 'ZOO', 'ZOO'),
    ROSE: new Token(ChainId.ROPSTEN, '0xD647d75154cF0616Ba06Af944E7e602F8AE75086', 9, 'ROSE', 'ROSE'),
    USDT: new Token(ChainId.ROPSTEN, '0xcA8A7B55A04A9fdE7Ae7bf128384fa330F81A19c', 12, 'USDT', 'USDT'),
    BTC: new Token(ChainId.ROPSTEN, '0xe6c87C360C24EfC6FEf4DCeFeD5607b0adaCf936', 15, 'BTC', 'BTC'),
    ETH: new Token(ChainId.ROPSTEN, '0xf72C1522a1d430464f194295bC3EF0f2F479459D', 18, 'ETH', 'ETH'),
  },
  [ChainId.OKCHAIN]: {
    USDT: new Token(ChainId.OKCHAIN_TEST, '0x382bB369d343125BfB2117af9c149795C6C65C50', 18, 'USDT', 'USDT'),
    OKB: new Token(ChainId.OKCHAIN_TEST, '0xdF54B6c6195EA4d948D03bfD818D365cf175cFC2', 18, 'OKB', 'OKB'),
    ETHK: new Token(ChainId.OKCHAIN_TEST, '0xEF71CA2EE68F45B9Ad6F72fbdb33d707b872315C', 18, 'ETHK', 'ETHK'),
    BTC: new Token(ChainId.OKCHAIN_TEST, '0x54e4622DC504176b3BB432dCCAf504569699a7fF', 18, 'BTC', 'BTC'),
    WOKT: new Token(ChainId.OKCHAIN_TEST, '0x8F8526dbfd6E38E3D8307702cA8469Bae6C56C15', 18, 'WOKT', 'WOKT'),
  },
  [ChainId.OKCHAIN_TEST]: {
    BTC: new Token(ChainId.OKCHAIN_TEST, '0x09973e7e3914EB5BA69C7c025F30ab9446e3e4e0', 10, 'BTC', 'BTC'),
    USDT: new Token(ChainId.OKCHAIN_TEST, '0xe579156f9dEcc4134B5E3A30a24Ac46BB8B01281', 10, 'USDT', 'USDT'),
    ETHK: new Token(ChainId.OKCHAIN_TEST, '0xDF950cEcF33E64176ada5dD733E170a56d11478E', 10, 'ETHK', 'ETHK'),
    WOKT: new Token(ChainId.OKCHAIN_TEST, '0x70c1c53E991F31981d592C2d865383AC0d212225', 18, 'WOKT', 'WOKT'),
    OKB: new Token(ChainId.OKCHAIN_TEST, '0xDa9d14072Ef2262c64240Da3A93fea2279253611', 10, 'OKB', 'OKB'),
    ZOO: new Token(ChainId.OKCHAIN_TEST, '0xd56F1F930760BD93871B96E36CDB5dda7d3D7108', 18, 'ZOO', 'ZOO'),
  },
  [ChainId.MATIC_TESTNET]: {
    BTC: new Token(ChainId.MATIC_TESTNET, '0xafacf8468d769208d4a1c84d4ea63320fd75ffaa', 18, 'BTC', 'BTC'),
    USDT: new Token(ChainId.MATIC_TESTNET, '0xfcf1fa21fa89b2fb50b77a621b3fe38233401a29', 18, 'USDT', 'USDT'),
  },

  [ChainId.OASISETH_MAIN]: {
    ETH: new Token(ChainId.OASISETH_MAIN, '0x3223f17957Ba502cbe71401D55A0DB26E5F7c68F', 18, 'wETH', 'wETH'),
    USDT: new Token(ChainId.OASISETH_MAIN, '0xdC19A122e268128B5eE20366299fc7b5b199C8e3', 6, 'weUSDT', 'weUSDT'),
    YUZU: new Token(ChainId.OASISETH_MAIN, '0xf02b3e437304892105992512539F769423a515Cb', 18, 'YUZU', 'YUZUToken'),
    PETAL: new Token(ChainId.OASISETH_MAIN, '0x2736643C7fFFe186984f60a2d34b91b1b7398bF1', 18, 'PETAL', 'PETAL'),
    TULIP: new Token(ChainId.OASISETH_MAIN, '0x9e832CaE5d19e7ff2f0D62881D1E33bb16Ac9bdc', 18, 'TULIP', 'TULIP'),
    DUNE: new Token(ChainId.OASISETH_MAIN, '0xaC5487bFE2502eCc06e057912b6F4946471093b9', 18, 'DUNE', 'Duneswap Token'),
    WBTC: new Token(ChainId.OASISETH_MAIN, '0xd43ce0aa2a29DCb75bDb83085703dc589DE6C7eb', 8, 'WBTC', 'Wrapped BTC'),
    //BLING: new Token(ChainId.OASISETH_MAIN, '0xf02b3e437304892105992512539F769423a515Cb', 18, 'BLING', 'BLING'),
  },
  [ChainId.HECO]: {
    ETH: new Token(ChainId.HECO, '0x64FF637fB478863B7468bc97D30a5bF3A428a1fD', 18, 'ETH', 'ETH'),
    HBTC: new Token(ChainId.HECO, '0x66a79D23E58475D2738179Ca52cd0b41d73f0BEa', 18, 'HBTC', 'HBTC'),
    USDT: new Token(ChainId.HECO, '0xa71EdC38d189767582C38A3145b5873052c3e47a', 10, 'USDT', 'USDT'),
    WHT: new Token(ChainId.HECO, '0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F', 18, 'WHT', 'WHT'),
    HUSD: new Token(ChainId.HECO, '0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047', 8, 'HUSD', 'HUSD'),
    MDX: new Token(ChainId.HECO, '0x25D2e80cB6B86881Fd7e07dd263Fb79f4AbE033c', 18, 'MDX', 'MDX'),
    BAG:   new Token(ChainId.HECO, '0xa042fb0e60125A4022670014AC121931e7501Af4',18),
    HFIL:   new Token(ChainId.HECO, '0xae3a768f9aB104c69A7CD6041fE16fFa235d1810',18),
    HLTC:   new Token(ChainId.HECO, '0xecb56cf772B5c9A6907FB7d32387Da2fCbfB63b4',18),
    BXH:   new Token(ChainId.HECO, '0xcBD6Cb9243d8e3381Fea611EF023e17D1B7AeDF0',18),
    TRIBE:   new Token(ChainId.HECO, '0x38999Fa3a7320bD2c3609BF0f8cB5CD4C11D3Fe1',18),
    AAVE:   new Token(ChainId.HECO, '0x202b4936fE1a82A4965220860aE46d7d3939Bb25',18),
    UNI:   new Token(ChainId.HECO, '0x22C54cE8321A4015740eE1109D9cBc25815C46E6',18),
    FEI:   new Token(ChainId.HECO, '0x485cdBFF08A4F91a16689E73893a11ae8B76af6D',18),
    SNX:   new Token(ChainId.HECO, '0x777850281719d5a96C29812ab72f822E0e09F3Da',18),
    YFI:   new Token(ChainId.HECO, '0xB4F019bEAc758AbBEe2F906033AAa2f0F6Dacb35',18),
    LINK:   new Token(ChainId.HECO, '0x9e004545c59D359F6B7BFB06a26390b087717b42',18),
    MAKER:   new Token(ChainId.HECO, '0x34D75515090902a513F009f4505A750efaaD63b0',18),
    COMP:   new Token(ChainId.HECO, '0xCe0A5CA134fb59402B723412994B30E02f083842',18),
    BAL:   new Token(ChainId.HECO, '0x045De15Ca76e76426E8Fc7cba8392A3138078D0F',18),
  },
  [ChainId.OASISETH_TEST]: {
    ETH: new Token(ChainId.OASISETH_TEST, '0xB38C1c2b5b0963428642eC55a320b429f21E180C', 18, 'ETH', 'ETH'),
    USDT: new Token(ChainId.OASISETH_TEST, '0xC584fFD011e16A10fd8329853B9B8DE6E0313AD9', 18, 'USDT', 'USDT'),
    BTC: new Token(ChainId.OASISETH_TEST, '0x961C7a3f1909243C9af056Fd11EdDa2e18b35C7b', 18, 'BTC', 'BTC')
    },
}
// In reality this is a map of the wrapped version of the native token for a given network.
// TODO: Rename to WNATIVE for sanity
export const WETH = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.ROPSTEN]: new Token(
    ChainId.ROPSTEN,
    '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.RINKEBY]: new Token(
    ChainId.RINKEBY,
    '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.GÖRLI]: new Token(ChainId.GÖRLI, '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.KOVAN]: new Token(ChainId.KOVAN, '0xd0A1E359811322d97991E03f863a0C30C2cF029C', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.FANTOM]: new Token(ChainId.FANTOM, '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83', 18, 'WFTM', 'Wrapped FTM'),
  [ChainId.FANTOM_TESTNET]: new Token(
    ChainId.FANTOM_TESTNET,
    '0xf1277d1Ed8AD466beddF92ef448A132661956621',
    18,
    'FTM',
    'Wrapped FTM'
  ),
  [ChainId.MATIC]: new Token(
    ChainId.MATIC,
    '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    18,
    'WMATIC',
    'Wrapped Matic'
  ),
  [ChainId.MATIC_TESTNET]: new Token(
    ChainId.MATIC_TESTNET,
    '0x9b506afc4765af3f4af8458cab17eedd546fa01e',
    18,
    'WMATIC',
    'Wrapped Matic'
  ),
  [ChainId.XDAI]: new Token(ChainId.XDAI, '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d', 18, 'WXDAI', 'Wrapped xDai'),
  [ChainId.BSC]: new Token(ChainId.BSC, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'WBNB', 'Wrapped BNB'),
  [ChainId.BSC_TESTNET]: new Token(
    ChainId.BSC_TESTNET,
    '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
    18,
    'WBNB',
    'Wrapped BNB'
  ),
  [ChainId.ARBITRUM]: new Token(
    ChainId.ARBITRUM,
    '0xf8456e5e6A225C2C1D74D8C9a4cB2B1d5dc1153b',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.MOONBASE]: new Token(
    ChainId.MOONBASE,
    '0xe73763DB808ecCDC0E36bC8E32510ED126910394',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.AVALANCHE]: new Token(
    ChainId.AVALANCHE,
    '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    18,
    'WAVAX',
    'Wrapped AVAX'
  ),
  [ChainId.FUJI]: new Token(ChainId.FUJI, '0xd00ae08403B9bbb9124bB305C09058E32C39A48c', 18, 'WAVAX', 'Wrapped AVAX'),
  [ChainId.HECO]:   DefaultChainToken[ChainId.HECO].WHT,
  [ChainId.HECO_TESTNET]: new Token(
    ChainId.HECO_TESTNET,
    '0x5B2DA6F42CA09C77D577a12BeaD0446148830687',
    18,
    'WHT',
    'Wrapped HT'
  ),
  [ChainId.OKCHAIN_TEST]:  DefaultChainToken[ChainId.OKCHAIN_TEST].WOKT,
  [ChainId.OKCHAIN]: DefaultChainToken[ChainId.OKCHAIN_TEST].WOKT,
  [ChainId.OASISETH_MAIN]: new Token(
    ChainId.OASISETH_MAIN,
    '0x21C718C22D52d0F3a789b752D4c2fD5908a8A733',
    18,
    'wROSE',
    'Wrapped ROSE'
  ),
  [ChainId.OASISETH_TEST]: new Token(
    ChainId.OASISETH_TEST,
    '0x792296e2a15e6Ceb5f5039DecaE7A1f25b00B0B0',
    18,
    'wROSE',
    'Wrapped ROSE'
  ),
}


export const SUSHI_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
  [ChainId.GÖRLI]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
  [ChainId.KOVAN]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
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
  [ChainId.OKCHAIN_TEST]: DefaultChainToken[ChainId.OKCHAIN_TEST].ZOO.address,
  [ChainId.OKCHAIN]: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
  [ChainId.HECO]: '',
  [ChainId.OASISETH_MAIN]: '0x72Ad551af3c884d02e864B182aD9A34EE414C36C',
  [ChainId.OASISETH_TEST]: '',
  [ChainId.HECO_TESTNET]: ''
}
// 平台币
export const ECOSYSTEM_TOKEN_ADDRESS = SUSHI_ADDRESS