import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { IAppGlobalState } from '../../store';
import { IRepository } from '../../store/ducks/repositories/types';

import * as RepositoriesActions from '../../store/ducks/repositories/actions';

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
    return <ul>{repositories.map((rep) => rep.name)}</ul>;
  }
}

const mapStateToProps = (state: IAppGlobalState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
