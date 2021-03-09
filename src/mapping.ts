import { BigInt } from "@graphprotocol/graph-ts"
import {
  SwapDeposit as SwapDepositEvent
} from "../generated/DittoTokenSwap/DittoTokenSwap"
import { SwapDeposit, SwapDepositREB2 } from "../generated/schema"


export function handleSwapDeposit(event: SwapDepositEvent): void {
  let swapDitto = new SwapDeposit(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  swapDitto.depositor = event.params.depositor;
  swapDitto.input = event.params.input;
  swapDitto.inputAmount = event.params.inputAmount;
  swapDitto.outputAmount = event.params.outputAmount;

  swapDitto.save();
}


export function handleSwapDepositREB2(event: SwapDepositEvent): void {
  let swapDitto = new SwapDepositREB2(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  swapDitto.depositor = event.params.depositor;
  swapDitto.input = event.params.input;
  swapDitto.inputAmount = event.params.inputAmount;
  swapDitto.outputAmount = event.params.outputAmount;

  swapDitto.save();
}
