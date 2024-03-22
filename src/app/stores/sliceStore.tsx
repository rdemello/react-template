import { StateCreator } from 'zustand'

type ImmerStateCreator<T> = StateCreator<
  T,
  [["zustand/immer", never], never],
  [],
  T
>;

export interface SliceStore{

}

export const sliceStore: ImmerStateCreator<SliceStore>=((set)=>({

}))