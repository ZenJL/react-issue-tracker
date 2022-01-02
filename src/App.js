
import './App.css';
import FormAdd from './components/FormAdd';
import {Button } from 'reactstrap';
import IssueList from './components/IssueList';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <div className="App">
      {/* <MainLayout /> */}
      <div 
        className="container">
        <Button
          className='btn-logout'
          color='info'
        >
          Log out
        </Button>

        <h2 className='head-title'>ISSUES TRACKER</h2>

        <FormAdd />

        <hr/>

        <IssueList />
      </div>
    </div>
  );
}

export default App;
