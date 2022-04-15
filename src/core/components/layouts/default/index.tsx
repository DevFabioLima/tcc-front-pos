import React from 'react';

import { ILayout } from '../auth';

const DefaultLayout: React.FC<ILayout> = ({ component: Component }) => (
  <Component />
);

export default DefaultLayout;
