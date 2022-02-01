import { ChainId } from '../constants';
import { Currency } from './currency';
/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export declare class Token extends Currency {
    readonly chainId: ChainId;
    readonly address: string;
    constructor(chainId: ChainId, address: string, decimals: number, symbol?: string, name?: string);
    /**
     * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
     * @param other other token to compare
     */
    equals(other: Token): boolean;
    /**
     * Returns true if the address of this token sorts before the address of the other token
     * @param other other token to compare
     * @throws if the tokens have the same address
     * @throws if the tokens are on different chains
     */
    sortsBefore(other: Token): boolean;
}
/**
 * Compares two currencies for equality
 */
export declare function currencyEquals(currencyA: Currency, currencyB: Currency): boolean;
export declare const DefaultChainToken: {
    1: {};
    3: {
        DAI: Token;
        ZOO: Token;
        ROSE: Token;
        USDT: Token;
        BTC: Token;
        ETH: Token;
        YUZU: Token;
    };
    66: {
        USDT: Token;
        OKB: Token;
        ETHK: Token;
        BTC: Token;
        WOKT: Token;
    };
    65: {
        BTC: Token;
        USDT: Token;
        ETHK: Token;
        WOKT: Token;
        OKB: Token;
        ZOO: Token;
    };
    80001: {
        BTC: Token;
        USDT: Token;
    };
    42262: {
        ETH: Token;
        USDT: Token;
        YUZU: Token;
    };
    128: {
        ETH: Token;
        HBTC: Token;
        USDT: Token;
        WHT: Token;
        HUSD: Token;
        MDX: Token;
        BAG: Token;
        HFIL: Token;
        HLTC: Token;
        BXH: Token;
        TRIBE: Token;
        AAVE: Token;
        UNI: Token;
        FEI: Token;
        SNX: Token;
        YFI: Token;
        LINK: Token;
        MAKER: Token;
        COMP: Token;
        BAL: Token;
    };
    42261: {
        ETH: Token;
        USDT: Token;
        BTC: Token;
        YUZU: Token;
    };
};
export declare const WETH: {
    1: Token;
    3: Token;
    4: Token;
    5: Token;
    42: Token;
    250: Token;
    4002: Token;
    137: Token;
    80001: Token;
    100: Token;
    56: Token;
    97: Token;
    79377087078960: Token;
    1287: Token;
    43114: Token;
    43113: Token;
    128: Token;
    256: Token;
    65: Token;
    66: Token;
    42262: Token;
    42261: Token;
};
export declare const SUSHI_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const ECOSYSTEM_TOKEN_ADDRESS: {
    1: string;
    3: string;
    4: string;
    5: string;
    42: string;
    137: string;
    80001: string;
    250: string;
    4002: string;
    100: string;
    56: string;
    97: string;
    79377087078960: string;
    1287: string;
    43114: string;
    43113: string;
    65: string;
    66: string;
    128: string;
    256: string;
    42262: string;
    42261: string;
};
