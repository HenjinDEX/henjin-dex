import { ChainId } from './chainIds';

export const POOL_DEPLOYER_ADDRESSES = {
  [ChainId.Katla]: '0xfEE449019c51242F3b4E96A0bc66B455950c2650',
  [ChainId.Hekla]: '0x7C6C4cACed640f7a06cD32272d9D7262916498Ac',
  [ChainId.Taiko]: '0x0d22b434E478386Cd3564956BFc722073B3508f6',
  [ChainId.BaseSepolia]: '0x0d22b434E478386Cd3564956BFc722073B3508f6',
};

export const POOL_INIT_CODE_HASH = {
  [ChainId.Katla]:
    '0x177d5fbf994f4d130c008797563306f1a168dc689f81b2fa23b4396931014d91',
  [ChainId.Hekla]:
    '0x4b9e4a8044ce5695e06fce9421a63b6f5c3db8a561eebb30ea4c775469e36eaf',
  [ChainId.Taiko]:
    '0x4b9e4a8044ce5695e06fce9421a63b6f5c3db8a561eebb30ea4c775469e36eaf',
  [ChainId.BaseSepolia]:
    '0xb3fc09be5eb433d99b1ec89fd8435aaf5ffea75c1879e19028aa2414a14b3c85',
};
