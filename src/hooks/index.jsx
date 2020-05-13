import React from 'react';

import { CharacterProvider } from './character';

const AppProvider = ({ children }) => (
  <CharacterProvider>{children}</CharacterProvider>
);

export default AppProvider;
