import { put, takeEvery } from 'redux-saga/effects';
import { addTodo, addTodoSuccess } from '../reducers/todo';

function* handleAddTodoAsync(action: ReturnType<typeof addTodo>) {
	yield put(addTodoSuccess(action.payload));
}

function* todoSaga() {
	yield takeEvery(addTodo.type, handleAddTodoAsync);
}

export default todoSaga;
