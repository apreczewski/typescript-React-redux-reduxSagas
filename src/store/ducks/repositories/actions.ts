import { action } from 'typesafe-actions';
import { Action } from 'redux';
import { RepositoriesTypes, IRepository } from './types';

export const loadRequest = ():Action => action(RepositoriesTypes.LOAD_REQUEST);

export const loadSuccess = (data: IRepository[]):Action => action(
  RepositoriesTypes.LOAD_SUCCESS, { data },
);

export const loadFailure = ():Action => action(RepositoriesTypes.LOAD_FAILURE);
