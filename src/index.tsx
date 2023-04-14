import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import UseContextComponent from './Components/UseContextComponent';
import UseReducerWithContextComp from './Components/UseReducerWithContextComp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <UseReducerWithContextComp>
    <UseContextComponent>
      <App />
    </UseContextComponent>
  </UseReducerWithContextComp>
  // </React.StrictMode>
);
