import { action } from 'typesafe-actions';
import { RepositoriesTypes, IRepository } from './types';

export function loadRequest() {
  action(RepositoriesTypes.LOAD_REQUEST);
}

export function loadSucess(data: IRepository[]) {
  action(RepositoriesTypes.LOAD_SUCCESS, data);
}

export function loadFailure() {
  action(RepositoriesTypes.LOAD_FAILURE);
}
