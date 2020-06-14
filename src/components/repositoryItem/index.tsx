import React from 'react';

import { IRepository } from '../../store/ducks/repositories/types';

interface OwnProps {
 repository: IRepository
}

export default function RepositoryItem({ repository }: OwnProps):JSX.Element {
  return (
    <li>
      {repository.name}
    </li>
  );
}
