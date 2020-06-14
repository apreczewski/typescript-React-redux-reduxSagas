import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { IAppGlobalState } from '../../store';
import { IRepository } from '../../store/ducks/repositories/types';

import * as RepositoriesActions from '../../store/ducks/repositories/actions';
import RepositoryItem from '../repositoryItem';

interface IStateProps {
  repositories: IRepository[];
}

interface IDispatchProps {
  loadRequest(): void;
}

type Props = IStateProps & IDispatchProps;

class RepositoryList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();
  }

  render() {
    const { repositories } = this.props;
    return (
      <ul>
        {repositories.map((rep) => (
          <RepositoryItem repository={rep} key={rep.id} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state: IAppGlobalState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch); //eslint-disable-line

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
