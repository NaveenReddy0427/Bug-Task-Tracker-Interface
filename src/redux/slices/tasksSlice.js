// src/store/tasksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  filters: {
    status: 'All',
    priority: 'All',
  },
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = { ...state.tasks[index], ...action.payload };
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
});

export const { addTask, editTask, deleteTask, setFilter } = tasksSlice.actions;

export default tasksSlice.reducer;
