import { Token  } from './token'
import JSBI from 'jsbi'
import {Decimal} from 'decimal.js'



export class AttenuationReward {

  public readonly startBlock: number //开始
  public readonly zooPerBlock: JSBI

  constructor(args:{ startBlock:number,zooPerBlock:JSBI,halfAttenuationCycle:number} ){
    ({
      startBlock: this.startBlock,
      zooPerBlock: this.zooPerBlock,
    } = args);

  }



    public getZooRewardBetween(start: number,end :number) : Decimal {
      let getZooReardFromStart = (end:number): Decimal=>{

        if( start< this.startBlock || end < this.startBlock || start > end) {
          return new Decimal(0)
        }
       
        const re  = new Decimal(this.zooPerBlock.toString(10)).mul(new Decimal(end.toString(10)).sub(new Decimal(start.toString(10))))
        
        return re
       }

      return getZooReardFromStart(end).sub(getZooReardFromStart(start)) 
    
    }

}


export class StakePool {
  public readonly token0!: Token
  public readonly token1!: Token
  public readonly token0Balance!: JSBI
  public readonly token1Balance!: JSBI

  public readonly lpAddress!: string
  public readonly totalLp!: JSBI 
  public readonly totalLpInPark!: JSBI 
  public readonly rewardEffect!: number // 奖励系数 *10000
 // 奖励系数 *10000
  public readonly lastRewardBlock!: number // 奖励系数 *10000
 // 当前zoo余额
  public readonly rewardConfig!: AttenuationReward // 奖池配置
  public readonly myCurrentLp!: JSBI
  public readonly myLpBalance!: JSBI
  public readonly myReward!: JSBI
  public readonly pid!: number


  constructor(data: Partial<StakePool>) {
    Object.assign(this, data);
  }

  public  getDayReturn(currBlockNo:number,rewardPrice :number,token0Price :number,token1Price:number) : Decimal {
    // one day ≈  21600 block
    if(JSBI.greaterThan(this.totalLpInPark,JSBI.BigInt(0))) {
      //const oneDayReward = JSBI.divide(JSBI.BigInt(this.rewardConfig.getZooRewardBetween(currBlockNo,currBlockNo + 21600)) ,this.totalLpInPark)
      const oneDayReward = new  Decimal(this.rewardConfig.getZooRewardBetween(currBlockNo,currBlockNo + 21600).toString()).div( new Decimal(this.totalLp.toString(10)))
      //       oneDayReward Price /OneDay reward * 100000
      // 0.3% fee

     return oneDayReward.mul(new Decimal(rewardPrice)).div(  (new Decimal(this.token0Balance.toString(10)).mul(token0Price).div(new Decimal(this.totalLpInPark.toString(10)) ) ).add(  
        new Decimal(this.token1Balance.toString(10)).mul(token1Price).div(new Decimal(this.totalLpInPark.toString(10)) ) 
      ))
    } else{
      return new Decimal(0)
    }
  }

}

export function jsbiFloor (val:number) {
  return JSBI.BigInt(Math.floor(val))
}