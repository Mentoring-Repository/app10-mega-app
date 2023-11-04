import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    value: [],
  },
  reducers: {

    addTask: (state, action) => {
        console.log(new Date().toISOString())
        state.value.push({
            id: new Date().toISOString(),
            title: action.payload.title,
            depcricion: action.payload.depcricion
        })
    },

    completeTask: (state, action) => {
        state.value = state.value.filter((task) => action.payload !== task.id)
    }

  },
})

// Action creators are generated for each case reducer function
export const { addTask, completeTask } = taskSlice.actions

export default taskSlice.reducer