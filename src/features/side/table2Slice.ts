import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Table2Item {
  start: string;
  end: string;
  key: string;
}

export type Table2 = Table2Item[]

const initialState: Table2 | [] = [{
  start: 'test',
  end: 'test',
  key: '1'
}]

export const table2Slice = createSlice({
  name: 'table2',
  initialState,
  reducers: {
    add: (state: Table2 | any, action: PayloadAction<Table2Item>) => {
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
export const { add, del } = table2Slice.actions

export default table2Slice.reducer