import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Essay from './Essay';
import SaborHelado from './SaborHelado';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

ReactDOM.render(
  <Essay />,
  document.getElementById('essay')
);

ReactDOM.render(
  <SaborHelado />,
  document.getElementById('helado')
);
