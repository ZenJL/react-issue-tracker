import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IssueProvider } from './context/issueContext';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <IssueProvider>
    <App />
  </IssueProvider>,
  document.getElementById('root')
);


reportWebVitals();
