import { Token } from './token';
import JSBI from 'jsbi';
import { Decimal } from 'decimal.js';
export declare class AttenuationReward {
    readonly startBlock: number;
    readonly zooPerBlock: JSBI;
    readonly halfAttenuationCycle: number;
    constructor(args: {
        startBlock: number;
        zooPerBlock: JSBI;
        halfAttenuationCycle: number;
    });
    getZooRewardBetween(start: number, end: number): Decimal;
}
export declare class TradePool {
    readonly token0: Token;
    readonly token1: Token;
    readonly isToken0Archor: boolean;
    readonly totalLp: JSBI;
    readonly accZooPerShare: number;
    readonly rewardEffect: number;
    readonly lastRewardBlock: number;
    readonly rewardConfig: AttenuationReward;
    readonly myReward: JSBI;
    readonly myCurrentLp: JSBI;
    readonly currentTradePoint: number;
    readonly pid: number;
    constructor(data: Partial<TradePool>);
    getDayReturn(currBlockNo: number, rewardPrice: number, archorPrice: number): Decimal;
    getTotalReward(currenBlockNo: number): JSBI;
}
export declare class StakePool {
    readonly token0: Token;
    readonly token1: Token;
    readonly token0Balance: JSBI;
    readonly token1Balance: JSBI;
    readonly lpAddress: string;
    readonly totalLp: JSBI;
    readonly totalLpInPark: JSBI;
    readonly rewardEffect: number;
    readonly lastRewardBlock: number;
    readonly rewardConfig: AttenuationReward;
    readonly myCurrentLp: JSBI;
    readonly myLpBalance: JSBI;
    readonly myReward: JSBI;
    readonly pid: number;
    constructor(data: Partial<StakePool>);
    getDayReturn(currBlockNo: number, rewardPrice: number, token0Price: number, token1Price: number): Decimal;
}
export declare function jsbiFloor(val: number): JSBI;
