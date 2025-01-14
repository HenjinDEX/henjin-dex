import { ChainId } from '../constants/chainIds';
import { Token } from './Token';

/**
 * Known WETH9 implementation addresses, used in our implementation of Ether#wrapped
 */
export const WNATIVE: { [chainId: number]: Token } = {
  [ChainId.Katla]: new Token(
    ChainId.Katla,
    '0x003eaAf23aa5fe907F32F7c415a2075b5f1629a2',
    18,
    'WETH',
    'WRAPPED ETH'
  ),
  [ChainId.Hekla]: new Token(
    ChainId.Hekla,
    '0x4539fB30977A7dE928631f16c45354BA6fdbb9bf',
    18,
    'WETH',
    'WRAPPED ETH'
  ),
  [ChainId.Taiko]: new Token(
    ChainId.Taiko,
    '0xA51894664A773981C6C112C43ce576f315d5b1B6',
    18,
    'WETH',
    'WRAPPED ETH'
  ),
  [ChainId.Base]: new Token(
    ChainId.Base,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'WRAPPED ETH'
  ),
  [ChainId.BaseSepolia]: new Token(
    ChainId.BaseSepolia,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'WRAPPED ETH'
  ),
};
