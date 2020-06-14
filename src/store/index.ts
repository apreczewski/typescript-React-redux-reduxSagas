import { createStore, Store } from 'redux';
import { IRepositoriesState } from './ducks/repositories/types';

import rootReducer from './ducks/rootReducer';

export interface IAppGlobalState {
  repositories: IRepositoriesState;
}

const store: Store<IAppGlobalState> = createStore(rootReducer);

export default store;
