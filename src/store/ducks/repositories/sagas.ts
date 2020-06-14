import {
  all, call, put, takeLatest,

} from 'redux-saga/effects';

import api from '../../../services';
import { loadSuccess, loadFailure } from './actions';
import { RepositoriesTypes } from './types';

export function* load():Generator {
  try {
    const response: any = yield call(api.get, '/users/luiz504/repos'); //eslint-disable-line

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

export default all([
  takeLatest(RepositoriesTypes.LOAD_REQUEST, load),
]);
