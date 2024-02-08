import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { StoreApi, useStore } from 'zustand'

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never

const createSelectors = <S extends StoreApi<object>>(_store: S) => {
    const store = _store as WithSelectors<typeof _store>
    store.use = {}
    for (const k of Object.keys(store.getState())) {
      ;(store.use as any)[k] = () =>
        useStore(_store, (s) => s[k as keyof typeof s])
    }
  
    return store
  }

interface ExampleType {
    example:string
    setExample:(val:string)=>void
}

export const exampleStore = create<ExampleType>() (immer((set)=>({
    example:'test',
    setExample:(val:string)=>set((state)=>{
        state.example = val
    }),
})))

export const ES = createSelectors(exampleStore)
