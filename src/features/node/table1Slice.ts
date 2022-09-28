import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Table1Item {
  name: string;
  prototype: string;
  mark: string;
  key: string;
}

export type Table1 = Table1Item[]

const initialState: Table1 | [] = [{
  name: 'test',
  prototype: 'test',
  mark: 'mark',
  key: '1'
}]

export const table1Slice = createSlice({
  name: 'table1',
  initialState,
  reducers: {
    add: (state: Table1 | any, action: PayloadAction<Table1Item>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.push(action.payload)
    },
    del: (state, action: PayloadAction<number>) => {
      const index = state.findIndex(item => Number(item.key) == Number(action.payload))
      console.log(index)
      state.splice(index, 1)
    }
  },
})

// Action creators are generated for each case reducer function
export const { add, del } = table1Slice.actions

export default table1Slice.reducer