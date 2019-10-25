import React from 'react';
import { DiceContainer } from './components/DiceContainer';
import { Provider } from 'react-redux';
import { createMyStore } from './redux/store';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import './animate.css';
import './reset.css';

const App: React.FC = () => {
  return (
    <Provider store={createMyStore()}>
      <DndProvider backend={HTML5Backend}>
        <DiceContainer/>
      </DndProvider>
    </Provider>
  );
}

export default App;
