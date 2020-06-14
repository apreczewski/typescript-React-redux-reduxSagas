import { IRepositoriesState, RepositoriesTypes } from './types';
import { Reducer } from 'redux';

const INITIAL_STATE: IRepositoriesState = {
  data: [
    {
      id: 1,
      name: 'Luiz',
    },
  ],
  error: false,
  loading: false,
};

const reducer: Reducer<IRepositoriesState> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case RepositoriesTypes.LOAD_REQUEST:
      return { ...state, loading: true };

    case RepositoriesTypes.LOAD_SUCCESS:
      const { data } = action.payload;
      return { ...state, loading: false, error: false, data };

    case RepositoriesTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };

    default:
      return state;
  }
};

export default reducer;
