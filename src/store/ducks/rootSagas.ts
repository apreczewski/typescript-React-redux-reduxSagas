import { all } from 'redux-saga/effects';
import repositories from './repositories/sagas';

export default function* rootSagas():Generator {
  return yield all([
    repositories,
  ]);
}
