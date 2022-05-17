import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | bigint | string;
export declare enum ChainId {
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
    BOBA_TEST = 28
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const INIT_CODE_HASH: string;
export declare const FACTORY_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const ROUTER_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const _997: JSBI;
export declare const _1000: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
export declare const ZOO_SWAP_MINING_ADDRESS: {
    [chainId in ChainId]?: string;
};
export declare const ZOO_PARK_EXT_PID: {
    [chainId in ChainId]?: number;
};
export declare const ZOO_PARK_EXT_ADDRESS: {
    [chainId in ChainId]?: string;
};
export declare const ZOO_ZAP_ADDRESS: {
    [chainId in ChainId]?: string;
};
export declare const ZOO_MINI_PARK_ADDRESS: {
    [chainId in ChainId]?: string;
};
export declare const MASTERCHEF_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const BAR_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const MAKER_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const TIMELOCK_ADDRESS: {
    [chainId in ChainId]: string;
};
