/**
 * Action Types
 */
export enum RepositoriesTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCESS = '@repositories/LOAD_SUCCESS',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE',
}

/**
 * Data Types
 */

export interface IRepository {
  id: number;
  name: string;
}

/**
 * State type
 */

export interface IRepositoriesState {
  readonly data: IRepository[];
  readonly loading: boolean;
  readonly error: boolean;
}
