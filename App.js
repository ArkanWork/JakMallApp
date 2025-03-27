import * as React from 'react';
import Navigation from './src/routes/routes';
import BottomTabs from './src/routes/routes';

export default function App() {
  return (
    <Navigation>
      <BottomTabs />
    </Navigation>
  );
}
