import { combineReducers } from 'redux';
import todoReducer from './todo';

const rootReducers = combineReducers({
	todos: todoReducer,
	// add more reducers here
});

// Định nghĩa kiểu dữ liệu RootState
export type RootState = ReturnType<typeof rootReducers>;

export default rootReducers;
